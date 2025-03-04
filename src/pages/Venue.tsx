
import Section from '@/components/Section';
import { motion } from 'framer-motion';

const Venue = () => {
  // Custom title with styled ampersand
  const CustomTitle = () => (
    <div className="flex items-center justify-center">
      <span className="font-playfair">Our</span>
      <span className="text-wedding-gold mx-2 font-playfair italic">Venue</span>
    </div>
  );

  return (
    <>
      <Section
        title={<CustomTitle />}
        subtitle="Where we'll celebrate our special day"
        className="bg-wedding-cream/20 pt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-wedding-gold"
          >
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">Traditional Wedding</h3>

            <div className="mb-6 overflow-hidden rounded-lg">
              <div className="bg-wedding-cream/20 p-4 rounded-lg text-center">
                <p className="text-wedding-charcoal/80 mb-2">Dejavu hall, Elshadii road, Alagbaka, Akure</p>
                <a
                  href="https://maps.google.com/?q=Dejavu+hall+Alagbaka+Akure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wedding-gold hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-wedding-charcoal flex items-center">
                <span className="text-wedding-gold mr-2">⟡</span>
                Friday, April 25, 2025
              </p>
              <p className="text-wedding-charcoal/80 pl-6">12:00 PM</p>
              <p className="text-wedding-charcoal/80 pl-6 italic">Dejavu hall, Elshadii road, Alagbaka, Akure</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-wedding-gold"
          >
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">Wedding Reception</h3>

            <div className="mb-6 overflow-hidden rounded-lg">
              <div className="bg-wedding-cream/20 p-4 rounded-lg text-center">
                <p className="text-wedding-charcoal/80 mb-2">Poju Hotel Event Center, Oda Road, Akure, Ondo state</p>
                <a
                  href="https://maps.google.com/?q=Poju+Hotel+Event+Center+Oda+Road+Akure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wedding-gold hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-wedding-charcoal flex items-center">
                <span className="text-wedding-gold mr-2">⟡</span>
                Saturday, April 26, 2025
              </p>
              <p className="text-wedding-charcoal/80 pl-6">10:00 AM: Renewal of vows at Redeemed Christian Church of God, Akure</p>
              <p className="text-wedding-charcoal/80 pl-6">1:00 PM: Reception at Poju Hotel Event Center</p>
              <p className="text-wedding-charcoal/80 pl-6 italic">Poju Hotel Event Center, Oda Road, Akure, Ondo state</p>
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
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-white to-wedding-cream/30 p-6 rounded-lg shadow-md border border-wedding-gold/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="font-playfair text-xl font-semibold mb-3 text-wedding-charcoal">Poju Hotel</h3>
              <p className="text-wedding-charcoal/80 mb-4">
                Comfortable accommodations conveniently located at the reception venue.
              </p>
              <p className="italic text-wedding-silver">Oda Road, Akure, Ondo State</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gradient-to-br from-white to-wedding-cream/30 p-6 rounded-lg shadow-md border border-wedding-gold/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="font-playfair text-xl font-semibold mb-3 text-wedding-charcoal">Olympus Hotel</h3>
              <p className="text-wedding-charcoal/80 mb-4">
                Elegant hotel with excellent amenities for your stay in Akure.
              </p>
              <p className="italic text-wedding-silver">Alagbaka, Akure, Ondo State</p>
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
