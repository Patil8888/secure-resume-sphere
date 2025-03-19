
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Wifi, Shield, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Internet Control Message Protocol (ICMP) Firewall',
      description: 'Designed and implemented a comprehensive firewall solution with routing optimization, IP management, and load balancing capabilities.',
      achievements: [
        'Increased routing efficiency by 30% through RIP configuration',
        'Reduced IP assignment setup time by 50% with DHCP',
        'Achieved 40% boost in network reliability with load balancing',
      ],
      icon: <Shield className="w-10 h-10 text-cyber-green" />,
      gradient: 'from-cyber-green/20 to-cyber-blue/10',
    },
    {
      title: 'Vulnerability Analysis System',
      description: 'Created a dynamic analysis tool that performs fuzzing on executables to identify potential security vulnerabilities.',
      achievements: [
        'Identified 10+ vulnerabilities in system executables',
        'Implemented behavior-based anomaly detection',
        'Improved detection accuracy by 30%',
      ],
      icon: <Terminal className="w-10 h-10 text-cyber-blue" />,
      gradient: 'from-cyber-blue/20 to-cyber-purple/10',
    },
    {
      title: 'Sandbox-Based Monitoring Tool',
      description: 'Developed a secure environment for monitoring suspicious system activity, network traffic, and potential exploits.',
      achievements: [
        'Real-time system call monitoring and analysis',
        'Network traffic inspection and filtering',
        'Exploit behavior pattern recognition',
      ],
      icon: <Code className="w-10 h-10 text-cyber-purple" />,
      gradient: 'from-cyber-purple/20 to-cyber-green/10',
    },
    {
      title: 'Network Security Enhancement Framework',
      description: 'Created a comprehensive solution for network infrastructure security with multiple components working together.',
      achievements: [
        'Integrated IPv4 firewall reducing unauthorized access by 35%',
        'Optimized network traffic routing and management',
        'Implemented server load balancing for performance',
      ],
      icon: <Wifi className="w-10 h-10 text-cyber-green" />,
      gradient: 'from-cyber-green/20 to-cyber-purple/10',
    },
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
    <section id="projects" className="section-padding bg-cyber-black relative">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center mb-16">
            Notable Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`cyber-card bg-gradient-to-br ${project.gradient} hover:border-cyber-green/40`}
              >
                <div className="flex items-start">
                  <div className="mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-cyber-light">{project.title}</h3>
                    <p className="text-cyber-light/70 mb-4">{project.description}</p>
                    
                    <h4 className="text-sm font-mono text-cyber-green mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-cyber-light/80">
                          <span className="text-cyber-blue mr-2">→</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
