
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Map from '@/components/Map';
import { motion } from 'framer-motion';

const Venue = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');

  return (
    <>
      <Hero
        title="Venue"
        subtitle="Where we'll celebrate our special day"
        image="/placeholder.svg" // Replace with actual image
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
          >
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">Traditional Wedding</h3>
            
            <div className="mb-6">
              <Map 
                latitude={7.2571} 
                longitude={5.2058} 
                name="Traditional Wedding Venue" 
                address="Akure, Ondo State, Nigeria" 
              />
            </div>
            
            <div className="space-y-2">
              <p className="font-medium text-wedding-charcoal">Friday, April 25, 2025</p>
              <p className="text-wedding-charcoal/80">11:00 AM to 3:00 PM</p>
              <p className="text-wedding-charcoal/80">Akure, Ondo State, Nigeria</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">Wedding Reception & After-party</h3>
            
            <div className="mb-6">
              <Map 
                latitude={7.2571} 
                longitude={5.2058} 
                name="Reception Venue" 
                address="Akure, Ondo State, Nigeria" 
              />
            </div>
            
            <div className="space-y-2">
              <p className="font-medium text-wedding-charcoal">Saturday, April 26, 2025</p>
              <p className="text-wedding-charcoal/80">Reception: 11:00 AM to 3:00 PM</p>
              <p className="text-wedding-charcoal/80">After-party: 4:00 PM to 8:00 PM</p>
              <p className="text-wedding-charcoal/80">Akure, Ondo State, Nigeria</p>
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
              className="glass-card p-6"
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
              className="glass-card p-6"
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
      
      <Section
        title="Transportation"
        subtitle="Getting around in Akure"
        className="bg-wedding-beige/10"
      >
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-playfair text-xl font-semibold mb-3 text-wedding-charcoal">From the Airport</h3>
              <p className="text-wedding-charcoal/80">
                The closest airport is Akure Airport. Taxis and ride-sharing services are available at the airport.
                The journey to the venue takes approximately 20 minutes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-playfair text-xl font-semibold mb-3 text-wedding-charcoal">Local Transportation</h3>
              <p className="text-wedding-charcoal/80">
                Taxis and ride-sharing services are readily available throughout Akure. We recommend using these services
                for convenience and reliability.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-playfair text-xl font-semibold mb-3 text-wedding-charcoal">Parking</h3>
              <p className="text-wedding-charcoal/80">
                Complimentary parking is available at both venue locations. Attendants will be present to assist with parking.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Venue;
