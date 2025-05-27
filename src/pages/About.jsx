import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/layout/AnimatedSection';
import Education from '../components/about/Education';
import Skills from '../components/about/Skills';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-dark-900 to-dark-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 5 + 1 + 'px',
                height: Math.random() * 5 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto text-dark-200">
              I'm a passionate Computer Science student and developer with a focus on web development, IoT, and machine learning.
              My goal is to create innovative solutions that make a positive impact.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Me */}
            <AnimatedSection animation="fade-right">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-dark-900 mb-6 relative inline-block">
                  Who I Am
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-primary-500"></span>
                </h2>
                
                <p className="text-dark-600 mb-4">
                  I'm Kesana Naga Tejaswi, a Bachelor of Technology student in Computer Science and Engineering at Velgapudi Ramakrishna Siddhartha Engineering College, Vijayawada. I'm passionate about creating innovative solutions that combine technology with practical problem-solving.
                </p>
                
                <p className="text-dark-600 mb-4">
                  My areas of interest include Web Development, Machine Learning, and Android Development. I enjoy working on projects that challenge me to expand my knowledge and skills.
                </p>
                
                <p className="text-dark-600">
                  I believe in continuous learning and adaptability. Whether it's a complex algorithmic problem or designing an intuitive user interface, I approach each challenge with enthusiasm and dedication.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-dark-900 mb-4">My Approach</h3>
                  
                  <div className="flex items-start mb-3">
                    <div className="bg-primary-500 text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-dark-600">Self-learning and continuous improvement</p>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <div className="bg-primary-500 text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-dark-600">Adaptability to new technologies and challenges</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500 text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-dark-600">Collaborative problem-solving and innovation</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* My Journey */}
            <AnimatedSection animation="fade-left" delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-dark-900 mb-6 relative inline-block">
                  My Journey
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-primary-500"></span>
                </h2>
                
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-primary-500">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <h3 className="text-lg font-semibold text-dark-900">Starting with Programming</h3>
                    <p className="text-dark-600">Began my programming journey with Python and Java, building a foundation in core computer science concepts.</p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-primary-500">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <h3 className="text-lg font-semibold text-dark-900">Web Development</h3>
                    <p className="text-dark-600">Expanded my skills to include HTML, CSS, and JavaScript, creating interactive and responsive websites.</p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-primary-500">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <h3 className="text-lg font-semibold text-dark-900">Advanced Technologies</h3>
                    <p className="text-dark-600">Delved into IoT systems and machine learning, combining hardware and software for innovative solutions.</p>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                    <h3 className="text-lg font-semibold text-dark-900">Continuous Growth</h3>
                    <p className="text-dark-600">Currently enhancing my skills in full-stack development and AI/ML technologies while working on real-world projects.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20 bg-dark-100">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Education" 
            subtitle="My academic journey that has shaped my knowledge and skills"
          />
          <Education />
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Technical Skills" 
            subtitle="A comprehensive look at my technical abilities and expertise"
          />
          <Skills />
        </div>
      </section>
    </>
  );
};

export default About;