import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '~/components/Navbar';

import Computers from '~/pages/Computers';
import Home from '~/pages/Home';
import Inbox from '~/pages/Inbox';
import LibrarianReport from '~/pages/LibrarianReport';
import LibraryView from '~/pages/LibraryView';
import PageNotFound from '~/pages/PageNotFound';
import RentRoom from '~/pages/RentRoom';
import RoomReservation from '~/pages/RoomReservation';
import Settings from '~/pages/Settings';

export default function Routes() {
  return (
    <>
      <Route path={['/reserve', '/', '/computers', '/rent', '/report', '/settings', '/topview']} component={Navbar} />
      <Switch>
        <Route path="/reserve" exact component={RoomReservation} />
        <Route path="/reserve-morning" exact component={RoomReservation} />
        <Route path="/reserve-afternoon" exact component={RoomReservation} />
        <Route path="/reserve-night" exact component={RoomReservation} />
        <Route path="/" exact component={Home} />
        <Route path="/computers" exact component={Computers} />
        <Route path="/rent" exact component={RentRoom} />
        <Route path="/report" exact component={LibrarianReport} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/settings-user" exact component={Settings} />
        <Route path="/settings-notification" exact component={Settings} />
        <Route path="/settings-general" exact component={Settings} />
        <Route path="/settings-voz" exact component={Settings} />
        <Route path="/topview" exact component={LibraryView} />

        <Route path="/inbox" exact component={Inbox} />

        <Route path="/" component={PageNotFound} />
      </Switch>

      {/* <Route path="/" exact component={Dashboard} /> */}
    </>
  );
}
