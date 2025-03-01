
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import EventCard from '@/components/EventCard';
import { ChevronUp } from 'lucide-react';
import AnimatedImage from '@/components/AnimatedImage';

const weddingDate = new Date('2025-04-25T11:00:00');

const Schedule = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const CustomTitle = () => (
    <div className="flex items-center justify-center">
      <span className="font-playfair">Wedding</span>
      <span className="text-[#d0879e] mx-2 font-playfair italic">Schedule</span>
    </div>
  );

  return (
    <>
      <Hero
        title={<CustomTitle />}
        subtitle="Join us for our celebration"
        image="/lovable-uploads/87e2b97f-0644-4a12-9739-298c718bc2a9.png"
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="Traditional Wedding"
        subtitle="April 25, 2025"
        className="bg-wedding-cream/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <EventCard
              time="10:00 AM - 11:00 AM"
              title="Arrival & Seating"
              description="Guests arrive and are seated at the venue."
              location="Elegant Events Center, Akure"
            />
            
            <EventCard
              time="11:00 AM - 1:00 PM"
              title="Traditional Ceremony"
              description="Traditional wedding rites according to Yoruba custom."
              location="Elegant Events Center, Akure"
            />
            
            <EventCard
              time="1:00 PM - 3:00 PM"
              title="Lunch & Celebration"
              description="Join us for a delicious lunch and celebration with music and dancing."
              location="Elegant Events Center, Akure"
            />
          </div>
          
          <AnimatedImage
            src="/lovable-uploads/a1304f55-2b0b-4fe7-bda1-94862464d88b.png"
            alt="Traditional Wedding"
            className="h-full max-h-96 rounded-lg shadow-lg object-cover decorative-border p-3"
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
        title="Wedding Day"
        subtitle="April 26, 2025"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedImage
            src="/lovable-uploads/f7e9c3db-a15f-45fd-abe8-c24b74d628d2.png"
            alt="Wedding Day"
            className="h-full max-h-96 rounded-lg shadow-lg object-cover decorative-border p-3 md:order-2"
          />
          
          <div className="space-y-6 md:order-1">
            <EventCard
              time="10:00 AM - 11:00 AM"
              title="Guest Arrival"
              description="Guests arrive and are seated at the church."
              location="St. James Cathedral, Akure"
            />
            
            <EventCard
              time="11:00 AM - 12:30 PM"
              title="Wedding Ceremony"
              description="Exchange of vows and rings at the church ceremony."
              location="St. James Cathedral, Akure"
            />
            
            <EventCard
              time="1:00 PM - 2:00 PM"
              title="Photo Session"
              description="Newlyweds' photo session with family and friends."
              location="Garden Venue, Akure"
            />
            
            <EventCard
              time="3:00 PM - 8:00 PM"
              title="Reception"
              description="Dinner, toasts, cake cutting, and dancing to celebrate the newlyweds."
              location="Royal Events Center, Akure"
            />
          </div>
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
        title="Dress Code"
        subtitle="What to wear to our celebration"
        className="bg-wedding-beige/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 h-full flex flex-col"
          >
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">Traditional Wedding</h3>
            <div className="flex-1">
              <p className="text-wedding-charcoal/80 mb-4">
                For our traditional ceremony, we kindly request:
              </p>
              <ul className="list-disc list-inside space-y-2 text-wedding-charcoal/80 mb-4">
                <li>Aso-Ebi (Family Cloth): Details will be shared closer to the date</li>
                <li>Traditional attire reflecting Nigerian culture</li>
                <li>Men: Agbada, Dashiki, or similar traditional outfits</li>
                <li>Women: Iro and Buba, Gele (Head wrap), or similar traditional outfits</li>
              </ul>
              <p className="text-wedding-charcoal/80 italic">
                Our colors for the traditional ceremony are gold and burgundy.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 h-full flex flex-col"
          >
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">Wedding Reception</h3>
            <div className="flex-1">
              <p className="text-wedding-charcoal/80 mb-4">
                For our wedding reception, we kindly request:
              </p>
              <ul className="list-disc list-inside space-y-2 text-wedding-charcoal/80 mb-4">
                <li>Formal attire</li>
                <li>Men: Suits or formal traditional outfits</li>
                <li>Women: Evening gowns or elegant traditional attire</li>
                <li>Children: Formal or smart casual attire</li>
              </ul>
              <p className="text-wedding-charcoal/80 italic">
                Our colors for the wedding reception are cream and gold.
              </p>
            </div>
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

export default Schedule;
