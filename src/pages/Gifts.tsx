
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';
import { ChevronUp } from 'lucide-react';

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
      <Section
        title={<CustomTitle />}
        subtitle="Celebrating your generosity"
        className="bg-wedding-cream/20 pt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="font-playfair text-xl font-semibold mb-4 text-wedding-charcoal">UK Bank Account</h3>
            <ul className="space-y-2 text-wedding-charcoal/80">
              <li><span className="font-medium">Account Holder:</span> VINCENT FASEYOSAN</li>
              <li><span className="font-medium">Sort Code:</span> 04-00-03</li>
              <li><span className="font-medium">Account Number:</span> 40036703</li>
              <li><span className="font-medium">Bank:</span> Monzo</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card p-6"
          >
            <h3 className="font-playfair text-xl font-semibold mb-4 text-wedding-charcoal">Nigeria Bank Account</h3>
            <ul className="space-y-2 text-wedding-charcoal/80">
              <li><span className="font-medium">Account Number:</span> 0074312042</li>
              <li><span className="font-medium">Bank:</span> Sterling bank (NGN)</li>
              <li><span className="font-medium">Account Holder:</span> Olowookere Temitola</li>
            </ul>
          </motion.div>
        </div>

        <AnimatedImage
          src="/lovable-uploads/a1304f55-2b0b-4fe7-bda1-94862464d88b.png"
          alt="Gift Registry"
          className="h-80 rounded-lg shadow-lg decorative-border p-3 mx-auto mt-8 max-w-md"
        />

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
      
      {/* Fixed button to scroll to top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-wedding-gold/80 hover:bg-wedding-gold text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default Gifts;
