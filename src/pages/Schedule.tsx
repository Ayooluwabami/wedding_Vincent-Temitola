
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import EventCard from '@/components/EventCard';
import AnimatedImage from '@/components/AnimatedImage';
import { ChevronUp } from 'lucide-react';
import { format, addHours } from 'date-fns';

const weddingDate = new Date('2025-04-25T11:00:00');

// Helper function to create proper date objects for each event
const createEventDate = (baseDate: Date, timeString: string): Date => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const eventDate = new Date(baseDate);
  eventDate.setHours(hours, minutes);
  return eventDate;
};

// Create calendar event data
const createCalendarEvent = (title: string, date: Date, duration: number = 2, location: string = '') => {
  return {
    name: title,
    startDate: format(date, "yyyy-MM-dd'T'HH:mm:ss"),
    endDate: format(addHours(date, duration), "yyyy-MM-dd'T'HH:mm:ss"),
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
  const traditionalDate = new Date('2025-04-24T10:00:00');
  const traditionalEvents = [
    {
      time: '10:00',
      title: 'Traditional Wedding Ceremony',
      description: 'Join us for a beautiful Yoruba traditional wedding ceremony.',
      location: 'The Dome, Akure',
      date: createEventDate(traditionalDate, '10:00'),
      calendarEvent: createCalendarEvent('Vincent & Temitola Traditional Wedding', createEventDate(traditionalDate, '10:00'), 3, 'The Dome, Akure')
    },
    {
      time: '13:30',
      title: 'Traditional Wedding Reception',
      description: 'Celebrate with us with traditional food, music, and dancing.',
      location: 'The Dome, Akure',
      date: createEventDate(traditionalDate, '13:30'),
      calendarEvent: createCalendarEvent('Vincent & Temitola Traditional Wedding Reception', createEventDate(traditionalDate, '13:30'), 4, 'The Dome, Akure')
    },
    {
      time: '19:00',
      title: 'After Party',
      description: 'Continue the celebration with close friends and family.',
      location: 'Private Venue',
      date: createEventDate(traditionalDate, '19:00'),
      calendarEvent: createCalendarEvent('Vincent & Temitola Wedding After Party', createEventDate(traditionalDate, '19:00'), 4, 'Private Venue')
    },
  ];

  // White Wedding Events (Day 2)
  const whiteWeddingEvents = [
    {
      time: '11:00',
      title: 'Wedding Ceremony',
      description: 'Witness our vows to each other in this beautiful ceremony.',
      location: 'St. Thomas Catholic Church, Akure',
      date: createEventDate(weddingDate, '11:00'),
      calendarEvent: createCalendarEvent('Vincent & Temitola Wedding Ceremony', createEventDate(weddingDate, '11:00'), 2, 'St. Thomas Catholic Church, Akure')
    },
    {
      time: '13:30',
      title: 'Cocktail Hour',
      description: 'Enjoy drinks and hors d\'oeuvres while we take photos.',
      location: 'Grand Pavilion Event Center',
      date: createEventDate(weddingDate, '13:30'),
      calendarEvent: createCalendarEvent('Vincent & Temitola Wedding Cocktail Hour', createEventDate(weddingDate, '13:30'), 1, 'Grand Pavilion Event Center')
    },
    {
      time: '14:30',
      title: 'Wedding Reception',
      description: 'Join us for dinner, toasts, and dancing.',
      location: 'Grand Pavilion Event Center',
      date: createEventDate(weddingDate, '14:30'),
      calendarEvent: createCalendarEvent('Vincent & Temitola Wedding Reception', createEventDate(weddingDate, '14:30'), 5, 'Grand Pavilion Event Center')
    },
    {
      time: '20:00',
      title: 'After Party',
      description: 'Continue the celebration with dancing and music.',
      location: 'Grand Pavilion Event Center',
      date: createEventDate(weddingDate, '20:00'),
      calendarEvent: createCalendarEvent('Vincent & Temitola Wedding After Party', createEventDate(weddingDate, '20:00'), 4, 'Grand Pavilion Event Center')
    },
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
      <Hero
        title={<CustomTitle />}
        subtitle="Our wedding weekend timeline"
        image="/lovable-uploads/2a4bc038-ca03-4d80-b398-eeb5b61765db.png"
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="Traditional Wedding"
        subtitle="Thursday, April 24, 2025"
        className="bg-wedding-cream/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="space-y-4">
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
        subtitle="Friday, April 25, 2025"
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
            transition={{ duration: 0.6 }}
          >
            What to Expect
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
    </>
  );
};

export default Schedule;
