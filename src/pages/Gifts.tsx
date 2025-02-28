
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

const Gifts = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <>
      <Hero
        title="Gifts"
        subtitle="Your presence is our present"
        image="/placeholder.svg" // Replace with actual image
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="Gift Registry"
        subtitle="Your support means the world to us"
        className="bg-wedding-cream/20"
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-wedding-charcoal/80"
          >
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
            we've provided some options below. We are grateful for your generosity and support as we begin this new chapter together.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-wedding-charcoal">UK Bank Account</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-wedding-silver mb-1">Account Name</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-wedding-charcoal">VINCENT FASEYOSAN</p>
                  <button 
                    onClick={() => handleCopy("VINCENT FASEYOSAN", "Account name")}
                    className="text-wedding-gold hover:text-wedding-charcoal transition-colors"
                    aria-label="Copy account name"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-wedding-silver mb-1">Sort Code</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-wedding-charcoal">04-00-03</p>
                  <button 
                    onClick={() => handleCopy("04-00-03", "Sort code")}
                    className="text-wedding-gold hover:text-wedding-charcoal transition-colors"
                    aria-label="Copy sort code"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-wedding-silver mb-1">Account Number</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-wedding-charcoal">40036703</p>
                  <button 
                    onClick={() => handleCopy("40036703", "Account number")}
                    className="text-wedding-gold hover:text-wedding-charcoal transition-colors"
                    aria-label="Copy account number"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-wedding-silver mb-1">Bank</p>
                <p className="font-medium text-wedding-charcoal">Monzo</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-wedding-charcoal">Nigeria Bank Account</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-wedding-silver mb-1">Account Number</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-wedding-charcoal">3155792466</p>
                  <button 
                    onClick={() => handleCopy("3155792466", "Account number")}
                    className="text-wedding-gold hover:text-wedding-charcoal transition-colors"
                    aria-label="Copy account number"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-wedding-silver mb-1">Bank</p>
                <p className="font-medium text-wedding-charcoal">First Bank</p>
              </div>
              
              <div>
                <p className="text-sm text-wedding-silver mb-1">Account Name</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-wedding-charcoal">Faseyosan Vincent</p>
                  <button 
                    onClick={() => handleCopy("Faseyosan Vincent", "Account name")}
                    className="text-wedding-gold hover:text-wedding-charcoal transition-colors"
                    aria-label="Copy account name"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Gifts;
