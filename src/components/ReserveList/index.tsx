import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import {
  Container,
  Title,
  ReserveContainer,
  ReserveLeftSide,
  ReserveRightSide,
  ReserveTitle,
  ReserveText,
  ReserveGroupName,
} from './styles';

// import { Container } from './styles';

const ReserveList: React.FC = () => {
  return (
    <Container>
      <Title>Reservas</Title>
      <ReserveContainer>
        <ReserveLeftSide>
          <ReserveTitle>Reserva da Sala F1-3</ReserveTitle>
          <ReserveText>Sala reservada às 07-00 - 08:00 no dia</ReserveText>
          <ReserveText>7 de abril de 2020</ReserveText>
          <ReserveGroupName>Os caba</ReserveGroupName>
        </ReserveLeftSide>
        <ReserveRightSide>
          <FaChevronDown />
        </ReserveRightSide>
      </ReserveContainer>
      <ReserveContainer>
        <ReserveLeftSide>
          <ReserveTitle>Reserva da Sala F1-3</ReserveTitle>
          <ReserveText>Sala reservada às 07-00 - 08:00 no dia</ReserveText>
          <ReserveText>7 de abril de 2020</ReserveText>
          <ReserveGroupName>Os caba</ReserveGroupName>
        </ReserveLeftSide>
        <ReserveRightSide>
          <FaChevronDown />
        </ReserveRightSide>
      </ReserveContainer>
      <ReserveContainer>
        <ReserveLeftSide>
          <ReserveTitle>Reserva da Sala F1-3</ReserveTitle>
          <ReserveText>Sala reservada às 07-00 - 08:00 no dia</ReserveText>
          <ReserveText>7 de abril de 2020</ReserveText>
          <ReserveGroupName>Os caba</ReserveGroupName>
        </ReserveLeftSide>
        <ReserveRightSide>
          <FaChevronDown />
        </ReserveRightSide>
      </ReserveContainer>
    </Container>
  );
};

export default ReserveList;
