import React, {useState, useRef} from 'react';
import {motion, useMotionValue, useSpring, useTransform} from 'motion/react';
import ilariaImg from '../assets/images/Ilaria Leonardis CEO daily.png';

interface IlariaCEOInteractiveProps {
  alt?: string;
  className?: string;
}

export default function IlariaCEOInteractive({
  alt = 'Ilaria Leonardis - CEO & Founder daily',
  className = '',
}: IlariaCEOInteractiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse movement tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {damping: 24, stiffness: 130, mass: 0.6};
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const imgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
  const imgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-5, 5]), springConfig);

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
      id="ilaria-ceo-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full flex items-center justify-center py-6 px-4 cursor-pointer select-none overflow-visible ${className}`}
      style={{
        perspective: 1000,
      }}
    >
      {/* Background Soft Glow - Golden, extremely elegant */}
      <motion.div
        id="ilaria-glow-halo"
        className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#F2C400]/5 blur-[60px] pointer-events-none z-0"
        animate={{
          scale: isHovered ? 1.15 : 1.0,
          opacity: isHovered ? 0.9 : 0.6,
          backgroundColor: isHovered ? 'rgba(242, 196, 0, 0.12)' : 'rgba(242, 196, 0, 0.05)',
        }}
        transition={{duration: 0.6, ease: 'easeOut'}}
        style={{
          x: imgX,
          y: imgY,
        }}
      />

      {/* Main image container */}
      <motion.div
        id="ilaria-img-wrapper"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: isHovered ? -4 : 0,
        }}
        transition={{duration: 0.4, ease: 'easeOut'}}
        className="relative z-10 w-full max-w-[340px] md:max-w-[380px] flex items-center justify-center overflow-visible"
      >
        {/* The image: Scontornata, clean, without rigid boxes */}
        <motion.img
          src={ilariaImg}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-auto max-h-[460px] sm:max-h-[520px] object-contain relative z-20 pointer-events-none select-none transition-all duration-500"
          style={{
            filter: isHovered
              ? 'drop-shadow(0 15px 30px rgba(44,44,46,0.1)) drop-shadow(0 4px 12px rgba(242,196,0,0.12))'
              : 'drop-shadow(0 10px 20px rgba(44,44,46,0.05)) drop-shadow(0 2px 6px rgba(242,196,0,0.06))',
            transform: 'translateZ(15px)',
          }}
        />

        {/* Dynamic slow floating tech dots surrounding her */}
        {ILARIA_DOTS_TEMPLATES.map((dot) => (
          <IlariaInteractiveDot
            key={dot.id}
            baseX={dot.baseX}
            baseY={dot.baseY}
            size={dot.size}
            baseOpacity={dot.baseOpacity}
            speed={dot.speed}
            phase={dot.phase}
            mouseX={mouseX}
            mouseY={mouseY}
            isHovered={isHovered}
          />
        ))}

        {/* Small branding tags in mono */}
        <div 
          className="absolute bottom-2 left-4 z-30 flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C2C2E]/95 border border-[#F2C400]/30 backdrop-blur-md shadow-lg"
          style={{
            transform: 'translateZ(30px)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F2C400] animate-pulse" />
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#F2C400] uppercase">CEO & FOUNDER</span>
        </div>
      </motion.div>
    </div>
  );
}

const ILARIA_DOTS_TEMPLATES = [
  { id: 101, baseX: -5,  baseY: 20, size: 5, baseOpacity: 0.50, speed: 0.013, phase: 0.5 },
  { id: 102, baseX: 105, baseY: 25, size: 7, baseOpacity: 0.60, speed: 0.010, phase: 1.8 },
  { id: 103, baseX: -8,  baseY: 55, size: 6, baseOpacity: 0.45, speed: 0.016, phase: 3.2 },
  { id: 104, baseX: 108, baseY: 60, size: 5, baseOpacity: 0.55, speed: 0.012, phase: 4.5 },
  { id: 105, baseX: 15,  baseY: 85, size: 8, baseOpacity: 0.65, speed: 0.009, phase: 2.1 },
  { id: 106, baseX: 90,  baseY: 82, size: 6, baseOpacity: 0.50, speed: 0.015, phase: 0.9 },
];

interface IlariaInteractiveDotProps {
  key?: any;
  baseX: number;
  baseY: number;
  size: number;
  baseOpacity: number;
  speed: number;
  phase: number;
  mouseX: any;
  mouseY: any;
  isHovered: boolean;
}

function IlariaInteractiveDot({
  baseX,
  baseY,
  size,
  baseOpacity,
  speed,
  phase,
  mouseX,
  mouseY,
  isHovered,
}: IlariaInteractiveDotProps) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, { damping: 25, stiffness: 90 });
  const springY = useSpring(offsetY, { damping: 25, stiffness: 90 });

  React.useEffect(() => {
    let animationFrameId: number;
    let time = 0;

    const update = () => {
      time += 1;
      
      // Floating wave motion
      const floatX = Math.sin(time * speed + phase) * 5;
      const floatY = Math.cos(time * speed * 0.95 + phase) * 5;

      // Mouse repulsion
      let pushX = 0;
      let pushY = 0;

      if (isHovered) {
        const mx = mouseX.get();
        const my = mouseY.get();

        const px = (baseX / 100) - 0.5;
        const py = (baseY / 100) - 0.5;

        const dx = px - mx;
        const dy = py - my;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const threshold = 0.45;
        if (distance < threshold && distance > 0) {
          const force = (threshold - distance) / threshold;
          pushX = (dx / distance) * force * 24;
          pushY = (dy / distance) * force * 24;
        }
      }

      offsetX.set(floatX + pushX);
      offsetY.set(floatY + pushY);

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [baseX, baseY, speed, phase, isHovered, mouseX, mouseY]);

  return (
    <motion.div
      className="absolute rounded-full bg-[#F2C400]"
      style={{
        left: `${baseX}%`,
        top: `${baseY}%`,
        width: `${size}px`,
        height: `${size}px`,
        x: springX,
        y: springY,
        opacity: isHovered ? baseOpacity * 1.25 : baseOpacity,
        boxShadow: size >= 6 ? '0 0 8px rgba(242, 196, 0, 0.6)' : 'none',
        transform: 'translate(-50%, -50%) translateZ(25px)',
      }}
      animate={{
        scale: isHovered ? 1.2 : 1.0,
      }}
      transition={{ duration: 0.3 }}
    />
  );
}
