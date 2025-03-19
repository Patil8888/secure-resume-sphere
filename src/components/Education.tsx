
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, School } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'Parul Institute of Technology',
      degree: 'Bachelors in Computer Science and Engineering',
      duration: 'Dec. 2021 - Present',
      grade: '7.81 (CGPA) (Till 7th Semester)',
      icon: <GraduationCap size={28} className="text-cyber-green" />,
    },
    {
      institution: 'Gurukul English School',
      degree: '12th | CBSE | Science(PCM)',
      duration: 'June 2019 - May 2021',
      grade: '76.6%',
      icon: <BookOpen size={28} className="text-cyber-blue" />,
    },
    {
      institution: 'St.Ann\'s School',
      degree: '10th | ICSE',
      duration: 'June 2006 - May 2019',
      grade: '65.6%',
      icon: <School size={28} className="text-cyber-purple" />,
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
    <section id="education" className="section-padding bg-cyber-gray/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/90 to-cyber-gray/5 z-[-1]"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center mb-16">
            Education
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`cyber-card mb-8 flex ${index % 2 === 0 ? 'border-l-4 border-l-cyber-green' : 'border-l-4 border-l-cyber-blue'}`}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="flex-shrink-0 mr-6 mt-1">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cyber-light">{edu.institution}</h3>
                  <p className="text-cyber-light/80 mb-1">{edu.degree}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-3">
                    <span className="text-sm bg-cyber-gray/30 px-3 py-1 rounded-full text-cyber-light/70 inline-flex items-center">
                      <span className="w-2 h-2 bg-cyber-green rounded-full mr-2"></span> 
                      {edu.duration}
                    </span>
                    <span className="text-sm bg-cyber-gray/30 px-3 py-1 rounded-full text-cyber-light/70 inline-flex items-center">
                      <span className="w-2 h-2 bg-cyber-blue rounded-full mr-2"></span> 
                      Grade: {edu.grade}
                    </span>
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

export default Education;
