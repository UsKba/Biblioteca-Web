import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1200px) {
    margin-right: 70px;
  }
  @media only screen and (max-width: 640px) {
    margin-right: 30px;
    margin-left: 0;
  }
`;

export const H1 = styled.h1`
  display: flex;
  width: fit-content;
  font-family: 'Ubuntu';
  font-size: 50px;
  font-weight: lighter;

  padding-bottom: 15px;
  border-bottom: solid 3px ${colors.primary};

  /* text-decoration: underline ${colors.lightprimary};
  text-underline-position: under; */

  margin: 50px 0 0 100px;

  color: #322c42;
  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin: 50px 0 0 20px;
  }
`;

export const TextContainer = styled.div`
  width: 1000px;

  margin: 30px 0 0 100px;
  border-radius: 3px;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 640px) {
    margin: 30px 0 0 40px;
  }
`;

export const Text = styled.div`
  padding: 5px;

  font-family: 'Roboto';
  text-align: justify;
  text-justify: inter-word;
  font-size: 20px;
`;

export const Image = styled.img`
  width: 500px;
  height: 400px;

  margin: 0 100px 40px auto;
  @media screen and (max-width: 640px) {
    width: 80vw;
    height: auto;
    margin: 16px 0 0 0;

    justify-content: center;
  }
`;

interface GoBackProps {
  arrowVisibility?: boolean;
}

export const GoBack = styled.div<GoBackProps>`
  display: flex;
  align-items: center;
  position: absolute;

  top: 25px;
  left: 25px;

  svg {
    display: ${({ arrowVisibility }) => (arrowVisibility === true ? 'none' : 'flex')};
    color: ${colors.dark};
    font-size: 35px;
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
    }
  }
`;
