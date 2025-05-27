import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import AnimatedSection from '../layout/AnimatedSection';

const projectsData = [
  {
    title: "IoT-Based Smart Logistics System",
    description: "Designed and implemented an IoT-enabled logistics monitoring system for real-time cargo tracking using Arduino Uno, IoT sensors, and MQTT communication.",
    image: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["IoT", "Arduino", "MQTT", "Sensors"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "Quantum-Classical Deep Learning",
    description: "This project employs a Quantum Convolutional Neural Network (QCNN) with Grad-CAM for Water Body Segmentation, utilizing a hybrid quantum-classical approach to enhance feature extraction.",
    image: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Quantum Computing", "Deep Learning", "Remote Sensing", "Neural Networks"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "YouTube Clone Website",
    description: "A responsive YouTube clone interface with features like video thumbnails, sidebar navigation, and embedded playback using HTML, CSS, and JavaScript.",
    image: "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "#",
    demo: "#",
    featured: true
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <AnimatedSection
      className="group"
      delay={0.2 + index * 0.1}
      animation={index % 2 === 0 ? "fade-right" : "fade-left"}
    >
      <div className="relative rounded-xl overflow-hidden bg-white shadow-xl h-full transition-all">
        <div className="relative h-60 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium bg-primary-500/80 text-white rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-dark-600 mb-4">{project.description}</p>
          
          <div className="flex items-center space-x-3">
            <a
              href={project.github}
              className="text-dark-700 hover:text-primary-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href={project.demo}
              className="text-dark-700 hover:text-primary-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Here are some of my recent projects that showcase my technical skills and problem-solving abilities."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <AnimatedSection delay={0.6}>
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
            >
              View All Projects
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;