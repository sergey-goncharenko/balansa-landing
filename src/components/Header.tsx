'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--color-primary)]/5">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-start gap-2 sm:gap-3 flex-shrink-0"
        >
          {/* Icon mark - square with balance line */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[var(--color-primary)]/40 flex items-center justify-center flex-shrink-0">
            <div className="w-4 sm:w-5 h-[1px] bg-[var(--color-primary)]" />
          </div>
          {/* Wordmark - always visible */}
          <span className="text-[var(--color-primary)] font-light tracking-[0.2em] sm:tracking-[0.3em] text-base sm:text-lg whitespace-nowrap overflow-visible max-w-full">BALANSA</span>
        </motion.a>

        {/* CTA */}
        <motion.a
          href="#signup"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-5 py-2 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors"
        >
          Get Early Access
        </motion.a>
      </div>
    </header>
  );
}