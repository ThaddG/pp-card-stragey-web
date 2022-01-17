import { useState } from 'react';
import { Auth } from '../../firebase';
import randomPassword from '../../utils/randomPassword';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 450,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  borderRadius: '28px',
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: make email empty when modal close and maybe when join button pressed

const WaitlistModal: React.FC<Props> = ({ open, setOpen }) => {
  const [email, setEmail] = useState<string>('');
  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  // TODO: add storing user to database as well
  const addToWatchlist = async () => {
    await Auth.createUserWithEmailAndPassword(email, randomPassword(15)).catch(
      (error) => {
        console.error('create user with email and password error');
      }
    );
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="join-waitlist-modal"
      aria-describedby="modal-for-joining-waitlist"
    >
      <Box sx={style}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Join the Waitlist!
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Enter your email below to join in the waiting list and be notified
          when we're ready for launch.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
          <TextField
            fullWidth
            type="email"
            id="input-email"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            value={email}
            onChange={onChangeEmail}
          />
          <Button
            variant="contained"
            onClick={addToWatchlist}
            sx={{ bgcolor: '#27AE60' }}
          >
            Join!
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default WaitlistModal;