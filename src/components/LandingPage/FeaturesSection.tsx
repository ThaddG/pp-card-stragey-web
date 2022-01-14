import { Container as MuiContainer, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

// custom components
import FeatureBlock from './FeatureBlock';

// assets
import RobotIcon from '../../assets/icons/robot-icon.svg';
import DollarIcon from '../../assets/icons/dollar-icon.svg';
import CardIcon from '../../assets/icons/card-icon.svg';
import DataIcon from '../../assets/icons/data-icon.svg';
import LinkIcon from '../../assets/icons/link-icon.svg';
import StackIcon from '../../assets/icons/stack-icon.svg';

// styles
import {
  SectionContainer,
  SectionTitle,
} from '../../styles/LandingPage/global.styles';

const FeaturesSection = () => {
  return (
    <SectionContainer backgroundColor="#fff">
      <MuiContainer>
        <SectionTitle>FEATURES</SectionTitle>
        <Typography variant="h5" sx={{ mb: 5 }}>
          More than just a wallet
        </Typography>
        <Grid container spacing={3}>
          {data.map((d) => (
            <Grid item xs={12} sm={6} lg={4}>
              <FeatureBlock
                icon={d.icon}
                title={d.title}
                description={d.description}
              />
            </Grid>
          ))}
        </Grid>
      </MuiContainer>
    </SectionContainer>
  );
};

const data = [
  {
    icon: RobotIcon,
    title: 'Automation',
    description:
      'You can control the algo based on rewards goals, card limit, credit carsds, etc.',
  },
  {
    icon: DollarIcon,
    title: 'Rewards Tracker',
    description:
      "See all your rewads in one place and track how much they're growing.",
  },
  {
    icon: CardIcon,
    title: 'Virtual Credit Cards',
    description:
      "You don't have to give up your actual credit card number if you don't want to.",
  },
  {
    icon: DataIcon,
    title: 'Data Privacy',
    description:
      "Have control over your data. Know what's being collected, and opt-out.",
  },
  {
    icon: LinkIcon,
    title: 'User Card Referral',
    description:
      'Users can earn money through credit card referral links by contributing Stacks.',
  },
  {
    icon: StackIcon,
    title: 'Stacks',
    description:
      'Stacks are credit card recommendations that work well together.',
  },
];

export default FeaturesSection;
