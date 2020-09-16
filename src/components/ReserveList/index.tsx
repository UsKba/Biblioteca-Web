import React, { useState } from 'react';
import { FaChevronDown, FaPlus } from 'react-icons/fa';

import {
  Container,
  Title,
  TitlePanel,
  ReserveContainer,
  ArrowTextContainer,
  ReserveTitle,
  ReserveText,
  ReserveGroupName,
  StyledLink,
  EmptyContainer,
  EmptyTitle,
  EmptySpan,
} from './styles';

const ReserveList: React.FC = () => {
  const [menuIndex, setMenuIndex] = useState<number>();
  const [reserves, setReserves] = useState([
    {
      title: 'Reserva da sala F1-1',
      text: 'Sala reservada às 07-00 - 08:00 no dia 7 de abril de 2020',
      id: 0,
    },
    {
      title: 'Reserva da sala F1-2',
      text: 'Sala reservada às 08-00 - 09:00 no dia 7 de abril de 2020',
      id: 1,
    },
  ]);

  function toggleDropmenu(index: number) {
    if (index === menuIndex) {
      setMenuIndex(undefined);
    } else {
      setMenuIndex(index);
    }
  }
  return (
    <Container>
      <TitlePanel>
        <Title>Reservas</Title>
        <StyledLink to="/rent">
          <FaPlus />
        </StyledLink>
      </TitlePanel>

      <EmptyContainer>
        <EmptyTitle>Não há reservas...</EmptyTitle>
        <EmptySpan>Você não possui reservas, reserve uma sala na página de reservas.</EmptySpan>
      </EmptyContainer>
      {reserves.map((reserve, index) => (
        <ReserveContainer key={String(reserve.id)} small={menuIndex === index}>
          <ReserveTitle>{reserve.title}</ReserveTitle>
          <ArrowTextContainer onClick={() => toggleDropmenu(index)}>
            <ReserveText>{reserve.text}</ReserveText>
            <FaChevronDown />
          </ArrowTextContainer>
          <ReserveText />
          <ReserveGroupName>Os caba</ReserveGroupName>
        </ReserveContainer>
      ))}
    </Container>
  );
};

export default ReserveList;
