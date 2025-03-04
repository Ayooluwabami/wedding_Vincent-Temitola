
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';

const Story = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');

  return (
    <>
      <Section
        title="Our Story"
        subtitle="How our love story unfolded"
        className="bg-wedding-cream/20 pt-24"
      >
        <div className="max-w-4xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-wedding-charcoal/80 text-lg text-center"
          >
            Our love story is one of patience, friendship, and divine timing. What began as a chance encounter blossomed into a deep connection that has grown stronger with each passing day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatedImage
            src="/lovable-uploads/571a7bbb-d095-4ec6-9e72-7fa4c716aa96.png"
            alt="Vincent and Temitola sharing a moment together"
            className="rounded-lg h-80 md:h-96 object-cover"
          />
          <div className="flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-2xl md:text-3xl text-wedding-charcoal mb-4"
            >
              Divine Encounter with Temitola
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-wedding-charcoal/80"
            >
              Meeting Temitola was nothing short of a divine moment—one of those encounters that feel destined from the very start. It all began on an ordinary Sunday when my close friend, while passing through Akure on his way to Abuja, stopped by to visit. In the midst of our conversations, he casually mentioned someone he thought I should meet. He spoke of Temitola with such enthusiasm, hoping something beautiful might blossom between us.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-2xl md:text-3xl text-wedding-charcoal mb-4"
            >
              From Friends to Forever
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-wedding-charcoal/80"
            >
              Curious—and maybe a little out of obligation to my friend—I decided to call her. That first conversation was magic. There was an instant connection, a warmth in her voice that made me want to keep talking. She was soft-spoken yet full of wisdom, respectful yet lively. It didn’t take long before our conversations became the highlight of my days.
            </motion.p>
          </div>
          <AnimatedImage
            src="/lovable-uploads/c6dec023-94b9-4991-96e5-d6697a4e87e2.png"
            alt="Vincent and Temitola laughing together"
            className="rounded-lg h-80 md:h-96 object-cover order-1 md:order-2"
          />
        </div>

        {/* Added third image and section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatedImage
            src="/lovable-uploads/acd3f946-d6a8-482a-91bb-3fdf4913263c.png"
            alt="Vincent and Temitola in traditional attire"
            className="rounded-lg h-80 md:h-96 object-cover"
          />
          <div className="flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-2xl md:text-3xl text-wedding-charcoal mb-4"
            >
              The Journey
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-wedding-charcoal/80"
            >
              Curious—and maybe a little out of obligation to my friend—I decided to call her. That first conversation was magic. There was an instant connection, a warmth in her voice that made me want to keep talking. She was soft-spoken yet full of wisdom, respectful yet lively. It didn't take long before our conversations became the highlight of my days.
              As weeks went by, we grew closer. Then came the day she visited me in Akure. We went out on a date, and sitting across from her, seeing her smile, hearing her laugh—it hit me. This was it. Temitola wasn't just someone I liked; she was the one. She had the grace of a queen and the heart of someone who could build a home with me. That day, I became certain she would be the love of my life and the mother of my unborn children.
            </motion.p>
          </div>
        </div>

        <div className="mt-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-wedding-charcoal/80 max-w-4xl mx-auto"
          >
            Now, here we are, stronger and more in love than ever. Our journey together has been nothing short of a blessing, and with every step, I thank the stars—and my friend—for leading me to her.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-wedding-charcoal/80 max-w-4xl mx-auto mt-6 text-right italic"
          >
            -Vincent.
          </motion.p>
        </div>
      </Section>

      <Section
        title="Our Timeline"
        subtitle="Key moments in our journey together"
      >
        <div className="timeline relative max-w-4xl mx-auto before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-wedding-gold/30 before:left-1/2 before:-translate-x-1/2">
          <div className="timeline-item">
            <div className="timeline-date">June 2019</div>
            <div className="glass-card p-5 mb-8">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-wedding-charcoal">First Meeting</h3>
              <p className="text-wedding-charcoal/80">
                We met for the first time when she came to visit me in Akure. There was an instant connection,
                and we spent the day in deep conversation, discovering shared interests and values.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">August 2019</div>
            <div className="glass-card p-5 mb-8">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-wedding-charcoal">First Date</h3>
              <p className="text-wedding-charcoal/80">
                After staying in touch for a few weeks, Vincent finally gathered the courage to ask Temitola out.
                They enjoyed a romantic dinner at a cozy restaurant in central London, where they talked until
                closing time.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">November 2019</div>
            <div className="glass-card p-5 mb-8">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-wedding-charcoal">Making It Official</h3>
              <p className="text-wedding-charcoal/80">
                After months of getting to know each other better, they decided to make their relationship
                official. Vincent surprised Temitola with a special evening and asked her to be his girlfriend.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">December 2023</div>
            <div className="glass-card p-5">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-wedding-charcoal">The Proposal</h3>
              <p className="text-wedding-charcoal/80">
                During a romantic getaway to a coastal resort, Vincent proposed at sunset on the beach.
                With the sound of waves as a backdrop and the sky painted in golden hues, Temitola said "Yes!"
                to forever with her best friend.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Story;
