import React, { useState, useEffect } from 'react';
import { FaPlus, FaChevronDown } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';

import api from '~/services/api';

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

interface ReserveResponse {
  day: number;
  id: number;
  month: number;
  roomId: number;
  scheduleId: number;
  year: number;
}

interface ReserveState {
  title: string;
  groupTitle: string;
  text: string;
  students: string[];
  id: number;
}

const ReserveList: React.FC = () => {
  const [menuIndex, setMenuIndex] = useState<number>();
  const [reserves, setReserves] = useState([] as ReserveState[]);

  function toggleDropmenu(index: number) {
    if (index === menuIndex) {
      setMenuIndex(undefined);
    } else {
      setMenuIndex(index);
    }
  }
  useEffect(() => {
    async function loadReserves() {
      console.log('alo');

      try {
        const response = await api.get<ReserveResponse[]>('/reserves');
        const formatter = new Intl.DateTimeFormat('pt-br', { month: 'long' });
        console.log(response.data);

        const reservesFormatted = response.data.map((reserve) => {
          const { year, month, day, id } = reserve;
          const reserveDate = new Date(year, month, day);

          const monthFormatted = formatter.format(reserveDate);
          const text = `Sala reservada às 07:00 - 08:00 no dia ${day} de ${monthFormatted} de ${year}`;

          return {
            title: 'Reserva da sala F1-3',
            groupTitle: 'Os cara',
            text,
            students: ['Daniel', 'Idaslon', 'Charles'],
            id,
          };
        });
        setReserves(reservesFormatted);
      } catch (e) {
        // console.log(e.response.data);
        alert(e.response.data.error);
      }
    }
    loadReserves();
  }, []);

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
            <ReserveGroupName>{reserve.groupTitle}</ReserveGroupName>
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
