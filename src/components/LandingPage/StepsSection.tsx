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
          <Grid item xs={4}>
            <NumberCard />
          </Grid>
          <Grid item xs={4}>
            <NumberCard />
          </Grid>
          <Grid item xs={4}>
            <NumberCard />
          </Grid>
        </Grid>
      </MuiContainer>
    </Container>
  );
};

export default StepsSection;
