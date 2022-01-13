import React from 'react';

// custom components
import Jumbotron from '../components/LandingPage/Jumbotron';
import StepsSection from '../components/LandingPage/StepsSection';
import SolvingProblemsSection from '../components/LandingPage/SolvingProblemsSection';

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <StepsSection />
      <SolvingProblemsSection />
    </div>
  );
}
