import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Homepage from './pages/Homepage/';
import RoomReservation from './pages/RoomReservation';
import Profile from './pages/Profile';
import Computers from './pages/Computers';
import Navbar from './components/Navbar';
import RentRoom from './pages/RentRoom';
import LibrarianReport from './pages/LibrarianReport';
import Settings from './pages/Settings';

export default function Routes() {
  return (
    <>
      <Route
        path={['/home', '/reserve', '/profile', '/computers', '/rent', '/report', '/settings']}
        component={Navbar}
      />
      <Switch>
        <Route path="/home" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/reserve" exact component={RoomReservation} />
        <Route path="/profile" exact component={Profile} />
        <Route path='/computers' exact component={Computers} />
        <Route path="/rent" exact component={RentRoom} />
        <Route path="/report" exact component={LibrarianReport} />
        <Route path="/settings" exact component={Settings} />
      </Switch>
    </>
  );
}
