'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function BlurImages() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0.95, filter: "blur(5px)" }}
      animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.3, duration: 1.3 }}
      className="relative z-0" // Added z-index
    >
      <div className="h-screen">
        <Image 
          src="/images/desktop-bg.svg" 
          alt="Desktop Background" 
          layout="fill"  // Updated from 'fill'
          objectFit="cover" 
        />
        <Image 
          src="/images/mobile-bg.svg" 
          alt="Mobile Background" 
          layout="fill"  // Updated from 'fill'
          objectFit="cover" 
        />
      </div>
    </motion.div>
  );
}

export default BlurImages;
