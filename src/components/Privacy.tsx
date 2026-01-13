'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const features = [
  { icon: 'HOME', title: 'Self-Hosted Option', desc: 'Run Balansa entirely on your own hardware.' },
  { icon: 'LOCK', title: 'End-to-End Encryption', desc: 'All data is encrypted at rest and in transit.' },
  { icon: 'NO', title: 'No Data Selling', desc: 'We will never sell or monetize your data.' },
  { icon: 'DEL', title: 'Delete Anytime', desc: 'Export or delete all your data with one click.' },
  { icon: 'AI', title: 'Local AI Option', desc: 'Use local LLMs so data never touches the cloud.' },
  { icon: 'CODE', title: 'Open Source Core', desc: 'Audit our code yourself. Transparency builds trust.' },
];

export default function Privacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Privacy and Security
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Data,
            <span className="block text-emerald-400">Your Control</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={fadeInUp} className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}