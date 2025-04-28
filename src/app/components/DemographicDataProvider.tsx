'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

// Types for our demographic data
interface DemographicOption {
  name: string;
  confidence: number;
}

interface CategoryData {
  prediction: string;
  confidence: number;
  options: DemographicOption[];
}

export interface DemographicData {
  race: CategoryData;
  age: CategoryData;
  sex: CategoryData;
}

// Create context
const DemographicDataContext = createContext<{
  data: DemographicData | null;
  isLoading: boolean;
}>({
  data: null,
  isLoading: true
});

// Function to transform API data into our component format
const transformApiData = (apiData: any): DemographicData => {
  // Process race data
  const raceOptions: DemographicOption[] = Object.entries(apiData.race).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' '), // Format name with proper capitalization
    confidence: Math.floor(Number(value) * 100), // Convert to percentage and round down
  }));
  
  // Sort by confidence (highest first)
  raceOptions.sort((a, b) => b.confidence - a.confidence);
  
  // Process age data
  const ageOptions: DemographicOption[] = Object.entries(apiData.age).map(([key, value]) => ({
    name: key, // Age ranges already in correct format
    confidence: Math.floor(Number(value) * 100),
  }));
  
  // Sort by confidence
  ageOptions.sort((a, b) => b.confidence - a.confidence);
  
  // Process gender/sex data
  const sexOptions: DemographicOption[] = Object.entries(apiData.gender).map(([key, value]) => ({
    name: key.toUpperCase(), // Convert to uppercase to match UI design
    confidence: Math.floor(Number(value) * 100),
  }));
  
  // Sort by confidence
  sexOptions.sort((a, b) => b.confidence - a.confidence);
  
  // Create the structured data object with predictions set to highest confidence options
  return {
    race: {
      prediction: raceOptions[0].name,
      confidence: raceOptions[0].confidence,
      options: raceOptions,
    },
    age: {
      prediction: ageOptions[0].name,
      confidence: ageOptions[0].confidence,
      options: ageOptions,
    },
    sex: {
      prediction: sexOptions[0].name,
      confidence: sexOptions[0].confidence,
      options: sexOptions,
    }
  };
};

interface DemographicDataProviderProps {
  children: ReactNode;
}

const DemographicDataProvider: React.FC<DemographicDataProviderProps> = ({ 
  children 
}) => {
  const [data, setData] = useState<DemographicData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Function to safely get data from localStorage
    const fetchDemographicData = () => {
      try {
        const storedData = localStorage.getItem("demographicData");
        
        if (storedData) {
          // Parse the stored data
          const apiData = JSON.parse(storedData);
          
          // Transform API data to our component format
          const transformedData = transformApiData(apiData);
          
          // Update state with the transformed data
          setData(transformedData);
        } else {
          console.log("No demographic data found in localStorage");
          // Optional: Redirect to upload page if no data found
          // router.push('/result');
        }
      } catch (error) {
        console.error("Error retrieving demographic data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDemographicData();
  }, [router]);

  return (
    <DemographicDataContext.Provider value={{ data, isLoading }}>
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-pulse text-2xl">Loading analysis data...</div>
        </div>
      ) : data ? (
        children
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <p className="text-xl mb-4">No analysis data found. Please upload an image first.</p>
          <button 
            onClick={() => router.push('/result')}
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Go to Upload Page
          </button>
        </div>
      )}
    </DemographicDataContext.Provider>
  );
};

// Export a hook to use the demographic data
export const useDemographicData = () => {
  const context = useContext(DemographicDataContext);
  if (context === undefined) {
    throw new Error('useDemographicData must be used within a DemographicDataProvider');
  }
  return context;
};

export default DemographicDataProvider;