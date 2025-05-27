import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/internships', label: 'Internships & Achievements' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navbarClasses = `fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
    scrolled
      ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
      : 'bg-transparent py-5'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="bg-primary-500 text-white p-2 rounded-lg"
            >
              <Code size={24} />
            </motion.div>
            <span className="text-xl font-bold text-dark-900">
              <span className="text-primary-600">K</span>
              <span className="text-dark-800">esana</span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 transition-colors duration-300 ${
                    isActive ? 'text-primary-600' : 'text-dark-600 hover:text-primary-500'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-800 hover:text-primary-500 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `py-2 px-4 rounded-md transition-colors duration-300 ${
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-dark-600 hover:bg-dark-50 hover:text-primary-500'
                }`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;