"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackBtnWhite from "./ui/BackBtnWhite";
import Image from "next/image";
import TakePictureIcon from "../assets/ui/takePictureIcon.png";
import LoadingDots from "./ui/LoadingDots";

const CameraCapture = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Request camera permission automatically on component mount
  useEffect(() => {
    requestCameraPermission();
  }, []);

  // Request camera permission
  const requestCameraPermission = async () => {
    setError(null);

    try {
      console.log("Requesting camera access...");
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      console.log("Camera access granted");
      setStream(mediaStream);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError(`Camera access error: ${err}`);
      setTimeout(() => router.push("/result"), 3000);
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
          videoRef.current
            .play()
            .then(() => {
              console.log("Video playback started");
              setIsVideoReady(true);
            })
            .catch((err) => {
              console.error("Error starting video playback:", err);
              setError(`Video playback error: ${err}`);
            });
        }
      };

      videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

      // Cleanup function
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener(
            "loadedmetadata",
            handleLoadedMetadata
          );
        }
      };
    }
  }, [stream]);

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

      console.log(
        `Capturing from video: ${video.videoWidth}x${video.videoHeight}`
      );

      // Set canvas size to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext("2d");
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
      const imageDataUrl = canvas.toDataURL("image/jpeg", 0.9);
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
      stream.getTracks().forEach((track) => {
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
          height: { ideal: 720 },
        },
        audio: false,
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
      const base64Data = capturedImage.split(",")[1];
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

      if (
        data.success === true &&
        data.message &&
        data.message.includes("success")
      ) {
        // Store demographic data
        localStorage.setItem("demographicData", JSON.stringify(data.data));
        console.log("Demographic data stored, redirecting to summary");

        // Navigate to summary page
        router.push("/select");
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
    <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
      {/* Error message */}
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
          <p>{error}</p>
        </div>
      )}

      {/* Video status */}
      {stream && !isVideoReady && !capturedImage && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 bg-gray-100 border border-blue-400 text-blue-700 px-4 py-3 rounded max-w-md">
          <p>Initializing camera, please wait...</p>
        </div>
      )}

      {/* Camera view - Full screen */}
      {stream && !capturedImage && (
        <div className="absolute inset-0 z-10">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Take picture button - Vertically centered on right side */}
          {isVideoReady && (
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
              <div className="font-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block">TAKE PICTURE</div>
              <div className="transform hover:scale-105 ease-in-out duration-300">
                <Image
                  src={TakePictureIcon}
                  alt="Take Picture"
                  width={60}
                  height={60}
                  onClick={capturePhoto}
                  className="w-16 h-16 cursor-pointer"
                />
              </div>
             
            </div>
          )}

          {/* Tips text - Bottom of screen */}
          <div className="absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20">
            <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
              TO GET BETTER RESULTS MAKE SURE TO HAVE
            </p>
            <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
              <p>◇ NEUTRAL EXPRESSION</p>
              <p>◇ FRONTAL POSE</p>
              <p>◇ ADEQUATE LIGHTING</p>
            </div>
          </div>
        </div>
      )}

      {/* Preview captured image - Full screen */}
      {capturedImage && (
        <div className="absolute inset-0 z-10 flex flex-col items-center">
          <img
            src={capturedImage}
            alt="Captured selfie"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute text-sm leading-6 uppercase text-[#FCFCFC] top-40">GREAT SHOT!</div>
          
          {/* Preview controls overlay */}
          <div className="absolute bottom-40 sm:bottom-16 left-0 right-0 flex flex-col items-center z-20">
            <h2 className="text-lg font-semibold mb-5 md:mb-7 text-[#FCFCFC] drop-shadow-md">Preview</h2>
            <div className="flex justify-center space-x-6">
              <button
                className="px-4 py-1 bg-gray-200 text-gray-800 cursor-pointer hover:bg-gray-300 shadow-md text-sm"
                onClick={resetCamera}
              >
                Retake
              </button>
              <button
                className="px-6 py-2 bg-[#1A1B1C] text-[#FCFCFC] cursor-pointer hover:bg-gray-800 shadow-md text-sm"
                onClick={uploadImageToAPI}
                disabled={isLoading}
              >
                {isLoading ? 'Uploading...' : 'Use This Photo'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back button */}
      <div className="absolute md:bottom-8 bottom-60 left-8 z-20">
        <Link href="/result">
          <BackBtnWhite />
        </Link>
      </div>

      {/* Hidden canvas for capturing photos */}
      <canvas
        ref={canvasRef}
        className="hidden"
      />

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#FCFCFC]  opacity-50 p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl animate-pulse">ANALYZING IMAGE...</p>
            <LoadingDots />
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;