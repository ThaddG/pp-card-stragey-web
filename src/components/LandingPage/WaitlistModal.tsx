import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
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
        <TextField
          id="email"
          label="Email"
          variant="standard"
          fullWidth
        />
      </Box>
    </Modal>
  );
};

export default WaitlistModal;
