import React, { useState, useCallback, useEffect } from 'react';
import { FaChalkboardTeacher, FaHome, FaCog, FaBars, FaDesktop, FaEnvelope, FaBell, FaEdit } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { IoMdHelp } from 'react-icons/io';
import { useLocation, Link } from 'react-router-dom';

import { checkUserIsAdmin } from '~/utils/user';

import { useAuth } from '~/contexts/AuthContext';
import { useReserve } from '~/contexts/ReserveContext';
import { Reserve } from '~/types';

import NotificationReserve from './NotificationReserve';
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
  NotificationContainer,
  NotificationTitle,
  RedBall,
  EmptyContainer,
  EmptyTitle,
  EmptySpan,
} from './styles';

const titlePages = {
  '/': 'Início',
  '/salas': 'Salas',
  '/computadores': 'Computadores',
  '/sobre': 'Sobre',
  '/reservar': 'Reserva de salas',
  '/configuracoes': 'Configurações',
  '/configuracoes-geral': 'Configurações',
  '/configuracoes-usuario': 'Configurações',
  '/configuracoes-notificacao': 'Configurações',
  '/configuracoes-grupo': 'Configurações',
  '/criar-aviso': 'Criar aviso',
  '/ajuda': 'Ajuda',
};

const NavbarComponent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationExists, setNotificationExists] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const { signOut } = useAuth();
  const authContext = useAuth();
  const location = useLocation();
  const [pendingReserveList, setPendingReserveList] = useState([] as Reserve[]);
  const { reserves } = useReserve();

  const closeIfMobile = useCallback(() => {
    if (window.innerWidth < 600) {
      setSidebarOpen(false);
    }
  }, []);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(!sidebarOpen);
  }, [sidebarOpen]);

  const toggleNotifications = useCallback(() => {
    setNotificationOpen(!notificationOpen);
  }, [notificationOpen]);

  useEffect(() => {
    const title = titlePages[location.pathname];
    setPageTitle(title);
  }, [location.pathname]);

  useEffect(() => {
    if (reserves.length === 0) {
      setNotificationExists(false);
      return;
    }

    const pendingReserves = [] as Reserve[];

    for (let i = 0; i < reserves.length; i += 1) {
      const users1 = reserves[i].users;

      // eslint-disable-next-line no-loop-func
      const userLogged = users1.find((user) => user.id === authContext.user.id);
      if (userLogged?.status === 0) {
        // console.log('Usuário logado não aceitou a reserva');
        pendingReserves.push(reserves[i]);
        setNotificationExists(true);
      }
      // console.log(users1);
    }

    setPendingReserveList(pendingReserves);
  }, [authContext.user.id, reserves]);

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
            <RedBall newNotifications={notificationExists && pendingReserveList.length !== 0}>
              {pendingReserveList.length}
            </RedBall>

            <NavItem small onClick={toggleNotifications}>
              <FaBell title="Notificações" />
            </NavItem>
          </RightSide>
        </Navbar>
      </Container>

      <NotificationContainer open={notificationOpen}>
        <NotificationTitle>Notificações</NotificationTitle>
        {pendingReserveList.map((reserve) => (
          <NotificationReserve key={reserve.id} reserve={reserve} />
        ))}

        <EmptyContainer visible={pendingReserveList.length === 0}>
          <EmptyTitle>Não há notificações</EmptyTitle>
          <EmptySpan>Quando alguém te convidar para uma reserva, o convite aparecerá aqui.</EmptySpan>
        </EmptyContainer>
      </NotificationContainer>
      <SidebarContainer open={sidebarOpen}>
        <Sidebar open={sidebarOpen}>
          <StyledLink onClick={closeIfMobile} to="/">
            <FaHome />
            <SidebarItemName>Início</SidebarItemName>
          </StyledLink>

          <StyledLink onClick={closeIfMobile} to="/criar-aviso" visible={checkUserIsAdmin(authContext.user)}>
            <FaEdit />
            <SidebarItemName>Criar Aviso</SidebarItemName>
          </StyledLink>

          <StyledLink onClick={closeIfMobile} to="/salas">
            <FaChalkboardTeacher />
            <SidebarItemName>Salas</SidebarItemName>
          </StyledLink>

          <StyledLink onClick={closeIfMobile} to="/computadores">
            <FaDesktop />
            <SidebarItemName>Computadores</SidebarItemName>
          </StyledLink>

          <StyledLink onClick={closeIfMobile} to="/sobre">
            <FaEnvelope />
            <SidebarItemName>Sobre</SidebarItemName>
          </StyledLink>

          <StyledLink onClick={closeIfMobile} to="/ajuda">
            <IoMdHelp />
            <SidebarItemName>Ajuda</SidebarItemName>
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
