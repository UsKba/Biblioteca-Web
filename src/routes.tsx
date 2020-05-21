import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

export default function Routes() {
  return (
    // www.hally.com/biblioteca
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Login} />
      <Route path="/biblioteca" exact component={Login} />
      <Route path="/" component={Login} />
    </Switch>
  );
}
