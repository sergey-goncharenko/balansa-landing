'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const whyNow = [
  { 
    icon: '🔓', 
    title: 'Financial Data is Opening Up', 
    desc: 'New regulations are giving consumers the right to access and share their own financial data securely.' 
  },
  { 
    icon: '🤖', 
    title: 'AI Can Finally Understand Money', 
    desc: 'Language models can now reason about transactions, patterns, and financial decisions in context.' 
  },
  { 
    icon: '📱', 
    title: 'Your Financial Life is Scattered', 
    desc: 'Multiple banks, cards, subscriptions — no single tool gives you a complete, intelligent picture.' 
  },
  { 
    icon: '⚡', 
    title: 'Existing Tools Only Look Backward', 
    desc: 'Budgeting apps show you what happened. They don\'t warn you before problems occur.' 
  },
];

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-[var(--spacing-xl)] bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium mb-4">
            The Moment
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            Why Now?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[var(--color-text)]/70 max-w-3xl mx-auto">
            For the first time, the technology and the access exist to build what should have existed all along — 
            a financial companion that actually looks out for you.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate={isInView ? 'visible' : 'hidden'} 
          className="grid md:grid-cols-2 gap-6"
        >
          {whyNow.map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-primary)]/5 hover:border-[var(--color-secondary)]/30 transition-colors"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-2">{item.title}</h4>
              <p className="text-[var(--color-text)]/60">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}