import React, {useState, useRef} from 'react';
import {motion, useMotionValue, useSpring, useTransform} from 'motion/react';
import lavoratriceWidiu from '../assets/images/Lavoratrice con WIDIU.png';

interface WidiuWorkerInteractiveProps {
  alt?: string;
  className?: string;
}

export default function WidiuWorkerInteractive({
  alt = 'Lavoratrice con WIDIU - Monitoraggio Sicurezza Attivo',
  className = '',
}: WidiuWorkerInteractiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax motion values for a highly responsive 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {damping: 25, stiffness: 140, mass: 0.6};
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const imageTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const imageTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);

  // Additional float offset for background orbits
  const orbitTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const orbitTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Relative position from -0.5 to 0.5
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
      id="widiu-worker-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full flex items-center justify-center py-6 px-4 md:px-8 cursor-pointer select-none overflow-visible ${className}`}
      style={{
        perspective: 1200,
      }}
    >
      {/* Dynamic soft background halo - becomes brighter on hover */}
      <motion.div
        id="widiu-worker-halo"
        className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#F2C400]/8 blur-[70px] pointer-events-none z-0"
        animate={{
          scale: isHovered ? 1.25 : 1.0,
          opacity: isHovered ? 1.0 : 0.7,
          backgroundColor: isHovered ? 'rgba(242, 196, 0, 0.16)' : 'rgba(242, 196, 0, 0.08)',
        }}
        transition={{duration: 0.8, ease: 'easeOut'}}
        style={{
          x: imageTranslateX,
          y: imageTranslateY,
        }}
      />

      {/* Decorative concentric tech orbit paths behind the worker */}
      <motion.div
        id="widiu-tech-orbits"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]"
        style={{
          x: orbitTranslateX,
          y: orbitTranslateY,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 400" className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] overflow-visible">
          {/* Inner orbit */}
          <motion.circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="#F2C400"
            strokeWidth="0.75"
            strokeDasharray="6 12 4 8"
            className="origin-center"
            animate={{
              rotate: 360,
              opacity: isHovered ? 0.38 : 0.18,
            }}
            transition={{
              rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
              opacity: { duration: 0.5 }
            }}
          />

          {/* Outer orbit */}
          <motion.circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="#F2C400"
            strokeWidth="0.5"
            strokeDasharray="16 20"
            className="origin-center"
            animate={{
              rotate: -360,
              opacity: isHovered ? 0.28 : 0.12,
            }}
            transition={{
              rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
              opacity: { duration: 0.5 }
            }}
          />

          {/* Connected monitoring grid lines (subtle tech details) */}
          <g opacity={isHovered ? 0.25 : 0.08} className="transition-opacity duration-500">
            <line x1="200" y1="40" x2="200" y2="360" stroke="#2C2C2E" strokeWidth="0.5" strokeDasharray="2 4" />
            <line x1="40" y1="200" x2="360" y2="200" stroke="#2C2C2E" strokeWidth="0.5" strokeDasharray="2 4" />
          </g>
        </svg>
      </motion.div>

      {/* Main interactive card container for the worker image and overlay accents */}
      <motion.div
        id="widiu-worker-card"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: isHovered ? -5 : 0,
        }}
        transition={{duration: 0.45, ease: 'easeOut'}}
        className="relative z-10 w-full max-w-[340px] md:max-w-[400px] flex items-center justify-center overflow-visible"
      >
        {/* CUTOUT WORKER IMAGE: Scontornata with elegant drop-shadow blend */}
        <motion.img
          src={lavoratriceWidiu}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-auto max-h-[440px] sm:max-h-[500px] object-contain relative z-20 pointer-events-none select-none transition-all duration-500"
          style={{
            filter: isHovered
              ? 'drop-shadow(0 20px 40px rgba(44,44,46,0.12)) drop-shadow(0 6px 18px rgba(242,196,0,0.18))'
              : 'drop-shadow(0 12px 28px rgba(44,44,46,0.06)) drop-shadow(0 4px 10px rgba(242,196,0,0.08))',
            transform: 'translateZ(20px)',
          }}
        />

        {/* 1. SMARTWATCH PULSE & BEACON (Symbolizing the active WIDIU signal) */}
        {/* Placed precisely over her smartwatch wrist device in the lower portion of the image */}
        <div 
          className="absolute z-30 pointer-events-none"
          style={{
            top: '80%',
            left: '52%',
            transform: 'translateZ(45px) translate(-50%, -50%)',
          }}
        >
          {/* Pulsing signal halo */}
          <span className="absolute inline-flex h-12 w-12 rounded-full bg-[#F2C400]/40 opacity-75 animate-ping -translate-x-1/2 -translate-y-1/2" />
          
          {/* Core signal dot */}
          <span className="relative flex h-3 w-3 rounded-full bg-[#F2C400] shadow-[0_0_12px_#F2C400]" />

          {/* Smartwatch active tiny tag label */}
          <motion.div
            className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#2C2C2E]/90 border border-[#F2C400]/40 backdrop-blur-md shadow-lg"
            animate={{
              opacity: isHovered ? 1.0 : 0.85,
              x: isHovered ? 4 : 0,
            }}
            transition={{duration: 0.3}}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2C400] animate-pulse" />
            <span className="text-[8px] font-mono font-bold tracking-wider text-white whitespace-nowrap uppercase">WIDIU ATTIVO</span>
          </motion.div>
        </div>

        {/* 2. RECONSTRUCTED DYNAMIC INTERACTIVE PALLINI / DOTS */}
        {PARTICLE_TEMPLATES.map((pt) => (
          <InteractiveDot
            key={pt.id}
            baseX={pt.baseX}
            baseY={pt.baseY}
            size={pt.size}
            baseOpacity={pt.baseOpacity}
            speed={pt.speed}
            phase={pt.phase}
            mouseX={mouseX}
            mouseY={mouseY}
            isHovered={isHovered}
          />
        ))}

        {/* Floating telemetry lines around mouse hover */}
        <div 
          className="absolute inset-0 rounded-3xl border border-[#F2C400]/0 group-hover:border-[#F2C400]/20 pointer-events-none transition-all duration-700 z-10"
          style={{
            transform: 'translateZ(10px) scale(1.05)',
          }}
        />
      </motion.div>

      {/* Scontornata premium tag indicator */}
      <div className="absolute bottom-1 right-1 sm:right-6 z-20 px-2.5 py-1 rounded-md bg-[#2C2C2E]/90 backdrop-blur-md border border-[#F2C400]/30 text-[8px] font-mono font-bold tracking-widest text-[#F2C400] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-md">
        AI PREDICTOR
      </div>
    </div>
  );
}

