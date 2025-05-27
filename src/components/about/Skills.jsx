import { motion } from 'framer-motion';
import AnimatedSection from '../layout/AnimatedSection';

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "Java", proficiency: 85 },
      { name: "C", proficiency: 80 },
      { name: "JavaScript", proficiency: 88 },
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 92 },
      { name: "SQL", proficiency: 87 }
    ]
  },
  {
    category: "Frontend Technologies",
    skills: [
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 92 },
      { name: "JavaScript", proficiency: 88 },
      { name: "React", proficiency: 85 }
    ]
  },
  {
    category: "Backend Technologies",
    skills: [
      { name: "Python (Flask)", proficiency: 80 },
      { name: "Java (Spring Boot)", proficiency: 78 },
      { name: "Node.js", proficiency: 82 }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", proficiency: 90 },
      { name: "PostgreSQL", proficiency: 85 },
      { name: "MongoDB", proficiency: 80 }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", proficiency: 88 },
      { name: "Docker", proficiency: 70 },
      { name: "VS Code", proficiency: 95 },
      { name: "PyCharm", proficiency: 90 },
      { name: "GitHub", proficiency: 92 }
    ]
  },
  {
    category: "Relevant Coursework",
    skills: [
      { name: "Data Structures & Algorithms", proficiency: 85 },
      { name: "Database Management System", proficiency: 80 },
      { name: "Machine Learning", proficiency: 78 }
    ]
  }
];

const SkillBar = ({ skill, index }) => {
  const { name, proficiency } = skill;

  return (
    <div className="mb-4" key={index}>
      <div className="flex justify-between mb-1">
        <span className="text-dark-700 font-medium">{name}</span>
        <span className="text-dark-500 text-sm">{proficiency}%</span>
      </div>
      <div className="w-full bg-dark-200 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ category, skills, index }) => {
  return (
    <AnimatedSection
      className="bg-white rounded-lg shadow-md p-6 h-full"
      delay={0.2 + index * 0.1}
    >
      <h3 className="text-xl font-bold text-dark-900 mb-4 border-b border-dark-200 pb-2">
        {category}
      </h3>

      <div className="mt-4">
        {skills.map((skill, i) => (
          <SkillBar key={i} skill={skill} index={i} />
        ))}
      </div>
    </AnimatedSection>
  );
};

const Skills = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skillCategory, index) => (
          <SkillCategory 
            key={index} 
            category={skillCategory.category} 
            skills={skillCategory.skills} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
