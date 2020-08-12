import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Computers from './pages/Computers';
import ComputersManagement from './pages/ComputersManagement';
import Home from './pages/Home';
import Inbox from './pages/Inbox';
import LibrarianHome from './pages/LibrarianHome';
import LibrarianReport from './pages/LibrarianReport';
import LibraryView from './pages/LibraryView';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RentRoom from './pages/RentRoom';
import RoomReservation from './pages/RoomReservation';
import Settings from './pages/Settings';
// Bibliotecario

import Students from './pages/Students';

export default function Routes() {
  return (
    <>
      <Route
        path={['/reserve', '/profile', '/computers', '/rent', '/report', '/settings', '/topview', '/home']}
        component={Navbar}
      />
      <Route path={['/lhome']} component={SideBar} />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/reserve" exact component={RoomReservation} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/computers" exact component={Computers} />
        <Route path="/rent" exact component={RentRoom} />
        <Route path="/report" exact component={LibrarianReport} />
        <Route path="/settings" component={Settings} />
        <Route path="/topview" exact component={LibraryView} />
        <Route path="/home" exact component={Home} />
        ]
        <Route path="/lhome" exact component={LibrarianHome} />
        <Route path="/inbox" exact component={Inbox} />
        <Route path="/pcmgt" exact component={ComputersManagement} />
        <Route path="/students" exact component={Students} />
        {/* <Route path="/roommgt" exact component={RoomMaganement} /> */}
      </Switch>
    </>
  );
}
