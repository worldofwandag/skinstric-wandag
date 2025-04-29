'use client';

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackBtn from "./ui/BackBtn";

const CameraCapture = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [permissionModal, setPermissionModal] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Request camera permission
  const requestCameraPermission = async () => {
    setPermissionModal(false);
    setError(null);
    
    try {
      console.log("Requesting camera access...");
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });
      
      console.log("Camera access granted");
      setStream(mediaStream);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError(`Camera access error: ${err}`);
      setTimeout(() => router.push('/result'), 3000);
    }
  };

  // Effect to handle video stream once stream is set
  useEffect(() => {
    if (stream && videoRef.current) {
      // Set the stream to the video element
      videoRef.current.srcObject = stream;
      
      // Listen for the loadedmetadata event
      const handleLoadedMetadata = () => {
        console.log("Video metadata loaded, starting playback");
        if (videoRef.current) {
          videoRef.current.play()
            .then(() => {
              console.log("Video playback started");
              setIsVideoReady(true);
            })
            .catch(err => {
              console.error("Error starting video playback:", err);
              setError(`Video playback error: ${err}`);
            });
        }
      };
      
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      // Cleanup function
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
    }
  }, [stream]);

  // Deny camera permission
  const denyCameraPermission = () => {
    router.push('/result');
  };

  // Take a photo - wait for video to be ready
  const capturePhoto = () => {
    setError(null);
    
    if (!videoRef.current || !canvasRef.current) {
      setError("Video or canvas reference not available");
      return;
    }
    
    if (!isVideoReady) {
      setError("Video is not ready yet, please wait a moment");
      return;
    }
    
    try {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      // Make sure we have valid dimensions
      if (!video.videoWidth || !video.videoHeight) {
        console.error("Video dimensions not available");
        setError("Cannot capture: video dimensions not available");
        return;
      }
      
      console.log(`Capturing from video: ${video.videoWidth}x${video.videoHeight}`);
      
      // Set canvas size to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const context = canvas.getContext('2d');
      if (!context) {
        setError("Could not get canvas context");
        return;
      }
      
      // Clear the canvas first
      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw video frame to canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert to data URL
      const imageDataUrl = canvas.toDataURL('image/jpeg', 0.9);
      console.log(`Captured image data URL length: ${imageDataUrl.length}`);
      
      setCapturedImage(imageDataUrl);
      
      // Stop camera stream
      stopCameraStream();
    } catch (error) {
      console.error("Error capturing photo:", error);
      setError(`Capture error: ${error}`);
    }
  };

  // Stop camera stream
  const stopCameraStream = () => {
    if (stream) {
      stream.getTracks().forEach(track => {
        console.log(`Stopping track: ${track.kind}`);
        track.stop();
      });
      setStream(null);
      setIsVideoReady(false);
    }
  };

  // Reset camera
  const resetCamera = async () => {
    setCapturedImage(null);
    setError(null);
    setIsVideoReady(false);
    
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });
      
      setStream(mediaStream);
    } catch (err) {
      console.error("Error restarting camera:", err);
      setError(`Camera restart error: ${err}`);
    }
  };

  // Upload image to API
  const uploadImageToAPI = async () => {
    if (!capturedImage) {
      setError("No image captured");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Store in localStorage
      try {
        localStorage.setItem("uploadedImage", capturedImage);
        console.log("Image stored in localStorage");
      } catch (error) {
        console.warn("Failed to store in localStorage:", error);
      }
      
      // Get base64 data without prefix for API
      const base64Data = capturedImage.split(',')[1];
      console.log(`API data length: ${base64Data.length}`);
      
      // Send to API
      console.log("Sending API request...");
      const response = await fetch(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Data }),
        }
      );
      
      console.log(`API response status: ${response.status}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("API error response:", errorText);
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("API response:", data);
      
      if (data.success === true && data.message && data.message.includes("success")) {
        // Store demographic data
        localStorage.setItem("demographicData", JSON.stringify(data.data));
        console.log("Demographic data stored, redirecting to summary");
        
        // Navigate to summary page
        router.push('/select');
      } else {
        throw new Error("API returned unsuccessful response");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setError(`API error: ${error}`);
      setIsLoading(false);
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Permission Modal */}
      {permissionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-[#1A1B1C] p-6 rounded-lg max-w-md text-center">
            <h2 className="text-[#FCFCFC] text-xl font-bold mb-4">ALLOW A.I. TO ACCESS YOUR CAMERA</h2>
            <p className="text-[#FCFCFC] mb-6">This app needs camera access to take a selfie for analysis</p>
            <div className="flex justify-center space-x-4">
              <button 
                className="px-6 py-2 bg-gray-600 text-[#FCFCFC] rounded hover:bg-gray-700"
                onClick={denyCameraPermission}
              >
                DENY
              </button>
              <button 
                className="px-6 py-2 bg-[#FCFCFC] text-[#1A1B1C] rounded hover:bg-gray-200 font-bold"
                onClick={requestCameraPermission}
              >
                ALLOW
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-xl font-bold mb-6">Take a Selfie</h1>
        
        {/* Error message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 max-w-md">
            <p>{error}</p>
          </div>
        )}
        
        {/* Video status */}
        {stream && !isVideoReady && !capturedImage && (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4 max-w-md">
            <p>Initializing camera, please wait...</p>
          </div>
        )}
        
        {/* Camera view */}
        {stream && !capturedImage && (
          <div className="relative w-full max-w-md">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-auto rounded-lg"
              style={{ backgroundColor: '#f0f0f0' }} // Background to make it visible
            />
            
            {isVideoReady && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button 
                  className="bg-white p-2 rounded-full shadow-lg"
                  onClick={capturePhoto}
                >
                  <span className="block w-12 h-12 rounded-full border-4 border-black"></span>
                </button>
              </div>
            )}
            
            <div className="mt-20 text-center">
              <p className="text-sm mb-2">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
              <div className="flex justify-between text-xs px-4">
                <p>◇ NEUTRAL EXPRESSION</p>
                <p>◇ FRONTAL POSE</p>
                <p>◇ ADEQUATE LIGHTING</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Preview captured image */}
        {capturedImage && (
          <div className="w-full max-w-md">
            <h2 className="text-lg font-semibold mb-2">Preview</h2>
            <img 
              src={capturedImage} 
              alt="Captured selfie" 
              className="w-full h-auto rounded-lg mb-4" 
              style={{ backgroundColor: '#f0f0f0' }} // Background to make it visible
              onError={(e) => {
                console.error("Image display error", e);
                setError("Error displaying captured image");
              }}
            />
            <div className="flex justify-center space-x-4 mt-4">
              <button 
                className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={resetCamera}
              >
                Retake
              </button>
              <button 
                className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
                onClick={uploadImageToAPI}
                disabled={isLoading}
              >
                {isLoading ? 'Uploading...' : 'Use This Photo'}
              </button>
            </div>
          </div>
        )}
        
        {/* Hidden canvas for capturing photos */}
        <canvas 
          ref={canvasRef} 
          className="hidden" 
          style={{ border: '1px solid red' }} // Making it visible for debugging
        />
      </div>
      
      {/* Back button */}
      <div className="absolute bottom-8 left-8">
        <Link href="/result">
          <BackBtn />
        </Link>
      </div>
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl animate-pulse">Analyzing image...</p>
            <p className="mt-2">Please wait a moment</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;