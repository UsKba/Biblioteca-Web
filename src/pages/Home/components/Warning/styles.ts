import styled from 'styled-components';

import Carousel from 'react-elastic-carousel';

import colors from '~/styles/colors';

import { Button } from '~/components/MainButton/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: ${colors.terciary};
`;

export const CustomCarousel = styled(Carousel)`
  button {
    outline: none;
  }

  #Container {
    border-radius: 3px;
  }
`;

export const WarningTitle = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  width: 100%;

  color: ${colors.dark};

  padding: 12px;
  border-bottom: solid 1.5px ${colors.gray};

  font-size: 22px;
  font-family: 'Ubuntu';
`;

export const WarningBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 45px 15px;
`;

export const WarningDate = styled.span`
  align-self: flex-end;

  font-family: 'Roboto';
  font-size: 16px;

  color: ${colors.dark};

  margin: 0 5px 5px 0;

  span {
  }
`;

export const Image = styled.img`
  height: 176px;
  width: 280px;

  margin-right: 20px;

  @media only screen and (max-width: 1200px) {
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
export const EmptyCenterContainer = styled.div`
  display: flex;

  justify-content: center;

  width: 100%;
`;

interface EmptyContainerProps {
  visible: boolean;
}

export const EmptyContainer = styled.div<EmptyContainerProps>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 280px;

  padding: 10px;
  border-radius: 3px;

  background-color: ${colors.terciary};
`;

export const EmptyTitle = styled.span`
  margin-bottom: 10px;

  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;

  color: ${colors.dark};
`;

export const EmptySpan = styled.span`
  font-family: 'Roboto';
  font-size: 14px;

  color: ${colors.text};
`;
