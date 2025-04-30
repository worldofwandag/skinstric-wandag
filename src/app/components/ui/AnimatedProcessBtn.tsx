"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProcessBtn from "./ProcessBtn";

interface AnimatedProcessBtnProps {
  show: boolean;
}

const AnimatedProcessBtn: React.FC<AnimatedProcessBtnProps> = ({ show }) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    // Don't animate if button shouldn't be shown
    if (!show || !btnRef.current) return;
    
    // Only animate once
    if (animated.current) return;
    animated.current = true;
    
    // Set initial position (off-screen to the right middle)
    gsap.set(btnRef.current, {
      y: "-10%",           
      x: "-200%",          
      opacity: 0,          // Start invisible
      visibility: "visible" // Make sure it's visible for animation
    });
    
    const tl = gsap.timeline();
    
    // Move button into view 
    tl.to(btnRef.current, {
      x: 0,                // Move to its normal position
      opacity: 1,          // Fade in
      duration: 1.5,       // Animation duration
      ease: "power4.out",  // Smooth easing
    });
    
    // Then animate down to final position with bounce
    tl.to(btnRef.current, {
      y: "0%",             // Move to final position
      duration: 1,         // Animation duration
      ease: "elastic.out(1,0.3)", // Elastic bounce effect
    });
    
  }, [show]);

  if (!show) return null;

  return (
    <div 
      ref={btnRef} 
      className="invisible" // Start invisible, GSAP will make it visible
      style={{ 
        position: "relative",
      }}
    >
      <ProcessBtn />
    </div>
  );
};

export default AnimatedProcessBtn;