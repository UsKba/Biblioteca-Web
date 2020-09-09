import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-self: center;
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const TextButton = styled(Link)`
  font-size: 20px;
  color: ${colors.dark};
  margin-right: 20px;
  align-self: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 100px;
  border: 3px solid ${colors.primary};
  align-self: center;
  color: ${colors.primary};
  font-size: 20px;
  padding: 9px 57px;
  margin-right: 20px;
  height: 50px;
  transition: 0.3s;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.terciary};
  }

  &:active {
    background-color: rgba(99, 138, 242, 0.6);
    border: 3px solid rgba(99, 138, 242, 0.9);
  }

  @media screen and (max-width: 600px) {
    margin-right: 0;
  }
`;

export const BottomSide = styled.div`
  display: flex;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 47%;
  height: 100%;
  border-radius: 7px 0 0 7px;

  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 439.21px;
  margin-right: 20px;
  margin-top: 74px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    svg {
      font-size: 30px;
    }
  }

  svg {
    font-size: 50px;
    color: ${colors.dark};
  }
`;

export const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
`;

export const IconSpan = styled.span`
  display: flex;
  padding: 20px;
  width: 100%;
  max-width: 130px;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const H1 = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Ubuntu', sans-serif;
  font-size: 55px;
  color: #322c42;
  width: 100%;
  height: 22%;
  margin-left: 90px;
  margin-bottom: 35px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 32px;
    margin-top: 50px;
  }
`;

export const H2 = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #322c42;
  width: 100%;
  height: 22%;
  margin-left: 90px;
  margin-bottom: 5em;
  @media screen and (max-width: 600px) {
    padding: 40px;
    font-size: 16px;
    margin: 0;
  }
`;

export const Line1 = styled.div`
  background-color: #3d6dcc;
  width: 80px;
  height: 3px;
  @media screen and (max-width: 600px) {
    width: 50px;
  }
`;

export const Line2 = styled.div`
  background-color: #638af2;
  width: 80px;
  height: 3px;
  @media screen and (max-width: 600px) {
    width: 50px;
  }
`;

export const LineContainer = styled.div`
  display: flex;
`;
