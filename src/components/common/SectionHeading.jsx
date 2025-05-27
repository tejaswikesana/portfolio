import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle = '', 
  align = 'center',
  decoration = true
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold gradient-text relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
        {decoration && (
          <motion.span 
            className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        )}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="text-dark-300 mt-4 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;