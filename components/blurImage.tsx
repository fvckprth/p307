'use client'

import Image from 'next/image';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function BlurImages() {
  const controls = useAnimation();

  const fadeIn = {
    initial: { opacity: 0, filter: 'blur(5px)' },
    animate: { opacity: 1, filter: 'blur(0px)', transition: { duration: 1.8 } },
  };

  return (
    <motion.div
      initial="initial"
      animate={controls}
      onAnimationComplete={() => controls.start('animate')}
    >
      <div className="container">
        <motion.div className="desktop-bg absolute top-0 left-0 w-full h-full" {...fadeIn}>
          <Image src="/images/desktop-bg.svg" alt="Desktop Background" layout="fill" objectFit="cover" />
        </motion.div>
        <motion.div className="mobile-bg absolute top-0 left-0 w-full h-full" {...fadeIn}>
          <Image src="/images/mobile-bg.svg" alt="Mobile Background" layout="fill" objectFit="cover" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BlurImages;
