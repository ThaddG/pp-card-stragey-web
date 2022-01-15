import Box from '@mui/material/Box';

// assets
import PlentyPayLogo from '../../assets/plentyPayLogo-dark.svg';

// styles
import { StyledFooter } from '../../styles/LandingPage/Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <img src={PlentyPayLogo} alt="logo dark" style={{ color: '#000' }} />
    </StyledFooter>
  );
};

export default Footer;
