
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';
import CountdownTimer from './CountdownTimer';
import { ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeroProps {
  title: ReactNode;
  subtitle: string;
  image: string;
  additionalImages?: string[];
  date: Date;
  showCountdown?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  image, 
  additionalImages = [], 
  date, 
  showCountdown = true 
}: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [image, ...(additionalImages || [])];
  const location = useLocation();
  
  // Only show the Hero on the homepage
  if (location.pathname !== '/' && location.pathname !== '/index') {
    return null;
  }

  useEffect(() => {
    // Change image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Ensure hero content is properly constrained
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src={allImages[currentImageIndex]} 
              alt="Hero background" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4 container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h3 
            className="font-cormorant italic text-lg sm:text-xl md:text-2xl mb-2 font-bold"
            variants={itemVariants}
          >
            <span className="font-bold">{subtitle}</span>
          </motion.h3>
          
          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.div>

          <motion.p
            className="font-cormorant italic text-lg sm:text-xl md:text-2xl mt-2 mb-6"
            variants={itemVariants}
          >
            April 26, 2025 • Akure, Nigeria
          </motion.p>
          
          {showCountdown && (
            <motion.div 
              variants={itemVariants}
              className="mt-16"
            >
              <CountdownTimer targetDate={date} className="mt-10" />
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Navigation dots for the image carousel */}
      {allImages.length > 1 && (
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
          {allImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 z-30 bg-wedding-gold/80 hover:bg-wedding-gold text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </section>
  );
};

export default Hero;
