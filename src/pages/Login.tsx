import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Container,
  TextField,
  FormControl,
  FormHelperText,
  Button,
  Input
} from '@material-ui/core';

// redux
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '../hooks';
import { login } from '../redux/actions/authActions';

export default function Login() {
  const user = useSelector((state) => state.auth);
  const firebase = useSelector((state) => state.firebase);
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // ROUTE GUARD
  if (firebase.auth.uid) return <Redirect to="/" />;

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(login({ email, password }));
  }

  return (
    <Container maxWidth="sm">
      <h1>Login</h1>
      <form noValidate onSubmit={handleSubmit}>
        <FormControl margin="normal" required={true}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="Email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </FormControl>
        <FormControl margin="normal" required>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <FormControl margin="normal">
          <Button variant="contained" type="submit">
            Login
          </Button>
        </FormControl>
        <p className="error-text mt-1">{user.authMessage}</p>
      </form>
    </Container>
  );
}
