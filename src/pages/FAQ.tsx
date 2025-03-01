import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="mb-4">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-left font-playfair text-lg text-wedding-charcoal">{question}</h3>
        <span className="ml-2 text-wedding-gold">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-white/80 rounded-b-lg px-4"
      >
        <div className="py-4">
          <p className="text-wedding-charcoal/80">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};

const weddingDate = new Date('2025-04-25T11:00:00');

const FAQ = () => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);
  
  const toggleItem = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "What is the dress code for the wedding?",
      answer: "For the traditional ceremony on April 25th, we encourage traditional Nigerian attire. For the wedding ceremony and reception on April 26th, formal attire is requested. Our colors are cream and gold for the wedding day."
    },
    {
      question: "Are children welcome at the wedding?",
      answer: "Yes, children are welcome at both the traditional ceremony and wedding ceremony. We will have activities to keep them entertained during the reception."
    },
    {
      question: "Will there be transportation between venues?",
      answer: "We will provide shuttle service between the church and reception venue on April 26th. Details will be shared closer to the wedding date."
    },
    {
      question: "Where can guests stay during the wedding weekend?",
      answer: "We have arranged special rates at several hotels in Akure. Please visit our Venue page for accommodation options and booking information."
    },
    {
      question: "What is your gift registry?",
      answer: "We have created a gift registry with options for traditional gifts and monetary contributions towards our honeymoon. Please visit our Gifts page for more information."
    },
    {
      question: "Is there parking available at the venues?",
      answer: "Yes, both venues have ample parking space. There will also be parking attendants to assist guests."
    },
    {
      question: "What time should guests arrive?",
      answer: "We kindly request that guests arrive 30 minutes before the start of each ceremony to allow time for seating."
    },
    {
      question: "Will the ceremony be indoors or outdoors?",
      answer: "The traditional ceremony and reception will be indoors, while the church ceremony will be held inside the cathedral. We've arranged for all venues to be air-conditioned for your comfort."
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const CustomTitle = () => (
    <div className="flex items-center justify-center">
      <span className="font-playfair">Questions</span>
      <span className="text-[#d0879e] mx-2 font-playfair italic">&</span>
      <span className="font-playfair">Answers</span>
    </div>
  );

  return (
    <>
      <Hero
        title={<CustomTitle />}
        subtitle="Everything you need to know"
        image="/lovable-uploads/8880cfd1-7f37-4098-b5e4-3128239803bb.png"
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="Frequently Asked Questions"
        subtitle="Answers to your questions about our special day"
        className="bg-wedding-cream/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {faqItems.slice(0, 4).map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openItemIndex === index}
                toggleOpen={() => toggleItem(index)}
              />
            ))}
          </div>
          
          <div className="space-y-4">
            <AnimatedImage
              src="/lovable-uploads/f7e9c3db-a15f-45fd-abe8-c24b74d628d2.png"
              alt="Wedding questions"
              className="h-64 rounded-lg shadow-lg object-cover mb-6 decorative-border p-3"
            />
            
            {faqItems.slice(4).map((item, index) => (
              <FAQItem
                key={index + 4}
                question={item.question}
                answer={item.answer}
                isOpen={openItemIndex === index + 4}
                toggleOpen={() => toggleItem(index + 4)}
              />
            ))}
          </div>
        </div>

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
        title="Contact Us"
        subtitle="Still have questions? Get in touch"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="font-playfair text-xl font-semibold mb-4 text-wedding-charcoal">RSVP</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-wedding-gold">Temitade Olowookere</h4>
                <p className="text-wedding-charcoal/80">+2349037312540</p>
              </div>
              
              <div>
                <h4 className="font-medium text-wedding-gold">Precious Faseyosan</h4>
                <p className="text-wedding-charcoal/80">+2347034952994</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-wedding-cream">
              <h4 className="font-medium text-wedding-gold mb-2">For Urgent Matters</h4>
              <p className="text-wedding-charcoal/80">
                Please contact us at least 48 hours before the event for any urgent
                questions or special arrangements.
              </p>
            </div>
          </motion.div>
          
          <AnimatedImage
            src="/lovable-uploads/cc361c12-3011-49ba-8d4b-cab42ee07b3e.png"
            alt="Contact Us"
            className="h-80 rounded-lg shadow-lg decorative-border p-3"
          />
        </div>

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

export default FAQ;
