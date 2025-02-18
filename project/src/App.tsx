import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import RSVP from './components/RSVP';

function App() {
  const [showRSVP, setShowRSVP] = useState(false);
  const [rsvpCompleted, setRsvpCompleted] = useState(false);

  const handleRSVPClose = () => {
    setShowRSVP(false);
    setRsvpCompleted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {showRSVP ? (
        <RSVP onClose={handleRSVPClose} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero
            onRSVP={() => setShowRSVP(true)}
            isRSVPCompleted={rsvpCompleted}
          />
          <Timeline />

          {/* Footer */}
          <footer className="py-8 mt-20 bg-burgundy-900 text-neutral-200">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center md:text-left">
                  <Heart className="w-6 h-6 mx-auto mb-2 md:mx-0" />
                  <h3 className="mb-2 font-semibold">Shubham & Peenal</h3>
                  <p className="text-sm">Together Forever</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="mb-2 font-semibold">Wedding Date</h3>
                  <p className="text-sm">May 7th, 2025</p>
                </div>
                <div className="text-center md:text-right">
                  <MapPin className="w-6 h-6 mx-auto mb-2 md:ml-auto" />
                  <h3 className="mb-2 font-semibold">Venue</h3>
                  <p className="text-sm">The Grand Palace, Mumbai</p>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

export default App;
