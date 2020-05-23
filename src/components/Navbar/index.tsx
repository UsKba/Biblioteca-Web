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

const NavbarComponent: React.FC = () => {
  return (
    <Container>
      <Navbar>
        <Leftside>
          <NavLogo src={require('../../assets/Logo.png')} />
          <NavItem>
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              size="3x"
              color="#FFF"
            />
            <NavItemName>Salas</NavItemName>
          </NavItem>

          <NavItem>
            <FontAwesomeIcon icon={faDesktop} size="3x" color="#fff" />
            <NavItemName>Computadores</NavItemName>
          </NavItem>

          <NavItem>
            <FontAwesomeIcon icon={faBookOpen} size="3x" color="#fff" />
            <NavItemName>Biblioteca</NavItemName>
          </NavItem>

          <NavItem>
            <FontAwesomeIcon icon={faUser} size="3x" color="#fff" />
            <NavItemName>Perfil</NavItemName>
          </NavItem>
        </Leftside>

        <Rightside>
          <NavItem>
            <FontAwesomeIcon icon={faHome} size="3x" color="#fff" />
          </NavItem>

          <NavItem>
            <FontAwesomeIcon icon={faBell} size="3x" color="#fff" />
          </NavItem>

          <NavItem>
            <FontAwesomeIcon icon={faCog} size="3x" color="#fff" />
          </NavItem>
        </Rightside>
      </Navbar>
    </Container>
  );
};

export default NavbarComponent;
