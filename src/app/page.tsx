import MainSection from '@/components/home-sections/main';
import Map from '@/components/home-sections/map';
import Questions from '@/components/home-sections/questions';
import dynamic from 'next/dynamic';

const CallPopup = dynamic(() => import('@/components/call-popup'));

function HomePage() {
  return (
    <>
      <MainSection />
      <Map />
      <Questions />
      <CallPopup />
    </>
  );
}

export default HomePage;
