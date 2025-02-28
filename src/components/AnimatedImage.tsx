
import { useRef, useEffect, useState, ImgHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
}

const AnimatedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholderSrc,
  ...props 
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      animate={inView && isLoaded ? "visible" : "hidden"}
      variants={imageVariants}
    >
      {placeholderSrc && !isLoaded && (
        <img
          src={placeholderSrc}
          alt="loading placeholder"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 blur-md"
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </motion.div>
  );
};

export default AnimatedImage;
