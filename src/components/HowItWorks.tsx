'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const steps = [
  {
    number: '1',
    title: 'Connect',
    description: 'Securely link your bank accounts through regulated Open Banking connections.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Monitor',
    description: 'Balansa watches your transactions 24/7, learning your patterns and spotting anomalies.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Insights',
    description: 'Receive proactive alerts, recommendations, and summaries exactly when you need them.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block px-3 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium mb-5">
            Simple Setup
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-[2rem] font-semibold text-[var(--color-primary)] mb-4">
            How It Works
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-[var(--color-text)]/70 max-w-xl mx-auto">
            Get started in minutes. No complex setup, no spreadsheets, no manual categorization.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 md:gap-10"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-[var(--color-accent)]/20" />
              )}
              
              {/* Step circle */}
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 rounded-full bg-white border-2 border-[var(--color-accent)]/20 flex items-center justify-center relative shadow-sm">
                <div className="text-[var(--color-accent)]">
                  {step.icon}
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[var(--color-accent)] text-white text-sm font-semibold flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-[var(--color-primary)] mb-2">{step.title}</h3>
              <p className="text-sm md:text-base text-[var(--color-text)]/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
