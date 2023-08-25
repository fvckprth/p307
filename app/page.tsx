'use client'

import ThreeDots from '@/components/ThreeDots';
import BlurImages from '@/components/BlurImages';
import WaitlistForm from '@/components/waitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[#101010] h-full overflow-y-hidden">
      <BlurImages />
      <div className="h-screen relative z-0">
        <ThreeDots />
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 md:px-0 w-full md:w-auto">
        <div className="max-w-full-sm mx-auto md:px-0">
          <WaitlistForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

