import { useState } from 'react';
import { Helmet } from 'react-helmet';

// custom components
import Jumbotron from '../components/LandingPage/Jumbotron';
import StepsSection from '../components/LandingPage/StepsSection';
import SolvingProblemsSection from '../components/LandingPage/SolvingProblemsSection';
import FeaturesSection from '../components/LandingPage/FeaturesSection';
import CoverageSection from '../components/LandingPage/CoverageSection';
import Footer from '../components/LandingPage/Footer';
import WaitlistModal from '../components/LandingPage/WaitlistModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PlentyPay | Home</title>
      </Helmet>
      <Jumbotron handleModalOpen={handleModalOpen} />
      <StepsSection />
      <SolvingProblemsSection handleModalOpen={handleModalOpen} />
      <FeaturesSection />
      <CoverageSection handleModalOpen={handleModalOpen} />
      <Footer />
      <WaitlistModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
}
