import NumberCard from './NumberCard';

import { Container as MuiContainer, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

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
    title: 'Shop',
    description: `Plenty Pay works at all stores that accept credit cars. All you have to do is shop.`,
  },
  {
    number: 2,
    title: 'Hold your phone to the terminal',
    description: `Just like any other digital wallet or NFC-compatible credit card.`,
  },
  {
    number: 3,
    title: 'Let the app do the rest',
    description: `You've just maximized your reward potential!`,
  },
];
