
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';
import { ChevronUp, Gift, Home, Plane } from 'lucide-react';

const weddingDate = new Date('2025-04-25T11:00:00');

const Gifts = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const CustomTitle = () => (
    <div className="flex items-center justify-center">
      <span className="font-playfair">Gift</span>
      <span className="text-[#d0879e] mx-2 font-playfair italic">Registry</span>
    </div>
  );

  return (
    <>
      <Hero
        title={<CustomTitle />}
        subtitle="Celebrating your generosity"
        image="/lovable-uploads/efb8700e-f1b0-460f-857d-a4e5425c8fc1.png"
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="Your Presence Is Our Present"
        subtitle="A note on gifts"
        className="bg-wedding-cream/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="decorative-border p-6"
            >
              <p className="text-lg mb-6 text-wedding-charcoal/80">
                Your presence at our wedding is the greatest gift of all. We are blessed to have 
                friends and family who will travel from near and far to celebrate with us, and we 
                understand the commitment that entails.
              </p>
              
              <p className="text-lg mb-6 text-wedding-charcoal/80">
                However, for those who have expressed an interest in giving a gift, we have created
                a registry and also welcome traditional cash gifts (known as "Owo Ori" in Yoruba culture)
                to help us begin our new life together.
              </p>
              
              <p className="text-lg font-cormorant italic text-wedding-gold">
                With love and gratitude,<br />
                Vincent & Temitola
              </p>
            </motion.div>
          </div>
          
          <AnimatedImage
            src="/lovable-uploads/a1304f55-2b0b-4fe7-bda1-94862464d88b.png"
            alt="Gift Registry"
            className="h-80 rounded-lg shadow-lg decorative-border p-3"
          />
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
        title="Gift Options"
        subtitle="Ways to celebrate our new beginning"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <GiftCard
            icon={<Gift size={32} className="text-wedding-gold" />}
            title="Gift Registry"
            description="We have registered at several stores to help you find something we'll love."
            link="https://www.example.com/registry"
            buttonText="View Registry"
          />
          
          <GiftCard
            icon={<Plane size={32} className="text-wedding-gold" />}
            title="Honeymoon Fund"
            description="Contribute to our dream honeymoon in the Maldives."
            link="https://www.example.com/honeymoon"
            buttonText="Contribute"
          />
          
          <GiftCard
            icon={<Home size={32} className="text-wedding-gold" />}
            title="Cash Gifts"
            description="Traditional cash gifts (Owo Ori) to help us start our new life together."
            link="https://www.example.com/cash"
            buttonText="Send Gift"
          />
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
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="mb-4">
              <img
                src="/lovable-uploads/87e2b97f-0644-4a12-9739-298c718bc2a9.png" 
                alt="Thank You" 
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md"
              />
            </div>
            
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">Thank You</h3>
            
            <p className="text-wedding-charcoal/80 mb-4">
              We are overwhelmed with gratitude for your love, support, and generosity. 
              Your presence and gifts mean the world to us as we begin this new chapter together.
            </p>
            
            <p className="font-cormorant italic text-xl text-wedding-gold">
              With heartfelt thanks,<br />
              Vincent & Temitola
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

interface GiftCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

const GiftCard = ({ icon, title, description, link, buttonText }: GiftCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 text-center flex flex-col h-full"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="font-playfair text-xl font-semibold mb-3 text-wedding-charcoal">{title}</h3>
      <p className="text-wedding-charcoal/80 mb-6 flex-grow">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="button-outline w-full"
      >
        {buttonText}
      </a>
    </motion.div>
  );
};

export default Gifts;
