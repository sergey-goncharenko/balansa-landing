'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function BuilderMode() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1 bg-[var(--color-background)] rounded-2xl border border-[var(--color-primary)]/10 p-5 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-[var(--color-primary)]/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-xs">📊</div>
                <span className="text-[var(--color-primary)] font-medium text-sm md:text-base">Financial Projection</span>
              </div>
              <span className="text-[var(--color-accent)] text-xs font-medium">Auto-updates</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[var(--color-text)]/70 text-sm">Current Savings</span>
                <span className="text-[var(--color-primary)] font-semibold">€4,200</span>
              </div>
              <div className="w-full bg-white rounded-full h-2">
                <div className="bg-[var(--color-accent)] h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--color-text)]/50">Goal: €6,000</span>
                <span className="text-[var(--color-accent)] font-medium">On track for August</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Builder Mode
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[var(--color-primary)] mb-4 leading-tight">
              Plan Ahead
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text)]/70 mb-6 leading-relaxed">
              Helps you plan ahead with simple, realistic projections that adapt 
              automatically as your financial situation changes.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Goal setting & tracking
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Adaptive projections
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Scenario planning
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}