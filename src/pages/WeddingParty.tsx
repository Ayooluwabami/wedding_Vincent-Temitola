
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';
import { motion } from 'framer-motion';

const bridalParty = [
  {
    name: "Jane Doe",
    role: "Maid of Honor",
    image: "/lovable-uploads/a5f89a38-4621-4ba9-b4fa-ee13395baeb0.png",
    description: "Best friend since childhood and always there through thick and thin."
  },
  {
    name: "Sarah Smith",
    role: "Bridesmaid",
    image: "/lovable-uploads/bef8aa40-8bfa-439c-9eeb-53349f5da554.png",
    description: "College roommate and dear friend with the best advice."
  },
  {
    name: "Emily Johnson",
    role: "Bridesmaid",
    image: "/lovable-uploads/0af6a945-db0e-45a1-80c9-d36dbe2e8760.png",
    description: "Cousin and partner in all adventures since we were little."
  },
  {
    name: "Olivia Brown",
    role: "Bridesmaid",
    image: "/lovable-uploads/14cfc873-8532-4744-aa06-5a97ab7fd028.png",
    description: "Work colleague turned friend who always makes me laugh."
  }
];

const groomsmen = [
  {
    name: "John Smith",
    role: "Best Man",
    image: "/lovable-uploads/32dd6604-37e8-4bc0-9991-5936833e0d5b.png",
    description: "Childhood friend who's always been like a brother to me."
  },
  {
    name: "Michael Johnson",
    role: "Groomsman",
    image: "/lovable-uploads/8483aa87-840c-447b-bab9-93457f707eff.png",
    description: "College roommate and confidant through all life's challenges."
  },
  {
    name: "David Wilson",
    role: "Groomsman",
    image: "/lovable-uploads/0e4a22be-3fce-4193-b40f-9c3aa9573b5d.png",
    description: "Friend since high school who knows all my embarrassing stories."
  },
  {
    name: "Robert Taylor",
    role: "Groomsman",
    image: "/lovable-uploads/6853d055-df68-4a09-a6e5-9b71c2783165.png",
    description: "Work friend who's always ready for an adventure."
  }
];

const WeddingParty = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');

  return (
    <>
      <Hero
        title="Wedding Party"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </Section>
      
      <Section
        title="Groomsmen"
        subtitle="Vincent's incredible support team"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              With love, Vincent & Temitola
            </p>
          </motion.div>
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
      className="glass-card overflow-hidden group"
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-playfair text-lg font-semibold text-wedding-charcoal">{name}</h3>
        <p className="text-wedding-gold font-cormorant italic mb-2">{role}</p>
        <p className="text-wedding-charcoal/80 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default WeddingParty;
