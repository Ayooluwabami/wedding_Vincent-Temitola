
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const bridalParty = [
  {
    name: "Olowookere Temitade",
    role: "Chief Bridesmaid",
    image: "/lovable-uploads/7954875f-8f90-4c81-8c09-5bc15f30222f.png",
    description: "Best friend since childhood and always there through thick and thin."
  },
  {
    name: "Oluyemi Ikeoluwa",
    role: "Little Bride",
    image: "/lovable-uploads/0227836e-a82b-4368-8771-49c062f132ea.png",
    description: "Our adorable little bride who will lead with grace and charm."
  }
];

const groomsmen = [
  {
    name: "Akinnifesi Emmanuel",
    role: "Best Man",
    image: "/lovable-uploads/4bc1cbf0-5b3f-4be0-8df5-515133a688e1.png",
    description: "Childhood friend who's always been like a brother to me."
  }
];

const WeddingParty = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Custom title with styled ampersand
  const CustomTitle = () => (
    <div className="flex items-center justify-center">
      <span className="font-playfair">Wedding</span>
      <span className="text-[#d0879e] mx-2 font-playfair italic">Party</span>
    </div>
  );

  return (
    <>
      <Hero
        title={<CustomTitle />}
        subtitle="Meet our wonderful support team"
        image="/lovable-uploads/ac09c5c0-cc9e-4cdb-8a3a-d085a7a5ce08.png"
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="Bridal Party"
        subtitle="Temitola's amazing support team"
        className="bg-wedding-cream/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bridalParty.map((person, index) => (
            <PersonCard 
              key={index}
              name={person.name}
              role={person.role}
              image={person.image}
              description={person.description}
              index={index}
            />
          ))}
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={scrollToTop}
            className="bg-wedding-gold/80 hover:bg-wedding-gold text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      </Section>
      
      <Section
        title="Groomsmen"
        subtitle="Vincent's incredible support team"
      >
        <div className="grid grid-cols-1 max-w-md mx-auto">
          {groomsmen.map((person, index) => (
            <PersonCard 
              key={index}
              name={person.name}
              role={person.role}
              image={person.image}
              description={person.description}
              index={index}
            />
          ))}
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={scrollToTop}
            className="bg-wedding-gold/80 hover:bg-wedding-gold text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      </Section>
      
      <Section
        className="bg-wedding-beige/10"
        fullWidth
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              className="section-title mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Special Thanks
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              To those who have supported us throughout our journey
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto glass-card p-8 text-center"
          >
            <p className="text-lg text-wedding-charcoal/80 mb-4">
              We would like to express our heartfelt gratitude to our parents, families, and friends 
              who have supported us throughout our relationship. Your love, guidance, and encouragement 
              have been invaluable to us, and we are blessed to have you all in our lives.
            </p>
            <p className="font-cormorant italic text-xl text-wedding-gold">
              With love, Vincent <span className="text-[#d0879e]">&</span> Temitola
            </p>
          </motion.div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={scrollToTop}
            className="bg-wedding-gold/80 hover:bg-wedding-gold text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      </Section>
    </>
  );
};

interface PersonCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
  index: number;
}

const PersonCard = ({ name, role, image, description, index }: PersonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden group hover:shadow-lg transition-all duration-300"
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5 bg-gradient-to-br from-white to-wedding-cream/30">
        <h3 className="font-playfair text-lg font-semibold text-wedding-charcoal">{name}</h3>
        <p className="text-wedding-gold font-cormorant italic mb-2">{role}</p>
        <p className="text-wedding-charcoal/80 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default WeddingParty;
