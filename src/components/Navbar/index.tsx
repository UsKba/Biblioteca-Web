import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faDesktop,
  faUser,
  faBookOpen,
  faHome,
  faBell,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Navbar,
  NavItem,
  NavItemName,
  NavLogo,
  Leftside,
  Rightside,
} from './styles';

import {Link} from 'react-router-dom'

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



console.log('user');
console.log(user);

const NavbarComponent: React.FC = () => {


  return (
    <Container>
      <Navbar>
        <Leftside>
          <Link to="/login">
            <NavItem>
              <NavLogo src={require('../../assets/Logo.png')} />
            </NavItem>
          </Link>
          <Link to="/reserve">
            <NavItem>
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="lg"
                color="#FFF"
              />
              <NavItemName>Salas</NavItemName>
            </NavItem>
          </Link>
          <Link to="/computers">
            <NavItem>
              <FontAwesomeIcon icon={faDesktop} size="lg" color="#fff" />

              <NavItemName>Computadores</NavItemName>
            </NavItem>
          </Link>

          <Link to="/library">
          <NavItem>
            <FontAwesomeIcon icon={faBookOpen} size="lg" color="#fff" />
            <NavItemName>Biblioteca</NavItemName>
          </NavItem>
          </Link>
          <Link to="/profile">
            <NavItem>
              <FontAwesomeIcon icon={faUser} size="lg" color="#fff" />
              <NavItemName>Perfil</NavItemName>
            </NavItem>
          </Link>
        </Leftside>

        <Rightside>
          <Link to="/home">
            <NavItem small>
              <FontAwesomeIcon icon={faHome} size="lg" color="#fff" />
            </NavItem>
          </Link>
          <Link to="/settings/notificacao">
          <NavItem small>
            <FontAwesomeIcon icon={faBell} size="lg" color="#fff" />
          </NavItem>
          </Link>
          <Link to="/settings/">
            <NavItem small>
              <FontAwesomeIcon icon={faCog} size="lg" color="#fff" />
            </NavItem>
          </Link>
        </Rightside>
      </Navbar>
    </Container>
  );
};

export default NavbarComponent;
