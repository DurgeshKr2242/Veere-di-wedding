import React from 'react';
import { motion } from 'framer-motion';
import { differenceInDays } from 'date-fns';
import { Heart } from 'lucide-react';

interface HeroProps {
  onRSVP: () => void;
  isRSVPCompleted?: boolean;
}

const Hero: React.FC<HeroProps> = ({ onRSVP, isRSVPCompleted = false }) => {
  const weddingDate = new Date('2025-05-07');
  const daysLeft = differenceInDays(weddingDate, new Date());

  if (isRSVPCompleted) {
    return (
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-burgundy-900/40 backdrop-blur-sm"></div>
        </div>

        <div className="container relative z-10 px-4 pt-32 mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl p-8 mx-auto bg-burgundy-900/30 backdrop-blur-md rounded-2xl"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-gold-400" />
            <h1 className="mb-6 font-serif text-4xl md:text-5xl">
              Thank You for Your RSVP!
            </h1>
            <p className="mb-8 text-xl leading-relaxed">
              We're delighted that you'll be part of our special day. We look
              forward to celebrating with you!
            </p>
            <div className="text-lg text-gold-400">
              Save the Date: May 7th, 2024
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-burgundy-900/40 backdrop-blur-sm"></div>
      </div>

      <div className="container relative z-10 px-4 pt-32 mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-12 h-12 mx-auto mb-6 text-gold-400" />
          <h1 className="mb-4 font-serif text-5xl font-bold md:text-7xl">
            Shubham & Peenal
          </h1>
          <p className="mb-8 text-xl font-light md:text-2xl">
            Are getting married
          </p>

          <div className="mb-12">
            <div className="mb-2 text-4xl font-bold md:text-5xl">
              {daysLeft}
            </div>
            <div className="text-lg opacity-80">Days to go</div>
          </div>

          <motion.button
            onClick={onRSVP}
            className="px-8 py-3 text-lg font-medium transition-colors duration-300 rounded-full bg-gold-400 text-burgundy-900 hover:bg-gold-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RSVP Now
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent"></div>
    </div>
  );
};

export default Hero;
