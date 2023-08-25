import ThreeDots from '@/components/ThreeDots';
import BlurImages from '@/components/BlurImages';
import JoinForm from '@/components/JoinForm';

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <ThreeDots />
      <BlurImages />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 md:px-0 w-full md:w-auto">
        <div className="max-w-screen-sm mx-auto md:px-0">
          <JoinForm />
        </div>
      </div>
    </div>
  );
}

