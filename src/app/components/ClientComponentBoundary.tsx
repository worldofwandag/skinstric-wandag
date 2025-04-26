'use client';

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Props interface for the component
interface ImageUploadProps {
  galleryIcon: any;
  ResDiamondLarge: any;
  ResDiamondMedium: any;
  ResDiamondSmall: any;
  ResGalleryLine: any;
}

const ClientComponentBoundary: React.FC<ImageUploadProps> = ({
  galleryIcon,
  ResDiamondLarge,
  ResDiamondMedium,
  ResDiamondSmall,
  ResGalleryLine,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Handle gallery icon click
  const handleGalleryClick = () => {
    fileInputRef.current?.click();
  };

  // Convert image file to base64
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result as string;
        // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
        const base64Content = base64String.split(',')[1];
        resolve(base64Content);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle file selection
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    
    try {
      // Show preview
      const objectUrl = URL.createObjectURL(file);
      setPreviewImage(objectUrl);
      
      // Convert to base64 and send to API
      setIsLoading(true);
      const base64String = await convertToBase64(file);
      await uploadImageToAPI(base64String);
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Failed to process the image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Upload image to API
  const uploadImageToAPI = async (base64String: string) => {
    try {
      const response = await fetch(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64String }),
        }
      );

      const data = await response.json();
      
      // Log the response data
      console.log({ "Image": "base64_encoded_string" });
      console.log(data);

      if (data.message && data.message.includes("SUCCESS")) {
        // Store demographic data in localStorage or state management system
        localStorage.setItem("demographicData", JSON.stringify(data.data));
        
        // Navigate to result page or handle success
        alert("Image uploaded successfully!");
        // Uncomment to navigate to demographics page when ready:
        // router.push("/demographics");
      } else {
        alert("Failed to analyze image. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Error connecting to the service. Please try again later.");
    }
  };

  return (
    <>
      <div 
        className="relative md:absolute md:left-[50%] lg:left-[55%] xl:left-[60%] flex flex-col items-center cursor-pointer mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%]"
        onClick={handleGalleryClick}
      >
        <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]" />

        <Image
          src={ResDiamondLarge}
          alt="Diamond Large"
          className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow"
        />
        <Image
          src={ResDiamondMedium}
          alt="DiamondMedium"
          className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower"
        />
        <Image
          src={ResDiamondSmall}
          alt="DiamondSmall"
          className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
        />

        {/* PHOTO GALLERY UPLOAD */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src={galleryIcon}
            alt="Photo Upload Icon"
            className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
            width={136}
            height={136}
          />
          <div className="absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[-10px]">
            <p className="text-[12px] md:text-[14px] font-normal mt-2 leading-[24px] text-right">
              ALLOW A.I.
              <br />
              ACCESS GALLERY
            </p>
            <Image
              src={ResGalleryLine}
              alt="Gallery Line"
              className="absolute hidden md:block md:left-[120px] md:bottom-[39px]"
              width={66.33}
              height={59.37}
            />
          </div>
        </div>
      </div>

      {/* Preview Image */}
      <div className="absolute top-[-75px] right-7 md:top-[-50px] md:right-8">
        <h1 className="text-xs md:text-sm font-normal mb-1">Preview</h1>
        <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden">
          {previewImage && (
            <Image 
              src={previewImage} 
              alt="Preview" 
              className="w-full h-full object-cover"
              width={128}
              height={128}
            />
          )}
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-11">
          <div className="bg-white p-4 rounded-md">
            <p className="animate-pulse">Processing image...</p>
          </div>
        </div>
      )}

      {/* Hidden File Input */}
      <input 
        type="file" 
        accept="image/*" 
        className="hidden" 
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </>
  );
};

export default ClientComponentBoundary;