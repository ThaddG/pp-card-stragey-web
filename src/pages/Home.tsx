import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

// redux
import { useAppSelector as useSelector, useAppDispatch as useDispatch } from '../hooks';
import { logout } from '../redux/actions/authActions';

export default function Home() {
  const dispatch = useDispatch();
  const firebase = useSelector(state => state.firebase);
  return (
    <div>
      <Link to="/login">
        <Button className="" variant="contained" color="primary" size="large">
          Login
        </Button>
      </Link>
      {firebase.auth.uid ?
      <Button
        className=""
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button> : null}
    </div>
  );
}
