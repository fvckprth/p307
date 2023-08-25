import Image from 'next/image';
import React from 'react';

function BlurImages() {
  return (
      <div className="container">
          <Image src="/images/desktop-bg.svg" alt="Desktop Background" layout="fill" objectFit="cover" />
          <Image src="/images/mobile-bg.svg" alt="Mobile Background" layout="fill" objectFit="cover" />
      </div>
  );
}

export default BlurImages;
