'use client';

export default function Footer() {
  return (
    <footer className="py-10 md:py-12 bg-[var(--color-background)] border-t border-[var(--color-primary)]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[var(--color-primary)]/40 flex items-center justify-center">
              <div className="w-5 h-[1px] bg-[var(--color-primary)]/80" />
            </div>
            <span className="text-[var(--color-primary)] font-light tracking-[0.3em] text-lg">BALANSA</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[var(--color-text)]/60 text-sm">
            <a href="#guardian" className="hover:text-[var(--color-primary)] transition-colors">Features</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms</a>
            <a href="mailto:hello@balansa.ee" className="hover:text-[var(--color-primary)] transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--color-primary)]/10 text-center text-[var(--color-text)]/40 text-xs">
          <p>© 2026 Balansa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}