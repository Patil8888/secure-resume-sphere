
import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-black py-12 border-t border-cyber-gray/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-cyber-green mr-2" />
            <span className="font-mono font-bold text-xl text-cyber-green">Akash.Security</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-cyber-light/70 hover:text-cyber-green transition-colors">Home</a>
            <a href="#about" className="text-cyber-light/70 hover:text-cyber-green transition-colors">About</a>
            <a href="#experience" className="text-cyber-light/70 hover:text-cyber-green transition-colors">Experience</a>
            <a href="#projects" className="text-cyber-light/70 hover:text-cyber-green transition-colors">Projects</a>
            <a href="#certifications" className="text-cyber-light/70 hover:text-cyber-green transition-colors">Certifications</a>
            <a href="#skills" className="text-cyber-light/70 hover:text-cyber-green transition-colors">Skills</a>
            <a href="#contact" className="text-cyber-light/70 hover:text-cyber-green transition-colors">Contact</a>
          </div>
          
          <div className="text-center">
            <p className="text-cyber-light/50 mb-1">
              &copy; {currentYear} Akash Patil Lande. All rights reserved.
            </p>
            <p className="text-cyber-light/30 text-sm">
              Cybersecurity Professional & Network Specialist
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
