import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { rrfProps } from './redux/store';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

// custom components
import App from './App';

// redux
import { useAppSelector as useSelector } from './hooks';

import './index.css';

interface AuthProps {
  children: JSX.Element;
}

function AuthIsLoaded({ children }: AuthProps) {
  const auth = useSelector((state) => state.firebase.auth);
  /**
   *
   * TODO: Make a loading screen for this or keep it null
   *
   */
  if (!isLoaded(auth)) return null;
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
