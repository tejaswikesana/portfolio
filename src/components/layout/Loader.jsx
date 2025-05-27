import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-dark-900 text-white z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 font-heading"
      >
        <span className="text-primary-500">K</span>
        <span className="text-white">N</span>
        <span className="text-accent-500">T</span>
      </motion.div>
      
      <div className="w-64 h-1 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
          style={{ width: `${progress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      <motion.p 
        className="mt-4 text-dark-400 font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading amazing content...
      </motion.p>
    </div>
  );
};

export default Loader;