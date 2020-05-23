import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Homepage from './pages/Homepage/';
import Navbar from './components/Navbar';
export default function Routes() {
  return (
    <>
      <Route path={['/inicial', '/biblioteca']} component={Navbar} />
      <Switch>
        <Route path="/inicial" exact component={Homepage} />
        <Route path="/" exact component={Login} />
        <Route path="/biblioteca" exact component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </>
  );
}
