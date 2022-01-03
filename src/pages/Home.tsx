import React from 'react';

// custom components
import Jumbotron from '../components/LandingPage/Jumbotron';
import StepsSection from '../components/LandingPage/StepsSection';

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <StepsSection />
    </div>
  );
}
