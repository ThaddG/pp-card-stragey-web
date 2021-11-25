import React from 'react';
import { Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// assets
import saly from '../assets/Saly-10-cropped.png';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../hooks';
import { login } from '../redux/actions/authActions';

// styles
import {
  Container,
  Header,
  HeaderH1,
  ContentWrapper,
  WordContent,
  ContentH1,
  WordContentHeader,
  WordContentBody,
  ImageContent,
  Image,
  Footer,
} from '../styles/pages/MaintenanceStyles';

export default function Maintenance() {
  const dispatch = useDispatch();
  const firebase = useSelector((state) => state.firebase);
  const [password, setPassword] = React.useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(login({ email: 'thaddious@gmail.com', password }));
  };

  // Redirect
  if (firebase.profile.role === 'owner') return <Redirect to="/cms" />;

  return (
    <Container>
      <Header>
        <HeaderH1>Plenty Pay</HeaderH1>
      </Header>
      <ContentWrapper>
        <WordContent>
          <WordContentHeader>
            <ContentH1 className="mb-4">Pay with Plenty!</ContentH1>
          </WordContentHeader>
          <WordContentBody>
              Maximize your rewards with credit cards that compliment one
              another. Increase your income by stacking credit cards with
              benefits that compliment each other.
            <Typography variant="h5">
              Coming Soon!
            </Typography>
          </WordContentBody>
        </WordContent>
        <ImageContent>
          <Image src={saly} alt="saly" />
        </ImageContent>
      </ContentWrapper>
      <Footer>
        <form onSubmit={handleSubmit}>
          <FormControl variant="standard">
            <InputLabel
              htmlFor="input-with-icon-adornment"
              style={{ color: '#fff' }}
            >
              Admin Login
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: '#fff' }}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="outlined"
            endIcon={<ArrowForward />}
            style={{ color: '#fff', marginLeft: '.5rem', marginTop: '.5rem' }}
          >
            Enter
          </Button>
        </form>
      </Footer>
    </Container>
  );
}
