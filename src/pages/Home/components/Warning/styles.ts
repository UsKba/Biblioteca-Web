import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.terciary};
  margin-bottom: 60px;
`;

export const WarningTitle = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  width: 100%;

  background-color: ${colors.primary};
  color: ${colors.terciary};

  padding: 6px;

  font-size: 22px;
  font-weight: bold;
  font-family: 'Ubuntu';
`;

export const WarningBody = styled.div`
  display: flex;
  flex-direction: row;
  height: 300px;
  padding: 65px 15px;
`;

export const Image = styled.img`
  margin-right: 20px;

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const Text = styled.div`
  color: ${colors.dark};

  font-size: 18px;
  font-family: 'Roboto';
  font-weight: lighter;

  text-align: justify;
  text-justify: inter-word;
`;
