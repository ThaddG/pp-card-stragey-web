import { useState } from 'react';
import { Auth } from '../../firebase';
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

const WaitlistModal: React.FC<Props> = ({ open, setOpen }) => {
  const [email, setEmail] = useState<string>('');
  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  const addToWatchlist = async () => {
    await Auth.createUserWithEmailAndPassword(email, 'password').catch(
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
          <Button variant="contained" sx={{ bgcolor: 'limegreen' }}>
            Join!
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default WaitlistModal;
