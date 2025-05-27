import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';
import AnimatedSection from '../layout/AnimatedSection';

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Velgapudi Ramakrishna Siddhartha Engineering College, Vijayawada",
    duration: "Oct 2022 - May 2026",
    grade: "CGPA: 8.90",
    icon: <GraduationCap size={24} />
  },
  {
    degree: "Intermediate",
    institution: "Sri Vijaya Lakshmi kranthi Junior College, Avanigadda",
    duration: "Jun 2020 - April 2022",
    grade: "Percentage: 91.5%",
    icon: <GraduationCap size={24} />
  }
];

const EducationCard = ({ education, index }) => {
  return (
    <AnimatedSection
      className="mb-10 last:mb-0"
      delay={0.2 + index * 0.1}
      animation={index % 2 === 0 ? "fade-right" : "fade-left"}
    >
      <div className="bg-white rounded-xl shadow-lg p-6 relative border-l-4 border-primary-500">
        <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center">
          {education.icon}
        </div>
        
        <div className="ml-8">
          <h3 className="text-xl font-bold text-dark-900">{education.degree}</h3>
          <p className="text-dark-600 mt-1">{education.institution}</p>
          
          <div className="mt-3 flex items-center text-dark-500">
            <Calendar size={16} className="mr-1" />
            <span>{education.duration}</span>
          </div>
          
          <div className="mt-2 inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
            {education.grade}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Education = () => {
  return (
    <div className="mt-12">
      <div className="max-w-3xl mx-auto">
        {educationData.map((education, index) => (
          <EducationCard key={index} education={education} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Education;