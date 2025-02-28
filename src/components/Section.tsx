
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  fullWidth = false 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${className}`}
      ref={ref}
    >
      <motion.div 
        className={fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-6'}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <motion.h2 
                className="section-title mb-4"
                variants={titleVariants}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="section-subtitle"
                variants={titleVariants}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
