'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function SignupForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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
    <section id="signup" ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-center">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Early Access
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Be among the first to experience ambient financial AI.
          </motion.p>

          <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white font-semibold rounded-xl shadow-lg"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
            {status !== 'idle' && status !== 'loading' && (
              <p className={`mt-4 text-sm ${status === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>{message}</p>
            )}
          </motion.form>

          <motion.p variants={fadeInUp} className="mt-6 text-slate-500 text-sm">
            No spam, ever. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}