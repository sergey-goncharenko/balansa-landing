'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function CoachMode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-indigo-900/50 to-purple-900/30 rounded-2xl border border-indigo-500/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">Morning Briefing</span>
            </div>
            <p className="text-slate-300 mb-4">Good morning! Your financial snapshot:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-slate-400 text-xs">Available</p>
                <p className="text-xl font-semibold text-white">EUR 3,847</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-slate-400 text-xs">Due Today</p>
                <p className="text-xl font-semibold text-amber-400">EUR 156</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4">
              Coach Mode
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Daily & Weekly
              <span className="block text-indigo-400">Insights</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Start each day with clarity. Balansa delivers personalized briefings
              that summarize your financial position and track your goals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}