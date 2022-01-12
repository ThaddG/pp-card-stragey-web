import {Container as MuiContainer, Typography} from '@mui/material';

// styles
import {Container} from '../../styles/LandingPage/global.styles'

const SolvingProblemsSection = () => {
  return (
    <Container backgroundColor="#fff">
      <MuiContainer>
        {/* TODO: change font to Poppins */}
        <Typography variant="body2">
          SOLVING PROBLEMS
        </Typography>
      </MuiContainer>
    </Container>
  )
}

export default SolvingProblemsSection;