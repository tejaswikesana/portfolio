import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  className = '',
  delay = 0.3,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  animation = 'fade-up'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, threshold });
  
  const animations = {
    'fade-up': {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-down': {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-left': {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    'fade-right': {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    'zoom-in': {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    'zoom-out': {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { opacity: 1, scale: 1 }
    }
  };
  
  const selectedAnimation = animations[animation] || animations['fade-up'];
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;