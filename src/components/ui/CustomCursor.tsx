// src/components/ui/CustomCursor.tsx
'use client';

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trail1Ref = useRef(null);
  const trail2Ref = useRef(null);

  useEffect(() => {
    // DOM elements
    const dot = dotRef.current;
    const ring = ringRef.current;
    const trail1 = trail1Ref.current;
    const trail2 = trail2Ref.current;
    
    if (!dot || !ring || !trail1 || !trail2) return;

    // Mouse positions
    let mouseX = 0;
    let mouseY = 0;
    
    // Dot positions with elasticity effect
    let dotX = 0;
    let dotY = 0;
    
    // Animation frame
    let rafId = null;
    
    // Spring effect settings
    const spring = 0.15; // Strength of spring (higher = faster)
    
    // Interactive states
    let isHovering = false;
    let isClicking = false;
    
    // Update cursor position with spring physics for playful movement
    const updateCursor = () => {
      // Calculate spring effect for dot (delayed, elastic movement)
      const dx = mouseX - dotX;
      const dy = mouseY - dotY;
      
      // Apply spring physics to dot position (this creates the elastic effect)
      dotX += dx * spring;
      dotY += dy * spring;
      
      // Update main dot with spring effect (playful movement)
      if (dot) {
        dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
      
      // Update outer ring (follows mouse directly for responsiveness)
      if (ring) {
        ring.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      
      // Update trails with staggered positions between dot and mouse
      if (trail1) {
        // Trail 1 follows halfway between mouse and dot
        const trail1X = dotX + (mouseX - dotX) * 0.35;
        const trail1Y = dotY + (mouseY - dotY) * 0.35;
        trail1.style.transform = `translate(${trail1X}px, ${trail1Y}px)`;
      }
      
      if (trail2) {
        // Trail 2 follows a quarter way between mouse and dot
        const trail2X = dotX + (mouseX - dotX) * 0.7;
        const trail2Y = dotY + (mouseY - dotY) * 0.7;
        trail2.style.transform = `translate(${trail2X}px, ${trail2Y}px)`;
      }
      
      // Continue animation loop
      rafId = requestAnimationFrame(updateCursor);
    };
    
    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Initialize dot position on first move to avoid initial jump
      if (dotX === 0 && dotY === 0) {
        dotX = mouseX;
        dotY = mouseY;
      }
    };
    
    // Check for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'
      ) {
        isHovering = true;
        document.body.classList.add('cursor-hover');
      }
    };
    
    const handleMouseOut = () => {
      isHovering = false;
      document.body.classList.remove('cursor-hover');
    };
    
    // Click interactions
    const handleMouseDown = () => {
      isClicking = true;
      document.body.classList.add('cursor-click');
    };
    
    const handleMouseUp = () => {
      isClicking = false;
      document.body.classList.remove('cursor-click');
    };
    
    // Start animation
    rafId = requestAnimationFrame(updateCursor);
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    
    // Cursor is visible on load
    document.body.classList.add('custom-cursor-active');
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      cancelAnimationFrame(rafId);
      
      document.body.classList.remove('custom-cursor-active');
      document.body.classList.remove('cursor-hover');
      document.body.classList.remove('cursor-click');
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .custom-cursor-active * {
          cursor: none !important;
        }
        
        /* Main cursor dot */
        #cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px; /* Slightly bigger dot as requested */
          height: 8px;
          margin: -4px 0 0 -4px;
          background-color: #D0F0C0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
          transition: width 0.15s, height 0.15s, margin 0.15s;
        }
        
        /* Ring - smaller outer circle */
        #cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 30px; /* Smaller outer ring */
          height: 30px;
          margin: -15px 0 0 -15px;
          border: 1.5px solid rgba(208, 240, 192, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          will-change: transform;
          transition: width 0.15s, height 0.15s, margin 0.15s, border-color 0.15s;
        }
        
        /* Trails for extra effect */
        .cursor-trail {
          position: fixed;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          margin: -3px 0 0 -3px;
          background-color: rgba(208, 240, 192, 0.3);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9997;
          will-change: transform;
        }
        
        /* First trail (closer to dot) */
        #cursor-trail-1 {
          width: 7px;
          height: 7px;
          margin: -3.5px 0 0 -3.5px;
          background-color: rgba(208, 240, 192, 0.25);
        }
        
        /* Second trail (closer to cursor) */
        #cursor-trail-2 {
          width: 5px;
          height: 5px;
          margin: -2.5px 0 0 -2.5px;
          background-color: rgba(208, 240, 192, 0.15);
        }
        
        /* Hover effect */
        .cursor-hover #cursor-dot {
          width: 12px;
          height: 12px;
          margin: -6px 0 0 -6px;
        }
        
        .cursor-hover #cursor-ring {
          width: 40px;
          height: 40px;
          margin: -20px 0 0 -20px;
          border-color: rgba(208, 240, 192, 0.8);
        }
        
        /* Click effect */
        .cursor-click #cursor-dot {
          width: 14px;
          height: 14px;
          margin: -7px 0 0 -7px;
          opacity: 0.8;
        }
        
        .cursor-click #cursor-ring {
          width: 26px;
          height: 26px;
          margin: -13px 0 0 -13px;
          opacity: 0.4;
        }
        
        /* Gentle glow effect */
        #cursor-ring::after {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          box-shadow: 0 0 12px 2px rgba(208, 240, 192, 0.15);
          opacity: 0.6;
        }
      `}</style>
      
      {/* Main cursor elements */}
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
      
      {/* Trail elements */}
      <div id="cursor-trail-1" className="cursor-trail" ref={trail1Ref}></div>
      <div id="cursor-trail-2" className="cursor-trail" ref={trail2Ref}></div>
    </>
  );
};

export default CustomCursor;