import styled from 'styled-components';

import colors from '~/styles/colors';

import { Button } from '~/components/MainButton/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-self: center;

  width: 100%;
  height: 100%;

  background-color: #fff;
`;

export const Text = styled.div`
  display: column;
  align-items: center;

  height: 70%;
  width: 50%;

  margin: 6em 0 0 3em;
`;

export const OutlineButton = styled(Button)`
  width: 211px;
  height: 60px;

  padding: 9px 0;

  font-size: 18px;
`;

export const T1 = styled.span`
  width: 100%;
  height: 11%;

  margin-top: 10px;
  font-weight: bold;

  color: ${colors.dark};

  font-family: 'Ubuntu';
  font-size: 44px;
`;

export const T2 = styled.p`
  text-align: center;
  text-justify: inter-word;

  width: 60%;
  height: 22%;

  margin-top: 2em;

  color: #322c42;

  font-size: 24px;
  font-weight: bold;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 60%;

  margin-top: 5em;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 680px;
  align-self: center;
`;
