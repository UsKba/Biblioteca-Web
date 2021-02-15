import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 200px;

  margin: 2em 0 0 5em;
  @media screen and (max-width: 640px) {
    align-items: center;
    margin: 2em 0 0 0;
  }
`;

export const H1 = styled.div`
  font-family: 'Ubuntu';
  font-size: 55px;
  font-weight: bold;

  margin-left: auto;

  color: #322c42;
  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Line = styled.div`
  height: 3px;
  width: 150px;

  margin-left: auto;

  background-color: ${colors.primary};
`;

export const TextContainer = styled.div`
  width: 30em;
  height: 8em;

  margin: 67px 0 0 39px;
  border-left: solid 3px ${colors.primary};
  border-radius: 3px;
  @media screen and (max-width: 640px) {
    width: 80%;
  }
`;

export const TextContainer2 = styled.div`
  display: flex;
  align-self: right;

  width: 35em;
  height: 10em;

  margin: 20px 0 20px 700px;

  border-right: solid 3px ${colors.primary};
  border-radius: 3px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const Text = styled.div`
  padding: 5px;

  font-family: 'Roboto';
  font-size: 20px;
`;

export const Image = styled.img`
  display: flex;

  width: 500px;
  height: 400px;

  margin-left: 10em;
  margin-right: 3em;
  @media screen and (max-width: 640px) {
    width: 80vw;
    height: auto;
    margin: 16px 0 0 0;

    justify-content: center;
  }
`;

export const MiddleSide = styled.div`
  display: flex;
  @media screen and (max-width: 640px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

interface GoBackProps {
  arrowVisibility?: boolean;
}

export const GoBack = styled.div<GoBackProps>`
  display: flex;
  align-items: center;
  svg {
    display: ${({ arrowVisibility }) => (arrowVisibility === true ? 'none' : 'flex')};
    color: ${colors.dark};
    font-size: 35px;
    cursor: pointer;
    margin-right: 0.3em;

    &:hover {
      color: ${colors.primary};
    }
  }
`;
