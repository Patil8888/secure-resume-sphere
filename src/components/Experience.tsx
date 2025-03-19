
import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
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
    <section id="experience" className="section-padding bg-cyber-gray/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-cyber-gray/10 z-[-1]"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center mb-16">
            Professional Experience
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-green to-cyber-blue transform md:translate-x-[-50%] z-0"></div>
            
            {/* Experience Item 1 */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row mb-16 relative"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <div className="cyber-card md:ml-auto md:mr-0 max-w-lg">
                  <h3 className="text-xl font-bold mb-2 text-cyber-green">Internship – BISAG-N</h3>
                  <p className="text-sm text-cyber-light/60 mb-2 font-mono">Dec 2024 - April 2025</p>
                  <p className="text-sm text-cyber-light/60 mb-4 italic">Bhaskaracharya National Institute for Space Applications and Geo-informatics</p>
                  <p className="text-cyber-light/80">
                    Under MeitY (Ministry of Electronics and Information Technology), Govt. of India
                  </p>
                </div>
              </div>
              
              <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-green z-10"></div>
              
              <div className="md:w-1/2 md:pl-12">
                <div className="cyber-card max-w-lg">
                  <ul className="space-y-3 text-cyber-light/80">
                    <li className="flex items-start">
                      <span className="text-cyber-green mr-2">→</span>
                      Conducted dynamic analysis & fuzzing on 50+ executables, identifying 10+ vulnerabilities.
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-green mr-2">→</span>
                      Developed a sandbox-based monitoring tool for system calls, network traffic, and exploit detection.
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyber-green mr-2">→</span>
                      Improved exploit detection accuracy by 30% using behavior-based anomaly detection.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Experience Item 2 - Academic Project */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row mb-16 relative"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 order-1 md:order-2">
                <div className="cyber-card md:ml-auto md:mr-0 max-w-lg">
                  <ul className="space-y-3 text-cyber-light/80">
                    <li className="flex items-start md:justify-end">
                      <span className="text-cyber-blue mr-2 md:order-2 md:ml-2 md:mr-0">→</span>
                      <span className="md:text-right">Configured Routing Information Protocol (RIP) to optimize data packet routing, increasing efficiency by 30% through reduced manual configurations.</span>
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-cyber-blue mr-2 md:order-2 md:ml-2 md:mr-0">→</span>
                      <span className="md:text-right">Configured Dynamic Host Configuration Protocol (DHCP) to automate IP assignment, cutting setup time by 50% across multiple devices.</span>
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-cyber-blue mr-2 md:order-2 md:ml-2 md:mr-0">→</span>
                      <span className="md:text-right">Set up three servers for load balancing, achieving a 40% boost in network reliability and performance under dynamic loads.</span>
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="text-cyber-blue mr-2 md:order-2 md:ml-2 md:mr-0">→</span>
                      <span className="md:text-right">Integrated an IPv4 firewall, reducing unauthorized access attempts by 35%, ensuring a secure and stable network environment.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="hidden md:block absolute left-1/2 top-4 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-blue z-10"></div>
              
              <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                <div className="cyber-card max-w-lg">
                  <h3 className="text-xl font-bold mb-2 text-cyber-blue">ICMP Firewall Project</h3>
                  <p className="text-sm text-cyber-light/60 mb-2 font-mono">October 2024 - November 2024</p>
                  <p className="text-sm text-cyber-light/60 mb-4 italic">Academic Project</p>
                  <p className="text-cyber-light/80">
                    Designed and implemented a comprehensive network security solution with routing optimization, 
                    IP management, load balancing, and firewall protection.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
