
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message sent successfully!');
      
      // Reset success state after some time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-cyber-green" />,
      label: 'Email',
      value: 'patilakash494@gmail.com',
      link: 'mailto:patilakash494@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-cyber-blue" />,
      label: 'Phone',
      value: '+91 9403763735',
      link: 'tel:+919403763735'
    },
    {
      icon: <Github className="w-5 h-5 text-cyber-purple" />,
      label: 'GitHub',
      value: 'Patil8888',
      link: 'https://github.com/Patil8888'
    },
    {
      icon: <Linkedin className="w-5 h-5 text-cyber-green" />,
      label: 'LinkedIn',
      value: 'akash-patil-301722243',
      link: 'https://www.linkedin.com/in/akash-patil-301722243'
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
    <section id="contact" className="section-padding bg-cyber-black relative">
      <div className="absolute inset-0 bg-dots opacity-20 z-[-1]"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center mb-16">
            Get In Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="cyber-card">
              <h3 className="text-xl font-bold mb-6 text-cyber-light">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-cyber-gray/20 border border-cyber-blue/10 transition-all duration-300 hover:border-cyber-green/30 hover:translate-x-1"
                  >
                    <div className="mr-4 bg-cyber-gray/30 p-2 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-cyber-light/60 font-mono">{info.label}</p>
                      <p className="text-cyber-light">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-cyber-light">Connect With Me</h3>
                <p className="text-cyber-light/70 mb-6">
                  I'm always open to discussing new projects, security challenges, or opportunities to collaborate.
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Patil8888" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-cyber-gray/30 rounded-full text-cyber-light/70 hover:text-cyber-green transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/akash-patil-30172243" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-cyber-gray/30 rounded-full text-cyber-light/70 hover:text-cyber-green transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:patilakash494@gmail.com" 
                    className="p-3 bg-cyber-gray/30 rounded-full text-cyber-light/70 hover:text-cyber-green transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href="tel:+919403763735" 
                    className="p-3 bg-cyber-gray/30 rounded-full text-cyber-light/70 hover:text-cyber-green transition-colors"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="cyber-card">
              <h3 className="text-xl font-bold mb-6 text-cyber-light">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-mono text-cyber-light/60 mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-gray/20 border border-cyber-blue/20 rounded-lg focus:outline-none focus:border-cyber-green/50 text-cyber-light"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-mono text-cyber-light/60 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-gray/20 border border-cyber-blue/20 rounded-lg focus:outline-none focus:border-cyber-green/50 text-cyber-light"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-mono text-cyber-light/60 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-cyber-gray/20 border border-cyber-blue/20 rounded-lg focus:outline-none focus:border-cyber-green/50 text-cyber-light resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all ${
                    isSubmitted 
                      ? 'bg-cyber-green/20 text-cyber-green border border-cyber-green/50' 
                      : 'bg-gradient-to-r from-cyber-green to-cyber-blue text-cyber-black hover:shadow-lg hover:translate-y-[-2px] active:translate-y-0'
                  }`}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : isSubmitted ? (
                    <CheckCircle className="h-5 w-5 mr-2" />
                  ) : (
                    <Send className="h-5 w-5 mr-2" />
                  )}
                  {isSubmitting 
                    ? 'Sending...' 
                    : isSubmitted 
                    ? 'Message Sent' 
                    : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
