
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import EventCard from '@/components/EventCard';
import AnimatedImage from '@/components/AnimatedImage';
import { ChevronUp } from 'lucide-react';
import { format, addHours } from 'date-fns';

// Helper function to create proper date objects for each event
const createEventDate = (dateString: string, timeString: string): Date => {
  const [day, month, year] = dateString.split('/').map(Number);
  const [hours, minutes] = timeString.split(':').map(Number);
  return new Date(year, month - 1, day, hours, minutes);
};

// Create calendar event data
const createCalendarEvent = (title: string, date: Date, duration: number = 2, location: string = '') => {
  const eventDate = format(date, 'yyyy-MM-dd');
  const startTime = format(date, 'HH:mm');
  const endDate = format(addHours(date, duration), 'yyyy-MM-dd');
  const endTime = format(addHours(date, duration), 'HH:mm');
  
  return {
    name: title,
    description: `Join us for ${title}`,
    startDate: eventDate,
    endDate: endDate,
    startTime: startTime,
    endTime: endTime,
    location: location
  };
};

const Schedule = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Traditional Wedding Events (Day 1)
  const traditionalDate = createEventDate('25/04/2025', '12:00');
  const traditionalEvents = [
    {
      time: '12:00',
      title: 'Traditional Wedding Ceremony',
      description: 'Join us for a beautiful Yoruba traditional wedding ceremony.',
      location: 'Dejavu hall, Elshadii road, Alagbaka, Akure',
      date: format(traditionalDate, 'MMMM d, yyyy'),
      calendarEvent: createCalendarEvent(
        'Vincent & Temitola Traditional Wedding', 
        traditionalDate, 
        5, 
        'Dejavu hall, Elshadii road, Alagbaka, Akure'
      )
    }
  ];

  // White Wedding Events (Day 2)
  const churchDate = createEventDate('26/04/2025', '10:00');
  const receptionDate = createEventDate('26/04/2025', '13:00');
  
  const whiteWeddingEvents = [
    {
      time: '10:00',
      title: 'Renewal of Vows',
      description: 'Witness our vows to each other in this beautiful ceremony.',
      location: 'Redeemed Christian Church of God, Akure',
      date: format(churchDate, 'MMMM d, yyyy'),
      calendarEvent: createCalendarEvent(
        'Vincent & Temitola Wedding Ceremony', 
        churchDate, 
        2, 
        'Redeemed Christian Church of God, Akure'
      )
    },
    {
      time: '13:00',
      title: 'Wedding Reception',
      description: 'Join us for dinner, toasts, and dancing immediately after the ceremony.',
      location: 'Poju Hotel Event Center, Oda Road, Akure, Ondo state',
      date: format(receptionDate, 'MMMM d, yyyy'),
      calendarEvent: createCalendarEvent(
        'Vincent & Temitola Wedding Reception', 
        receptionDate, 
        5, 
        'Poju Hotel Event Center, Oda Road, Akure, Ondo state'
      )
    }
  ];

  // Custom title component
  const CustomTitle = () => (
    <div className="flex items-center justify-center">
      <span className="font-playfair">Wedding</span>
      <span className="text-[#d0879e] mx-2 font-playfair italic">Schedule</span>
    </div>
  );

  return (
    <>
      <Section
        title={<CustomTitle />}
        subtitle="Our wedding weekend timeline"
        className="bg-wedding-cream/20 pt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="font-playfair text-2xl text-wedding-charcoal mb-4"
              >
                Friday, April 25, 2025
              </motion.h3>
              {traditionalEvents.map((event, index) => (
                <EventCard
                  key={index}
                  time={event.time}
                  title={event.title}
                  description={event.description}
                  location={event.location}
                  date={event.date}
                  calendarEvent={event.calendarEvent}
                />
              ))}
            </div>
          </div>
          
          <div>
            <AnimatedImage
              src="/lovable-uploads/d230ca28-3fe8-4689-89cc-7dabc275e6f0.png"
              alt="Traditional wedding attire"
              className="rounded-lg shadow-lg h-80 decorative-border p-3"
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
        title="White Wedding"
        subtitle="Saturday, April 26, 2025"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <AnimatedImage
              src="/lovable-uploads/cc361c12-3011-49ba-8d4b-cab42ee07b3e.png"
              alt="White wedding"
              className="rounded-lg shadow-lg h-80 decorative-border p-3"
            />
          </div>
          
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="space-y-4">
              {whiteWeddingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  time={event.time}
                  title={event.title}
                  description={event.description}
                  location={event.location}
                  date={event.date}
                  calendarEvent={event.calendarEvent}
                />
              ))}
            </div>
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
        className="bg-wedding-beige/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            What to Expect
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card p-8 text-center"
          >
            <p className="text-lg mb-4 text-wedding-charcoal/80">
              Our wedding weekend will be filled with joy, celebration, and love. 
              We've planned everything to ensure that you have a wonderful experience.
            </p>
            
            <p className="text-lg mb-4 text-wedding-charcoal/80">
              The traditional ceremony will showcase beautiful Yoruba customs, while 
              the white wedding will blend contemporary elements with traditional values. 
              Both days will feature delicious food, music, and plenty of dancing!
            </p>
            
            <p className="font-cormorant italic text-xl text-wedding-gold mt-6">
              We can't wait to celebrate with you!
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

export default Schedule;
