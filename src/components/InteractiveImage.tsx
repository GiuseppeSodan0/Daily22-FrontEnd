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
}

export default function InteractiveImage({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  withFloat = true,
  objectFit = 'cover',
  mixBlend = 'multiply',
}: InteractiveImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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
    
    // Calculate mouse position relative to container, from -0.5 to 0.5
    const width = rect.width;
    const height = rect.height;
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
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
      {/* Soft yellow-gold ambient shadow behind the cutout image on hover */}
      <div 
        className="absolute inset-4 rounded-full bg-[#F2C400]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" 
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
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F2C400]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.8s_ease-out] pointer-events-none" 
          style={{ transform: 'skewX(-20deg)', mixBlendMode: 'plus-lighter' }}
        />
      </motion.div>
    </div>
  );
}
