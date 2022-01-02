import Logo from '../Logo';
import Box from '@mui/material/Box';

// custom components
import CallToActionText from './CallToActionText';

// assets
import JumbotronImage from '../../assets/naipo-de-k24rOBJ2D_0-unsplash.png';

// styles
import {
  Container,
  ContentContainer,
} from '../../styles/LandingPage/Jumbotron.styles';

const Jumbotron = () => {
  return (
    <Container image={JumbotronImage}>
      <Box sx={{ mt: 3, width: '100%', textAlign: 'center' }}>
        <Logo />
      </Box>
      <ContentContainer>
        <CallToActionText />
      </ContentContainer>
    </Container>
  );
};

export default Jumbotron;
