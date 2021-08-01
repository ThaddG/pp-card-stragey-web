import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  TextField,
  FormControl,
  Button,
  Paper,
  Grid,
  Typography,
  SvgIcon,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// custom components
import BackButton from '../components/BackButton';

// redux
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '../hooks';
import { login, clearAuthMessage } from '../redux/actions/authActions';

// css
import '../styles/pages/Login.css';
const paperStyle = {
  padding: 20,
  height: '70vh',
};

export default function Login() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // clear auth message on component load
  useEffect(() => {dispatch(clearAuthMessage())}, []);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(login({ email, password }));
  }

  return (
    <Grid className="containerOverride">
      <Link to="/">
        <BackButton text="Home" />
      </Link>
      <Paper elevation={10} style={paperStyle}>
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
            Login
          </Typography>
        </div>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12}>
              <FormControl margin="dense" required={true} fullWidth>
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
                  Login
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
