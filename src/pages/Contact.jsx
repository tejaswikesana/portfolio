import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import AnimatedSection from '../components/layout/AnimatedSection';

const ContactInfo = ({ icon: Icon, title, value, link = false }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="bg-primary-500 text-white rounded-full p-3 mr-4">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-dark-500 font-medium mb-1">{title}</h3>
        {link ? (
          <a 
            href={link} 
            className="text-dark-900 font-semibold hover:text-primary-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-dark-900 font-semibold">{value}</p>
        )}
      </div>
    </div>
  );
};

const SocialLink = ({ icon: Icon, href, label }) => {
  return (
    <a 
      href={href}
      aria-label={label}
      className="w-12 h-12 bg-dark-100 hover:bg-primary-500 text-dark-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={20} />
    </a>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    emailjs.send(
      'service_zar1vys',
      'template_cvppons',
      formData,
      'D-TI9BrILX_Fye9Vr'
    )
    .then(() => {
      setFormStatus({ submitting: false, success: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus({ submitting: false, success: false, error: false }), 5000);
    })
    .catch(() => {
      setFormStatus({ submitting: false, success: false, error: true });
    });
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Get In Touch</h1>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto text-dark-200">
              Have a question or want to work together? Feel free to contact me!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <AnimatedSection animation="fade-right">
                <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                  <h2 className="text-2xl font-bold text-dark-900 mb-6 relative inline-block">
                    Contact Information
                    <span className="absolute -bottom-2 left-0 h-1 w-full bg-primary-500"></span>
                  </h2>

                  <p className="text-dark-600 mb-8">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                  </p>

                  <div className="mt-8">
                    <ContactInfo icon={Phone} title="Phone" value="+91 9959160224" link="tel:+919959160224" />
                    <ContactInfo icon={Mail} title="Email" value="tejaswikesana19@gmail.com" link="mailto:tejaswikesana19@gmail.com" />
                    <ContactInfo icon={MapPin} title="Location" value="Vijayawada, Andhra Pradesh, India" />
                  </div>

                  <div className="mt-12">
                    <h3 className="text-dark-900 font-semibold mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                      <SocialLink icon={Github} href="https://github.com/tejaswikesana" label="GitHub" />
                      <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/tejaswi-kesana" label="LinkedIn" />
                      <SocialLink icon={Mail} href="mailto:tejaswikesana19@gmail.com" label="Email" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection animation="fade-left" delay={0.2}>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-dark-900 mb-6 relative inline-block">
                    Send Me a Message
                    <span className="absolute -bottom-2 left-0 h-1 w-full bg-primary-500"></span>
                  </h2>

                  {/* Form here - already added above */}
                  <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 transition"
          disabled={formStatus.submitting}
        >
          {formStatus.submitting ? 'Sending...' : 'Send'}
        </button>

        {formStatus.success && (
          <p className="text-green-600">Message sent successfully!</p>
        )}
        {formStatus.error && (
          <p className="text-red-600">Failed to send message. Try again.</p>
        )}
      </form>

                        {/* ... */}
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </section>

      {/* Google Map */}
      <section className="py-12 bg-dark-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.80393938894!2d80.56471755805556!3d16.50944641800489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1683823580672!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vijayawada, Andhra Pradesh, India"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
