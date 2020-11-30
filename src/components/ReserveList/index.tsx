import React, { useState, useEffect, useContext } from 'react';
import { FaPlus, FaChevronDown, FaTimes, FaCrown } from 'react-icons/fa';

import api from '~/services/api';

import { useAuth } from '~/contexts/AuthContext';

import {
  Container,
  Title,
  TitlePanel,
  ReserveContainer,
  ReserveTopSide,
  ReserveBottomSide,
  ArrowTextContainer,
  ReservesList,
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
  GroupMemberIconArea,
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
    enrollment: string;
    email: string;
    name: string;
  }[];
  id: number;
  date: string;
  name: string;
}

interface ReserveState {
  title: string;
  groupTitle: string;
  text: string;
  users: {
    name: string;
    id: number;
    enrollment: string;
    email: string;
  }[];
  id: number;
}

const ReserveList: React.FC = () => {
  const [menuIndex, setMenuIndex] = useState<number>();
  const [reserves, setReserves] = useState([] as ReserveState[]);
  const authContext = useAuth();

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

    const response = window.confirm('Tem certeza que deseja excluir este membro do grupo?');

    if (!response) {
      return;
    }

    if (findReserve === undefined) {
      alert('Reserva não encontrada');
      return;
    }

    if (findReserve.users.length <= 3) {
      alert('Pelo menos 3 usuários na reserva são necessários');
      return;
    }
    try {
      await api.delete(`/reserves/${reserveId}/users/${userId}`);
      alert('Usuário deletado!');

      const newUsers = findReserve.users.filter((user) => {
        return user.id !== userId;
      });
      const newReserves = reserves.map((reserve) => {
        if (reserve.id === reserveId) {
          return {
            ...reserve,
            users: newUsers,
          };
        }
        return reserve;
      });
      setReserves(newReserves);
    } catch (e) {
      console.log(e.response.data);
      alert(e.response.data.error);
    }
  }

  async function deleteReserve(reserveId: number) {
    const response = window.confirm('Tem certeza que deseja excluir esta reserva?');

    if (!response) {
      return;
    }
    try {
      await api.delete(`/reserves/${reserveId}`);
      alert('Reserva deletada');

      const newReserves = reserves.filter((reserve) => {
        return reserve.id !== reserveId;
      });

      setReserves(newReserves);
    } catch (e) {
      console.log(e.response.data);
      alert(e.response.data.error);
    }
  }

  useEffect(() => {
    async function loadReserves() {
      try {
        const response = await api.get<ReserveResponse[]>('/reserves');
        const formatter = new Intl.DateTimeFormat('pt-br', { month: 'long' });
        // console.log('Reservas:');
        // console.log(response.data);

        const reservesFormatted = response.data.map((reserve) => {
          const { date, name, id } = reserve;
          const { initials } = reserve.room;
          const { initialHour, endHour } = reserve.schedule;

          const reserveDate = new Date(date);
          const monthFormatted = formatter.format(reserveDate);
          const day = reserveDate.getDay();
          const year = reserveDate.getFullYear();

          const title = `Reserva da sala ${initials}`;
          const text = `Sala reservada às ${initialHour} - ${endHour} no dia ${day} de ${monthFormatted} de ${year}`;
          return {
            title,
            groupTitle: name,
            text,
            users: reserve.users,
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

  /*
  let emptyContainerVisible;

  if (reserves.length === 0){
   emptyContainerVisible = true;
  }else{
    emptyContainerVisible = false;
  }

  É IGUAL A

  emptyContainerVisible = reserves.length === 0

  */

  function amIPartyLeader(reserve: ReserveState) {
    return false;
    // const leader = reserve.users.find((user) => user.role.slug === 'administrador');
    // console.log('Leader: ', leader);
    // if (!leader) return false;
    // console.log('I am: ', authContext.user);
    // console.log('Returning: ', authContext.user.enrollment === leader.enrollment);
    // return authContext.user.enrollment === leader.enrollment;
  }

  return (
    <Container>
      <TitlePanel>
        <Title>Reservas</Title>
        <StyledLink to="/rent">
          <FaPlus />
        </StyledLink>
      </TitlePanel>

      <EmptyContainer visible={reserves.length === 0}>
        <EmptyTitle>Não há reservas...</EmptyTitle>
        <EmptySpan>Você não possui reservas, reserve uma sala na página de reservas.</EmptySpan>
      </EmptyContainer>

      <ReservesList>
        {reserves.map((reserve, index) => (
          <ReserveContainer key={String(reserve.id)} small={menuIndex === index} usersAmount={reserve.users.length}>
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
                {reserve.users.map((student) => (
                  <GroupMember key={student.id}>
                    <GroupMemberIcon>{student.name[0]}</GroupMemberIcon>
                    <GroupMemberName>{student.name}</GroupMemberName>

                    <GroupMemberIconArea>
                      {/* <FaCrown visibility={student.role.slug === 'administrador' ? 'visible' : 'hidden'} /> */}

                      <FaTimes
                        visibility={
                          amIPartyLeader(reserve) && student.enrollment !== authContext.user.enrollment
                            ? 'visible'
                            : 'hidden'
                        }
                        onClick={() => deleteGroupMember(reserve.id, student.id)}
                      />
                    </GroupMemberIconArea>
                  </GroupMember>
                ))}
              </GroupMemberList>
              <DeleteReserveButton visible onClick={() => deleteReserve(reserve.id)}>
                {/* visible={amIPartyLeader(reserve)}  */}
                Deletar Reserva
              </DeleteReserveButton>
            </ReserveBottomSide>
          </ReserveContainer>
        ))}
      </ReservesList>
    </Container>
  );
};

export default ReserveList;
