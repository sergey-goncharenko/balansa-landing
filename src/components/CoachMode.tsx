'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function CoachMode() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="bg-[var(--color-background)] rounded-2xl border border-[var(--color-primary)]/10 p-5 md:p-6 shadow-sm order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-semibold text-[var(--color-primary)]">Daily Briefing</span>
            </div>
            <p className="text-[var(--color-text)]/60 mb-4 text-sm">Good morning! Here&apos;s your snapshot:</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white rounded-lg p-3">
                <p className="text-[var(--color-text)]/50 text-xs">Available</p>
                <p className="text-lg md:text-xl font-semibold text-[var(--color-primary)]">€3,847</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-[var(--color-text)]/50 text-xs">Due This Week</p>
                <p className="text-lg md:text-xl font-semibold text-[var(--color-secondary)]">€156</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm">
              <span className="font-medium">💡 Tip:</span> You&apos;ve spent 15% less on dining this week. Keep it up!
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium mb-5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Coach Mode
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-semibold text-[var(--color-primary)] mb-4 leading-tight">
              Build Better Habits
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text)]/70 mb-6 leading-relaxed">
              Helps you build healthier financial habits with small, timely nudges 
              based on your real behavior — not generic advice.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Daily & weekly summaries
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Progress tracking
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
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