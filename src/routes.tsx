import React from 'react';
import { Switch, Route } from 'react-router-dom';


//eae men tudo bom?
import Login from './pages/Login';
import Homepage from './pages/Homepage/';
import RoomReservation from './pages/RoomReservation';
import Profile from './pages/Profile';
import Computers from './pages/Computers';
import Navbar from './components/Navbar';
import RentRoom from './pages/RentRoom';
import LibrarianReport from './pages/LibrarianReport';
import Settings from './pages/Settings';
import LibraryView from './pages/LibraryView';
// Bibliotecario

import Inbox from './pages/Inbox';
import ComputersManagement from './pages/ComputersManagement';
import Students from './pages/Students';
import SideBar from './components/SideBar';
import LibrarianHome from './pages/LibrarianHome';
import RoomMaganement from './pages/RoomMaganement';

export default function Routes() {
  return (
    <>
      <Route
        path={[
          '/home',
          '/reserve',
          '/profile',
          '/computers',
          '/rent',
          '/report',
          '/settings',
          '/topview',
        ]}
        component={Navbar}
      />
      <Route
        path={[
          '/lhome'
/*        '/lhome',
          '/inbox',
          '/pcmanagement',
          '/students' */
        ]}
        component={SideBar}
      />
      <Switch>
        <Route path="/home" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/reserve" exact component={RoomReservation} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/computers" exact component={Computers} />
        <Route path="/rent" exact component={RentRoom} />
        <Route path="/report" exact component={LibrarianReport} />
        <Route path="/settings" component={Settings} />
        <Route path="/topview" exact component={LibraryView} />]

        <Route path="/lhome" exact component={LibrarianHome}/>
        <Route path="/inbox" exact component={Inbox} />
        <Route path="/pcmanagement" exact component={ComputersManagement} />
        <Route path="/students" exact component={Students} />
        <Route path="/roommng" exact component={RoomMaganement}/>
      </Switch>
    </>
  );
}
//eae men tudo certp?
//tudo otimo bruno
