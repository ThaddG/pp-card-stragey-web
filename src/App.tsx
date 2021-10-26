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
import CardsList from './pages/CMS/CardsList';
import EditCard from './pages/CMS/EditCard';
import Dashboard from './pages/CMS/Dashboard';
import CreateStack from './pages/CMS/CreateStack';

// redux
import { useAppSelector as useSelector } from './hooks';

import './App.css';
import { isLoaded } from 'react-redux-firebase';

function App() {
  const firebase = useSelector((state) => state.firebase);
  console.log(firebase);
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
      {/* CMS is for logged in user who have "owner" role */}
      {isLoaded(firebase.profile) ? (
        <>
          <GuardedRoute
            exact
            path="/cms"
            check={firebase.profile.role === 'owner'}
            redirectTo="/"
            component={<Dashboard />}
          />
          <GuardedRoute
            path="/cms/list"
            check={firebase.profile.role === 'owner'}
            redirectTo="/"
            component={<CardsList />}
          />
          <GuardedRoute
            path="/cms/add"
            check={firebase.profile.role === 'owner'}
            redirectTo="/"
            component={<AddCard />}
          />
          <GuardedRoute
            path="/cms/edit/:id"
            check={firebase.profile.role === 'owner'}
            redirectTo="/"
            component={<EditCard />}
          />
          {/* TODO: remove this later */}
          <GuardedRoute
            path="/cms/stack/create"
            check={firebase.profile.role === 'owner'}
            redirectTo="/"
            component={<CreateStack />}
          />
        </>
      ) : null}
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
