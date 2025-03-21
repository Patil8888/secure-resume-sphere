
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Database, Wifi, Server } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '6 Months+' },
    { label: 'Vulnerabilities Found', value: '10+' },
    { label: 'CGPA', value: '7.81' },
    { label: 'Certifications', value: '5+' },
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
    <section id="about" className="section-padding bg-cyber-black relative">
      <div className="absolute inset-0 bg-dots opacity-20 z-[-1]"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-cyber-light/80 mb-6">
              I am a Computer Science and Engineering graduate specialized in Cybersecurity and Network Security. With a strong foundation in both offensive and defensive security practices, I focus on identifying vulnerabilities, implementing robust security protocols, and ensuring system integrity.
            </p>
            <p className="text-lg text-cyber-light/80">
              Currently pursuing my Bachelor's degree at Parul Institute of Technology with a 7.81 CGPA, I am passionate about exploring cutting-edge security solutions and staying ahead of emerging threats in the digital landscape.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="cyber-card text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-4xl font-bold text-cyber-green mb-2">{stat.value}</h3>
              <p className="text-sm text-cyber-light/70 font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={itemVariants}
            className="cyber-card flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Terminal size={40} className="text-cyber-blue mb-4" />
            <h3 className="text-xl font-bold mb-3">Security Analysis</h3>
            <p className="text-cyber-light/70">Specialized in identifying system vulnerabilities and implementing effective security measures to protect critical infrastructure.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="cyber-card flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Wifi size={40} className="text-cyber-green mb-4" />
            <h3 className="text-xl font-bold mb-3">Network Security</h3>
            <p className="text-cyber-light/70">Expert in designing and deploying secure network architectures with optimized routing protocols and traffic management.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="cyber-card flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Shield size={40} className="text-cyber-purple mb-4" />
            <h3 className="text-xl font-bold mb-3">Penetration Testing</h3>
            <p className="text-cyber-light/70">Skilled in conducting comprehensive penetration tests to identify security gaps before they can be exploited.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="cyber-card flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Database size={40} className="text-cyber-blue mb-4" />
            <h3 className="text-xl font-bold mb-3">Data Protection</h3>
            <p className="text-cyber-light/70">Implementing robust data security practices to safeguard sensitive information from unauthorized access and breaches.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="cyber-card flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Server size={40} className="text-cyber-green mb-4" />
            <h3 className="text-xl font-bold mb-3">Server Optimization</h3>
            <p className="text-cyber-light/70">Experienced in configuring and managing secure server environments with load balancing for optimal performance.</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="cyber-card flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Shield size={40} className="text-cyber-purple mb-4" />
            <h3 className="text-xl font-bold mb-3">Firewall Configuration</h3>
            <p className="text-cyber-light/70">Skilled in designing and implementing advanced firewall solutions to protect networks from unauthorized access.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
