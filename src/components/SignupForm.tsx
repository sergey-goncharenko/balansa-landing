'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setMessage('You are on the list! We will be in touch soon.');
        setEmail('');
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="signup" className="py-24 md:py-32 bg-gradient-to-b from-[var(--color-background)] via-white to-[var(--color-background)] relative overflow-hidden">
      {/* Subtle radial accent - simplified for cross-browser support */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--color-accent)]/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-6 relative z-10">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 md:mb-6">
            Ready to take control?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-[var(--color-text)]/70 mb-3 max-w-2xl mx-auto leading-relaxed">
            Take control before problems happen.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-[var(--color-text)]/70 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the waitlist and be among the first to experience ambient financial AI.
          </motion.p>

          <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white border border-[var(--color-primary)]/10 rounded-lg text-[var(--color-text)] placeholder-[var(--color-text)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-shadow"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 disabled:opacity-50 text-white font-semibold rounded-lg shadow-lg shadow-[var(--color-primary)]/25 w-full sm:w-auto transition-colors"
              >
                {status === 'loading' ? 'Joining...' : 'Get Early Access'}
              </button>
            </div>
            {status !== 'idle' && status !== 'loading' && (
              <p className={`mt-4 text-sm ${status === 'success' ? 'text-[var(--color-accent)]' : 'text-red-500'}`}>{message}</p>
            )}
          </motion.form>

          <motion.p variants={fadeInUp} className="mt-6 text-[var(--color-text)]/50 text-sm">
            No spam, ever. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}