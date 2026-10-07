import React from 'react';
import { motion } from 'motion/react';
import { Cookie } from 'lucide-react';
import CookiePolicyContent from './CookiePolicyContent';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function CookiePolicy() {
  return (
    <section className="relative overflow-hidden pt-36 pb-32 bg-[#F0EFEB] text-left">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-[#f6c73b]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Title Banner */}
          <motion.div variants={itemVariants} className="p-8 sm:p-10 card-premium">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#f6c73b]/15 text-[#2C2C2E] border border-[#f6c73b]/30">
                <Cookie className="w-6 h-6 text-[#2C2C2E]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">
                  Cookie Policy di dailyplatform
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">
                  Cookie Policy
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              Informativa sull'utilizzo dei Cookie e degli Strumenti di Tracciamento da parte di dailyplatform e del sito Daily.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="p-8 sm:p-12 card-premium">
            <CookiePolicyContent />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}