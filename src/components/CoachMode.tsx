'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function CoachMode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-[var(--spacing-xl)] bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-[var(--color-primary)]/10 p-6 shadow-lg order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-semibold text-[var(--color-primary)]">Daily Briefing</span>
            </div>
            <p className="text-[var(--color-text)]/60 mb-4 text-sm">Good morning! Here&apos;s your snapshot:</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-[var(--color-background)] rounded-lg p-3">
                <p className="text-[var(--color-text)]/50 text-xs">Available</p>
                <p className="text-xl font-semibold text-[var(--color-primary)]">€3,847</p>
              </div>
              <div className="bg-[var(--color-background)] rounded-lg p-3">
                <p className="text-[var(--color-text)]/50 text-xs">Due This Week</p>
                <p className="text-xl font-semibold text-[var(--color-secondary)]">€156</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm">
              <span className="font-medium">💡 Tip:</span> You&apos;ve spent 15% less on dining this week. Keep it up!
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Coach Mode
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
              Build Better Habits
            </h2>
            <p className="text-lg text-[var(--color-text)]/70 mb-6 leading-relaxed">
              Helps you build healthier financial habits with small, timely nudges 
              based on your real behavior — not generic advice.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--color-text)]/80">
                <span className="w-5 h-5 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Daily & weekly summaries
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80">
                <span className="w-5 h-5 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Progress tracking
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80">
                <span className="w-5 h-5 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Personalized nudges
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}