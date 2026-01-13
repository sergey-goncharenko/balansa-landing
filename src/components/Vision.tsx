'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const whyNow = [
  { 
    icon: '🔓', 
    title: 'Financial Data is Opening Up', 
    desc: 'New regulations worldwide are giving consumers the right to access and share their own financial data securely.' 
  },
  { 
    icon: '🤖', 
    title: 'AI Can Finally Understand Money', 
    desc: 'Language models have reached the point where they can reason about transactions, patterns, and financial decisions.' 
  },
  { 
    icon: '📱', 
    title: 'Your Financial Life is Scattered', 
    desc: 'Multiple banks, cards, subscriptions, apps — no single tool gives you a complete, intelligent picture.' 
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
    <section ref={ref} className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            The Moment
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Now?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-300 max-w-3xl mx-auto">
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
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision statement */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl text-slate-200 font-light italic max-w-4xl mx-auto">
            "A financial advisor that's always present, always watching out for you, 
            and always on your side."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}