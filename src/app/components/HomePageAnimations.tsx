"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HomePageAnimationsProps {
  mainHeadingRef: { current: HTMLDivElement | null };
  discoverButtonRef: { current: HTMLButtonElement | null };
  takeTestButtonRef: { current: HTMLButtonElement | null };
  leftSectionRef: { current: HTMLDivElement | null };
  rightSectionRef: { current: HTMLDivElement | null };
}

const HomePageAnimations: React.FC<HomePageAnimationsProps> = ({
  mainHeadingRef,
  discoverButtonRef,
  takeTestButtonRef,
  leftSectionRef,
  rightSectionRef,
}) => {
  const initialized = useRef(false);

  useEffect(() => {
    // Skip if already initialized
    if (initialized.current) return;

    // Get elements from refs
    const mainHeading = mainHeadingRef.current;
    const discoverButton = discoverButtonRef.current;
    const takeTestButton = takeTestButtonRef.current;
    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    // Early return if any element is missing
    if (!mainHeading || !discoverButton || !takeTestButton || !leftSection || !rightSection) {
      return;
    }

    // Set initialized to true after checking
    initialized.current = true;

    // Get text elements without manipulating the DOM structure
    const headingText = mainHeading.querySelector("h1");
    if (!headingText) return;

    const firstLineTextNode = headingText.childNodes[0];
    const secondLineElement = headingText.querySelector("span");
    
    if (!firstLineTextNode || !secondLineElement) return;

    const firstLineText = firstLineTextNode.textContent || "";
    const secondLineText = secondLineElement.textContent || "";

    
    // Initial setup - hide text 
    gsap.set(headingText, { opacity: 0 });
    
    // Animation timeline
    const timeline = gsap.timeline();
    
    // Reveal animation for Sophisticated skincare
    timeline.to(headingText, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });

    // Hover animations for desktop
    if (takeTestButton && leftSection && mainHeading) {
      // Using event listeners for hover effects
      takeTestButton.addEventListener("mouseenter", () => {
        // Make left section disappear faster
        gsap.to(leftSection, {
          opacity: 0,
          duration: 0.4, // Faster duration for disappearing
          ease: "power2.inOut",
        });
        
        // Move text after a slight delay
        gsap.to(headingText, {
          x: "-20rem",
          duration: 0.7,
          ease: "power2.inOut",
          delay: 0.1, // Small delay to ensure section disappears first
        });
        gsap.to(secondLineElement, {
          x: "-6rem",
          duration: 0.7,
          ease: "power2.inOut",
          delay: 0.1, // Small delay to ensure section disappears first
        });
      });

      takeTestButton.addEventListener("mouseleave", () => {
        // Make left section reappear immediately and quickly
        gsap.to(leftSection, {
          opacity: 1,
          duration: 0.4, // Faster reappearance
          ease: "power2.inOut",
        });
        
        // Move text back with a slight delay
        gsap.to(headingText, {
          x: 0,
          duration: 0.7,
          ease: "power2.inOut",
          delay: 0.1, // Small delay to ensure section starts to reappear first
        });
        gsap.to(secondLineElement, {
          x: 0,
          duration: 0.7,
          ease: "power2.inOut",
          delay: 0.01, // Small delay to ensure section starts to reappear first
        });
      });
    }

    if (discoverButton && rightSection && mainHeading) {
      discoverButton.addEventListener("mouseenter", () => {
        // Make right section disappear faster
        gsap.to(rightSection, {
          opacity: 0,
          duration: 0.3, // Faster duration for disappearing
          ease: "power2.inOut",
        });
        
        // Move text after a slight delay
        gsap.to(headingText, {
          x: "20rem",
          duration: 0.7,
          ease: "power2.inOut",
          delay: 0.1, // Small delay to ensure section disappears first
        });
        gsap.to(secondLineElement, {
          x: "6rem",
          duration: 0.7,
          ease: "power2.inOut",
          delay: 0.01, // Small delay to ensure section disappears first
        });
      });

      discoverButton.addEventListener("mouseleave", () => {
        // Make right section reappear immediately and quickly
        gsap.to(rightSection, {
          opacity: 1,
          duration: 0.3, // Faster reappearance
          ease: "power2.inOut",
        });
        
        // Move text back with a slight delay
        gsap.to(headingText, {
          x: 0,
          duration: 0.7,
          ease: "power2.inOut",
          delay: 0.01, // Small delay to ensure section starts to reappear first
        });
        gsap.to(secondLineElement, {
          x: 0,
          duration: 0.7,
          ease: "power2.inOut",
          delay: 0.01, // Small delay to ensure section starts to reappear first
        });
      });
    }

    // Cleanup function
    return () => {
      if (takeTestButton) {
        takeTestButton.removeEventListener("mouseenter", () => {});
        takeTestButton.removeEventListener("mouseleave", () => {});
      }
      if (discoverButton) {
        discoverButton.removeEventListener("mouseenter", () => {});
        discoverButton.removeEventListener("mouseleave", () => {});
      }
    };
  }, [mainHeadingRef, discoverButtonRef, takeTestButtonRef, leftSectionRef, rightSectionRef]);

  // This component doesn't render anything
  return null;
};

export default HomePageAnimations;