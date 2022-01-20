import { Container as MuiContainer, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

// custom components
import NumberCard from './NumberCard';

// assets
import CartIcon from '../../assets/icons/cart-icon.svg';
import NFCIcon from '../../assets/icons/NFC-icon.svg';
import PhoneIcon from '../../assets/icons/phone-icon.svg';

// styles
import { Container } from '../../styles/LandingPage/StepsSection.styles';

const ALT_COLOR = '#5becad';

const StepsSection = () => {
  return (
    <Container>
      <MuiContainer>
        <Typography variant="h1" sx={{ mb: 12, mt: 4 }}>
          Plenty Pay is a{' '}
          <span style={{ color: ALT_COLOR }}>digital wallet</span> that
          automatically chooses the{' '}
          <span style={{ color: ALT_COLOR }}>best card</span> to{' '}
          <span style={{ color: ALT_COLOR }}>maximize your rewards</span>.
        </Typography>
        <Grid container>
          {text.map((t, idx) => (
            <Grid
              key={idx}
              item
              xs={12}
              lg={4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <NumberCard
                number={t.number}
                icon={t.icon}
                title={t.title}
                bodyText={t.description}
              />
            </Grid>
          ))}
        </Grid>
      </MuiContainer>
    </Container>
  );
};

export default StepsSection;

const text = [
  {
    number: 1,
    icon: CartIcon,
    title: 'Shop',
    description: `Plenty Pay works at all stores that accept credit cars. All you have to do is shop.`,
  },
  {
    number: 2,
    icon: NFCIcon,
    title: 'Hold your phone to the terminal',
    description: `Just like any other digital wallet or NFC-compatible credit card.`,
  },
  {
    number: 3,
    icon: PhoneIcon,
    title: 'All Done',
    description: `You've just maximized your reward potential!`,
  },
];
