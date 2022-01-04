import NumberCard from './NumberCard';

import {
  Container as MuiContainer,
} from '@mui/material';
import Grid from '@mui/material/Grid';

// styles
import { Container } from '../../styles/LandingPage/StepsSection.styles';

const StepsSection = () => {
  return (
    <Container>
      <MuiContainer>
        <Grid container>
          {text.map((t) => (
            <Grid
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
