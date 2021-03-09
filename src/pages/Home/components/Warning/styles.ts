import styled from 'styled-components';

import Carousel from 'react-elastic-carousel';

import colors from '~/styles/colors';

import { Button } from '~/components/MainButton/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${colors.terciary};
`;

export const CustomCarousel = styled(Carousel)`
  button {
    outline: none;
  }
`;

export const WarningTitle = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  width: 100%;

  color: ${colors.dark};

  padding: 12px;
  border-bottom: solid 2px ${colors.primary};

  font-size: 22px;
  font-family: 'Ubuntu';
`;

export const WarningBody = styled.div`
  display: flex;
  flex-direction: row;
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

export const ViewButton = styled(Button)`
  font-size: 16px;
  font-weight: medium;

  height: auto;

  margin: 5px 0 0 0;
  padding: 5px 10px;

  border-radius: 5px;
  border: solid 0.5px rgba(50, 44, 66, 0.5);

  color: ${colors.text};

  &:hover {
    border: solid 0.5px ${colors.primary};
  }
`;
