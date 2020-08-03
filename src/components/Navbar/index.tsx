import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faDesktop,
  faUser,
  faBookOpen,
  faHome,
  faBell,
  faCog,
  faBars,
  faTv,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Navbar,
  NavItem,
  NavItemName,
  NavLogo,
  LeftSide,
  RightSide,
  MiddleSide,
  Logo,
  Sidebar,
  SidebarItem,
  SidebarItemName,
} from './styles';

import { Link } from 'react-router-dom';

const users = [
  {
    name: 'Lonlon',
    email: 'lonlon@gmail.com',
    id: 1,
  },
  {
    name: 'Zanat',
    email: 'zanat@gmail.com',
    id: 2,
  },
  {
    name: 'Neitan',
    email: 'neitan@gmail.com',
    id: 3,
  },
  {
    name: 'Neitan',
    email: undefined,
    id: 4,
  },
];

const user = users.find((user) => user.email === 'neitan@gmail.com');

const NavbarComponent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function closeSidebar() {
    setSidebarOpen(false);
  }

  function showSidebar() {
    setSidebarOpen(true);
  }

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div onMouseLeave={closeSidebar}>
      <Container>
        <Navbar>
          <LeftSide>
            <Link to="#" onMouseEnter={showSidebar} onClick={toggleSidebar}>
              <NavItem>
                <FontAwesomeIcon icon={faBars} size="2x" color="#333" />
              </NavItem>
            </Link>
          </LeftSide>

          <MiddleSide>
            <Logo src={require('../../assets/Logo_Name.png')} />
          </MiddleSide>

          <RightSide>
            <Link to="/settings/notificacao">
              <NavItem small>
                <FontAwesomeIcon icon={faBell} size="2x" color="#333" />
              </NavItem>
            </Link>
            <Link to="/settings/">
              <NavItem small>
                <FontAwesomeIcon icon={faCog} size="2x" color="#333" />
              </NavItem>
            </Link>
          </RightSide>
        </Navbar>
      </Container>

      <Sidebar open={sidebarOpen}>
        <SidebarItem>
          <Link to="/profile">
            <FontAwesomeIcon icon={faHome} size="lg" color="#333" />
            <SidebarItemName>Início</SidebarItemName>
          </Link>
        </SidebarItem>

        <SidebarItem>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} size="lg" color="#333" />
            <SidebarItemName>Perfil</SidebarItemName>
          </Link>
        </SidebarItem>

        <SidebarItem>
          <Link to="/topview">
            <FontAwesomeIcon icon={faBookOpen} size="lg" color="#333" />
            <SidebarItemName>Biblioteca</SidebarItemName>
          </Link>
        </SidebarItem>

        <SidebarItem>
          <Link to="/reserve">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              size="lg"
              color="#333"
            />
            <SidebarItemName>Salas</SidebarItemName>
          </Link>
        </SidebarItem>

        <SidebarItem>
          <Link to="/computers">
            <FontAwesomeIcon icon={faTv} size="lg" color="#333" />
            <SidebarItemName>Computadores</SidebarItemName>
          </Link>
        </SidebarItem>
        <SidebarItem>
          <FontAwesomeIcon icon={faEnvelope} size="lg" color="#333" />
          <SidebarItemName>Sobre</SidebarItemName>
        </SidebarItem>
      </Sidebar>
    </div>
  );
};

export default NavbarComponent;

/* <Link to="/profile">
            <NavItem small>
              <FontAwesomeIcon icon={faHome} size="lg" color="#333" />
            </NavItem>
          </Link>*/
