// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, PartyPopper } from 'lucide-react';
// import { submitRSVP } from '../services/rsvp';

// interface RSVPProps {
//   onClose: () => void;
// }

// const RSVP: React.FC<RSVPProps> = ({ onClose }) => {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     attending: null as boolean | null,
//     guests: 1,
//   });
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const questions = [
//     {
//       title: "What's your name?",
//       component: (
//         <input
//           type="text"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="w-full max-w-md px-4 py-3 text-xl bg-transparent border-b-2 outline-none border-burgundy-300 focus:border-burgundy-600"
//           placeholder="Enter your full name"
//           autoFocus
//         />
//       ),
//     },
//     {
//       title: 'Will you be joining us?',
//       component: (
//         <div className="space-x-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setFormData({ ...formData, attending: true })}
//             className={`px-8 py-3 rounded-full text-lg ${
//               formData.attending === true
//                 ? 'bg-burgundy-600 text-white'
//                 : 'bg-burgundy-100 text-burgundy-900'
//             }`}
//           >
//             Yes, I'll be there!
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setFormData({ ...formData, attending: false })}
//             className={`px-8 py-3 rounded-full text-lg ${
//               formData.attending === false
//                 ? 'bg-burgundy-600 text-white'
//                 : 'bg-burgundy-100 text-burgundy-900'
//             }`}
//           >
//             Sorry, I can't make it
//           </motion.button>
//         </div>
//       ),
//     },
//     {
//       title: 'How many guests will be attending?',
//       component: (
//         <div className="flex items-center space-x-4">
//           {[1, 2, 3, 4].map((num) => (
//             <motion.button
//               key={num}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setFormData({ ...formData, guests: num })}
//               className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${
//                 formData.guests === num
//                   ? 'bg-burgundy-600 text-white'
//                   : 'bg-burgundy-100 text-burgundy-900'
//               }`}
//             >
//               {num}
//             </motion.button>
//           ))}
//         </div>
//       ),
//     },
//   ];

//   const handleNext = async () => {
//     if (step < questions.length - 1) {
//       setStep(step + 1);
//     } else {
//       try {
//         await submitRSVP({
//           name: formData.name,
//           attending: formData.attending || false,
//           guests: formData.guests,
//         });
//         setShowSuccess(true);
//         setTimeout(() => {
//           onClose();
//         }, 2000);
//       } catch (err) {
//         console.log('Failed to submit RSVP. Please try again.', err);
//         setError('Failed to submit RSVP. Please try again.');
//       }
//     }
//   };

//   if (showSuccess) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-50"
//       >
//         <div className="text-center">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: 'spring', duration: 0.5 }}
//           >
//             <PartyPopper className="w-20 h-20 mx-auto mb-6 text-gold-400" />
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="mb-4 font-serif text-4xl text-burgundy-900"
//           >
//             Thank You!
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-neutral-600"
//           >
//             Your RSVP has been recorded
//           </motion.p>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-50"
//     >
//       <button
//         onClick={onClose}
//         className="absolute top-8 right-8 text-burgundy-900 hover:text-burgundy-700"
//       >
//         <X className="w-8 h-8" />
//       </button>

//       <div className="w-full max-w-2xl px-4">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={step}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="text-center"
//           >
//             <h2 className="mb-8 font-serif text-3xl text-burgundy-900">
//               {questions[step].title}
//             </h2>

//             <div className="flex justify-center mb-12">
//               {questions[step].component}
//             </div>

//             {error && <div className="mb-4 text-red-500">{error}</div>}

//             {((step === 0 && formData.name) ||
//               (step === 1 && formData.attending !== null) ||
//               step === 2) && (
//               <motion.button
//                 onClick={handleNext}
//                 className="px-8 py-3 text-lg text-white transition-colors duration-300 rounded-full bg-burgundy-600 hover:bg-burgundy-700"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {step === questions.length - 1 ? 'Submit' : 'Continue'}
//               </motion.button>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// export default RSVP;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PartyPopper } from 'lucide-react';
import { submitRSVP } from '../services/rsvp';

interface RSVPProps {
  onClose: () => void;
}

const RSVP: React.FC<RSVPProps> = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    attending: null as boolean | null,
    guests: 1,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const questions = [
    {
      title: "What's your name?",
      component: (
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full max-w-md px-4 py-3 text-xl bg-transparent border-b-2 outline-none border-burgundy-300 focus:border-burgundy-600"
          placeholder="Enter your full name"
          autoFocus
        />
      ),
    },
    {
      title: 'Will you be joining us?',
      component: (
        <div className="space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFormData({ ...formData, attending: true })}
            className={`px-8 py-3 rounded-full text-lg ${
              formData.attending === true
                ? 'bg-burgundy-600 text-white'
                : 'bg-burgundy-100 text-burgundy-900'
            }`}
          >
            Yes, I'll be there!
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFormData({ ...formData, attending: false })}
            className={`px-8 py-3 rounded-full text-lg ${
              formData.attending === false
                ? 'bg-burgundy-600 text-white'
                : 'bg-burgundy-100 text-burgundy-900'
            }`}
          >
            Sorry, I can't make it
          </motion.button>
        </div>
      ),
    },
    {
      title: 'How many guests will be attending?',
      component: (
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4].map((num) => (
            <motion.button
              key={num}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setFormData({ ...formData, guests: num })}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${
                formData.guests === num
                  ? 'bg-burgundy-600 text-white'
                  : 'bg-burgundy-100 text-burgundy-900'
              }`}
            >
              {num}
            </motion.button>
          ))}
        </div>
      ),
    },
  ];

  const handleNext = async () => {
    // If on the attendance step and user is not attending, submit immediately with guests = 0.
    if (step === 1 && formData.attending === false) {
      try {
        await submitRSVP({
          name: formData.name,
          attending: false,
          guests: 0,
        });
        setShowSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } catch (err) {
        console.log('Failed to submit RSVP. Please try again.', err);
        setError('Failed to submit RSVP. Please try again.');
      }
      return;
    }

    // Otherwise, if not the last step, move to the next step.
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // On the last step, submit the RSVP.
      try {
        await submitRSVP({
          name: formData.name,
          attending: formData.attending || false,
          guests: formData.guests,
        });
        setShowSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } catch (err) {
        console.log('Failed to submit RSVP. Please try again.', err);
        setError('Failed to submit RSVP. Please try again.');
      }
    }
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-50"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <PartyPopper className="w-20 h-20 mx-auto mb-6 text-gold-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-serif text-4xl text-burgundy-900"
          >
            Thank You!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-neutral-600"
          >
            Your RSVP has been recorded
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-50"
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-burgundy-900 hover:text-burgundy-700"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="w-full max-w-2xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <h2 className="mb-8 font-serif text-3xl text-burgundy-900">
              {questions[step].title}
            </h2>

            <div className="flex justify-center mb-12">
              {questions[step].component}
            </div>

            {error && <div className="mb-4 text-red-500">{error}</div>}

            {((step === 0 && formData.name) ||
              (step === 1 && formData.attending !== null) ||
              step === 2) && (
              <motion.button
                onClick={handleNext}
                className="px-8 py-3 text-lg text-white transition-colors duration-300 rounded-full bg-burgundy-600 hover:bg-burgundy-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {step === questions.length - 1 ? 'Submit' : 'Continue'}
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RSVP;
