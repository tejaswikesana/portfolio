import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import AnimatedSection from '../layout/AnimatedSection';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute -bottom-10 -right-10 text-primary-800 w-64 h-64 md:w-96 md:h-96"
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            d="M47.5,-51.2C62.2,-38.6,75.2,-19.3,75.7,0.5C76.1,20.2,64,40.5,49.3,50.8C34.7,61.1,17.3,61.6,-0.4,62C-18.1,62.5,-36.3,62.9,-50.7,52.7C-65.1,42.4,-75.8,21.2,-75.8,-0.1C-75.8,-21.3,-65.2,-42.6,-50.4,-55.2C-35.6,-67.8,-17.8,-71.7,0.6,-72.4C19,-73.1,37.9,-70.5,47.5,-51.2Z" 
            transform="translate(100 100)" 
          />
        </svg>
        
        <svg 
          className="absolute -top-10 -left-10 text-primary-800 w-64 h-64 md:w-96 md:h-96"
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            d="M54.2,-46.1C68.9,-33.7,78.5,-11.2,75.4,8.8C72.3,28.8,56.6,46.2,41.1,53.2C25.6,60.3,10.3,57,-5.4,53.5C-21.1,50,-37.2,46.4,-45.3,36.2C-53.5,26,-53.8,9.3,-49.4,-4.4C-45,-18.1,-35.9,-28.8,-25.2,-41.2C-14.5,-53.5,-2.2,-67.5,11.7,-68.7C25.5,-69.9,39.5,-58.4,54.2,-46.1Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-primary-100 text-lg mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-lg font-bold shadow-lg hover:bg-primary-50 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;