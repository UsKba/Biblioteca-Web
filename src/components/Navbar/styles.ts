import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

export const Container = styled.div`
  margin-bottom: 70px;
`;

export const Navbar = styled.ul`
  position: fixed;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  height: 70px;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  li:first-child {
    margin-right: 60px;
  }
`;

export const RightSide = styled.div`
  display: flex;
`;

export const MiddleSide = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  height: 50px;
`;

interface NavItemProps {
  small?: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  padding: 10px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  ${(props) => props.small && 'margin-right: 0px;'}

  svg {
    color: #333;

    font-size: 24px;
    font-size: 1.5rem;
  }
`;

interface SidebarProps {
  open: boolean;
}

export const Sidebar = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  background-color: ${colors.terciary};
  width: 270px;
  z-index: 1;
  height: fit-content;
  position: fixed;
  top: 70px;
  height: 100%;
  left: -270px;
  border-radius: 0px 0px 7px 7px;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);

  transition: 0.5s;

  ${(props) => props.open && 'left: 0px;'}
`;

export const SidebarItem = styled.div`
  margin: 10px 15px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  > svg {
    color: #333;

    font-size: 20px;
    font-size: 1.25rem;
  }
`;

export const SidebarItemName = styled.span`
  font-size: 22px;
  margin-left: 8px;
  color: black;
`;
