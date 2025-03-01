
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';

const Story = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');
  
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="How our love story unfolded"
        image="/lovable-uploads/2a4bc038-ca03-4d80-b398-eeb5b61765db.png"
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="How We Met"
        subtitle="A journey of love, friendship, and destiny"
        className="bg-wedding-cream/20"
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
            src="/lovable-uploads/e3a5910d-a91a-4b80-918d-e993e87eed85.png"
            alt="Vincent and Temitola on their first date"
            className="rounded-lg h-80 md:h-96"
          />
          <div className="flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-2xl md:text-3xl text-wedding-charcoal mb-4"
            >
              First Encounter
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-wedding-charcoal/80"
            >
              We first met at a mutual friend's birthday celebration in London. From the moment we started talking, there was an undeniable connection and ease between us. Our conversations flowed naturally, and we quickly discovered how much we had in common.
            </motion.p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              What started as a friendship gradually evolved into something deeper. We supported each other through life's ups and downs, celebrated achievements together, and became each other's safe harbor. Through our journey, we've learned that the strongest relationships are built on a foundation of friendship, respect, and unwavering support.
            </motion.p>
          </div>
          <AnimatedImage
            src="/lovable-uploads/cc361c12-3011-49ba-8d4b-cab42ee07b3e.png"
            alt="Vincent and Temitola laughing together"
            className="rounded-lg h-80 md:h-96 order-1 md:order-2"
          />
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
                We met at a mutual friend's birthday party in London. There was an instant connection, 
                and we spent the evening in deep conversation, discovering shared interests and values.
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
