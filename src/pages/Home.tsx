import React from 'react';

// custom components
import Jumbotron from '../components/LandingPage/Jumbotron';
import NumberCard from '../components/LandingPage/NumberCard';

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <NumberCard />
    </div>
  );
}
