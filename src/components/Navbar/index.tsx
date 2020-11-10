import React, { useState } from 'react';
import {
  FaChalkboardTeacher,
  FaHome,
  FaCog,
  FaBars,
  FaDesktop,
  FaEnvelope,
  // FaBell,
} from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { MdChatBubble } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useAuth } from '~/contexts/AuthContext';

import {
  Container,
  Navbar,
  NavItem,
  LeftSide,
  RightSide,
  Sidebar,
  SidebarItemName,
  StyledLink,
  SidebarContainer,
  SpaceRemaining,
} from './styles';

const NavbarComponent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

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

          <RightSide>
            <Link to="/settings">
              <NavItem small>
                <FaCog />
              </NavItem>
            </Link>
          </RightSide>
        </Navbar>
      </Container>

      <SidebarContainer open={sidebarOpen}>
        <Sidebar open={sidebarOpen}>
          <StyledLink to="/">
            <FaHome />
            <SidebarItemName>Início</SidebarItemName>
          </StyledLink>

          <StyledLink to="/reserve-morning">
            <FaChalkboardTeacher />
            <SidebarItemName>Salas</SidebarItemName>
          </StyledLink>

          <StyledLink to="/computers">
            <FaDesktop />
            <SidebarItemName>Computadores</SidebarItemName>
          </StyledLink>

          <StyledLink to="/report">
            <MdChatBubble />
            <SidebarItemName>Bibliotecário</SidebarItemName>
          </StyledLink>

          <StyledLink to="/about">
            <FaEnvelope />
            <SidebarItemName>Sobre</SidebarItemName>
          </StyledLink>
          <StyledLink
            to="/"
            onClick={() => {
              handleSignOut();
            }}
          >
            <GoSignOut />
            <SidebarItemName>Sair</SidebarItemName>
          </StyledLink>
        </Sidebar>
        <SpaceRemaining open={sidebarOpen} onClick={toggleSidebar} />
      </SidebarContainer>
    </div>
  );
};

export default NavbarComponent;
