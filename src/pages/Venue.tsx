
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Map from '@/components/Map';
import { motion } from 'framer-motion';

const Venue = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');
  
  // Custom title with styled ampersand
  const CustomTitle = () => (
    <div className="flex items-center justify-center">
      <span className="font-playfair">Our</span>
      <span className="text-wedding-gold mx-2 font-playfair italic">Venue</span>
    </div>
  );

  return (
    <>
      <Hero
        title={<CustomTitle />}
        subtitle="Where we'll celebrate our special day"
        image="/lovable-uploads/571a7bbb-d095-4ec6-9e72-7fa4c716aa96.png" 
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="Wedding Venues"
        subtitle="Join us at these beautiful locations"
        className="bg-wedding-cream/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-wedding-gold"
          >
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">Traditional Wedding</h3>
            
            <div className="mb-6 overflow-hidden rounded-lg">
              <Map 
                latitude={7.2571} 
                longitude={5.2058} 
                name="Traditional Wedding Venue" 
                address="Akure, Ondo State, Nigeria" 
              />
            </div>
            
            <div className="space-y-2">
              <p className="font-medium text-wedding-charcoal flex items-center">
                <span className="text-wedding-gold mr-2">⟡</span>
                Friday, April 25, 2025
              </p>
              <p className="text-wedding-charcoal/80 pl-6">11:00 AM to 3:00 PM</p>
              <p className="text-wedding-charcoal/80 pl-6 italic">Akure, Ondo State, Nigeria</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-wedding-gold"
          >
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">Wedding Reception & After-party</h3>
            
            <div className="mb-6 overflow-hidden rounded-lg">
              <Map 
                latitude={7.2571} 
                longitude={5.2058} 
                name="Reception Venue" 
                address="Akure, Ondo State, Nigeria" 
              />
            </div>
            
            <div className="space-y-2">
              <p className="font-medium text-wedding-charcoal flex items-center">
                <span className="text-wedding-gold mr-2">⟡</span>
                Saturday, April 26, 2025
              </p>
              <p className="text-wedding-charcoal/80 pl-6">Reception: 11:00 AM to 3:00 PM</p>
              <p className="text-wedding-charcoal/80 pl-6">After-party: 4:00 PM to 8:00 PM</p>
              <p className="text-wedding-charcoal/80 pl-6 italic">Akure, Ondo State, Nigeria</p>
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section
        title="Accommodation"
        subtitle="Recommended hotels and lodging options"
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white to-wedding-cream/30 p-6 rounded-lg shadow-md border border-wedding-gold/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="font-playfair text-xl font-semibold mb-3 text-wedding-charcoal">Hotel Option 1</h3>
              <p className="text-wedding-charcoal/80 mb-4">
                Luxury hotel with comfortable accommodations, located 5 minutes from the venue.
              </p>
              <p className="italic text-wedding-silver">Akure, Ondo State, Nigeria</p>
              <a href="#" className="text-wedding-gold hover:text-wedding-charcoal mt-2 inline-block transition-colors">
                View Details
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-white to-wedding-cream/30 p-6 rounded-lg shadow-md border border-wedding-gold/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="font-playfair text-xl font-semibold mb-3 text-wedding-charcoal">Hotel Option 2</h3>
              <p className="text-wedding-charcoal/80 mb-4">
                Cozy boutique hotel with excellent amenities, 10 minutes from the venue.
              </p>
              <p className="italic text-wedding-silver">Akure, Ondo State, Nigeria</p>
              <a href="#" className="text-wedding-gold hover:text-wedding-charcoal mt-2 inline-block transition-colors">
                View Details
              </a>
            </motion.div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-wedding-charcoal/80 mb-4">
              For assistance with accommodation arrangements, please don't hesitate to contact us.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Venue;
