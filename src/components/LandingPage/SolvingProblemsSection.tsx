import { Container as MuiContainer, Typography } from '@mui/material';

// styles
import { Container } from '../../styles/LandingPage/global.styles';

const SolvingProblemsSection = () => {
  return (
    <Container backgroundColor="#fff">
      <MuiContainer>
        {/* TODO: change font to Poppins */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          SOLVING PROBLEMS
        </Typography>
        <Typography variant="h5">
          Consumers are losing money by not using the optimal card at checkout.
          We solve it.
        </Typography>
      </MuiContainer>
    </Container>
  );
};

export default SolvingProblemsSection;
