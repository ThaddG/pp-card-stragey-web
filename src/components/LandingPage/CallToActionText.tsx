import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// custom components
import WaitlistModal from './WaitlistModal';

// styles
import { Container } from '../../styles/LandingPage/CallToActionText.styles';

const CallToActionText = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  return (
    <Container>
      <Typography variant="h2">
        Maximize your rewards with credit cards that compliment one another
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 3 }}>
        Increase your income by stacking credit cards with benefits that
        compliment each other
      </Typography>
      <Button variant="outlined" onClick={handleModalOpen}>Join Watchlist</Button>
      <WaitlistModal
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </Container>
  );
};

export default CallToActionText;
