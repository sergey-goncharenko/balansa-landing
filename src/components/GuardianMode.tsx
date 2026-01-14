'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function GuardianMode() {
  return (
    <section id="guardian" className="py-16 md:py-24 bg-[var(--color-background)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium mb-5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Guardian Mode
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[var(--color-primary)] mb-4 leading-tight">
              Proactive Protection
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text)]/70 mb-6 leading-relaxed">
              Detects risks, unusual activity, upcoming shortfalls, and hidden fees — 
              and alerts you before they become problems.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Real-time fraud detection
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Subscription & fee monitoring
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Cashflow risk warnings
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-[var(--color-primary)]/10 p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[var(--color-primary)]/10">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-[var(--color-text)]/50 text-sm">Live Alerts</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-background)] border border-[var(--color-primary)]/5">
                <span className="text-[var(--color-text)] text-sm md:text-base">Netflix Subscription</span>
                <span className="text-[var(--color-text)] font-mono text-sm">-15.99 €</span>
              </div>
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 text-sm">
                <div className="flex items-center gap-2 font-medium mb-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Heads up
                </div>
                Subscription renewing tomorrow — want to review it?
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}