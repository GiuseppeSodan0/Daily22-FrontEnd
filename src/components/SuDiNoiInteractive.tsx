import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import suDiNoiImg from '../assets/images/Su di Noi daily.png';

interface SuDiNoiInteractiveProps {
  alt?: string;
  className?: string;
}

export default function SuDiNoiInteractive({
  alt = 'Su di Noi daily',
  className = '',
}: SuDiNoiInteractiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
  const imgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const imgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xVal = (event.clientX - rect.left) / rect.width - 0.5;
    const yVal = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xVal);
    mouseY.set(yVal);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full flex items-center justify-center p-0 bg-transparent border-none outline-none cursor-pointer select-none overflow-visible ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* Background Soft Glow - subtle golden, frameless */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-[#f6c73b]/10 blur-[70px] pointer-events-none z-0"
        animate={{
          scale: isHovered ? 1.15 : 1.0,
          opacity: isHovered ? 0.85 : 0.5,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          x: imgX,
          y: imgY,
        }}
      />

      {/* Main frameless image wrapper */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: isHovered ? -6 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[420px] lg:max-w-[460px] flex items-center justify-center bg-transparent border-none shadow-none outline-none overflow-visible"
      >
        <motion.img
          src={suDiNoiImg}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-auto max-h-[480px] sm:max-h-[520px] object-contain relative z-20 pointer-events-none select-none transition-all duration-300 bg-transparent border-none outline-none"
          style={{
            filter: isHovered
              ? 'drop-shadow(0 20px 35px rgba(44,44,46,0.12)) drop-shadow(0 6px 15px rgba(246,199,59,0.15))'
              : 'drop-shadow(0 12px 24px rgba(44,44,46,0.06)) drop-shadow(0 3px 8px rgba(246,199,59,0.08))',
            transform: 'translateZ(15px)',
          }}
        />
      </motion.div>
    </div>
  );
}
