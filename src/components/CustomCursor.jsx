import React, { useEffect, useRef } from 'react';

/**
 * CustomCursor — renders a small dot that snaps instantly
 * and a larger ring that follows with a gentle lag using the
 * Web Animations API. Hidden on touch devices.
 */
const CustomCursor = () => {
  const dotRef     = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return; // skip on mobile

    const handleMove = ({ clientX: x, clientY: y }) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top  = `${y}px`;
      }
      if (outlineRef.current) {
        outlineRef.current.animate(
          { left: `${x}px`, top: `${y}px` },
          { duration: 450, fill: 'forwards', easing: 'ease-out' }
        );
      }
    };

    const handleOver = (e) => {
      const isClickable = e.target.closest('a, button, [role="button"], input, textarea, select, label');
      if (outlineRef.current) {
        outlineRef.current.style.width           = isClickable ? '56px'                         : '36px';
        outlineRef.current.style.height          = isClickable ? '56px'                         : '36px';
        outlineRef.current.style.backgroundColor = isClickable ? 'rgba(139,92,246,0.12)'        : 'transparent';
      }
    };

    window.addEventListener('mousemove',  handleMove,  { passive: true });
    window.addEventListener('mouseover',  handleOver,  { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"     ref={dotRef}     aria-hidden="true" />
      <div className="cursor-outline" ref={outlineRef} aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
