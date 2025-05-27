import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FileText } from "lucide-react"; // Optional icon
import { motion } from "framer-motion";

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/layout/Loader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Internships from './pages/Internships';
import Contact from './pages/Contact';



function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading for smoother transitions
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  // Reset scroll position when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-dark-50 text-dark-900 flex flex-col">
      <Navbar />


      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <motion.a
          href="/main (2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-1/2 left-2 transform -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-xl shadow-lg flex items-center space-x-2 text-sm"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FileText className="w-4 h-4" />
          <span className="hidden md:inline">Resume</span>
        </motion.a>

      </main>

      <Footer />
    </div>
  );
}

export default App;
