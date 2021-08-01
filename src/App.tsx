import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// custom components
import GuardedRoute from './components/GuardedRoute';
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

// types/interfaces/enums
enum GuardedRouteLogic {
  LOGGED_IN = 'loggedIn',
  LOGGED_OUT = 'loggedOut',
}

import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <GuardedRoute path="/login" check={GuardedRouteLogic.LOGGED_IN}>
        <Login />
      </GuardedRoute>
      <GuardedRoute path="/signup" check={GuardedRouteLogic.LOGGED_IN}>
        <Signup />
      </GuardedRoute>
    </Router>
  );
}

export default App;
