import NumberCard from './NumberCard';

import { Container as MuiContainer } from '@mui/material';
import Grid from '@mui/material/Grid';

// styles
import { Container } from '../../styles/LandingPage/StepsSection.styles';

const StepsSection = () => {
  return (
    <Container>
      <MuiContainer>
        <Grid container>
          <Grid item xs={12} md={4}>
            <NumberCard number={1} />
          </Grid>
          <Grid item xs={12} md={4}>
            <NumberCard number={2} />
          </Grid>
          <Grid item xs={12} md={4}>
            <NumberCard number={3} />
          </Grid>
        </Grid>
      </MuiContainer>
    </Container>
  );
};

export default StepsSection;
