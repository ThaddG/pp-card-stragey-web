import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// custom components
import GuardedRoute from './components/GuardedRoute';
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Stack from './pages/Stack';
import AddCard from './pages/CMS/AddCard';
import CardsList from './pages/CMS/CardsList'

// redux
import { useAppSelector as useSelector } from './hooks';

import './App.css';

function App() {
  const firebase = useSelector((state) => state.firebase);
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <GuardedRoute
        path="/login"
        check={!firebase.auth.uid}
        component={<Login />}
        redirectTo="/"
      />
      <GuardedRoute
        path="/signup"
        check={!firebase.auth.uid}
        component={<Signup />}
        redirectTo="/"
      />
      <Route path="/stacks/:id" component={Stack} />
      <Route path="/cms/add" component={AddCard} />
      <Route path="/cms/list" component={CardsList} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
