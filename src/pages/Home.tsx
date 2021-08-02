import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

// custom components
import Header from '../components/Header';

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
