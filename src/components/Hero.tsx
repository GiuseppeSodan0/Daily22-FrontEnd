import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {motion, useScroll, useTransform} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: heroRef, offset: ['start start', 'end start']});
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
      className="relative overflow-hidden pt-48 pb-32 md:pt-40 md:pb-44 flex flex-col items-center min-h-screen md:min-h-[90vh]"
      style={{
        background: 'url(/assets/images/BIMBA_DESK.jpg) center/cover no-repeat',
      }}
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



      <motion.div style={{y, opacity}} className="relative w-full z-20 flex items-center justify-center flex-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full pl-4 sm:pl-6 md:pl-0"
        >
          {/* Left: Logo + CTA */}
          <div className="flex flex-col items-center gap-2">
            <motion.div variants={itemVariants}>
              <motion.img
                src="/assets/images/logo_full.png"
                alt="daily"
                className="w-48 sm:w-56 md:w-64 h-auto"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
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
          </div>

          {/* Right: Headline + Subtitle */}
          <div className="text-center md:text-left pl-0 md:pl-[30%] pt-[10%]">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] mb-6 leading-[1.06] select-none font-champagne font-bold text-black"
            >
              Una nuova era<br />della sicurezza<br />sul lavoro
            </motion.h1>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent w-full" />
    </section>
  );
}
