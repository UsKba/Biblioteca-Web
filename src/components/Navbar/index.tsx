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

const NavbarComponent: React.FC = (props) => {
  console.log(props);

  return (
    <Container>
      <Navbar>
        <Leftside>
          <a href="http://localhost:3000/login">
            <NavItem>
              <NavLogo src={require('../../assets/Logo.png')} />
            </NavItem>
          </a>
          <a href="http://localhost:3000/reserve">
            <NavItem>
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="lg"
                color="#FFF"
              />
              <NavItemName>Salas</NavItemName>
            </NavItem>
          </a>
          <a href="http://localhost:3000/computers">
            <NavItem>
              <FontAwesomeIcon icon={faDesktop} size="lg" color="#fff" />

              <NavItemName>Computadores</NavItemName>
            </NavItem>
          </a>
          <NavItem>
            <FontAwesomeIcon icon={faBookOpen} size="lg" color="#fff" />
            <NavItemName>Biblioteca</NavItemName>
          </NavItem>

          <a href="http://localhost:3000/profile">
            <NavItem>
              <FontAwesomeIcon icon={faUser} size="lg" color="#fff" />
              <NavItemName>Perfil</NavItemName>
            </NavItem>
          </a>
        </Leftside>

        <Rightside>
          <a href="http://localhost:3000/home">
            <NavItem>
              <FontAwesomeIcon icon={faHome} size="lg" color="#fff" />
            </NavItem>
          </a>
          <NavItem>
            <FontAwesomeIcon icon={faBell} size="lg" color="#fff" />
          </NavItem>

          <NavItem>
            <FontAwesomeIcon icon={faCog} size="lg" color="#fff" />
          </NavItem>
        </Rightside>
      </Navbar>
    </Container>
  );
};

export default NavbarComponent;
