import styled from 'styled-components';

import { Button } from '~/components/MainButton/styles';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0 0px 120px;
  width: 80%;
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  align-self: center;
  color: ${colors.dark};
  font-size: 53px;
  font-family: 'Ubuntu';
  font-weight: bold;
`;

export const Line = styled.div`
  height: 5px;
  width: 422px;
  margin-top: 2px;
  align-self: center;
  border-radius: 5px;
  background-color: ${colors.primary};
`;

export const Line2 = styled.div`
  height: 5px;
  width: 557px;
  margin-top: 2px;
  align-self: center;
  border-radius: 5px;
  background-color: ${colors.primary};
`;

export const Text = styled.div`
  margin-top: 15px;

  width: 540px;
  color: ${colors.dark};

  font-size: 18px;
  font-family: 'Roboto';
  font-weight: lighter;

  text-align: justify;
  text-justify: inter-word;
`;

export const Image = styled.img`
  display: flex;
`;

export const MiddleSide = styled.div`
  display: flex;
  margin: 100px 0 50px 0;
  flex-direction: column;
  width: auto;
  justify-content: space-around;
`;

export const BottomSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const LittleTitle = styled.div`
  align-self: center;
  color: ${colors.dark};
  font-size: 23px;
  font-family: 'Ubuntu';
`;

export const ButtonLibrary = styled(Button)`
  padding: 0 20px;
  margin-top: 24px;
`;

export const ReferenceGmail = styled.a`
  display: flex;
  align-self: center;
`;
