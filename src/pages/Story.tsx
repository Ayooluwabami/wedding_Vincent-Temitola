
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
            alt="Tobiloba and Temitola sharing a moment together"
            className="rounded-lg h-80 md:h-96 object-cover"
            imageStyles={{
              objectFit: 'cover',
              objectPosition: 'center 5%'
            }}
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
              Meeting Temitola was nothing short of a divine moment—one of those encounters that feel destined from the very start. It all began on an ordinary Sunday when my close friend, while passing through Akure on his way to Abuja, stopped by to visit. In the midst of our conversations, he casually mentioned someone he thought I should meet. He spoke of Temitola with such enthusiasm, hoping something beautiful might blossom between us. <br /><br />
              Curious—and maybe a little out of obligation to my friend—I decided to call her. That first conversation was magic. There was an instant connection, a warmth in her voice that made me want to keep talking. She was soft-spoken yet full of wisdom, respectful yet lively. It didn’t take long before our conversations became the highlight of my days.
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
              As weeks went by, we grew closer. Then came the day she visited me in Akure. We went out on a date, and sitting across from her, seeing her smile, hearing her laugh—it hit me. This was it. Temitola wasn't just someone I liked; she was the one. She had the grace of a queen and the heart of someone who could build a home with me. That day, I became certain she would be the love of my life and the mother of my unborn children. <br /><br />
              Now, here we are, stronger and more in love than ever. Our journey together has been nothing short of a blessing, and with every step, I thank the stars—and my friend—for leading me to her.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-wedding-charcoal/80 max-w-4xl mx-auto mt-6 text-right italic"
            >
              -Tobiloba.
            </motion.p>
          </div>
          <AnimatedImage
            src="/lovable-uploads/c6dec023-94b9-4991-96e5-d6697a4e87e2.png"
            alt="Tobiloba and Temitola laughing together"
            className="rounded-lg h-80 md:h-96 object-cover order-1 md:order-2"
          />
        </div>

        {/* Added third image and section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatedImage
            src="/lovable-uploads/acd3f946-d6a8-482a-91bb-3fdf4913263c.png"
            alt="Tobiloba and Temitola in traditional attire"
            className="rounded-lg h-80 md:h-96 object-cover"
            imageStyles={{
              objectFit: 'cover',
              objectPosition: 'center 42%'
            }}
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
              My journey with Oluwatobiloba has been nothing short of a miracle—a beautiful reminder of just how much God loves me.
              We met at a time when love was the last thing on my mind. I had just walked away from a six-year relationship, and I told myself, “Men matters? Not anytime soon!” But as always, God had His own plans. <br /><br />

              It all started even before I met him—before I even knew his name. One day, out of the blue, our family pastor called me and said, “You’re about to meet your husband. A friend will introduce him to you.” At that moment, I wasn’t exactly excited to hear that. But looking back now, I realize that was the first sign that something extraordinary was about to happen.

              And then came the message. Oluwatobi sent me a text, and I responded. But of course, curiosity got the best of me, and I went straight to check his profile picture. And let’s just say—fine man no pimples! (I’ll leave the descriptions for another day).
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
            From that very first conversation, something felt different. Days turned into weeks, and I don’t think a single day passed without hearing from him. He became my safe space, my support system, my answered prayer. Through the final phase of my journey as a medical student, he stood by me—not just as a teacher, but as a friend, a father, a lover, and my prayer partner.

            Oluwatobiloba Vincent, you are my soulmate. You are proof that God’s plans are always better than ours. I love you, baby—beyond the moon and back.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-wedding-charcoal/80 max-w-4xl mx-auto mt-6 text-right italic"
          >
            -Temitola.
          </motion.p>
        </div>
      </Section>
    </>
  );
};

export default Story;
