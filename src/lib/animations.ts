import type { Variants } from 'framer-motion';

// All variants start visible (opacity: 1) to ensure content is never hidden
// Animation is a subtle enhancement, not required for visibility
export const fadeInUp: Variants = {
  hidden: { opacity: 1, y: 0 },  // Start visible
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 1, x: 0 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 1, x: 0 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};