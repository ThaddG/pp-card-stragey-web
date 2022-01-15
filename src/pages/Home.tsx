import React from 'react';

// custom components
import Jumbotron from '../components/LandingPage/Jumbotron';
import StepsSection from '../components/LandingPage/StepsSection';
import SolvingProblemsSection from '../components/LandingPage/SolvingProblemsSection';
import FeaturesSection from '../components/LandingPage/FeaturesSection';
import CoverageSection from '../components/LandingPage/CoverageSection';
import Footer from '../components/LandingPage/Footer';

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <StepsSection />
      <SolvingProblemsSection />
      <FeaturesSection />
      <CoverageSection />
      <Footer />
    </div>
  );
}
