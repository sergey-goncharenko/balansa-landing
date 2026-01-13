'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function BuilderMode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
              Builder Mode
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automate Your
              <span className="block text-orange-400">Financial Rules</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Build custom automations with n8n. Connect Balansa to any service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <span>If Groceries over EUR 300/week</span>
                <span className="text-emerald-400">then</span>
                <span>Send budget warning</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <span>If Salary arrives</span>
                <span className="text-emerald-400">then</span>
                <span>Auto-transfer to savings</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-slate-900/90 rounded-2xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-sm">n8n</div>
                <span className="text-white font-medium">Budget Alert Workflow</span>
              </div>
              <span className="text-emerald-400 text-xs">Active</span>
            </div>
            <div className="flex items-center justify-around py-8">
              <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center text-2xl">TX</div>
              <div className="text-slate-500">then</div>
              <div className="w-14 h-14 rounded-xl bg-amber-500 rotate-45 flex items-center justify-center"><span className="-rotate-45">IF</span></div>
              <div className="text-slate-500">then</div>
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center text-2xl">OK</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}