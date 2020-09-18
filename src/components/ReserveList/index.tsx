import React, { useState } from 'react';
import { FaPlus, FaChevronDown } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';

import {
  Container,
  Title,
  TitlePanel,
  ReserveContainer,
  ReserveTopSide,
  ReserveBottomSide,
  ArrowTextContainer,
  ReserveTitle,
  ReserveText,
  ReserveGroupName,
  DeleteReserveButton,
  StyledLink,
  EmptyContainer,
  EmptyTitle,
  EmptySpan,
  GroupMemberList,
  GroupMember,
  GroupMemberIcon,
  GroupMemberName,
} from './styles';

const ReserveList: React.FC = () => {
  const [menuIndex, setMenuIndex] = useState<number>();
  const [reserves, setReserves] = useState([
    {
      title: 'Reserva da sala F1-3',
      text: 'Sala reservada às 07-00 - 08:00 no dia 7 de abril de 2020',
      students: ['Daniel', 'Idaslon', 'Charles'],
      id: 0,
    },
    {
      title: 'Reserva da sala F1-4',
      text: 'Sala reservada às 08-00 - 09:00 no dia 7 de abril de 2020',
      students: ['Bruno', 'Caio', 'Alamberg', 'Sílvio', 'Halyson'],
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
        <ReserveContainer key={String(reserve.id)} small={menuIndex === index} studentsAmount={reserve.students.length}>
          <ReserveTopSide onClick={() => toggleDropmenu(index)} rotateIcon={menuIndex === index}>
            <ReserveTitle>{reserve.title}</ReserveTitle>
            <ArrowTextContainer>
              <ReserveText>{reserve.text}</ReserveText>
              <FaChevronDown />
            </ArrowTextContainer>
            <ReserveText />
            <ReserveGroupName>Os caba</ReserveGroupName>
          </ReserveTopSide>

          <ReserveBottomSide>
            <GroupMemberList>
              {reserve.students.map((student) => (
                <GroupMember key={student}>
                  <GroupMemberIcon>{student[0]}</GroupMemberIcon>
                  <GroupMemberName>{student}</GroupMemberName>
                  <FiTrash2 />
                </GroupMember>
              ))}
            </GroupMemberList>
            <DeleteReserveButton>Cancelar Reserva</DeleteReserveButton>
          </ReserveBottomSide>
        </ReserveContainer>
      ))}
    </Container>
  );
};

export default ReserveList;
