import styled from 'styled-components';

export const Container = styled.div``;

export const Navbar = styled.ul`
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
  small ?: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  padding: 10px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  ${(props) => {
    if(props.small) return "margin-right: 0px;"
  }}
`;


export const NavLogo = styled.img`
  height: 53px;
  width: 53px;
`;


export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  width: 270px;
  z-index: 1;
  height: 350px;
  position: absolute;
  top: 70px;
  border-radius: 0px 0px 7px 7px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`

export const SidebarItem = styled.div`
  display: flex;
  margin: 10px 15px;
`

export const SidebarItemName = styled.span`
  font-size: 22px;
  margin-left: 8px;
`
