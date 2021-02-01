import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 220px;

  border-radius: 5px;
  background-color: ${colors.terciary};
`;

export const Title = styled.div`
  padding: 15px;
  font-size: 20px;
  color: ${colors.dark};
  font-family: 'Ubuntu';
  font-weight: bold;
  border-bottom: 1px solid #d8d8d8;
`;

export const Text = styled.div`
  padding: 20px;
  font-size: 18px;
  color: ${colors.dark};
  font-family: 'Roboto';
  font-weight: lighter;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin: 40px 0 0 140px;

  font-size: 20px;
  font-family: 'Roboto';
`;

export const DeclineButton = styled.button`
  width: 90px;
  height: 40px;

  color: ${colors.dark};
  text-decoration: underline;
  background-color: ${colors.terciary};
  border: none;
`;

export const AcceptButton = styled.button`
  width: 90px;
  height: 40px;

  color: white;
  background-color: ${colors.red};
  border: none;
  border-radius: 5px;
`;
