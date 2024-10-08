import CallPopup from '@/components/call-popup';
import MainSection from '@/components/home-sections/main';
import Map from '@/components/home-sections/map';
import Questions from '@/components/home-sections/questions';

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
