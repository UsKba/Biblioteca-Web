import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '~/components/Navbar';

import Computers from '~/pages/Computers';
import Home from '~/pages/Home';
import LibrarianReport from '~/pages/LibrarianReport';
import LibraryView from '~/pages/LibraryView';
import Profile from '~/pages/Profile';
import RentRoom from '~/pages/RentRoom';
import RoomReservation from '~/pages/RoomReservation';
import Settings from '~/pages/Settings';

export default function Routes() {
  return (
    <>
      <Route
        path={['/reserve', '/profile', '/computers', '/rent', '/report', '/settings', '/topview', '/home']}
        component={Navbar}
      />
      <Switch>
        <Route path="/reserve" exact component={RoomReservation} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/computers" exact component={Computers} />
        <Route path="/rent" exact component={RentRoom} />
        <Route path="/report" exact component={LibrarianReport} />
        <Route path="/settings" component={Settings} />
        <Route path="/topview" exact component={LibraryView} />
        <Route path="/home" exact component={Home} />
      </Switch>

      {/* <Route path="/" exact component={Dashboard} /> */}
    </>
  );
}
