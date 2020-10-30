import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;

  width: 100%;
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
  align-self: center;

  margin-right: 20px;

  font-size: 20px;
  color: ${colors.dark};
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
  text-align: center;
  justify-content: center;

  width: 100%;
  max-width: 130px;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const H1 = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 22%;
  margin-left: 90px;
  margin-bottom: 35px;

  color: #322c42;

  font-weight: bold;
  font-family: 'Ubuntu', sans-serif;
  font-size: 55px;

  @media screen and (max-width: 600px) {
    font-size: 32px;
    margin-top: 50px;
  }
`;

export const H2 = styled.p`
  width: 100%;
  height: 22%;

  margin-left: 90px;
  margin-bottom: 5em;

  color: #322c42;
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    padding: 40px;
    font-size: 16px;
    margin: 0;
  }
`;

export const Line1 = styled.div`
  width: 80px;
  height: 3px;

  background-color: #3d6dcc;

  @media screen and (max-width: 600px) {
    width: 50px;
  }
`;

export const Line2 = styled.div`
  width: 80px;
  height: 3px;

  background-color: #638af2;

  @media screen and (max-width: 600px) {
    width: 50px;
  }
`;

export const LineContainer = styled.div`
  display: flex;
`;
