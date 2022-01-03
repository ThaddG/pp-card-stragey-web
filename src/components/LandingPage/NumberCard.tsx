import Typography from '@mui/material/Typography';
import { Container as MuiContainer } from '@mui/material';

// styles
import { Container, Number } from '../../styles/LandingPage/NumberCard.styles';

// types
interface Props {
  number: number;
  title: string;
  bodyText: string;
}

const NumberCard: React.FC<Props> = ({ number, title, bodyText }) => {
  return (
    <Container sx={{ position: 'relative' }}>
      <Number>{number}</Number>
      <MuiContainer>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography variant="body1">{bodyText}</Typography>
      </MuiContainer>
    </Container>
  );
};

export default NumberCard;
