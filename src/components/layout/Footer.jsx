import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kesana Naga Tejaswi</h3>
            <p className="text-dark-300 mb-4">Full-stack developer specializing in web development and machine learning applications.</p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href="mailto:tejaswiksana19@gmail.com" 
                className="text-dark-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <MailIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-dark-300 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-dark-300 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="/projects" className="text-dark-300 hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="/internships" className="text-dark-300 hover:text-primary-400 transition-colors">Internships</a></li>
              <li><a href="/contact" className="text-dark-300 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <p className="flex items-center text-dark-300">
                <PhoneIcon size={18} className="mr-2 text-primary-400" />
                +91 09591602224
              </p>
              <p className="flex items-center text-dark-300">
                <MailIcon size={18} className="mr-2 text-primary-400" />
                tejaswiksana19@gmail.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-800 mt-8 pt-8 text-center text-dark-400">
          <p>&copy; {currentYear} Kesana Naga Tejaswi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;