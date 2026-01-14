'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function AdvisorMode() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-6 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Advisor Mode
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[var(--color-primary)] mb-4 leading-tight">
              Contextual Recommendations
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text)]/70 mb-6 leading-relaxed">
              Gives you smart recommendations when you need them: whether to pay early, 
              wait, save, or adjust — all based on your actual financial situation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                AI-powered analysis
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Natural language questions
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Works with ChatGPT & Copilot
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-[var(--color-primary)]/10 p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[var(--color-primary)]/10">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary)] flex items-center justify-center text-white font-bold text-sm">AI</div>
              <span className="text-[var(--color-primary)] font-medium text-sm md:text-base">Balansa Advisor</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-end">
                <div className="bg-[var(--color-secondary)] text-white p-3 rounded-2xl rounded-br-md max-w-[200px] sm:max-w-xs text-sm">
                  Can I afford a €500 purchase this week?
                </div>
              </div>
              <div className="bg-[var(--color-background)] border border-[var(--color-primary)]/10 text-[var(--color-text)] p-4 rounded-2xl rounded-bl-md text-sm">
                <p className="mb-2">Based on your current balance and upcoming expenses:</p>
                <p className="text-[var(--color-accent)] font-medium">✓ Yes, you can afford it comfortably.</p>
                <p className="text-[var(--color-text)]/60 mt-2 text-xs">You&apos;ll still have €2,340 after your rent and utilities.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}