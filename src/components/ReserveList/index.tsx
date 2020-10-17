import React, { useState, useEffect } from 'react';
import { FaPlus, FaChevronDown, FaTimes } from 'react-icons/fa';

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
  room: {
    id: number;
    initials: string;
  };
  schedule: {
    id: number;
    initialHour: string;
    endHour: string;
    periodId: number;
  };
  users: {
    id: number;
    role: {
      id: number;
      name: string;
      slug: string;
    };
    enrollment: string;
    email: string;
    name: string;
  }[];
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
  students: {
    name: string;
    id: number;
    role: {
      id: number;
      name: string;
      slug: string;
    };
    enrollment: string;
    email: string;
  }[];

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

  async function deleteGroupMember(reserveId: number, userId: number) {
    const findReserve = reserves.find((reserve) => {
      return reserve.id === reserveId;
    });

    if (findReserve === undefined) {
      alert('Reserva não encontrada');
      return;
    }

    if (findReserve.students.length <= 3) {
      alert('Pelo menos 3 usuários na reserva são necessários');
      return;
    }
    try {
      const response = await api.delete(`/reserves/${reserveId}/users/${userId}`);
      alert('Usuário deletado!');
    } catch (e) {
      console.log(e.response.data);
      alert(e.response.data.error);
    }

    // const newStudents = findReserve.students.filter((student) => {
    //   if(userId !== )
    // });
  }

  useEffect(() => {
    async function loadReserves() {
      try {
        const response = await api.get<ReserveResponse[]>('/reserves');
        const formatter = new Intl.DateTimeFormat('pt-br', { month: 'long' });
        console.log(response.data);

        const reservesFormatted = response.data.map((reserve) => {
          const { year, month, day, id } = reserve;
          const { initials } = reserve.room;
          const { initialHour, endHour } = reserve.schedule;

          const reserveDate = new Date(year, month, day);

          const monthFormatted = formatter.format(reserveDate);
          const title = `Reserva da sala ${initials}`;
          const text = `Sala reservada às ${initialHour} - ${endHour} no dia ${day} de ${monthFormatted} de ${year}`;

          // const students = reserve.users.map((user) => {
          //   return {
          //     name: user.name,
          //     id: user.id,
          //   };
          // });
          return {
            title,
            groupTitle: 'Os cara',
            text,
            students: reserve.users,
            id,
          };
        });
        setReserves(reservesFormatted);
      } catch (e) {
        // console.log(e.response.data);
        // alert(e.response.data.error);
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
                <GroupMember key={student.id}>
                  <GroupMemberIcon>{student.name[0]}</GroupMemberIcon>
                  <GroupMemberName>{student.name}</GroupMemberName>
                  <FaTimes onClick={() => deleteGroupMember(reserve.id, student.id)} />
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
