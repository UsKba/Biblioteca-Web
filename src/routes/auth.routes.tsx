import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '~/pages/About';
import Help from '~/pages/Help';
import PageNotFound from '~/pages/PageNotFound';
import Presentation from '~/pages/Presentation';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Presentation} />
        <Route path="/sobre" exact component={About} />
        <Route path="/ajuda" exact component={Help} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </>
  );
}
