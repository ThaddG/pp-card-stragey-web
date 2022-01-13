import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Yeseva One',
      fontSize: 44,
    },
    h2: {
      fontFamily: 'Yeseva One',
      fontSize: 40,
    },
    h5: {
      fontFamily: 'Yeseva One',
      fontSize: 32,
    },
    h6: {
      fontSize: 24,
    },
    body1: {
      fontSize: 20,
    },
    body2: {
      fontSize: 18,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: '#fff',
          border: '1px solid #E0E0E0',
          borderRadius: '100px',
          padding: '10px 24px',
        },
      },
    },
  },
});

export default theme;
