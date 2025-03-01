
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';
import CountdownTimer from '@/components/CountdownTimer';
import { ChevronUp } from 'lucide-react';

const weddingDate = new Date('2025-04-25T11:00:00');

// Collection of hero images for the carousel
const heroImages = [
  "/lovable-uploads/2b1e28be-3440-4996-a112-ec40e565f577.png",
  "/lovable-uploads/cc361c12-3011-49ba-8d4b-cab42ee07b3e.png",
  "/lovable-uploads/571a7bbb-d095-4ec6-9e72-7fa4c716aa96.png",
  "/lovable-uploads/87e2b97f-0644-4a12-9739-298c718bc2a9.png",
  "/lovable-uploads/efb8700e-f1b0-460f-857d-a4e5425c8fc1.png",
  "/lovable-uploads/8880cfd1-7f37-4098-b5e4-3128239803bb.png",
  "/lovable-uploads/a1304f55-2b0b-4fe7-bda1-94862464d88b.png",
  "/lovable-uploads/f7e9c3db-a15f-45fd-abe8-c24b74d628d2.png"
];

const Home = () => {
  // Custom title with styled ampersand
  const CustomTitle = () => (
    <div className="flex items-center justify-center">
      <span className="font-playfair font-bold">Vincent</span>
      <span className="text-[#d0879e] mx-2 font-playfair italic font-bold">&</span>
      <span className="font-playfair font-bold">Temitola</span>
    </div>
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <Hero
        title={<CustomTitle />}
        subtitle="We're getting married!"
        image={heroImages[0]}
        additionalImages={heroImages.slice(1)}
        date={weddingDate}
      />
      
      <Section 
        title="Welcome to Our Journey"
        subtitle="Join us as we celebrate our love"
        className="bg-wedding-cream/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.p 
              className="text-lg mb-6 text-wedding-charcoal/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We are thrilled to invite you to our wedding celebration in Akure, Ondo State, Nigeria. 
              Our journey together has been nothing short of a blessing, and we can't wait to begin this 
              new chapter with our loved ones by our side.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/story" className="button-primary">Our Story</Link>
              <Link to="/schedule" className="button-outline">View Schedule</Link>
            </div>
          </div>
          
          <AnimatedImage
            src="/lovable-uploads/cc361c12-3011-49ba-8d4b-cab42ee07b3e.png"
            alt="Vincent and Temitola"
            className="rounded-lg overflow-hidden h-80 md:h-96 decorative-border p-4"
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
        title="Save the Date"
        subtitle="April 25-26, 2025 • Akure, Ondo State, Nigeria"
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-cormorant text-2xl font-semibold mb-3 text-wedding-charcoal">Traditional Wedding</h3>
              <p className="text-wedding-charcoal/80 mb-4">Join us for our Traditional Wedding ceremony as we honor our cultural heritage.</p>
              <p className="font-medium">April 25, 2025</p>
              <p className="italic text-wedding-silver">Akure, Ondo State, Nigeria</p>
            </div>
            
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-cormorant text-2xl font-semibold mb-3 text-wedding-charcoal">Wedding Reception</h3>
              <p className="text-wedding-charcoal/80 mb-4">Celebrate with us during our Wedding Reception as we begin our journey together.</p>
              <p className="font-medium">April 26, 2025</p>
              <p className="italic text-wedding-silver">Akure, Ondo State, Nigeria</p>
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
        fullWidth
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <AnimatedImage
            src="/lovable-uploads/571a7bbb-d095-4ec6-9e72-7fa4c716aa96.png"
            alt="Gallery image 1"
            className="h-80 md:h-full"
            downloadable
          />
          <AnimatedImage
            src="/lovable-uploads/87e2b97f-0644-4a12-9739-298c718bc2a9.png"
            alt="Gallery image 2" 
            className="h-80 md:h-full"
            downloadable
          />
          <AnimatedImage
            src="/lovable-uploads/efb8700e-f1b0-460f-857d-a4e5425c8fc1.png"
            alt="Gallery image 3"
            className="h-80 md:h-full"
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
      
      <Section
        title="Join Our Celebration"
        subtitle="We look forward to celebrating with you"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-gradient-to-br from-wedding-cream to-wedding-beige w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <span className="text-wedding-gold text-2xl">📅</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2">Schedule</h3>
            <p className="text-wedding-charcoal/80">Explore our wedding timeline and don't miss any moment.</p>
            <Link to="/schedule" className="nav-link mt-4 inline-block">
              View Schedule
            </Link>
          </motion.div>
          
          <motion.div
            className="text-center"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-gradient-to-br from-wedding-cream to-wedding-beige w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <span className="text-wedding-gold text-2xl">🏨</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2">Venue</h3>
            <p className="text-wedding-charcoal/80">Find directions and accommodation options for our venue.</p>
            <Link to="/venue" className="nav-link mt-4 inline-block">
              Find Location
            </Link>
          </motion.div>
          
          <motion.div
            className="text-center"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-gradient-to-br from-wedding-cream to-wedding-beige w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <span className="text-wedding-gold text-2xl">🎁</span>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2">Gifts</h3>
            <p className="text-wedding-charcoal/80">Support our new journey together with your generous gifts.</p>
            <Link to="/gifts" className="nav-link mt-4 inline-block">
              Gift Registry
            </Link>
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

export default Home;
