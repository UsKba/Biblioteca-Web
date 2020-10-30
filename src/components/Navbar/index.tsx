import React, { useState } from 'react';
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaHome,
  FaCog,
  FaBars,
  FaDesktop,
  FaEnvelope,
  FaTimes,
  FaBell,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useAuth } from '~/contexts/AuthContext';

import {
  Container,
  Navbar,
  NavItem,
  LeftSide,
  RightSide,
  Sidebar,
  SidebarItem,
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
          <SidebarItem>
            <StyledLink to="/">
              <FaHome />
              <SidebarItemName>Início</SidebarItemName>
            </StyledLink>
          </SidebarItem>

          <SidebarItem>
            <StyledLink to="/topview">
              <FaBookOpen />
              <SidebarItemName>Biblioteca</SidebarItemName>
            </StyledLink>
          </SidebarItem>

          <SidebarItem>
            <StyledLink to="/reserve-morning">
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
            <StyledLink to="/">
              <FaTimes />
              <SidebarItemName>Sair</SidebarItemName>
            </StyledLink>
          </SidebarItem>
        </Sidebar>
        <SpaceRemaining open={sidebarOpen} onClick={toggleSidebar} />
      </SidebarContainer>
    </div>
  );
};

export default NavbarComponent;
