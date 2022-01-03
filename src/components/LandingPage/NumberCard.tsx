import Typography from '@mui/material/Typography';

// styles
import { Container, Number } from '../../styles/LandingPage/NumberCard.styles';

// types
interface Props {
  number: number;
}

const NumberCard: React.FC<Props> = ({ number }) => {
  return (
    <Container sx={{ position: 'relative' }}>
      <Number>{number}</Number>
    </Container>
  );
};

export default NumberCard;
