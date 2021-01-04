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
import { FiHelpCircle } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';
import { MdChatBubble } from 'react-icons/md';
import { useLocation, Link } from 'react-router-dom';

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
  const [pageTitle, setPageTitle] = useState('');
  const { signOut } = useAuth();
  const location = useLocation();

  const titlePages = {
    '/': 'Início',
    '/salas-manha': 'Salas',
    '/salas-tarde': 'Salas',
    '/salas-noite': 'Salas',
    '/computadores': 'Computadores',
    '/sobre': 'Sobre',
    '/bibliotecario': 'Falar com bibliotecário',
    '/reservar': 'Agendamento de salas',
    '/configuracoes': 'Configurações',
    '/configuracoes-geral': 'Configurações',
    '/configuracoes-usuario': 'Configurações',
    '/configuracoes-notificacao': 'Configurações',
    '/configuracoes-grupo': 'Configurações',
  };

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

  React.useEffect(() => {
    const title = titlePages[location.pathname];
    setPageTitle(title);
  }, [location.pathname, titlePages]);

  return (
    <div>
      <Container>
        <Navbar>
          <LeftSide>
            {/* onMouseEnter={showSidebar} */}
            <NavItem onClick={toggleSidebar}>
              <FaBars />
            </NavItem>
            <PageTitle>{pageTitle}</PageTitle>
          </LeftSide>

          <RightSide>
            <Link to="/">
              <NavItem small>
                <FiHelpCircle title="Ajuda" />
              </NavItem>
            </Link>
            <Link to="/configuracoes-geral">
              <NavItem small>
                <FaCog title="Configurações" />
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
