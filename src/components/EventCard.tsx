import { Calendar, Clock, MapPin } from 'lucide-react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  calendarEvent: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    location: string;
  };
  googleMapsLink?: string; // Added new optional prop
}

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  calendarEvent,
  googleMapsLink // Added to destructuring
}: EventCardProps) => {
  return (
    <div className="event-card">
      <h3 className="font-playfair text-2xl font-semibold text-wedding-charcoal mb-3">
        {title}
      </h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-center">
          <Calendar size={18} className="text-wedding-gold mr-2" />
          <span className="text-wedding-charcoal">{date}</span>
        </div>

        <div className="flex items-center">
          <Clock size={18} className="text-wedding-gold mr-2" />
          <span className="text-wedding-charcoal">{time}</span>
        </div>

        <div className="flex items-center">
          <MapPin size={18} className="text-wedding-gold mr-2" />
          <span className="text-wedding-charcoal">{location}</span>
        </div>

        {/* Add Google Maps link if provided */}
        {googleMapsLink && (
          <div className="mt-2">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wedding-gold hover:underline"
            >
              View on Google Maps
            </a>
          </div>
        )}
      </div>

      {description && (
        <p className="text-wedding-charcoal/80 mb-4">
          {description}
        </p>
      )}

      <div className="flex justify-end">
        <AddToCalendarButton
          name={calendarEvent.name}
          description={calendarEvent.description}
          startDate={calendarEvent.startDate}
          endDate={calendarEvent.endDate}
          startTime={calendarEvent.startTime}
          endTime={calendarEvent.endTime}
          location={calendarEvent.location}
          options={['Apple', 'Google', 'Outlook.com']}
          trigger="click"
          buttonStyle="date"
          size="3"
          lightMode="light"
          hideBackground
          hideCheckmark
        />
      </div>
    </div>
  );
};

export default EventCard;