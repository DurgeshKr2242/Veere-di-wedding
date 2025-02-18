import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const events = [
  {
    date: 'May 5th',
    // time: '10:00 AM & 4:00 PM',
    title: 'Tilak',
    description: 'Traditional ceremonies at respective family homes',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    date: 'May 6th',
    // time: '6:00 PM',
    title: 'Haldi & Sangeet',
    description: 'A night of music, dance and celebrations',
    image:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    date: 'May 7th',
    // time: '7:00 PM',
    title: 'Wedding Ceremony',
    description: 'The grand celebration of our union',
    image:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Calendar className="w-12 h-12 mx-auto mb-4 text-burgundy-700" />
          <h2 className="mb-4 font-serif text-4xl text-burgundy-900">
            Wedding Timeline
          </h2>
          <p className="text-neutral-600">
            Join us in celebrating our special moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.date}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 font-medium text-gold-600">
                  {event.date}
                </div>
                <h3 className="mb-2 font-serif text-xl text-burgundy-900">
                  {event.title}
                </h3>
                <p className="mb-4 text-sm text-neutral-600">
                  {event.description}
                </p>
                {/* <div className="font-medium text-burgundy-700">
                  {event.time}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
