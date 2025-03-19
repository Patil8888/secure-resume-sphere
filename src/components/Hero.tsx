
import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import NetworkAnimation from './NetworkAnimation';
import { Shield, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const typingTexts = [
    "Cyber Security Expert",
    "Network Security Specialist",
    "Penetration Tester",
    "ICMP Firewall Developer",
    "System Vulnerability Analyst"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      <NetworkAnimation />
      
      <div className="absolute inset-0 bg-dots z-[-5]"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyber-gray/30 backdrop-blur-sm border border-cyber-blue/20">
              <p className="text-sm font-mono text-cyber-green flex items-center">
                <Shield size={14} className="mr-2" />
                Securing the digital frontier
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block mb-2 text-cyber-light">Akash Patil Lande</span>
              <TypewriterText 
                text={typingTexts} 
                className="text-gradient"
              />
            </h1>
            
            <p className="text-lg text-cyber-light/80 mb-8 max-w-xl">
              Specialized in network security, vulnerability analysis, and system hardening. 
              Building robust security solutions to protect critical infrastructure.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyber-green to-cyber-blue font-medium text-cyber-black transition-transform hover:scale-105 active:scale-95"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-cyber-gray/40 backdrop-blur-sm border border-cyber-green/20 font-medium text-cyber-light transition-all hover:border-cyber-green/60"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center mt-10 space-x-6">
              <a 
                href="https://github.com/Patil8888" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyber-light/70 hover:text-cyber-green transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/akash-patil-301722243" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyber-light/70 hover:text-cyber-green transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:patilakash494@gmail.com" 
                className="text-cyber-light/70 hover:text-cyber-green transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919403763735" 
                className="text-cyber-light/70 hover:text-cyber-green transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full md:w-1/3 h-80 md:h-96"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-cyber-blue/5 backdrop-blur-sm border border-cyber-blue/10 cyber-glow flex items-center justify-center">
                <Shield size={80} className="text-cyber-green opacity-70" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-cyber-light/70 hover:text-cyber-green transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
