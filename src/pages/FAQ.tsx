
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is there a dress code?",
    answer: "The dress code for our events is formal attire. Traditional attire is welcome for the Traditional Wedding ceremony."
  },
  {
    question: "Can I bring a plus one?",
    answer: "Due to venue capacity, we kindly request that only those named on the invitation attend. Please contact us if you have any questions."
  },
  {
    question: "Are children welcome?",
    answer: "We love your little ones, but our wedding is an adult-only celebration. We appreciate your understanding."
  },
  {
    question: "Will transportation be provided between venues?",
    answer: "Transportation will not be provided between venues. Please arrange your own transportation."
  },
  {
    question: "What time should I arrive?",
    answer: "We recommend arriving 30 minutes before the ceremony start time to allow for seating and settling in."
  },
  {
    question: "Are there any accommodation recommendations?",
    answer: "Yes, we have arrangements with local hotels. Please see our Venue page for more information."
  },
  {
    question: "What if I have dietary restrictions?",
    answer: "Please let us know of any dietary restrictions when you RSVP, and we will do our best to accommodate them."
  },
  {
    question: "Is there a gift registry?",
    answer: "Your presence is our present, but if you'd like to give a gift, please see our Gifts page for registry information."
  }
];

const FAQ = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');

  return (
    <>
      <Hero
        title="Q & A"
        subtitle="Answers to your questions"
        image="/placeholder.svg" // Replace with actual image
        date={weddingDate}
        showCountdown={false}
      />
      
      <Section
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our celebration"
        className="bg-wedding-cream/20"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-wedding-charcoal/80 mb-4">
              Have more questions? Feel free to reach out to us directly.
            </p>
            
            <div className="glass-card p-6 max-w-lg mx-auto">
              <h3 className="font-playfair text-xl font-semibold mb-4 text-wedding-charcoal">Contact Us</h3>
              
              <div className="space-y-3">
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
          </motion.div>
        </div>
      </Section>
    </>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

const FaqItem = ({ question, answer, index }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden"
    >
      <button
        className="w-full text-left p-5 flex items-center justify-between focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-playfair text-lg font-semibold text-wedding-charcoal">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="text-wedding-gold flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-wedding-gold flex-shrink-0" size={20} />
        )}
      </button>
      
      <div
        className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-wedding-charcoal/80">{answer}</p>
      </div>
    </motion.div>
  );
};

export default FAQ;
