import {
  Container as MuiContainer,
  Button,
  Typography,
} from '@mui/material';

// assets
import CoverageMap from '../../assets/coverage-map.svg';

// styles
import {
  SectionContainer,
  SectionTitle,
} from '../../styles/LandingPage/global.styles';

// types
interface Props {
  handleModalOpen: () => void;
}

const CoverageSection: React.FC<Props> = ({handleModalOpen}) => {
  return (
    <SectionContainer backgroundColor="#fff">
      <MuiContainer>
        <SectionTitle variant="body2" sx={{ mb: 2 }}>
          WHERE YOU CAN USE PLENTY PAY
        </SectionTitle>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Available in every state in the US on launch.
        </Typography>
        <Button
          variant="outlined"
          sx={{ borderColor: '#27AE60', color: '#27AE60' }}
          onClick={handleModalOpen}
        >
          Join Watchlist
        </Button>
        <img src={CoverageMap} alt="Coverage Map" style={{ width: '100%' }} />
      </MuiContainer>
    </SectionContainer>
  );
};

export default CoverageSection;
