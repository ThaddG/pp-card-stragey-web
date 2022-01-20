import Typography from '@mui/material/Typography';
import {
  Container as MuiContainer,
  useMediaQuery,
  useTheme,
} from '@mui/material';

// styles
import { Container, Number } from '../../styles/LandingPage/NumberCard.styles';

// types
interface Props {
  number: number;
  icon: string;
  title: string;
  bodyText: string;
}

const NumberCard: React.FC<Props> = ({ number, icon, title, bodyText }) => {
  const theme = useTheme();
  const xSmall = useMediaQuery(theme.breakpoints.up('xs'));
  return (
    <Container
      sx={{ position: 'relative', mb: xSmall ? 4 : 1, mt: xSmall ? 4 : 1 }}
    >
      <Number>{number}</Number>
      <img src={icon} alt={icon} />
      <MuiContainer>
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1">{bodyText}</Typography>
      </MuiContainer>
    </Container>
  );
};

export default NumberCard;
