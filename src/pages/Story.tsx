import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';
import { ChevronUp } from 'lucide-react';

const weddingDate = new Date('2025-04-25T11:00:00');

const Story = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const CustomTitle = () => (
    <div className="flex items-center justify-center">
      <span className="font-playfair">Our</span>
      <span className="text-[#d0879e] mx-2 font-playfair italic">Love</span>
      <span className="font-playfair">Story</span>
    </div>
  );

  return (
    <>
      <Hero
        title={<CustomTitle />}
        subtitle="How our paths crossed"
        image="/lovable-uploads/2b1e28be-3440-4996-a112-ec40e565f577.png"
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="How We Met"
        subtitle="The beginning of our journey"
        className="bg-wedding-cream/20"
      >
        <div className="decorative-border p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-white to-wedding-beige/20 p-6 rounded-lg shadow-md elegant-shadow">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-wedding-charcoal">First Encounter</h3>
                <p className="text-wedding-charcoal/80 mb-4">
                  Our story began in 2020 at a mutual friend's birthday celebration. Vincent noticed Temitola 
                  from across the room, captivated by her radiant smile and graceful presence. After gathering 
                  the courage to introduce himself, they spent the entire evening in conversation, discovering 
                  shared interests and values.
                </p>
                <p className="text-wedding-charcoal/80">
                  What started as casual conversation blossomed into regular meetups, phone calls that lasted 
                  for hours, and a beautiful friendship that would soon evolve into something deeper and more 
                  meaningful.
                </p>
              </div>
            </motion.div>
            
            <AnimatedImage
              src="/lovable-uploads/cc361c12-3011-49ba-8d4b-cab42ee07b3e.png"
              alt="How we met"
              className="rounded-lg overflow-hidden shadow-lg h-72 md:h-96"
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
        title="Our Journey"
        subtitle="The path to forever"
      >
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-date">November 2020</div>
            <div className="glass-card p-5 mb-8">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-wedding-charcoal">First Date</h3>
              <p className="text-wedding-charcoal/80">
                Vincent took Temitola to a quaint restaurant by the beach, where they talked until the sun set,
                sharing dreams and aspirations, laying the foundation for what would become a beautiful relationship.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">February 2021</div>
            <div className="glass-card p-5 mb-8">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-wedding-charcoal">Official Relationship</h3>
              <p className="text-wedding-charcoal/80">
                After months of getting to know each other, Vincent officially asked Temitola to be his girlfriend. 
                With hearts full of hope and excitement, they embarked on their journey together.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">December 2023</div>
            <div className="glass-card p-5">
              <h3 className="font-playfair text-xl font-semibold mb-2 text-wedding-charcoal">The Proposal</h3>
              <p className="text-wedding-charcoal/80">
                During a weekend getaway to a scenic mountain retreat, Vincent surprised Temitola with a heartfelt 
                proposal at sunset. With tears of joy, she said yes, beginning the next chapter of their journey.
              </p>
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
        <h2 className="section-title mb-4">Tidbits</h2>
        <p className="section-subtitle mb-8">Little things that make us who we are</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg elegant-shadow">
            <h3 className="font-playfair text-xl font-semibold mb-4 text-wedding-charcoal">About Vincent</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1 text-wedding-gold">Favorite Food</h4>
                <p>Jollof Rice with Plantain</p>
              </div>
              <div>
                <h4 className="font-medium mb-1 text-wedding-gold">Dream Vacation</h4>
                <p>Safari in Kenya</p>
              </div>
              <div>
                <h4 className="font-medium mb-1 text-wedding-gold">Loves</h4>
                <p>Soccer, Reading, and Family Gatherings</p>
              </div>
              <div>
                <h4 className="font-medium mb-1 text-wedding-gold">What He Loves About Temitola</h4>
                <p>"Her compassionate heart and infectious laughter that brightens my darkest days."</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg elegant-shadow">
            <h3 className="font-playfair text-xl font-semibold mb-4 text-wedding-charcoal">About Temitola</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1 text-wedding-gold">Favorite Food</h4>
                <p>Efo Riro with Pounded Yam</p>
              </div>
              <div>
                <h4 className="font-medium mb-1 text-wedding-gold">Dream Vacation</h4>
                <p>Island hopping in the Maldives</p>
              </div>
              <div>
                <h4 className="font-medium mb-1 text-wedding-gold">Loves</h4>
                <p>Dancing, Cooking, and Sunset Walks</p>
              </div>
              <div>
                <h4 className="font-medium mb-1 text-wedding-gold">What She Loves About Vincent</h4>
                <p>"His unwavering support and ability to make me laugh even in the most stressful situations."</p>
              </div>
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
        title="Photo Gallery"
        subtitle="Memories we've captured"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedImage
            src="/lovable-uploads/cc361c12-3011-49ba-8d4b-cab42ee07b3e.png"
            alt="Gallery image 1"
            className="h-80 rounded-lg shadow-lg decorative-border p-2"
            downloadable
          />
          <AnimatedImage
            src="/lovable-uploads/571a7bbb-d095-4ec6-9e72-7fa4c716aa96.png"
            alt="Gallery image 2"
            className="h-80 rounded-lg shadow-lg decorative-border p-2"
            downloadable
          />
          <AnimatedImage
            src="/lovable-uploads/87e2b97f-0644-4a12-9739-298c718bc2a9.png"
            alt="Gallery image 3"
            className="h-80 rounded-lg shadow-lg decorative-border p-2"
            downloadable
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
    </>
  );
};

export default Story;
