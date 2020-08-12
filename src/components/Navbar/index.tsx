import React, { useState } from 'react';
import {
  FaChalkboardTeacher,
  FaUser,
  FaBookOpen,
  FaHome,
  FaBell,
  FaCog,
  FaBars,
  FaTv,
  FaEnvelope,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            <NavItem onMouseEnter={showSidebar} onClick={toggleSidebar}>
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
            <FaTv />
            <SidebarItemName>Computadores</SidebarItemName>
          </StyledLink>
        </SidebarItem>
        <SidebarItem>
          <StyledLink to="/about">
            <FaEnvelope />
            <SidebarItemName>Sobre</SidebarItemName>
          </StyledLink>
        </SidebarItem>
        <SidebarItem>
          <StyledLink to="/login">
            <FaTimes />
            <SidebarItemName>Sair</SidebarItemName>
          </StyledLink>
        </SidebarItem>
      </Sidebar>
    </div>
  );
};

export default NavbarComponent;
