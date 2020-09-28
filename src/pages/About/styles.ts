import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0 0 5em;
`;

export const H1 = styled.div`
  font-family: 'Ubuntu';
  font-size: 55px;
  color: #322c42;
  font-weight: bold;
`;

export const Line = styled.div`
  height: 3px;
  width: 150px;
  background-color: ${colors.primary};
`;

export const TextContainer = styled.div`
  width: 30em;
  height: 8em;
  margin: 67px 0 0 39px;
  border-left: solid 3px ${colors.primary};
  border-radius: 3px;
`;

export const TextContainer2 = styled.div`
  display: flex;
  width: 35em;
  height: 10em;
  align-self: right;
  margin: 20px 0 20px 700px;
  border-right: solid 3px ${colors.primary};
  border-radius: 3px;
`;

export const Text = styled.div`
  padding: 5px;
  font-family: 'Roboto';
  font-size: 20px;
`;

export const Image = styled.img`
  display: flex;
  margin-right: 3em;
  width: 500px;
  height: 400px;
  margin-left: 10em;
`;

export const MiddleSide = styled.div`
  display: flex;
`;
