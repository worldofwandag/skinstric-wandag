"use client";

import { useEffect, useState } from "react";
import HomePageAnimations from "./HomePageAnimations";

// Define proper types for our refs
type ElementRefs = {
  mainHeadingRef: { current: HTMLDivElement | null };
  discoverButtonRef: { current: HTMLButtonElement | null };
  takeTestButtonRef: { current: HTMLButtonElement | null };
  leftSectionRef: { current: HTMLDivElement | null };
  rightSectionRef: { current: HTMLDivElement | null };
};

const ClientAnimationWrapper = () => {
  // State for hydration safety
  const [isMounted, setIsMounted] = useState(false);
  
  // Element refs with proper typing
  const [refs, setRefs] = useState<ElementRefs>({
    mainHeadingRef: { current: null },
    discoverButtonRef: { current: null },
    takeTestButtonRef: { current: null },
    leftSectionRef: { current: null },
    rightSectionRef: { current: null }
  });

  // Set mounted state after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Find DOM elements after hydration
  useEffect(() => {
    if (!isMounted) return;

    // Use setTimeout to ensure DOM is fully hydrated before accessing elements
    const timer = setTimeout(() => {
      const mainHeading = document.getElementById('main-heading') as HTMLDivElement | null;
      const discoverButton = document.getElementById('discover-button') as HTMLButtonElement | null;
      const takeTestButton = document.getElementById('take-test-button') as HTMLButtonElement | null;
      const leftSection = document.getElementById('left-section') as HTMLDivElement | null;
      const rightSection = document.getElementById('right-section') as HTMLDivElement | null;
      
      // Only update state if all elements are found
      if (mainHeading && discoverButton && takeTestButton && leftSection && rightSection) {
        setRefs({
          mainHeadingRef: { current: mainHeading },
          discoverButtonRef: { current: discoverButton },
          takeTestButtonRef: { current: takeTestButton },
          leftSectionRef: { current: leftSection },
          rightSectionRef: { current: rightSection }
        });
      }
    }, 100); // Small delay to ensure hydration is complete
    
    return () => clearTimeout(timer);
  }, [isMounted]);

  // Don't render animations until client-side hydration is complete and elements are found
  if (!isMounted || !refs.mainHeadingRef.current) {
    return null;
  }

  return (
    <HomePageAnimations
      mainHeadingRef={refs.mainHeadingRef}
      discoverButtonRef={refs.discoverButtonRef}
      takeTestButtonRef={refs.takeTestButtonRef}
      leftSectionRef={refs.leftSectionRef}
      rightSectionRef={refs.rightSectionRef}
    />
  );
};

export default ClientAnimationWrapper;