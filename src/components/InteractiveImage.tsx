import React, {useState, useRef} from 'react';
import {motion, useMotionValue, useSpring, useTransform} from 'motion/react';

interface InteractiveImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'auto' | 'portrait';
  withFloat?: boolean;
  objectFit?: 'cover' | 'contain';
  mixBlend?: 'multiply' | 'normal' | 'none';
  showDots?: boolean;
  maxDots?: number;
  dotColor?: string;
}

interface DotConfig {
  id: number;
  top: string;
  left: string;
  size: number;
  baseX: number;
  baseY: number;
  floatDuration: number;
  floatDelay: number;
}

const REACTIVE_DOTS: DotConfig[] = [
  { id: 1, top: '15%', left: '-14px', size: 9, baseX: -5, baseY: 15, floatDuration: 4.2, floatDelay: 0 },
  { id: 2, top: '12%', left: 'calc(100% + 10px)', size: 8, baseX: 105, baseY: 12, floatDuration: 5.1, floatDelay: 0.8 },
  { id: 3, top: '48%', left: '-20px', size: 11, baseX: -7, baseY: 48, floatDuration: 4.5, floatDelay: 1.4 },
  { id: 4, top: '55%', left: 'calc(100% + 14px)', size: 9, baseX: 107, baseY: 55, floatDuration: 5.3, floatDelay: 0.3 },
  { id: 5, top: '82%', left: '-10px', size: 7, baseX: -4, baseY: 82, floatDuration: 4.0, floatDelay: 1.8 },
  { id: 6, top: '85%', left: 'calc(100% + 8px)', size: 10, baseX: 104, baseY: 85, floatDuration: 4.7, floatDelay: 1.1 },
  { id: 7, top: '-12px', left: '30%', size: 8, baseX: 30, baseY: -5, floatDuration: 5.5, floatDelay: 2.1 },
  { id: 8, top: 'calc(100% + 10px)', left: '70%', size: 10, baseX: 70, baseY: 105, floatDuration: 4.4, floatDelay: 0.5 },
];

export default function InteractiveImage({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  withFloat = true,
  objectFit = 'cover',
  mixBlend = 'multiply',
  showDots = true,
  maxDots,
  dotColor,
}: InteractiveImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [dotOffsets, setDotOffsets] = useState<Record<number, { x: number; y: number }>>({});

  const dotsToRender = REACTIVE_DOTS.slice(0, maxDots ?? REACTIVE_DOTS.length);

  // Motion values for elegant 3D mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to dampen the mouse movement
  const springConfig = {damping: 25, stiffness: 150, mass: 0.5};
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateZ = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to container, from 0 to 100% for dots, and -0.5 to 0.5 for 3D
    const width = rect.width;
    const height = rect.height;
    const mousePctX = ((event.clientX - rect.left) / width) * 100;
    const mousePctY = ((event.clientY - rect.top) / height) * 100;
    
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);

    // Calculate repulsion offsets for perimeter dots
    const newOffsets: Record<number, { x: number; y: number }> = {};
    dotsToRender.forEach(dot => {
      const dx = dot.baseX - mousePctX;
      const dy = dot.baseY - mousePctY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 42) {
        const force = (1 - dist / 42) * 24; // Push max 24px away
        newOffsets[dot.id] = {
          x: (dx / (dist || 1)) * force,
          y: (dy / (dist || 1)) * force,
        };
      } else {
        newOffsets[dot.id] = { x: 0, y: 0 };
      }
    });
    setDotOffsets(newOffsets);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    setDotOffsets({});
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Aspect ratio classes mapping
  const ratioClass = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    auto: '',
  }[aspectRatio];

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group cursor-pointer overflow-visible ${ratioClass} ${className} transition-all duration-500`}
      style={{
        perspective: 1000,
      }}
    >
      {/* Reactive Dots around perimeter */}
      {showDots && dotsToRender.map((dot, index) => {
        const offset = dotOffsets[dot.id] || { x: 0, y: 0 };
        // Responsive visibility: indices 0..3 visible on mobile (4), 4..5 visible from sm/md (6), 6+ visible on lg (8+)
        const visibilityClass = index >= 6 ? 'hidden lg:block' : index >= 4 ? 'hidden sm:block' : '';
        const isRedDot = dotColor === '#e73749';
        return (
          <motion.div
            key={dot.id}
            className={`absolute rounded-full z-20 pointer-events-none ${
              isRedDot 
                ? 'bg-[#e73749] shadow-[0_0_10px_rgba(231,55,73,0.65)]' 
                : 'bg-[#f6c73b] shadow-[0_0_10px_rgba(242,196,0,0.65)]'
            } ${visibilityClass}`}
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              backgroundColor: dotColor,
            }}
            animate={{
              x: offset.x,
              y: offset.y,
              scale: isHovered ? 1.25 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 14,
            }}
          />
        );
      })}

      {/* Soft ambient shadow behind the cutout image on hover */}
      <div 
        className={`absolute inset-4 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 ${
          dotColor === '#e73749' ? 'bg-[#e73749]/15' : 'bg-[#f6c73b]/10'
        }`} 
      />

      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          z: translateZ,
          transformStyle: 'preserve-3d',
        }}
        animate={
          withFloat && !isHovered
            ? {
                y: [0, -8, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
            : {
                y: 0,
                scale: isHovered ? 1.04 : 1,
                transition: {duration: 0.45, ease: 'easeOut'},
              }
        }
        className="w-full h-full relative z-10"
      >
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`w-full h-full ${
            objectFit === 'contain' ? 'object-contain' : 'object-cover'
          } transition-transform duration-700 ease-out`}
          style={
            mixBlend !== 'none'
              ? { mixBlendMode: mixBlend }
              : {}
          }
        />

        {/* Floating elegant indicator line linking visual element with interactivity */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f6c73b]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.8s_ease-out] pointer-events-none" 
          style={{ transform: 'skewX(-20deg)', mixBlendMode: 'plus-lighter' }}
        />
      </motion.div>
    </div>
  );
}
