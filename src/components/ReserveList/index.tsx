import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import {
  Container,
  Title,
  ReserveContainer,
  ArrowTextContainer,
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
        <ReserveTitle>Reserva da Sala F1-3</ReserveTitle>
        <ArrowTextContainer>
          <ReserveText>Sala reservada às 07-00 - 08:00 no dia 7 de abril de 2020</ReserveText>
          <FaChevronDown />
        </ArrowTextContainer>
        <ReserveText />
        <ReserveGroupName>Os caba</ReserveGroupName>
      </ReserveContainer>
      <ReserveContainer>
        <ReserveTitle>Reserva da Sala F1-3</ReserveTitle>
        <ArrowTextContainer>
          <ReserveText>Sala reservada às 07-00 - 08:00 no dia 7 de abril de 2020</ReserveText>
          <FaChevronDown />
        </ArrowTextContainer>
        <ReserveText />
        <ReserveGroupName>Os caba</ReserveGroupName>
      </ReserveContainer>
      <ReserveContainer>
        <ReserveTitle>Reserva da Sala F1-3</ReserveTitle>
        <ArrowTextContainer>
          <ReserveText>Sala reservada às 07-00 - 08:00 no dia 7 de abril de 2020</ReserveText>
          <FaChevronDown />
        </ArrowTextContainer>
        <ReserveText />
        <ReserveGroupName>Os caba</ReserveGroupName>
      </ReserveContainer>
    </Container>
  );
};

export default ReserveList;
