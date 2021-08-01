/**
 * TODO: make the redirect go to the page the user came from
 * https://youtu.be/kByiWTWdpww
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// redux
import { useAppSelector as useSelector } from '../hooks';

export interface GuardedRouteProps {
  children: JSX.Element;
  check: string;
  path: string;
}

const GuardedRoute: React.VFC<GuardedRouteProps> = ({
  children,
  check,
  ...rest
}: GuardedRouteProps) => {
  const firebase = useSelector((state) => state.firebase);
  return (
    <Route
      {...rest}
      render={() => {
        switch (check) {
          case 'loggedIn':
            return firebase.auth.uid ? <Redirect to="/" /> : children;
          case 'loggedOut':
            return !firebase.auth.uid ? children : <Redirect to="/" />;
          default:
            return;
        }
      }}
    />
  );
};

export default GuardedRoute;
