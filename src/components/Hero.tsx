
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  date: Date;
  showCountdown?: boolean;
}

const Hero = ({ title, subtitle, image, date, showCountdown = true }: HeroProps) => {
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

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={image} 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
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
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6"
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
    </section>
  );
};

export default Hero;
