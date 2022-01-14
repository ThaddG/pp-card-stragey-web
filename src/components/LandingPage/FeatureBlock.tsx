import Typography from '@mui/material/Typography';

// styles
import { Container } from '../../styles/LandingPage/FeatureBlock.styles';

// types
interface Props {
  icon: string;
  title: string;
  description: string;
}

const FeatureBlock: React.FC<Props> = ({ icon, title, description }) => (
  <Container sx={{ pl: 2, pr: 2 }}>
    <img src={icon} alt={`${icon} icon`} width="46" height="41" />
    <Typography variant="h6" sx={{ mt: 1, fontFamily: 'Yeseva One' }}>
      {title}
    </Typography>
    <Typography variant="body1" sx={{ maxWidth: 312 }}>
      {description}
    </Typography>
  </Container>
);

export default FeatureBlock;
