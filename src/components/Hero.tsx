
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  title: string;
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
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
            transition={{ duration: 1.5, ease: "easeOut" }}
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
            className="font-cormorant italic text-lg sm:text-xl md:text-2xl mb-2"
            variants={itemVariants}
          >
            {subtitle}
          </motion.h3>
          
          <motion.h1 
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          
          {showCountdown && (
            <motion.div variants={itemVariants}>
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
    </section>
  );
};

export default Hero;
