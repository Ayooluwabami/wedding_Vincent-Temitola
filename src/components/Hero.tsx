
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';
import CountdownTimer from './CountdownTimer';
import { ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Add types for image customization
type HeroImage = {
  src: string;
  backgroundSize?: string;
  backgroundPosition?: string;
};

interface HeroProps {
  title: ReactNode;
  subtitle: string;
  image: string | HeroImage;
  additionalImages?: (string | HeroImage)[];
  date: Date;
  showCountdown?: boolean;
  // Content positioning options
  contentPositioning?: {
    titleSize?: string;
    subtitleMarginTop?: string;
    subtitleMarginBottom?: string;
    dateMarginTop?: string;
    dateMarginBottom?: string;
    countdownMarginTop?: string;
  };
}

const Hero = ({
  title,
  subtitle,
  image,
  additionalImages = [],
  date,
  showCountdown = true,
  contentPositioning = {}
}: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Process images to ensure they all have the HeroImage format
  const processImages = (imgs: (string | HeroImage)[]) => {
    return imgs.map(img => {
      if (typeof img === 'string') {
        return { src: img };
      }
      return img;
    });
  };

  const mainImage = typeof image === 'string' ? { src: image } : image;
  const processedAdditionalImages = processImages(additionalImages);
  const allImages = [mainImage, ...processedAdditionalImages];

  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Only show the Hero on the homepage
  if (location.pathname !== '/' && location.pathname !== '/index') {
    return null;
  }

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Change image every 5 seconds 
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (interval) clearInterval(interval);
    };
  }, [allImages.length, isMobile]);

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

  // Set default values for content positioning
  const {
    titleSize = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    subtitleMarginTop = "mt-12",
    subtitleMarginBottom = "mb-6",
    dateMarginTop = "mt-8",
    dateMarginBottom = "mb-10",
    countdownMarginTop = "mt-12"
  } = contentPositioning;

  // Make hero taller on all devices
  return (
    <section className={`relative ${isMobile ? 'min-h-[75vh]' : 'min-h-screen'} overflow-hidden`}>
      {/* Background Image with animation - show on home page for all devices */}
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
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${allImages[currentImageIndex].src})`,
                backgroundSize: allImages[currentImageIndex].backgroundSize || 'cover',
                backgroundPosition: allImages[currentImageIndex].backgroundPosition || 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content - Customizable positioning */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4 container mx-auto pt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h3
            className={`font-cormorant italic text-lg sm:text-xl md:text-2xl ${subtitleMarginTop} ${subtitleMarginBottom} font-bold`}
            variants={itemVariants}
          >
            <span className="font-bold">{subtitle}</span>
          </motion.h3>

          <motion.div
            className={`${titleSize} font-semibold mb-8`}
            variants={itemVariants}
          >
            {title}
          </motion.div>

          <motion.p
            className={`font-cormorant italic text-lg sm:text-xl md:text-2xl ${dateMarginTop} ${dateMarginBottom}`}
            variants={itemVariants}
          >
            April 26, 2025 • Akure, Nigeria
          </motion.p>

          {showCountdown && (
            <motion.div
              variants={itemVariants}
              className={countdownMarginTop}
            >
              <CountdownTimer targetDate={date} className="mt-4" />
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
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
