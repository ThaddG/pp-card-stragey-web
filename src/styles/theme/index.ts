import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Yeseva One',
      fontSize: 40,
    },
    body1: {
      fontSize: 20,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: '#fff',
          border: '1px solid #E0E0E0',
          borderRadius: '100px',
          padding: '10px 24px'
        },
      },
    },
  },
});

export default theme;
