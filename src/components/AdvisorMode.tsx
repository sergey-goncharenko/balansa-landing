'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function AdvisorMode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Advisor Mode
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ask Anything About
            <span className="block text-purple-400">Your Finances</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a conversation with your financial data through ChatGPT or Microsoft Copilot.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp} className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold">G</div>
              <span className="text-white font-medium">ChatGPT + Balansa</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-end">
                <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-br-md max-w-xs">
                  Can I afford a EUR 500 purchase?
                </div>
              </div>
              <div className="bg-slate-700 text-slate-100 p-3 rounded-2xl rounded-bl-md">
                Based on your balance and upcoming bills, yes you can afford it comfortably.
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">C</div>
              <span className="text-white font-medium">Microsoft Copilot</span>
            </div>
            <div className="space-y-3">
              <p className="text-slate-400 text-sm">@balansa How am I tracking toward my savings goal?</p>
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-lg p-4">
                <p className="text-slate-200 text-sm">You have saved EUR 2,400 of your EUR 3,000 vacation goal (80%).</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}