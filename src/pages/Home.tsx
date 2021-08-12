import React from 'react';

// custom components
import Header from '../components/Header';
import Section from '../components/Section';
import DiscoverStacks from '../components/DiscoverStacks';
import CreditCards from '../components/CreditCards';
import Education from '../components/Education';

export default function Home() {
  return (
    <div>
      <Header />
      <Section
        title="Discover Stacks"
        description="Pick a spending category and see which credit card stacks will maximize
        your rewards the most"
      >
        <DiscoverStacks />
      </Section>
      <Section
        title="Credit Cards"
        description="Not sure what's out there? Compare credit cards, their benefits, costs,
        and find out what works best for you"
      >
        <CreditCards />
      </Section>
      <Section
        title="Education"
        description="New to credit cards in general? Get acclimated with these guides"
      >
        <Education />
      </Section>
    </div>
  );
}
