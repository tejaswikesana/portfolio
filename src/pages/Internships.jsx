import { motion } from 'framer-motion';
import { Calendar, Award, Briefcase, Users, School, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/layout/AnimatedSection';

// Internship data 
const internshipsData = [
  {
    title: "Google Android Virtual Internship",
    organization: "AICTE Eduskills",
    description: "Participated in a comprehensive Android development program, gaining hands-on experience with app development using Java and Kotlin.",
    date: "2023",
    icon: <Briefcase size={24} />,
    link: "#"
  },
  {
    title: "Intelligent Virtual Automation Internship",
    organization: "AICTE Eduskills",
    description: "Worked on automation solutions using intelligent virtual technologies to streamline processes and improve efficiency.",
    date: "2023",
    icon: <Briefcase size={24} />,
    link: "#"
  },
  {
    title: "Blue Prism Associate Developer",
    organization: "AICTE Eduskills",
    description: "Developed proficiency in Blue Prism for Robotic Process Automation (RPA), creating automated workflows for business processes.",
    date: "2023",
    icon: <Briefcase size={24} />,
    link: "#"
  }
];

// Achievements data based on resume
const achievementsData = [
  {
    title: "Selected for National Youth Parliament (NYP)",
    organization: "District Level Debate Competition",
    description: "Selected for the National Youth Parliament (NYP) at the District Level Debate Competition. Successfully participated in the National Level Debate Competition, showcasing exceptional public speaking and critical thinking skills.",
    date: "2024",
    icon: <Award size={24} />,
    link: "#"
  },
  {
    title: "Winner of Coding Challenge",
    organization: "College-Level Competition",
    description: "Secured 1st place in the coding challenge conducted in our college among 200+ participants.",
    date: "2024",
    icon: <Award size={24} />,
    link: "#"
  }
];

// Volunteer Positions data based on resume
const volunteerData = [
  {
    title: "Volunteer of AI-Hub",
    organization: "Department of CSE",
    description: "Led an AI Web Design competition for 450+ attendees. Mentored and guided junior team members and teammates to execute a 2-day event.",
    date: "2025",
    icon: <Users size={24} />,
    link: "#"
  },
  {
    title: "Volunteer of National Service Scheme (NSS)",
    organization: "Department of CSE",
    description: "Helped attract close to 400 attendees to various events like Swachh Bharat and self-awareness programs. Throughout my tenure, I successfully participated in more than 10 events.",
    date: "2022-Present",
    icon: <Users size={24} />,
    link: "#"
  },
  {
    title: "Volunteer of Little Hands Organization (LHO)",
    organization: "LHO",
    description: "Working as a volunteer for the Little Hands Organization (LHO) for the past two years, a nonprofit organization aiming to uplift the life of every individual by providing essential services and support.",
    date: "2023-Present",
    icon: <Users size={24} />,
    link: "#"
  }
];

// Certifications data based on resume
const certificationsData = [
  {
    title: "Cyber Security and Privacy",
    organization: "NPTEL",
    date: "2023",
    icon: <School size={24} />,
    link: "#"
  },
  {
    title: "Foundations of R software",
    organization: "NPTEL",
    date: "2023",
    icon: <School size={24} />,
    link: "#"
  },
  {
    title: "Ethical Hacking",
    organization: "NPTEL",
    date: "2023",
    icon: <School size={24} />,
    link: "#"
  },
  {
    title: "Programming Essentials in Python",
    organization: "Cisco",
    date: "2023",
    icon: <School size={24} />,
    link: "#"
  },
  {
    title: "Programming Essentials in C",
    organization: "Cisco",
    date: "2023",
    icon: <School size={24} />,
    link: "#"
  },
  {
    title: "NDG Linux Essentials",
    organization: "Cisco",
    date: "2023",
    icon: <School size={24} />,
    link: "#"
  },
  {
    title: "IoT Fundamentals",
    organization: "Cisco",
    date: "2023",
    icon: <School size={24} />,
    link: "#"
  }
];

const TimelineCard = ({ item, index, isLeft = true }) => {
  return (
    <AnimatedSection
      className="mb-12 last:mb-0"
      delay={0.1 + index * 0.05}
      animation={isLeft ? "fade-right" : "fade-left"}
    >
      <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8'}`}>
          <div className={`${isLeft ? 'ml-auto' : 'mr-auto'} max-w-md`}>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
              {item.date}
            </span>
            <h3 className="text-xl font-bold text-dark-900 mb-2">{item.title}</h3>
            <p className="text-dark-500 mb-3 text-sm">{item.organization}</p>
            <p className="text-dark-600">{item.description}</p>
            
            {item.link && (
              <a
                href={item.link}
                className="inline-flex items-center mt-3 text-primary-600 hover:text-primary-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more <ExternalLink size={16} className="ml-1" />
              </a>
            )}
          </div>
        </div>
        
        <div className="relative w-0">
          <div className="absolute inset-0 h-full w-0.5 bg-primary-200 left-1/2 transform -translate-x-1/2"></div>
          <div className="sticky top-20 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center border-4 border-white shadow-lg transform -translate-x-1/2">
            {item.icon}
          </div>
        </div>
        
        <div className="w-1/2"></div>
      </div>
    </AnimatedSection>
  );
};

const CertificationCard = ({ certification, index }) => {
  return (
    <AnimatedSection
      className="transform transition-all duration-300 hover:-translate-y-2"
      delay={0.1 + index * 0.05}
    >
      <div className="bg-white rounded-lg shadow-md p-6 h-full border border-dark-100 hover:border-primary-300 hover:shadow-lg">
        <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
          {certification.icon}
        </div>
        
        <h3 className="text-lg font-semibold text-dark-900 mb-2">{certification.title}</h3>
        <p className="text-dark-500 text-sm mb-3">{certification.organization}</p>
        
        <div className="flex items-center text-dark-400 text-sm mt-auto">
          <Calendar size={14} className="mr-1" />
          {certification.date}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Internships = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Experience & Achievements</h1>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto text-dark-200">
              A timeline of my professional experience, achievements, and contributions to the community.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Internships Section */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Professional Internships" 
            subtitle="My industry experience and professional development"
          />
          
          <div className="mt-12 relative">
            {internshipsData.map((internship, index) => (
              <TimelineCard 
                key={index} 
                item={internship} 
                index={index} 
                isLeft={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-20 bg-dark-100">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Achievements" 
            subtitle="Recognition and accomplishments throughout my academic journey"
          />
          
          <div className="mt-12 relative">
            {achievementsData.map((achievement, index) => (
              <TimelineCard 
                key={index} 
                item={achievement} 
                index={index} 
                isLeft={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Volunteer Work Section */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Volunteer Experience" 
            subtitle="My contributions to the community and leadership roles"
          />
          
          <div className="mt-12 relative">
            {volunteerData.map((volunteer, index) => (
              <TimelineCard 
                key={index} 
                item={volunteer} 
                index={index} 
                isLeft={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-20 bg-dark-100">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Certifications" 
            subtitle="Professional certifications and courses I've completed"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {certificationsData.map((certification, index) => (
              <CertificationCard 
                key={index} 
                certification={certification} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Internships;