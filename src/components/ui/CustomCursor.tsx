'use client';

import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Track cursor position with smooth animation
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      // Use requestAnimationFrame for smoother movement
      requestAnimationFrame(() => {
        if (cursorOuterRef.current && cursorInnerRef.current) {
          // Apply positions via style 
          cursorOuterRef.current.style.left = `${clientX}px`;
          cursorOuterRef.current.style.top = `${clientY}px`;
          
          cursorInnerRef.current.style.left = `${clientX}px`;
          cursorInnerRef.current.style.top = `${clientY}px`;
        }
      });
    };

    // Add click animations
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Update class when clicking
  useEffect(() => {
    if (!cursorOuterRef.current || !cursorInnerRef.current) return;
    
    if (isClicking) {
      cursorOuterRef.current.classList.add('cursor-clicking');
      cursorInnerRef.current.classList.add('cursor-clicking');
    } else {
      cursorOuterRef.current.classList.remove('cursor-clicking');
      cursorInnerRef.current.classList.remove('cursor-clicking');
    }
  }, [isClicking]);

  if (!isMounted) return null;

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        .cursor-outer {
          position: fixed;
          width: 30px;
          height: 30px;
          border: 1px solid #D0F0C0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.2s ease, height 0.2s ease, transform 0.2s ease;
        }
        
        .cursor-inner {
          position: fixed;
          width: 6px;
          height: 6px;
          background-color: #D0F0C0;
          border-radius: 50%; 
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }
        
        .cursor-clicking {
          transform: translate(-50%, -50%) scale(0.8);
        }
        
        a:hover ~ .cursor-outer,
        button:hover ~ .cursor-outer,
        input:hover ~ .cursor-outer,
        textarea:hover ~ .cursor-outer {
          width: 40px;
          height: 40px;
          border-color: #D0F0C0;
        }
      `}</style>

      <div ref={cursorOuterRef} className="cursor-outer" />
      <div ref={cursorInnerRef} className="cursor-inner" />
    </>
  );
};

export default CustomCursor;