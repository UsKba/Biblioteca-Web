import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AccessDenied from '~/pages/AccessDenied';
import PageNotFound from '~/pages/PageNotFound';
import Presentation from '~/pages/Presentation';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/home" exact component={AccessDenied} />
        <Route path="/reserve" exact component={AccessDenied} />
        <Route path="/computers" exact component={AccessDenied} />
        <Route path="/rent" exact component={AccessDenied} />
        <Route path="/report" exact component={AccessDenied} />
        <Route path="/settings" component={AccessDenied} />
        <Route path="/" exact component={Presentation} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </>
  );
}
