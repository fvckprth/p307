'use client'

import ThreeDots from '@/components/ThreeDots';
import BlurImages from '@/components/BlurImages';
import SignUpForm from '@/components/SignUpForm';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <div className="bg-[#101010] h-full overflow-y-hidden relative z-0">
      <Toaster />
      <BlurImages />
      <ThreeDots />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 md:px-0 w-full md:w-auto">
        <div className="max-w-full-sm mx-auto md:px-0">
          <SignUpForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

