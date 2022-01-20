import {
  Container as MuiContainer,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// custom components
import ProblemBlock from './ProblemBlock';

// styles
import {
  SectionContainer,
  SectionTitle,
} from '../../styles/LandingPage/global.styles';
import { MobileCenteredGridItem } from '../../styles/LandingPage/global.styles';

interface Props {
  handleModalOpen: () => void;
}

const SolvingProblemsSection: React.FC<Props> = ({ handleModalOpen }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <SectionContainer backgroundColor="#fff">
      <MuiContainer>
        {/* TODO: change font to Poppins */}
        <SectionTitle variant="body2" sx={{ mb: 2 }}>
          SOLVING PROBLEMS
        </SectionTitle>
        <Typography variant="h5" sx={{ mb: 5 }}>
          Consumers are losing money by not using the optimal card at checkout.
          We solve it.
        </Typography>
        <Grid container spacing={3}>
          {data.map((problem, idx) => (
            <MobileCenteredGridItem
              key={idx}
              item
              xs={12}
              sm={6}
              lg={4}
              sx={{ mb: mobile ? 6 : 4 }}
              isMobile={mobile}
            >
              <ProblemBlock
                title={problem.title}
                description={problem.description}
              />
            </MobileCenteredGridItem>
          ))}
        </Grid>
        {/* TODO: style this correctly (theme) */}
        <Button
          variant="outlined"
          sx={{ borderColor: '#27AE60', color: '#27AE60' }}
          onClick={handleModalOpen}
        >
          Join Watchlist
        </Button>
      </MuiContainer>
    </SectionContainer>
  );
};

const data = [
  {
    title: 'Make Money',
    description:
      'Maximizing your credit card rewards will get you more money quicker.',
  },
  {
    title: 'Relieve Stress',
    description:
      "You don't have to worry about which card to use at checkout anymore.",
  },
  {
    title: 'Become Organized',
    description:
      'See all of your balances and rewards. No need to log in to multiple accounts.',
  },
  {
    title: 'Easy To Use',
    description:
      'Easily connect your bank accounts and access all of your information at once.',
  },
  {
    title: 'Secure',
    description:
      'The app and all of your information is secure through and through.',
  },
  {
    title: 'Rewards Tracker',
    description:
      "Easily check how much money you're earning with your purchases.",
  },
];

export default SolvingProblemsSection;
