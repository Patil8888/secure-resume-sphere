
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Networking Fundamentals & Protocols',
      skills: ['IP Addressing', 'Subnetting', 'VLANs', 'Routing Protocols (RIP, OSPF, EIGRP)', 'NAT', 'DHCP']
    },
    {
      title: 'Network Security & Management',
      skills: ['Access Control Lists (ACLs)', 'Firewalls', 'VPNs', 'Network Monitoring', 'Troubleshooting']
    },
    {
      title: 'Network Tools & Simulation',
      skills: ['Cisco Packet Tracer', 'GNS3', 'Wireshark', 'Network design', 'configuration', 'analysis']
    },
    {
      title: 'Cybersecurity & Ethical Hacking',
      skills: ['Linux & Windows Security', 'Web Security', 'Cryptography', 'Threat Intelligence', 'Network Security', 'Digital Forensics', 'Incident Response']
    },
    {
      title: 'Penetration Testing & Exploitation',
      skills: ['Metasploit Framework', 'Burp Suite', 'Vulnerability Scanning', 'Exploitation Techniques', 'Privilege Escalation', 'SQL Injection', 'Cross-Site Scripting (XSS)', 'Man-in-the-Middle (MITM) Attacks', 'Post-Exploitation Techniques']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
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
    <section id="skills" className="section-padding bg-cyber-black relative">
      <div className="absolute inset-0 bg-dots opacity-20 z-[-1]"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center mb-16">
            Technical Skills
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="cyber-card"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-6 text-gradient">{category.title}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full bg-cyber-gray/40 border border-cyber-blue/20 text-cyber-light/90 text-sm transition-all duration-300 hover:border-cyber-green/50 hover:bg-cyber-gray/60"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 cyber-card"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-gradient">Proficiency Levels</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-2 text-cyber-green">Network Configuration</h4>
                <div className="h-4 bg-cyber-gray/30 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-cyber-green to-cyber-blue"
                  ></motion.div>
                </div>
                <p className="text-right text-sm text-cyber-light/70">85%</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-2 text-cyber-blue">Security Analysis</h4>
                <div className="h-4 bg-cyber-gray/30 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
                  ></motion.div>
                </div>
                <p className="text-right text-sm text-cyber-light/70">80%</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-2 text-cyber-purple">Penetration Testing</h4>
                <div className="h-4 bg-cyber-gray/30 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-gradient-to-r from-cyber-purple to-cyber-green"
                  ></motion.div>
                </div>
                <p className="text-right text-sm text-cyber-light/70">75%</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-2 text-cyber-green">Troubleshooting</h4>
                <div className="h-4 bg-cyber-gray/30 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-cyber-blue to-cyber-green"
                  ></motion.div>
                </div>
                <p className="text-right text-sm text-cyber-light/70">90%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
