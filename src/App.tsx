import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
