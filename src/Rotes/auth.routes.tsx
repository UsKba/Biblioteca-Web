import React from 'react';
import { Route } from 'react-router-dom';

import Login from '~/pages/Login';

export default function Routes() {
  return (
    <>
      <Route path="/login" exact component={Login} />
    </>
  );
}
