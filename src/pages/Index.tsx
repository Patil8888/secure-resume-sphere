
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

// Upload the resume image from the user
const resumeImage = "/lovable-uploads/c842d5c7-6be8-49a7-9486-a480b174723c.png";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Set meta information for the page
    document.title = "Akash Patil Lande | Cybersecurity Specialist";
  }, []);

  return (
    <div className="bg-cyber-black text-cyber-light min-h-screen">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue z-50" 
        style={{ scaleX, transformOrigin: "0%" }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
