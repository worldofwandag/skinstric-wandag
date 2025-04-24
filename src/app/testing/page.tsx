"use client";

import React from "react";
import Image from "next/image";
import DiamondLarge from "../assets/ui/Diamond-light-large.png";
import DiamondMedium from "../assets/ui/Diamond-medium-medium.png";
import DiamondSmall from "../assets/ui/Diamond-dark-small.png";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

// Define the initial state for the form
type State = {
  errors?: {
    name?: string[];
    location?: string[];
  };
  message?: string;
  success?: string | boolean;
  step?: number;
  name?: string;
  location?: string;
};

// Server action function to handle form submissions
async function submitForm(prevState: State, formData: FormData): Promise<State> {
  const step = prevState.step || 1;
  
  // Process step 1 (name input)
  if (step === 1) {
    const name = formData.get("name") as string;
    
    // Validate name (no numbers or special characters)
    if (!name || name.trim() === "") {
      return {
        ...prevState,
        step: 1,
        errors: {
          name: ["Please enter your name"]
        }
      };
    }
    
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(name)) {
      return {
        ...prevState,
        step: 1,
        errors: {
          name: ["Please enter a valid name without numbers or special characters"]
        }
      };
    }
    
    // Name is valid, move to step 2
    return {
      step: 2,
      name: name.trim(),
      errors: {}
    };
  }
  
  // Process step 2 (location input)
  if (step === 2) {
    const location = formData.get("location") as string;
    const name = prevState.name || "";
    
    // Validate location (no numbers or special characters)
    if (!location || location.trim() === "") {
      return {
        ...prevState,
        step: 2,
        errors: {
          location: ["Please enter your city"]
        }
      };
    }
    
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(location)) {
      return {
        ...prevState,
        step: 2,
        errors: {
          location: ["Please enter a valid city without numbers or special characters"]
        }
      };
    }
    
    // Submit to API
    try {
      const response = await fetch(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            location: location.trim(),
          }),
        }
      );
    
      const result = await response.json();
      console.log("Full API Response:", result); // Log the full response
    
      // Check for success
      if (result.success) {
        console.log("Success Message:", result.message); // Log the success message
        console.log(`SUCCESS: Added ${name} from ${location}`); // Log the custom success message
        return {
          step: 3,
          name,
          location: location.trim(),
          success: `SUCCESS: Added ${name} from ${location}`,
          message: result.message,
        };
      } else {
        console.error("API Error:", result);
        return {
          ...prevState,
          step: 2,
          errors: {
            location: ["There was a problem with your submission. Please try again."],
          },
        };
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      return {
        ...prevState,
        step: 2,
        errors: {
          location: ["There was a problem with your submission. Please try again."],
        },
      };
    }


  }
  
  return prevState;
}

// Form Input component
function FormInput({ error }: { error?: string[] }) {
  const { pending } = useFormStatus();
  
  return (
    <div className="flex flex-col items-center">
      {error && error.map((err, index) => (
        <p key={index} className="text-red-500 text-sm mb-2">{err}</p>
      ))}
    </div>
  );
}

// Main Page component
export default function Page() {
  const [state, formAction] = useActionState(submitForm, { step: 1, errors: {} });
  
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
      <div className="absolute top-16 left-9 text-left">
        <p className="text-black font-semibold text-xs">TO START ANALYSIS</p>
      </div>
      
      <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
        {state.step !== 3 && (
          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
            CLICK TO TYPE
          </p>
        )}
        
        {/* Step 1: Name Input */}
        {state.step === 1 && (
          <form action={formAction} className="relative z-10">
            <FormInput error={state.errors?.name} />
            <input
              name="name"
              className="text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
              placeholder="Introduce Yourself"
              type="text"
              autoComplete="off"
              autoFocus
            />
            <button type="submit" className="sr-only">Submit</button>
          </form>
        )}
        
        {/* Step 2: Location Input */}
        {state.step === 2 && (
          <form action={formAction} className="relative z-10">
            <FormInput error={state.errors?.location} />
            <input
              name="location"
              className="text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[480px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
              placeholder="your city name"
              type="text"
              autoComplete="off"
              autoFocus
            />
            <button type="submit" className="sr-only">Submit</button>
          </form>
        )}
        
        {/* Step 3: Success Message */}
        {state.step === 3 && (
          <div className="flex flex-col items-center gap-4 z-10">
            <p className="text-3xl font-normal text-[#1A1B1C]">Thank you for submitting!</p>
            <p className="text-xl text-gray-600">Ready for the result? Process for the next step</p>
          </div>
        )}
        
        {/* Diamond Background Images */}
        <Image
          src={DiamondLarge}
          alt="Diamond Large"
          width={762}
          height={762}
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2"
        />
        <Image
          src={DiamondMedium}
          alt="Diamond Medium"
          width={682}
          height={682}
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2"
        />
        <Image
          src={DiamondSmall}
          alt="Diamond Small"
          width={602}
          height={602}
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2"
        />
      </div>
      
      {/* Buttons at bottom */}
      <div className="absolute bottom-10 w-full flex justify-between px-10">
        {/* BACK BUTTON */}
        <div className="relative w-12 h-12 left-4 flex items-center justify-center border border-[#A0A4AB] rotate-45 scale-[0.85]">
          <span className="absolute rotate-[-45deg] text-xs font-semibold">
            BACK
          </span>
        </div>
        <Link className="absolute inset-0" aria-label="Back" href="/"></Link>
        
        {/* PROCESS BUTTON - only show when form is completed */}
        {state.step === 3 && (
          <Link
            href="/result"
            className="relative w-12 h-12 right-4 flex items-center justify-center border border-[#A0A4AB] rotate-45 scale-[0.85]"
          >
            <span className="absolute rotate-[-45deg] text-xs font-semibold">
              PROCESS
            </span>
          </Link>
        )}
      </div>
      
      
    </div>
  );
}