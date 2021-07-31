import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Container,
  TextField,
  FormControl,
  FormHelperText,
  Button,
} from '@material-ui/core';

// redux
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '../hooks';
import { signup } from '../redux/actions/authActions';

export default function Signup() {
  const user = useSelector((state) => state.auth);
  const firebase = useSelector((state) => state.firebase);
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  // ROUTE GUARD
  if (firebase.auth.uid) return <Redirect to="/" />;

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (firstName != "" && lastName != "") {
      dispatch(signup({ email, password, firstName, lastName }));
    }
  }

  return (
    <Container maxWidth="sm">
      <h1>Signup</h1>
      <form noValidate onSubmit={handleSubmit}>
        <FormControl margin="normal" required={true}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            placeholder="Tim"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl margin="normal" required>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            placeholder="Cook"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl margin="normal" required={true}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="Email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl margin="normal" required>
          <TextField
            id="outlined-basic"
            type="password"
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