// Particle definitions with well-balanced, elegant sizes and high legibility
const PARTICLE_TEMPLATES = [
  { id: 1, baseX: 10, baseY: 12, size: 4, baseOpacity: 0.55, speed: 0.012, phase: 0 },
  { id: 2, baseX: 90, baseY: 15, size: 6, baseOpacity: 0.65, speed: 0.015, phase: 1.2 },
  { id: 3, baseX: 14, baseY: 38, size: 8, baseOpacity: 0.70, speed: 0.009, phase: 2.5 },
  { id: 4, baseX: 86, baseY: 42, size: 4, baseOpacity: 0.48, speed: 0.018, phase: 3.1 },
  { id: 5, baseX: 6,  baseY: 68, size: 6, baseOpacity: 0.60, speed: 0.011, phase: 4.7 },
  { id: 6, baseX: 94, baseY: 70, size: 8, baseOpacity: 0.72, speed: 0.014, phase: 0.8 },
  { id: 7, baseX: 20, baseY: 82, size: 4, baseOpacity: 0.52, speed: 0.016, phase: 2.1 },
  { id: 8, baseX: 80, baseY: 85, size: 6, baseOpacity: 0.62, speed: 0.013, phase: 5.3 },
  // Extra surrounding nodes flanking her body elegantly on outer regions
  { id: 9, baseX: 16, baseY: 25, size: 6, baseOpacity: 0.58, speed: 0.010, phase: 1.7 },
  { id: 10, baseX: 84, baseY: 28, size: 4, baseOpacity: 0.50, speed: 0.017, phase: 3.9 },
  { id: 11, baseX: 12, baseY: 55, size: 8, baseOpacity: 0.68, speed: 0.011, phase: 2.9 },
  { id: 12, baseX: 88, baseY: 58, size: 6, baseOpacity: 0.64, speed: 0.014, phase: 4.2 }
];

interface InteractiveDotProps {
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

function InteractiveDot({
  baseX,
  baseY,
  size,
  baseOpacity,
  speed,
  phase,
  mouseX,
  mouseY,
  isHovered,
}: InteractiveDotProps) {
  // Local animation offsets for floating and repelling
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  // Springs for smooth movement
  const springX = useSpring(offsetX, { damping: 22, stiffness: 80 });
  const springY = useSpring(offsetY, { damping: 22, stiffness: 80 });

  React.useEffect(() => {
    let animationFrameId: number;
    let time = 0;

    const update = () => {
      time += 1;
      
      // 1. Slow, micro-floating motion
      const floatX = Math.sin(time * speed + phase) * 6; // slow floating in px
      const floatY = Math.cos(time * speed * 0.9 + phase) * 6;

      // 2. Slow, tactile repelling from mouse
      let pushX = 0;
      let pushY = 0;

      if (isHovered) {
        const mx = mouseX.get(); // ranges from -0.5 to 0.5
        const my = mouseY.get(); // ranges from -0.5 to 0.5

        // Particle relative percentage from center (-0.5 to 0.5)
        const px = (baseX / 100) - 0.5;
        const py = (baseY / 100) - 0.5;

        const dx = px - mx;
        const dy = py - my;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Slow push when mouse is within the active threshold
        const threshold = 0.40;
        if (distance < threshold && distance > 0) {
          const force = (threshold - distance) / threshold;
          // Calculate pushing delta away from the cursor
          pushX = (dx / distance) * force * 30; // push up to 30px away
          pushY = (dy / distance) * force * 30;
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
        opacity: isHovered ? baseOpacity * 1.2 : baseOpacity,
        boxShadow: size >= 6 ? '0 0 10px rgba(242, 196, 0, 0.7)' : 'none',
        transform: 'translate(-50%, -50%) translateZ(35px)',
      }}
      animate={{
        scale: isHovered ? 1.25 : 1.0,
      }}
      transition={{ duration: 0.4 }}
    />
  );
}
