import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SvgIcon from '@material-ui/core/SvgIcon';
import EmailIcon from '@material-ui/icons/Email';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

// custom components
import BackButton from '../components/BackButton';

// redux
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '../hooks';
import {
  clearAuthMessage,
  sendPasswordResetEmail,
} from '../redux/actions/authActions';

// styles
const paperStyle = {
  padding: 20,
  height: '70vh',
};

export default function PasswordResetRequest() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [email, setEmail] = React.useState('');
  const [redirect, setRedirect] = React.useState<boolean>(false);
  const [redirectProgress, setRedirectProgress] = React.useState<number>(0);

  function startProgress() {
    const timer = setInterval(() => {
      setRedirectProgress((oldProgress) => {
        if (oldProgress === 100) {
          setRedirect(true);
          return 0;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 500);
    return () => clearInterval(timer);
  }

  React.useEffect(() => {
    dispatch(clearAuthMessage());
  }, []);

  // redirect to Login when the progress bar finishes
  if (redirect) return <Redirect to="/login" />;

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(sendPasswordResetEmail(email, startProgress));
  }

  return (
    <Grid className="containerOverride">
      <Link to="/login">
        <BackButton text="Login" />
      </Link>
      <Paper elevation={10} style={paperStyle}>
        <div className="loginHeaderStyle mb-4">
          <SvgIcon fontSize="large" className="icon">
            <EmailIcon></EmailIcon>
          </SvgIcon>
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            className="textFieldOverride"
          >
            Password Reset
          </Typography>
          <Typography
            variant="caption"
            align="center"
            style={{ color: '#898989', fontWeight: 'bold' }}
          >
            Enter your email and we'll send you an email to reset your password
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
            <Grid style={{ textAlign: 'center' }} item xs={12}>
              <FormControl margin="dense" fullWidth>
                <Button
                  className="mb-2"
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </FormControl>
            </Grid>
          </Grid>
          <Typography align="center">{user.authMessage}</Typography>
          {user.authMessage === 'Password reset email sent.' ? (
            <Box sx={{ width: '100%' }} className="my-2">
              <p className="mb-2">Redirecting to login...</p>
              <LinearProgress variant="determinate" value={redirectProgress} />
            </Box>
          ) : null}
        </form>
      </Paper>
    </Grid>
  );
}
