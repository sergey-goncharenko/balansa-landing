'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          {/* Icon mark - square with balance line */}
          <div className="w-8 h-8 border border-white/40 flex items-center justify-center">
            <div className="w-5 h-[1px] bg-white/80" />
          </div>
          {/* Wordmark */}
          <span className="text-white font-light tracking-[0.3em] text-lg">BALANSA</span>
        </motion.a>

        {/* CTA */}
        <motion.a
          href="#signup"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-5 py-2 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/10 hover:bg-white/20 transition-colors"
        >
          Get Early Access
        </motion.a>
      </div>
    </header>
  );
}
