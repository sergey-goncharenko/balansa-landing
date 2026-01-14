'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function AdvisorMode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-[var(--spacing-xl)] bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Advisor Mode
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
              Contextual Recommendations
            </h2>
            <p className="text-lg text-[var(--color-text)]/70 mb-6 leading-relaxed">
              Gives you smart recommendations when you need them: whether to pay early, 
              wait, save, or adjust — all based on your actual financial situation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--color-text)]/80">
                <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                AI-powered analysis
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80">
                <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Natural language questions
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text)]/80">
                <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Works with ChatGPT & Copilot
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-[var(--color-background)] rounded-2xl border border-[var(--color-primary)]/10 p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[var(--color-primary)]/10">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary)] flex items-center justify-center text-white font-bold text-sm">AI</div>
              <span className="text-[var(--color-primary)] font-medium">Balansa Advisor</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-[var(--color-secondary)] text-white p-3 rounded-2xl rounded-br-md max-w-xs text-sm">
                  Can I afford a €500 purchase this week?
                </div>
              </div>
              <div className="bg-white border border-[var(--color-primary)]/10 text-[var(--color-text)] p-4 rounded-2xl rounded-bl-md text-sm">
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