import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {motion, useScroll, useTransform} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const safetyMetrics = [
  {label: 'Monitoraggio', value: 'H24'},
  {label: 'Sensori IoT', value: '<1s'},
  {label: 'Alert Predittivi', value: 'Real-Time'},
  {label: 'Protezione', value: 'Attiva'},
];

export default function Hero() {
  const [metricIndex, setMetricIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: heroRef, offset: ['start start', 'end start']});
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetricIndex((prev) => (prev + 1) % safetyMetrics.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {type: 'spring', stiffness: 100, damping: 20},
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-20 pb-32 md:pt-40 md:pb-44 flex flex-col items-center min-h-screen md:min-h-[90vh]"
      style={{background: 'linear-gradient(180deg, #faf8f5 0%, #f5f0e8 60%, #ede4d4 100%)'}}
    >

      <ParticlesBackground />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] rounded-full bg-yellow-400/8 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-400/6 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-yellow-400/6 blur-[160px] pointer-events-none" />

      {/* Central pulsing shield glow */}
      <motion.div
        animate={{opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1]}}
        transition={{duration: 4, repeat: Infinity, ease: 'easeInOut'}}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-[100px] pointer-events-none"
      />

      {/* Animated horizontal scan line */}
      <motion.div
        animate={{top: ['5%', '85%', '5%']}}
        transition={{duration: 8, repeat: Infinity, ease: 'easeInOut'}}
        className="absolute left-0 right-0 h-px pointer-events-none z-10"
        style={{background: 'linear-gradient(90deg, transparent 0%, rgba(234,179,8,0.3) 20%, rgba(234,179,8,0.5) 50%, rgba(234,179,8,0.3) 80%, transparent 100%)'}}
      />

      {/* Grid + data pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />

      {/* Animated corner data indicators */}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.5, duration: 0.8}}
        className="absolute top-10 left-8 md:left-16 flex items-center gap-2 z-10"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Sistema Attivo</span>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.8, duration: 0.8}}
        className="absolute top-10 right-8 md:right-16 z-10"
      >
        <motion.div
          animate={{opacity: [0.5, 1, 0.5]}}
          transition={{duration: 2, repeat: Infinity}}
          className="px-3 py-1 rounded-full text-[9px] font-mono font-bold text-emerald-600 uppercase tracking-widest"
          style={{background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)'}}
        >
          {safetyMetrics[metricIndex].label}: {safetyMetrics[metricIndex].value}
        </motion.div>
      </motion.div>

      <motion.div style={{y, opacity}} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 flex items-center justify-center flex-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <motion.img
              src="/assets/images/logo.png"
              alt="daily"
              className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto"
              animate={{
                y: [0, -6, 0],
                filter: [
                  'drop-shadow(0 0 8px rgba(234,179,8,0.15))',
                  'drop-shadow(0 0 20px rgba(234,179,8,0.35))',
                  'drop-shadow(0 0 8px rgba(234,179,8,0.15))',
                ],
              }}
              transition={{duration: 3.5, repeat: Infinity, ease: 'easeInOut'}}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] mb-8 leading-[1.06] select-none font-champagne font-bold"
            style={{color: 'var(--color-ink)'}}
          >
            daily, before it happens.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed font-medium text-balance"
            style={{color: 'var(--color-ink-soft)'}}
          >
            una nuova era per la sicurezza sul lavoro
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              animate={{boxShadow: [
                '0 4px 28px rgba(234,179,8,0.28)',
                '0 4px 44px rgba(234,179,8,0.45)',
                '0 4px 28px rgba(234,179,8,0.28)',
              ]}}
              transition={{duration: 2.5, repeat: Infinity, ease: 'easeInOut'}}
              className="rounded-full"
            >
              <Link
                to="/servizi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 group tracking-wide"
              >
                Scopri Dailyplatform
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 stroke-[2.5]" />
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent w-full" />
    </section>
  );
}
