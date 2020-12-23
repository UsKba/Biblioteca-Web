import styled from 'styled-components';

import colors from '~/styles/colors';

import { Button } from '~/components/MainButton/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;

  background-color: #fff;

  @media only screen and (max-width: 640px) {
    justify-content: center;
    padding: 50px 0;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  height: 70%;
  width: 50%;

  margin: 6em 0 0 3em;
  @media only screen and (max-width: 640px) {
    margin: 0;
    align-items: center;
  }
`;

export const T1 = styled.span`
  margin-top: 10px;
  font-weight: bold;

  color: ${colors.dark};

  font-family: 'Ubuntu';
  font-size: 44px;
  @media only screen and (max-width: 640px) {
    margin-top: 50px;
    text-align: center;
    width: 320px;
  }
`;

export const T2 = styled.p`
  text-justify: inter-word;

  margin-top: 2em;

  color: #322c42;

  font-size: 24px;
  font-weight: bold;

  @media only screen and (max-width: 640px) {
    text-align: center;
    width: 230px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 5em;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const OutlineButton = styled(Button)`
  width: 150px;
  padding: 0 5px;

  font-size: 18px;

  margin-right: 20px;
  @media only screen and (max-width: 640px) {
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 680px;
  align-self: center;

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;
