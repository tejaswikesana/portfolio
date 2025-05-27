import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Brain, ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/layout/AnimatedSection';

// Project data based on resume
const projectsData = [
  {
    id: 1,
    title: "IoT-Based Smart Logistics and Supply Chain Monitoring System",
    description: "Designed and implemented an IoT-enabled logistics monitoring system for real-time cargo tracking using Arduino Uno, IoT sensors, and GSM communication. Developed a sensor-based infrastructure to monitor temperature, humidity, light intensity, vibration, and GPS location, enabling a secure and reliable transport of cargo.",
    image: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["IoT", "Arduino", "Sensors", "GSM", "GPS"],
    category: "IoT",
    icon: <Cpu size={24} />,
  
    demo: "#",
    featured: true,
    date: "2024",
    type: "Epics Project"
  },
  {
    id: 2,
    title: "Hybrid Quantum-Classical Deep Learning for Water Body Identification",
    description: "This project employs a Quantum Convolutional Neural Network (QCNN) with Grad-CAM for Water Body Segmentation, utilizing a hybrid quantum-classical approach to enhance feature extraction. Utilized a hybrid quantum-classical approach to enhance feature extraction, improving segmentation accuracy in complex water body detection scenarios.",
    image: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Quantum Computing", "Deep Learning", "Neural Networks", "Remote Sensing"],
    category: "Machine Learning",
    icon: <Brain size={24} />,
    github: "#",
    demo: "#",
    featured: true,
    date: "2025 - Ongoing",
    type: "Mini Project"
  },
  {
    id: 3,
    title: "YouTube Clone Website",
    description: "Built a responsive YouTube clone interface with features like video thumbnails, sidebar navigation, and embedded playback using HTML, CSS, and JavaScript. The website replicates the core functionality and appearance of YouTube, providing a familiar user experience.",
    image: "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Web Development",
    icon: <Code size={24} />,
    github: "#",
    demo: "#",
    featured: true,
    date: "2024",
    type: "Personal Project"
  },
  {
    id: 4,
    title: "Calculator App",
    description: "Developed a browser-based calculator capable of handling basic arithmetic operations, styled with responsive UI elements using HTML, CSS, and JavaScript. Features a clean, intuitive interface with real-time calculation capabilities.",
    image: "https://images.pexels.com/photos/6193356/pexels-photo-6193356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    category: "Web Development",
    icon: <Code size={24} />,
    github: "#",
    demo: "#",
    featured: false,
    date: "2024",
    type: "Personal Project"
  },
  {
    id: 5,
    title: "Banking Management System",
    description: "Developed a full-stack banking application with a responsive web UI using HTML, CSS, and Java. Implemented core functionalities like account creation, login authentication, balance inquiry, money transfer, and transaction history. Used Java Servlets for backend processing and JDBC for database connectivity with MySQL.",
    image: "https://images.pexels.com/photos/7821717/pexels-photo-7821717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Java", "SQL", "HTML", "CSS", "JDBC", "Servlets"],
    category: "Full-Stack",
    icon: <Database size={24} />,
    github: "#",
    demo: "#",
    featured: false,
    date: "2025",
    type: "Personal Project"
  }
];

// Category filters
const categories = [
  { id: "all", label: "All Projects" },
  { id: "Web Development", label: "Web Development" },
  { id: "IoT", label: "IoT Systems" },
  { id: "Machine Learning", label: "Machine Learning" },
  { id: "Full-Stack", label: "Full-Stack" }
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <AnimatedSection 
      className="group h-full"
      delay={0.1}
      animation="fade-up"
    >
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        onClick={() => onClick(project)}
      >
        <div className="relative h-60 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
          
          <div className="absolute top-4 left-4 bg-dark-900/80 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
            {project.icon}
            <span className="ml-1">{project.category}</span>
          </div>
          
          <div className="absolute top-4 right-4 bg-primary-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
            {project.date}
          </div>
        </div>
        
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-dark-900 mb-2">{project.title}</h3>
          <p className="text-dark-600 mb-4 line-clamp-3">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="px-2 py-1 text-xs font-medium bg-dark-100 text-dark-700 rounded-full">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-dark-100 text-dark-700 rounded-full">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="p-4 border-t border-dark-100 bg-dark-50 flex justify-between">
          <span className="text-sm text-dark-500">{project.type}</span>
          <div className="flex space-x-3">
            <a
              href={project.github}
              className="text-dark-700 hover:text-primary-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
            <a
              href={project.demo}
              className="text-dark-700 hover:text-primary-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-dark-900/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <motion.div 
        className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70" />
          
          <button 
            className="absolute top-4 right-4 bg-dark-900/60 text-white p-2 rounded-full hover:bg-dark-900 transition-colors"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full mb-3">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 text-sm font-medium bg-dark-100 text-dark-700 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-dark-900 mb-2">Project Overview</h3>
            <p className="text-dark-600">{project.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-dark-700">
              <span className="font-medium mr-2">Type:</span> {project.type}
            </div>
            <div className="flex items-center text-dark-700">
              <span className="font-medium mr-2">Date:</span> {project.date}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              className="px-6 py-2 bg-dark-900 text-white rounded-lg flex items-center hover:bg-dark-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" />
              View Code
            </a>
            <a
              href={project.demo}
              className="px-6 py-2 bg-primary-500 text-white rounded-lg flex items-center hover:bg-primary-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} className="mr-2" />
              Live Demo
            </a>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-dark-200 text-dark-700 rounded-lg hover:bg-dark-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const filteredProjects = selectedCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">My Projects</h1>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto text-dark-200">
              A showcase of my technical projects across web development, IoT systems, and machine learning applications.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Explore my latest work across various technologies and domains"
          />
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-200 text-dark-700 hover:bg-dark-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-dark-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default Projects;