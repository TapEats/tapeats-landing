// src/components/ui/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true once component mounts on client
    setIsMounted(true);
    
    const mouseMoveHandler = (event: MouseEvent) => {
      // Immediately update the main cursor for responsive movement
      setPosition({ x: event.clientX, y: event.clientY });
      
      // Follower with minimal delay for smooth effect without being sluggish
      setTimeout(() => {
        setFollowerPosition({ x: event.clientX, y: event.clientY });
      }, 10); // Reduced from 50ms to 10ms for more responsive movement
    };

    const mouseDownHandler = () => setIsClicking(true);
    const mouseUpHandler = () => setIsClicking(false);
    
    // Show cursor when mouse moves
    const mouseEnterHandler = () => setIsVisible(true);
    // Hide cursor when mouse leaves the window
    const mouseLeaveHandler = () => setIsVisible(false);

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);

  // Don't render anything on the server or before mounting
  if (!isMounted) return null;

  return (
    <>
      <div 
        className={`custom-cursor ${isClicking ? 'clicking' : ''} ${isVisible ? 'visible' : 'invisible'}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div 
        className={`cursor-follower ${isClicking ? 'clicking' : ''} ${isVisible ? 'visible' : 'invisible'}`}
        style={{
          transform: `translate(${followerPosition.x - 18}px, ${followerPosition.y - 18}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;