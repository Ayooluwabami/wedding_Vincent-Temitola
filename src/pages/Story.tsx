
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';
import { motion } from 'framer-motion';

const Story = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');

  return (
    <>
      <Hero
        title="Our Story"
        subtitle="How We Met & Fell in Love"
        image="/lovable-uploads/8880cfd1-7f37-4098-b5e4-3128239803bb.png"
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="Divine Encounter with Temitola"
        subtitle="A story of love, connection, and destiny"
        className="bg-wedding-cream/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-wedding-charcoal/90"
            >
              <p>
                Meeting Temitola was nothing short of a divine moment—one of those encounters that feel destined from the very start. 
                It all began on an ordinary Sunday when my close friend, while passing through Akure on his way to Abuja, 
                stopped by to visit. In the midst of our conversations, he casually mentioned someone he thought I should meet. 
                He spoke of Temitola with such enthusiasm, hoping something beautiful might blossom between us.
              </p>
              
              <p>
                Curious—and maybe a little out of obligation to my friend—I decided to call her. That first conversation was magic. 
                There was an instant connection, a warmth in her voice that made me want to keep talking. 
                She was soft-spoken yet full of wisdom, respectful yet lively. It didn't take long before our conversations 
                became the highlight of my days.
              </p>
              
              <p>
                As weeks went by, we grew closer. Then came the day she visited me in Akure. We went out on a date, 
                and sitting across from her, seeing her smile, hearing her laugh—it hit me. This was it. 
                Temitola wasn't just someone I liked; she was the one. She had the grace of a queen and the heart of 
                someone who could build a home with me. That day, I became certain she would be the love of my life 
                and the mother of my unborn children.
              </p>
              
              <p>
                Now, here we are, stronger and more in love than ever. Our journey together has been nothing short of a blessing, 
                and with every step, I thank the stars—and my friend—for leading me to her.
              </p>
              
              <p className="font-cormorant italic text-2xl text-wedding-gold text-right">
                - Vincent
              </p>
            </motion.div>
          </div>
          
          <AnimatedImage
            src="/lovable-uploads/cc361c12-3011-49ba-8d4b-cab42ee07b3e.png"
            alt="Vincent and Temitola"
            className="rounded-lg shadow-lg h-96 lg:h-[500px]"
          />
        </div>
      </Section>
      
      <Section
        className="bg-white"
        fullWidth
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative timeline-container">
            <TimelineItem 
              year="2023" 
              title="The Beginning" 
              description="Our first encounter through a mutual friend's recommendation."
              image="/lovable-uploads/2a4bc038-ca03-4d80-b398-eeb5b61765db.png"
            />
            
            <TimelineItem 
              year="2023" 
              title="First Date" 
              description="Our memorable first date in Akure that solidified our connection."
              image="/lovable-uploads/e3a5910d-a91a-4b80-918d-e993e87eed85.png"
              isRight
            />
            
            <TimelineItem 
              year="2024" 
              title="The Proposal" 
              description="A magical moment when Vincent asked Temitola to spend forever with him."
              image="/lovable-uploads/f7bc1b85-7131-4e3c-8426-05633ca98607.png"
            />
            
            <TimelineItem 
              year="2025" 
              title="Our Wedding" 
              description="The beginning of our forever as we unite in marriage in Akure."
              image="/lovable-uploads/7fb4f864-5536-49ba-9cb9-ccf138736f59.png"
              isRight
            />
          </div>
        </div>
      </Section>
    </>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  isRight?: boolean;
}

const TimelineItem = ({ year, title, description, image, isRight = false }: TimelineItemProps) => {
  return (
    <div className={`timeline-item ${isRight ? 'md:ml-[calc(50%-1rem)] md:pl-16' : 'md:mr-[calc(50%-1rem)] md:ml-0 md:pl-0 md:pr-16'}`}>
      <motion.div
        initial={{ opacity: 0, x: isRight ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="timeline-date"
      >
        {year}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-4 rounded-lg shadow-md border border-wedding-cream/50"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="font-playfair text-xl font-semibold mb-2 text-wedding-charcoal">{title}</h3>
            <p className="text-wedding-charcoal/80">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Story;
