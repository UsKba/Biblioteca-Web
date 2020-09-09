import styled from 'styled-components';

import colors from '~/styles/colors';

import { Button } from '~/pages/Home/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-self: center;
  background-color: #fff;
`;

export const Text = styled.div`
  display: column;
  align-items: center;
  margin: 6em 0 0 3em;
  height: 70%;
  width: 50%;
`;

export const OutlineButton = styled(Button)`
  font-size: 18px;
  width: 211px;
  height: 60px;
  padding: 9px 0;
`;

export const T1 = styled.span`
  font-family: 'Ubuntu';
  font-size: 44px;
  color: ${colors.dark};
  width: 100%;
  height: 11%;
  margin-top: 10px;
  font-weight: bold;
`;

export const T2 = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #322c42;
  width: 60%;
  height: 22%;
  margin-top: 2em;
  text-align: center;
  text-justify: inter-word;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-top: 5em;
`;

export const InitialButton = styled.button`
  margin: 15px 0px;
  background-color: ${colors.terciary};
  border: 3px solid ${colors.primary};
  cursor: pointer;
  color: ${colors.primary};
  font-weight: bold;
  font-size: 16px;
  width: 200px;
  padding: 15px 0px;
  border-radius: 34px;
  outline: none;
  transition: 0.3s;

  &:hover {
    background-color: ${colors.primary}};
    color: ${colors.terciary};
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 16px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 680px;
  align-self: center;
`;
