
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import EventCard from '@/components/EventCard';

const Schedule = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');
  
  const events = [
    {
      title: "Traditional Wedding",
      date: "Friday, April 25, 2025",
      time: "11:00 AM to 3:00 PM",
      location: "Akure, Ondo State, Nigeria",
      description: "Join us for our Traditional Wedding ceremony as we honor our cultural heritage and traditions.",
      calendarEvent: {
        name: "Vincent & Temitola - Traditional Wedding",
        description: "Join us for our Traditional Wedding ceremony as we honor our cultural heritage and traditions.",
        startDate: "2025-04-25",
        endDate: "2025-04-25",
        startTime: "11:00",
        endTime: "15:00",
        location: "Akure, Ondo State, Nigeria",
      }
    },
    {
      title: "Wedding Reception",
      date: "Saturday, April 26, 2025",
      time: "11:00 AM to 3:00 PM",
      location: "Akure, Ondo State, Nigeria",
      description: "Celebrate with us during our Wedding Reception as we begin our journey together as husband and wife.",
      calendarEvent: {
        name: "Vincent & Temitola - Wedding Reception",
        description: "Celebrate with us during our Wedding Reception as we begin our journey together as husband and wife.",
        startDate: "2025-04-26",
        endDate: "2025-04-26",
        startTime: "11:00",
        endTime: "15:00",
        location: "Akure, Ondo State, Nigeria",
      }
    },
    {
      title: "After-party",
      date: "Saturday, April 26, 2025",
      time: "4:00 PM to 8:00 PM",
      location: "Akure, Ondo State, Nigeria",
      description: "Continue the celebration with us at our after-party for dancing, food, and more memories.",
      calendarEvent: {
        name: "Vincent & Temitola - After-party",
        description: "Continue the celebration with us at our after-party for dancing, food, and more memories.",
        startDate: "2025-04-26",
        endDate: "2025-04-26",
        startTime: "16:00",
        endTime: "20:00",
        location: "Akure, Ondo State, Nigeria",
      }
    }
  ];

  return (
    <>
      <Hero
        title="Schedule"
        subtitle="Our wedding timeline"
        image="/placeholder.svg" // Replace with actual image
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="Wedding Schedule"
        subtitle="Mark your calendar for our special celebration"
        className="bg-wedding-cream/20"
      >
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                calendarEvent={event.calendarEvent}
              />
            ))}
          </div>
          
          <div className="mt-12 glass-card p-6">
            <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">RSVP Contacts</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium text-wedding-charcoal">Temitade Olowookere</p>
                <p className="text-wedding-silver">+2349037312540</p>
              </div>
              
              <div>
                <p className="font-medium text-wedding-charcoal">Precious Faseyosan</p>
                <p className="text-wedding-silver">+2347034952994</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Schedule;
