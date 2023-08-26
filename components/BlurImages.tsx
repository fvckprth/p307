'use client'

import { motion } from 'framer-motion';

const BlurImages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0.95, filter: "blur(5px)" }}
      animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.3, duration: 1.3 }}
      className="BlurImages h-screen w-full absolute z-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/mobile-bg.svg')",
      }}
    >
      <style jsx global>{`
        @media (min-width: 768px) {
          .BlurImages {
            background-image: url('/images/desktop-bg.svg') !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default BlurImages;

