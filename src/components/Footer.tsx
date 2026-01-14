'use client';

export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--color-primary)] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white/40 flex items-center justify-center">
              <div className="w-5 h-[1px] bg-white/80" />
            </div>
            <span className="text-white font-light tracking-[0.3em] text-lg">BALANSA</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <a href="#guardian" className="hover:text-white transition">Features</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="mailto:hello@balansa.ee" className="hover:text-white transition">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© 2025 Balansa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}