'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const privacyPoints = [
  'Your data is encrypted in transit and at rest using industry‑standard methods.',
  'We never sell your data or share it with advertisers.',
  'You stay in control — you can disconnect accounts or delete your data at any time.',
  'Built on regulated open‑banking connections, the same infrastructure used by licensed financial institutions across the EU.',
  "Minimal data collection — we only request what's needed to provide insights.",
  'No access to your login credentials — connections are handled through secure, third‑party providers.',
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-background)]">
      <div className="max-w-4xl mx-auto px-6 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 md:mb-6 text-center">
            Privacy and security built in from day one
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto leading-relaxed text-center mb-10 md:mb-12">
            Balansa is designed with a simple principle: your financial data belongs to you, and only you.
          </motion.p>

          <motion.ul 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-4 md:space-y-5"
          >
            {privacyPoints.map((point, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-base md:text-lg text-[var(--color-text)]/80 leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
