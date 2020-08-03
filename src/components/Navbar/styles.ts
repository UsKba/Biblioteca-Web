import styled from 'styled-components';

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

export const NavItemName = styled.span`
  margin-top: 5px;
  font-size: 16px;
  color: #333;
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

  ${(props) => {
    if (props.small) return 'margin-right: 0px;';
  }}
`;

export const NavLogo = styled.img`
  height: 53px;
  width: 53px;
`;

interface SidebarProps {
  open: boolean;
}

export const Sidebar = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  background-color: #fff;
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

  ${(props) => {
    if (props.open) return 'left: 0px;';
  }}
`;

export const SidebarItem = styled.div`
  display: flex;
  margin: 10px 15px;
  align-items: center;
`;

export const SidebarItemName = styled.span`
  font-size: 22px;
  margin-left: 8px;
  color: black;
`;
