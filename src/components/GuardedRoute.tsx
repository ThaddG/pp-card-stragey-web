import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export interface GuardedRouteProps {
  component: JSX.Element;
  check: boolean;
  path: string;
  redirectTo?: string;
  exact?: boolean;
}

const GuardedRoute: React.VFC<GuardedRouteProps> = ({
  component,
  check,
  redirectTo,
  ...rest
}: GuardedRouteProps) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return check ? (
          component
        ) : redirectTo ? (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: location },
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default GuardedRoute;
