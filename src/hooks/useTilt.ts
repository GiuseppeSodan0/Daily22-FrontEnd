import React, {useRef, useCallback, useEffect, useState} from 'react';

interface TiltResult {
  ref: React.RefObject<HTMLDivElement | null>;
  style: React.CSSProperties;
  shineStyle: React.CSSProperties;
}

export function useTilt(): TiltResult {
  const ref = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shineX, setShineX] = useState(50);
  const [shineY, setShineY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const tiltX = (mouseY / (rect.height / 2)) * -8;
    const tiltY = (mouseX / (rect.width / 2)) * 8;

    setRotateX(tiltX);
    setRotateY(tiltY);

    const sX = ((e.clientX - rect.left) / rect.width) * 100;
    const sY = ((e.clientY - rect.top) / rect.height) * 100;
    setShineX(sX);
    setShineY(sY);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setShineX(50);
    setShineY(50);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  const style: React.CSSProperties = {
    perspective: '1000px',
    transformStyle: 'preserve-3d',
    transform: isHovered
      ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
      : 'rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
    transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
  };

  const shineStyle: React.CSSProperties = {
    position: 'absolute',
    inset: '0',
    borderRadius: 'inherit',
    pointerEvents: 'none',
    background: isHovered
      ? `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(250,204,21,0.12) 0%, transparent 60%)`
      : 'transparent',
    transition: isHovered ? 'background 0.08s ease-out' : 'background 0.5s ease-out',
  };

  return {ref, style, shineStyle};
}
