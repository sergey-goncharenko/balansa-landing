'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function GuardianMode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="guardian" ref={ref} className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-4">
              Guardian Mode
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-Time
              <span className="block text-red-400">Protection</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Every transaction is analyzed instantly. Balansa watches for fraud,
              duplicate charges, unusual spending, and important events.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-4 text-slate-400 text-sm">Live Transaction Feed</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                <span className="text-white">Netflix</span>
                <span className="text-white font-mono">-15.99 EUR</span>
              </div>
              <div className="p-3 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm">
                Subscription renewing tomorrow
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}