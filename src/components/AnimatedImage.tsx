
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  downloadable?: boolean;
}

const AnimatedImage = ({ 
  src, 
  alt, 
  className = '', 
  delay = 0,
  downloadable = false
}: AnimatedImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = alt.replace(/\s+/g, '-').toLowerCase() + '.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={imageRef}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: delay, ease: "easeOut" }}
        className="w-full h-full"
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover image-hover-effect"
          loading="lazy"
        />

        {downloadable && (
          <button 
            onClick={handleDownload}
            className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 z-10"
            aria-label="Download image"
          >
            <Download size={18} className="text-wedding-charcoal" />
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
