import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
  Grid,
  TextField,
  FormControl,
  FormHelperText,
  Button,
  Paper,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import BackButton from '../components/BackButton';

// redux
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '../hooks';
import { signup, clearAuthMessage } from '../redux/actions/authActions';

// css
import '../styles/pages/Login.css';

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
  // clear auth message on component load
  useEffect(() => {dispatch(clearAuthMessage())}, []);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (firstName != '' && lastName != '') {
      dispatch(signup({ email, password, firstName, lastName }));
    }
  }

  return (
    <Grid className="containerOverride">
      <Link to="/">
        <BackButton text="Home" />
      </Link>
      <Paper elevation={10} className="paperStyle">
        <div className="loginHeaderStyle mb-4">
          <SvgIcon fontSize="large" className="icon">
            <AccountCircleIcon></AccountCircleIcon>
          </SvgIcon>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            className="textFieldOverride"
          >
            Sign up
          </Typography>
        </div>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12}>
              <FormControl margin="dense" required={true} fullWidth>
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
            </Grid>
            <Grid item xs={12}>
              <FormControl margin="dense" required fullWidth>
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
            </Grid>
            <Grid item xs={12}>
              <FormControl margin="dense" required={true} fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  placeholder="Email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FormHelperText id="helper-text" className="mb-n2">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl margin="dense" required fullWidth>
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
            </Grid>
            <Grid style={{ textAlign: 'center' }} item xs={12}>
              <FormControl margin="dense" fullWidth>
                <Button
                  className="mb-2"
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Sign up
                </Button>
              </FormControl>
            </Grid>
          </Grid>
          <Typography align="center" color="error">
            {user.authMessage}
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
}
