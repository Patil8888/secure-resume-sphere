
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Cisco Certified Network Associate (CCNAv7)',
      date: 'August 2024 - Feb 2025',
      description: 'Comprehensive certification covering networking fundamentals, routing technologies, infrastructure services, and security.',
      skills: ['Network Configuration', 'Routing Protocols', 'Infrastructure Management'],
    },
    {
      title: 'Try Hack Me Pre-Security',
      date: 'Jan 2025 - Feb 2025',
      description: 'Foundational security certification covering network security, web application security, and operating system hardening techniques.',
      skills: ['Security Fundamentals', 'Vulnerability Assessment', 'Security Tools'],
    },
    {
      title: 'Introduction of Cybersecurity',
      date: 'October 2024 - November 2024',
      description: 'Comprehensive introduction to cybersecurity principles, threat landscapes, and fundamental protection mechanisms.',
      skills: ['Threat Intelligence', 'Security Controls', 'Risk Assessment'],
    },
    {
      title: 'Fundamentals of Information Security',
      date: 'April 2023 - May 2024',
      description: 'Core certification covering information security concepts, data protection strategies, and security governance.',
      skills: ['Data Protection', 'Security Governance', 'Compliance'],
    },
  ];

  const professionalCertifications = [
    {
      title: 'Network Technician (Training through CCNALabs)',
      date: 'August 2024 - Feb 2025',
      achievements: [
        { title: 'Configured IP Addresses (30%)', description: 'Optimized network efficiency by approximately 40% through effective IP address configuration and improved routing and addressing.' },
        { title: 'Implemented Routing Protocols (25%)', description: 'Enhanced network performance by configuring and fine-tuning routing protocols, boosting efficiency by 40%.' },
        { title: 'Troubleshot Network Issues (20%)', description: 'Reduced troubleshooting time by 50% through quick identification and resolution of network issues.' },
        { title: 'Simulated Network Environments (15%)', description: 'Utilized networking tools to simulate secure, real-world environments, ensuring robust security protocol implementation.' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="certifications" className="section-padding bg-cyber-gray/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/90 to-cyber-gray/5 z-[-1]"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center mb-16">
            Certifications & Training
          </motion.h2>
          
          <div className="mb-16">
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-bold mb-8 text-cyber-light text-center"
            >
              Technical Certifications
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="cyber-card flex"
                >
                  <div className="mr-4 mt-1">
                    <Shield size={24} className="text-cyber-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-cyber-light">{cert.title}</h4>
                    <p className="text-sm text-cyber-light/60 font-mono mb-3">{cert.date}</p>
                    <p className="text-cyber-light/80 mb-3 text-sm">{cert.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-bold mb-8 text-cyber-light text-center"
            >
              Professional Training
            </motion.h3>
            
            {professionalCertifications.map((cert, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="cyber-card mb-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-cyber-light">{cert.title}</h4>
                  <p className="text-sm text-cyber-light/60 font-mono">{cert.date}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cert.achievements.map((achievement, i) => (
                    <div key={i} className="border border-cyber-blue/10 rounded-lg p-4 bg-cyber-blue/5">
                      <div className="flex items-start">
                        <CheckCircle size={18} className="text-cyber-green mr-2 mt-1 shrink-0" />
                        <div>
                          <h5 className="text-md font-semibold mb-2 text-cyber-light">{achievement.title}</h5>
                          <p className="text-sm text-cyber-light/70">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
