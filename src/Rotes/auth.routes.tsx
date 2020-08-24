import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AccessDenied from '~/pages/AccessDenied';
import Home from '~/pages/Home';
import PageNotFound from '~/pages/PageNotFound';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/reserve" exact component={AccessDenied} />
        <Route path="/profile" exact component={AccessDenied} />
        <Route path="/computers" exact component={AccessDenied} />
        <Route path="/rent" exact component={AccessDenied} />
        <Route path="/report" exact component={AccessDenied} />
        <Route path="/settings" component={AccessDenied} />
        <Route path="/topview" exact component={AccessDenied} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </>
  );
}
