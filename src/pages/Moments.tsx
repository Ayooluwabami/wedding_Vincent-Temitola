import Section from '@/components/Section';
import AnimatedImage from '@/components/AnimatedImage';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the structure for gallery images
interface GalleryImage {
  src: string;
  alt: string;
  imageStyles: {
    objectFit: string;
    objectPosition: string;
  };
}

// Gallery images with individual properties
const galleryImages: GalleryImage[] = [
  {
    src: "/lovable-uploads/efb8700e-f1b0-460f-857d-a4e5425c8fc1.png",
    alt: "Vincent and Temitola - traditional attire 1",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 30%' }
  },
  {
    src: "/lovable-uploads/2b1e28be-3440-4996-a112-ec40e565f577.png",
    alt: "Vincent and Temitola - candid moment 1",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 5%' }
  },
  {
    src: "/lovable-uploads/cc361c12-3011-49ba-8d4b-cab42ee07b3e.png",
    alt: "Vincent and Temitola - close-up",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 30%' }
  },
  {
    src: "/lovable-uploads/e3a5910d-a91a-4b80-918d-e993e87eed85.png",
    alt: "Vincent and Temitola - evening pose",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 15%' }
  },
  {
    src: "/lovable-uploads/2a4bc038-ca03-4d80-b398-eeb5b61765db.png",
    alt: "Vincent and Temitola - outdoor shot 1",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 10%' }
  },
  {
    src: "/lovable-uploads/f7bc1b85-7131-4e3c-8426-05633ca98607.png",
    alt: "Vincent and Temitola - playful moment",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 35%' }
  },
  {
    src: "/lovable-uploads/571a7bbb-d095-4ec6-9e72-7fa4c716aa96.png",
    alt: "Vincent and Temitola - romantic moment",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 25%' }
  },
  {
    src: "/lovable-uploads/6853d055-df68-4a09-a6e5-9b71c2783165.png",
    alt: "Vincent and Temitola - romantic pose",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 10%' }
  },
  {
    src: "/lovable-uploads/32dd6604-37e8-4bc0-9991-5936833e0d5b.png",
    alt: "Vincent and Temitola - outdoor shot 2",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 75%' }
  },
  {
    src: "/lovable-uploads/a5f89a38-4621-4ba9-b4fa-ee13395baeb0.png",
    alt: "Vincent and Temitola - candid moment 2",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 25%' }
  },
  {
    src: "/lovable-uploads/87e2b97f-0644-4a12-9739-298c718bc2a9.png",
    alt: "Vincent and Temitola - scenic moment",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 15%' }
  },
  {
    src: "/lovable-uploads/8483aa87-840c-447b-bab9-93457f707eff.png",
    alt: "Vincent and Temitola - candid laugh",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 2%' }
  },
  {
    src: "/lovable-uploads/bef8aa40-8bfa-439c-9eeb-53349f5da554.png",
    alt: "Vincent and Temitola - close-up 2",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 20%' }
  },
  {
    src: "/lovable-uploads/1fe02b61-be20-4d1d-bdbb-1bd759bed963.png",
    alt: "Vincent and Temitola - traditional pose",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 10%' }
  },
  {
    src: "/lovable-uploads/0af6a945-db0e-45a1-80c9-d36dbe2e8760.png",
    alt: "Vincent and Temitola - sunset moment",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 10%' }
  },
  {
    src: "/lovable-uploads/a51b1e50-4082-43b1-9d95-19541548350e.png",
    alt: "Vincent and Temitola - playful moment 2",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 95%' }
  },
  {
    src: "/lovable-uploads/78927c9a-1c97-430b-a15a-f31db67707a9.png",
    alt: "Vincent and Temitola - playful pose",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 60%' }
  },
  {
    src: "/lovable-uploads/ac09c5c0-cc9e-4cdb-8a3a-d085a7a5ce08.png",
    alt: "Vincent and Temitola - candid shot",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 20%' }
  },
  {
    src: "/lovable-uploads/14cfc873-8532-4744-aa06-5a97ab7fd028.png",
    alt: "Vincent and Temitola - formal pose",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 5%' }
  },
  {
    src: "/lovable-uploads/d230ca28-3fe8-4689-89cc-7dabc275e6f0.png",
    alt: "Vincent and Temitola - close-up 3",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 5%' }
  },
  {
    src: "/lovable-uploads/a1304f55-2b0b-4fe7-bda1-94862464d88b.png",
    alt: "Vincent and Temitola - candid moment 3",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 5%' }
  },
  {
    src: "/lovable-uploads/f7e9c3db-a15f-45fd-abe8-c24b74d628d2.png",
    alt: "Vincent and Temitola - final pose",
    imageStyles: { objectFit: 'cover', objectPosition: 'center 100%' }
  }
];

const Moments = () => {
  const weddingDate = new Date('2025-04-25T11:00:00');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const getFilenameFromUrl = (url: string) => {
    const parts = url.split('/');
    const filename = parts[parts.length - 1].split('.')[0].substring(0, 10);
    return `vincent-temitola-${filename}`;
  };

  return (
    <>
      <Section
        title="Our Gallery"
        subtitle="Capturing our Pre-wedding shoot"
        className="bg-wedding-cream/20 pt-24"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="gallery-item cursor-pointer"
              onClick={() => openLightbox(image.src)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <AnimatedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500"
                  downloadable={true}
                  imageStyles={image.imageStyles as React.CSSProperties}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white bg-wedding-gold rounded-full p-2 z-50"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <X size={24} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain"
            />
            <a
              href={selectedImage}
              download={getFilenameFromUrl(selectedImage)}
              className="absolute bottom-4 right-4 bg-wedding-gold hover:bg-wedding-gold/80 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Download
            </a>
          </motion.div>
        </motion.div>
      )}

      <Section
        title="Our Journey"
        subtitle="From the first hello to forever"
      >
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-wedding-charcoal/80 text-center mb-10"
          >
            These photos capture the essence of our relationship—the laughter, the love, and the journey that led us to say "yes" to forever. We hope you enjoy them as much as we do.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedImage
              src="/lovable-uploads/0af6a945-db0e-45a1-80c9-d36dbe2e8760.png"
              alt="Vincent and Temitola special moment"
              className="rounded-lg h-96"
              downloadable={true}
              imageStyles={{
                objectFit: 'cover',
                objectPosition: 'center 5%'
              }}
            />
            <AnimatedImage
              src="/lovable-uploads/87e2b97f-0644-4a12-9739-298c718bc2a9.png"
              alt="Vincent and Temitola in traditional attire"
              className="rounded-lg h-96"
              downloadable={true}
              imageStyles={{
                objectFit: 'cover',
                objectPosition: 'center 5%'
              }}
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Moments;