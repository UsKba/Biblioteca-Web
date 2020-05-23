import styled from 'styled-components';

export const Container = styled.div``;
export const Navbar = styled.ul`
  background-color: #333;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  list-style: none;
  justify-content: space-between;
`;

export const Leftside = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Rightside = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavItemName = styled.span`
  margin-top: 5px;
  font-size: 20px;
  color: #fff;
`;

export const NavItem = styled.li`
  padding: 10px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const NavLogo = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 80px;
`;
