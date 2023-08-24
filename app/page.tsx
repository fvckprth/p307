import Image from 'next/image';
import ThreeDots from '../components/ThreeDots';
import BlurImages from '@/components/blurImage';
import JoinForm from '@/components/joinForm';


export default function Home() {
  return (
    <div className="bg-black h-screen">
      <ThreeDots />
      <BlurImages />
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <JoinForm />
      </div>
    </div>
  );
}
