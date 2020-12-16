import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
  PageTitle,
} from './styles';

const NavbarComponent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { signOut } = useAuth();

  function closeIfMobile() {
    if (window.innerWidth < 600) {
      setSidebarOpen(false);
    }
  }

  function handleSignOut() {
    signOut();
  }

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  // const location = useLocation();

  // // React.useEffect(() => {
  // //   console.log('Location changed');
  // // }, [location]);

  return (
    <div>
      <Container>
        <Navbar>
          <LeftSide>
            {/* onMouseEnter={showSidebar} */}
            <NavItem onClick={toggleSidebar}>
              <FaBars />
            </NavItem>
            <PageTitle>Teste</PageTitle>
          </LeftSide>

          <RightSide>
            <Link to="/configuracoes">
              <NavItem small>
                <FaCog />
              </NavItem>
            </Link>
          </RightSide>
        </Navbar>
      </Container>

      <SidebarContainer open={sidebarOpen}>
        <Sidebar open={sidebarOpen}>
          <StyledLink onClick={closeIfMobile} to="/">
            <FaHome />
            <SidebarItemName>Início</SidebarItemName>
          </StyledLink>

          <StyledLink onClick={closeIfMobile} to="/salas-manha">
            <FaChalkboardTeacher />
            <SidebarItemName>Salas</SidebarItemName>
          </StyledLink>

          <StyledLink onClick={closeIfMobile} to="/computadores">
            <FaDesktop />
            <SidebarItemName>Computadores</SidebarItemName>
          </StyledLink>

          <StyledLink onClick={closeIfMobile} to="/bibliotecario">
            <MdChatBubble />
            <SidebarItemName>Bibliotecário</SidebarItemName>
          </StyledLink>

          <StyledLink onClick={closeIfMobile} to="/sobre">
            <FaEnvelope />
            <SidebarItemName>Sobre</SidebarItemName>
          </StyledLink>
          <StyledLink
            to="/"
            onClick={() => {
              handleSignOut();
              closeIfMobile();
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
