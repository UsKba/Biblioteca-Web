import React, { useState } from 'react';
import {
  FaChalkboardTeacher,
  FaUser,
  FaBookOpen,
  FaHome,
  FaBell,
  FaCog,
  FaBars,
  FaDesktop,
  FaEnvelope,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useAuth } from '~/contexts/AuthContext';

import logo from '../../assets/Logo_Name.png';
import {
  Container,
  Navbar,
  NavItem,
  LeftSide,
  RightSide,
  MiddleSide,
  Logo,
  Sidebar,
  SidebarItem,
  SidebarItemName,
  StyledLink,
} from './styles';

const NavbarComponent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }
  // function closeSidebar() {
  //   setSidebarOpen(false);
  // }

  // function showSidebar() {
  //   setSidebarOpen(true);
  // }

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div>
      <Container>
        <Navbar>
          <LeftSide>
            {/* onMouseEnter={showSidebar} */}
            <NavItem onClick={toggleSidebar}>
              <FaBars />
            </NavItem>
          </LeftSide>

          <MiddleSide>
            <Logo src={logo} />
          </MiddleSide>

          <RightSide>
            <Link to="/settings/notificacao">
              <NavItem small>
                <FaBell />
              </NavItem>
            </Link>

            <Link to="/settings/">
              <NavItem small>
                <FaCog />
              </NavItem>
            </Link>
          </RightSide>
        </Navbar>
      </Container>

      <Sidebar open={sidebarOpen}>
        <SidebarItem>
          <StyledLink to="/home">
            <FaHome />
            <SidebarItemName>Início</SidebarItemName>
          </StyledLink>
        </SidebarItem>

        <SidebarItem>
          <StyledLink to="/profile">
            <FaUser />
            <SidebarItemName>Perfil</SidebarItemName>
          </StyledLink>
        </SidebarItem>

        <SidebarItem>
          <StyledLink to="/topview">
            <FaBookOpen />
            <SidebarItemName>Biblioteca</SidebarItemName>
          </StyledLink>
        </SidebarItem>

        <SidebarItem>
          <StyledLink to="/reserve">
            <FaChalkboardTeacher />
            <SidebarItemName>Salas</SidebarItemName>
          </StyledLink>
        </SidebarItem>

        <SidebarItem>
          <StyledLink to="/computers">
            <FaDesktop />
            <SidebarItemName>Computadores</SidebarItemName>
          </StyledLink>
        </SidebarItem>
        <SidebarItem>
          <StyledLink to="/about">
            <FaEnvelope />
            <SidebarItemName>Sobre</SidebarItemName>
          </StyledLink>
        </SidebarItem>
        <SidebarItem
          onClick={() => {
            handleSignOut();
          }}
        >
          <StyledLink to="/home">
            <FaTimes />
            <SidebarItemName>Sair</SidebarItemName>
          </StyledLink>
        </SidebarItem>
      </Sidebar>
    </div>
  );
};

export default NavbarComponent;
