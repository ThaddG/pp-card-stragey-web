import { useState } from 'react';
import { Auth, Firestore } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import randomPassword from '../../utils/randomPassword';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Alert, { AlertColor } from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { AnimatePresence, motion } from 'framer-motion';

const style = {
  maxWidth: 450,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  borderRadius: '28px',
  boxShadow: 24,
  p: 4,
  m: 1,
};

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  visible: {
    y: '1px',
    opacity: 1,
    transition: { delay: 0.1, duration: 0.2, ease: 'easeOut' },
  },
};

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WatchlistModal: React.FC<Props> = ({ open, setOpen }) => {
  const [email, setEmail] = useState<string>('');
  const [feedbackOpen, setFeedbackOpen] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<{
    text: string;
    severity: AlertColor;
  }>({ text: '', severity: 'success' });
  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleOnClose = () => {
    setOpen(false);
    setEmail('');
    setFeedbackOpen(false);
  };

  const addToWatchlist = async () => {
    await createUserWithEmailAndPassword(Auth, email, randomPassword(15))
      .then(async () => {
        await addDoc(collection(Firestore, 'users'), {
          email,
          createdAt: new Date(),
        })
          .then(() => {
            console.log('successful');
            setFeedbackMessage({
              text: "You've signed up for the watchlist! 🎉",
              severity: 'success',
            });
            setFeedbackOpen(true);
          })
          .catch((error) => {
            setFeedbackMessage({
              text: 'Error signing up for the watchlist!',
              severity: 'success',
            });
            console.log('error:', error);
            setFeedbackOpen(true);
          });
      })
      .catch((error) => {
        console.error('create user with email and password error:', error);
        setFeedbackMessage({
          text: 'Error signing up for watchlist!',
          severity: 'error',
        });
        setFeedbackOpen(true);
      });
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <Modal
          open={open}
          onClose={handleOnClose}
          aria-labelledby="join-watchlist-modal"
          aria-describedby="modal-for-joining-watchlist"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={style}
            component={motion.div}
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <CloseIcon
              sx={{ cursor: 'pointer', float: 'right', textAlign: 'right' }}
              onClick={handleOnClose}
            />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Join the Watchlist!
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
            {feedbackOpen && (
              <Alert
                sx={{ mt: 2 }}
                iconMapping={{
                  success: <CheckCircleOutlineIcon fontSize="inherit" />,
                }}
                severity={feedbackMessage.severity}
              >
                {feedbackMessage.text}
              </Alert>
            )}
          </Box>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default WatchlistModal;
