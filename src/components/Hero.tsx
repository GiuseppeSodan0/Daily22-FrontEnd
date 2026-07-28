import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import bimbaDesktop from '../assets/images/BIMBA_DESKTOP.png';
import bimbaMobile from '../assets/images/BIMBA_MOBILE_.png';

export default function Hero() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    interface Particle {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      radius: number;
      angle: number;
      angleSpeed: number;
      floatRadius: number;
      opacity: number;
    }

    let particles: Particle[] = [];

    const initParticles = () => {
      if (!canvas) return;
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
      particles = [];
      
      // Controlled, elegant particle counts as requested
      let currentNum = 10;
      if (window.innerWidth >= 1024) {
        currentNum = Math.floor(Math.random() * 6) + 20; // ~20-25 total on desktop
      } else if (window.innerWidth >= 768) {
        currentNum = Math.floor(Math.random() * 5) + 13; // ~13-17 total on tablet
      } else {
        currentNum = Math.floor(Math.random() * 4) + 9;  // ~9-12 total on mobile
      }

      for (let i = 0; i < currentNum; i++) {
        // Distribute dots on extreme outer sides to keep the central girl subject and text clear
        let baseX: number;
        if (Math.random() < 0.96) {
          // 96% of particles generated on the outer 15% of each side
          if (Math.random() < 0.5) {
            baseX = Math.random() * (width * 0.15);
          } else {
            baseX = width * 0.85 + Math.random() * (width * 0.15);
          }
        } else {
          // Only 4% in outer margins (20-30% and 70-80%)
          if (Math.random() < 0.5) {
            baseX = width * 0.15 + Math.random() * (width * 0.10);
          } else {
            baseX = width * 0.75 + Math.random() * (width * 0.10);
          }
        }

        const baseY = Math.random() * height;

        // Custom size scale: small (4px), medium (6px), large (8px) diameter
        const sizeRand = Math.random();
        let radius: number;
        if (sizeRand < 0.45) {
          radius = 2; // small
        } else if (sizeRand < 0.85) {
          radius = 3; // medium
        } else {
          radius = 4; // large
        }

        particles.push({
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          radius,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: Math.random() * 0.003 + 0.001,
          floatRadius: Math.random() * 10 + 5,
          opacity: Math.random() * 0.18 + 0.35
        });
      }
    };

    initParticles();

    const handleResize = () => {
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    const repelRadius = 180;
    const repelForce = 65;
    const easeSpeed = 0.06;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.angle += p.angleSpeed;
        const floatX = p.baseX + Math.cos(p.angle) * p.floatRadius;
        const floatY = p.baseY + Math.sin(p.angle) * p.floatRadius;

        let targetX = floatX;
        let targetY = floatY;

        if (mouseRef.current.active) {
          const dx = floatX - mouseRef.current.x;
          const dy = floatY - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repelRadius) {
            const force = (repelRadius - distance) / repelRadius;
            const angleToMouse = distance === 0 ? 0 : Math.atan2(dy, dx);
            targetX = floatX + Math.cos(angleToMouse) * force * repelForce;
            targetY = floatY + Math.sin(angleToMouse) * force * repelForce;
          }
        }

        p.x += (targetX - p.x) * easeSpeed;
        p.y += (targetY - p.y) * easeSpeed;

        if (p.x < 0) p.x = 0;
        if (p.x > width) p.x = width;
        if (p.y < 0) p.y = 0;
        if (p.y > height) p.y = height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 196, 0, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000, active: false };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-section relative overflow-hidden flex items-center justify-center bg-[#F0EFEB] px-4 sm:px-8 lg:px-10"
    >
      {/* Background Image Layer */}
      <picture className="hero-picture">
        <source media="(max-width: 767px)" srcSet={bimbaMobile} />
        <img
          src={bimbaDesktop}
          alt="Daily - Prevenzione Intelligente"
          className="hero-image"
        />
      </picture>
      {/* Interactive particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,44,46,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,44,46,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content w-full"
        >
          {/* COLONNA SINISTRA / BLOCCO INIZIALE: Claim & CTAs */}
          <motion.div
            variants={itemVariants}
            className="hero-left hero-top-content hero-left-copy order-1 relative z-30"
          >
            {/* Minimal Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2C2C2E]/10 bg-white/70 text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase text-[#2C2C2E]/80 font-mono mb-4 md:mb-6 backdrop-blur-sm whitespace-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2C400] animate-pulse shrink-0" />
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-[22px] lg:text-[38px] xl:text-[44px] font-bold tracking-tight text-[#2C2C2E] leading-[1.15] md:leading-[1.1] font-sans text-balance">
              {t('hero.title')}
            </h1>

            {/* Pulsanti CTA */}
            <div className="hero-cta-row mt-5 md:mt-8 flex flex-row items-center gap-3 sm:gap-4 w-full justify-center md:justify-start">
              <Link
                to="/servizi"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold tracking-wider uppercase font-sans text-[#2C2C2E] bg-[#F2C400] rounded-[18px] transition-all duration-300 hover:shadow-[0_0_22px_rgba(242,196,0,0.55)] hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap"
              >
                {t('hero.discover')}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 stroke-[2.5]" />
              </Link>

              <Link
                to="/contatti"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold tracking-wider uppercase font-sans text-[#2C2C2E] bg-white border border-[#2C2C2E]/15 rounded-[18px] transition-all duration-300 hover:border-[#F2C400] hover:shadow-[0_0_15px_rgba(242,196,0,0.2)] hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap"
              >
                {t('hero.contactUs')}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
              </Link>
            </div>
          </motion.div>

          {/* COLONNA CENTRALE / SAFE AREA PROTEZIONE PER LA BAMBINA NEL BACKGROUND */}
          <motion.div
            variants={itemVariants}
            className="hero-center-safe-area hero-center-spacer order-2 relative z-20 pointer-events-none"
          />

          {/* COLONNA DESTRA / BLOCCO FINALE */}
          <motion.div
            variants={itemVariants}
            className="hero-right hero-bottom-text hero-right-copy order-3 relative z-30"
          >
            <h2 className="hero-right-text">
              {t('hero.rightCopy')}
            </h2>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C2C2E]/10 to-transparent w-full z-20" />
    </section>
  );
}
