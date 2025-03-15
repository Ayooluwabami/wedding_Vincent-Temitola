
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';
import { motion } from 'framer-motion';

const tidbits = [
  {
    question: "How did you first meet?",
    answer: "We met through my friend's recommendation of each other."
  },
  {
    question: "Who made the first move? How?",
    answer: "I did. I asked her out of course."
  },
  {
    question: "What was your most memorable date?",
    answer: "Abuja with other group of friends."
  },
  {
    question: "What's your favorite activity together?",
    answer: "Ofofo"
  },
  {
    question: "What's the best meal you have eaten together?",
    answer: "Every meal my babe cooks is the best and the good thing is that we always have it together."
  },
  {
    question: "What's the most memorable trip you have taken together?",
    answer: "Lagos Island trip."
  },
  {
    question: "A life goal of ours",
    answer: "To be a channels of blessings unto generations."
  },
  {
    question: "The most spontaneous thing we've done",
    answer: "I can't remember any."
  },
  {
    question: "The dorkiest thing about us is",
    answer: "We are terrible at lying."
  },
  {
    question: "A social cause we care about",
    answer: "Global mental health."
  },
  {
    question: "We take pride in",
    answer: "We take pride in Legacy of Christ."
  }
];

const Tidbits = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');

  // Additional images for tidbits hero
  const heroImages = [
    "/lovable-uploads/d230ca28-3fe8-4689-89cc-7dabc275e6f0.png",
    "/lovable-uploads/1fe02b61-be20-4d1d-bdbb-1bd759bed963.png",
    "/lovable-uploads/a51b1e50-4082-43b1-9d95-19541548350e.png",
  ];

  return (
    <>
      <Hero
        title="Tidbits"
        subtitle="Little things that make us, us"
        image={heroImages[0]}
        additionalImages={heroImages.slice(1)}
        date={weddingDate}
        showCountdown={false}
      />

      <Section
        title="Fun Facts About Us"
        subtitle="Get to know Tobiloba and Temitola a little better"
        className="bg-wedding-cream/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
          <AnimatedImage
            src="/lovable-uploads/1fe02b61-be20-4d1d-bdbb-1bd759bed963.png"
            alt="Tobiloba and Temitola"
            className="rounded-lg overflow-hidden shadow-lg h-80"
          />

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg text-wedding-charcoal/80"
            >
              Every relationship has its own unique quirks and special moments that define the couple's journey together.
              Here are some fun facts and tidbits about our relationship that give you a glimpse into our world
              and the little things that make us, us.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tidbits.map((tidbit, index) => (
            <TidbitCard
              key={index}
              question={tidbit.question}
              answer={tidbit.answer}
              index={index}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

interface TidbitCardProps {
  question: string;
  answer: string;
  index: number;
}

const TidbitCard = ({ question, answer, index }: TidbitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="font-cormorant text-xl font-semibold mb-2 text-wedding-gold">{question}</h3>
      <p className="text-wedding-charcoal/90">{answer}</p>
    </motion.div>
  );
};

export default Tidbits;
