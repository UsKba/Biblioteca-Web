import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  margin-bottom: 50px;
`;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  height: 50px;
  width: 100%;

  background-color: ${colors.terciary};

  list-style: none;
  z-index: 5;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  li:first-child {
    margin-right: 15px;
  }
`;

export const RightSide = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  height: 50px;
`;

interface NavItemProps {
  small?: boolean;
  notificationsPending?: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  margin-right: 40px;
  cursor: pointer;

  ${(props) => props.small && 'margin-right: 0px;'}

  svg {
    color: ${(props) => (props.notificationsPending === true ? colors.red : colors.dark)};

    font-size: 24px;
    font-size: 1.5rem;
  }

  &:hover {
    svg {
      color: ${colors.primary};
    }
  }
`;

interface SidebarProps {
  open: boolean;
}

export const Sidebar = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: fixed;
  left: -272px;

  height: 100%;
  width: 250px;

  border-radius: 0px 0px 7px 7px;

  background-color: ${colors.terciary};

  transition: 0.5s;

  ${(props) => props.open && 'left: 0px;'}
`;

interface NotificationContainerProps {
  open: boolean;
}

export const NotificationContainer = styled.div<NotificationContainerProps>`
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  top: -200vh;
  right: 20px;

  width: 320px;
  height: 480px;
  margin-top: 0px;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;
  overflow-y: auto;

  background-color: ${colors.terciary};

  transition: 0.5s;

  ${(props) => props.open && 'top: 0px; margin-top: 60px;'}
`;

export const NotificationTitle = styled.div`
  color: ${colors.dark};
  font-size: 22px;
  font-weight: bold;
  padding: 15px;
  border-bottom: solid 1px #ccc;
`;

interface StyledLinkProps {
  visible?: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
  align-items: center;

  padding: 10px;

  svg {
    color: ${colors.dark};

    margin-left: 10px;

    font-size: 20px;
    font-size: 1.25rem;
  }

  &:hover {
    background-color: ${colors.primary};
    svg {
      color: ${colors.terciary};
    }
    span {
      color: ${colors.terciary};
    }
  }
`;

export const SidebarItemName = styled.span`
  margin-left: 8px;

  color: ${colors.dark};

  font-size: 22px;
`;

export const SidebarContainer = styled.div<SidebarProps>`
  display: flex;
  flex: 1;
`;

interface SpaceRemainingProps {
  open: boolean;
}

export const SpaceRemaining = styled.div<SpaceRemainingProps>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex: 1;
  z-index: ${({ open }) => (open ? '0' : '-1')};
  position: fixed;

  height: 100vh;
  width: 100%;

  background-color: rgba(0, 0, 0, 0);
`;

export const PageTitle = styled.span`
  font-family: 'Ubuntu';
  font-size: 24px;
  font-weight: bold;

  color: ${colors.dark};

  opacity: 0.75;
`;

interface RedBallProps {
  newNotifications?: boolean;
}

export const RedBall = styled.div<RedBallProps>`
  display: ${({ newNotifications }) => (newNotifications ? 'flex' : 'none')};
  z-index: 100;
  align-items: center;
  justify-content: center;

  height: 16px;
  width: 16px;

  font-size: 12px;

  border-radius: 100px;

  margin: 5px -36px 0 0;

  background-color: ${colors.red};
  color: ${colors.terciary};
`;

interface EmptyContainerProps {
  visible: boolean;
}

export const EmptyContainer = styled.div<EmptyContainerProps>`
  align-self: center;

  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 10px;
  width: 280px;

  margin: 25px 0 10px 0;
  border-radius: 3px;

  background-color: ${colors.terciary};
`;

export const EmptyTitle = styled.span`
  margin-bottom: 10px;

  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;

  color: ${colors.dark};
`;

export const EmptySpan = styled.span`
  font-family: 'Roboto';
  font-size: 14px;

  color: ${colors.text};
`;
