import { motion } from 'framer-motion';
import { Code, Cpu, Brain, Server } from 'lucide-react';
import AnimatedSection from '../layout/AnimatedSection';
import SectionHeading from '../common/SectionHeading';

const SkillCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card card-hover bg-gradient-to-br from-dark-800/50 via-dark-900/50 to-dark-800/50 p-6"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-dark-300">{description}</p>
    </motion.div>
  );
};

const Overview = () => {
  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Creating responsive and dynamic web applications using modern technologies and frameworks."
    },
    {
      icon: Cpu,
      title: "IoT Systems",
      description: "Designing and implementing IoT solutions for real-time monitoring and data collection."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building intelligent systems with ML algorithms for data analysis and prediction."
    },
    {
      icon: Server,
      title: "Full-Stack Solutions",
      description: "Developing end-to-end applications with robust front-end and back-end architecture."
    }
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="What I Do"
          subtitle="I specialize in building innovative solutions across multiple domains, combining technical expertise with a passion for solving complex problems."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <AnimatedSection 
              key={index} 
              delay={0.2 + index * 0.1}
              animation="fade-up"
            >
              <SkillCard {...skill} />
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="mt-16 text-center" delay={0.6}>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto">
            With a Bachelor's degree in Computer Science and Engineering and experience in various technologies,
            I bring a comprehensive skill set to every project. My approach combines technical excellence with
            creative problem-solving to deliver exceptional results.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <a
              href="/about"
              className="button-primary"
            >
              Learn more about my background
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1 inline" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Overview;