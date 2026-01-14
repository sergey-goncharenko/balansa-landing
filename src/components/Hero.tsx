'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white pt-20 pb-16 md:pb-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,144,226,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(74,144,226,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      {/* Soft accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-secondary)]/5 rounded-full blur-3xl" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto"
      >
        {/* Main headline */}
        <motion.h1 
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-[var(--color-primary)] mb-5 md:mb-6 leading-[1.2]"
        >
          Your personal AI{' '}
          <span className="text-[var(--color-accent)]">financial guardian.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-[var(--color-text)]/70 mb-4 md:mb-5 max-w-2xl mx-auto leading-relaxed"
        >
          Balansa monitors your financial life in real time, warns you before problems happen, 
          and helps you make smarter decisions — automatically.
        </motion.p>
        
        {/* Value line */}
        <motion.p 
          variants={fadeInUp}
          className="text-sm sm:text-base md:text-lg text-[var(--color-secondary)] mb-8 md:mb-10 max-w-xl mx-auto font-medium"
        >
          A proactive layer of financial intelligence for everyday people.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeInUp}>
          <a
            href="#signup"
            className="inline-block w-full sm:w-auto px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary)]/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Early Access
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[var(--color-primary)]/20 flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[var(--color-primary)]/40 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}