import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('overview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Background particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, Math.random() * 400 - 200],
              x: [0, Math.random() * 400 - 200],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium mb-4">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-primary-400">Kesana Naga Tejaswi</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-dark-300 mb-8 h-12"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                1000,
                'Machine Learning Enthusiast',
                1000,
                'IoT Specialist',
                1000,
                'Problem Solver',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-light"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="/projects"
              className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium rounded-lg transition-all duration-300"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-white/60 hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;