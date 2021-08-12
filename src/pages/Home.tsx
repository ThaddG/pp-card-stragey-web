import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

// custom components
import Header from '../components/Header';
import Section from '../components/Section';
import DiscoverStacks from '../components/DiscoverStacks';
import CreditCards from '../components/CreditCards';
import Education from '../components/Education';

// redux
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '../hooks';
import { logout } from '../redux/actions/authActions';

export default function Home() {
  const dispatch = useDispatch();
  const firebase = useSelector((state) => state.firebase);

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
      {firebase.auth.uid ? (
        <p>
          You are signed in as {firebase.profile.firstName}{' '}
          {firebase.profile.lastName}
        </p>
      ) : null}
      {firebase.auth.uid ? (
        <Button
          className=""
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => dispatch(logout())}
        >
          Logout
        </Button>
      ) : null}
    </div>
  );
}
