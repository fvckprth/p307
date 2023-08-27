'use client'

import React from 'react';
import { motion } from "framer-motion";

function ThreeDots() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 5, filter: "blur(5px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ delay: 0.3, duration: 0.9 }}
    className="h-full relative z-100 flex flex-col justify-between"
    >
      <div className="flex justify-between w-full">
        <div style={{ backgroundColor: '#CBADFB' }} className="md:w-12 md:h-12 w-6 h-6"></div>
        <div style={{ backgroundColor: '#ADFBF6' }} className="md:w-12 md:h-12 w-6 h-6"></div>
        <div style={{ backgroundColor: '#ADD6FB' }} className="md:w-12 md:h-12 w-6 h-6"></div>
      </div>
      <div className="flex justify-between w-full">
        <div style={{ backgroundColor: '#ADFBF6' }} className="md:w-12 md:h-12 w-6 h-6"></div>
        <div style={{ backgroundColor: '#F0ADFB' }} className="md:w-12 md:h-12 w-6 h-6"></div>
        <div style={{ backgroundColor: '#FBADAD' }} className="md:w-12 md:h-12 w-6 h-6"></div>
      </div>
    </motion.div>
  );
};

export default ThreeDots;
