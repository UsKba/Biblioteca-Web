/* eslint-disable no-alert */
import React, { useState, useEffect, useCallback } from 'react';
import { FaPlus, FaChevronDown, FaTimes } from 'react-icons/fa';

import api from '~/services/api';

import awardIcon from '~/assets/award.svg';
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
  ButtonsContainer,
  DeleteReserveButton,
  QuitReserveButton,
  StyledLink,
  EmptyContainer,
  EmptyTitle,
  EmptySpan,
  GroupMemberList,
  GroupMember,
  GroupMemberIcon,
  GroupMemberName,
  GroupMemberIconArea,
  AwardSvg,
  BageCol,
  BadgePending,
} from './styles';

interface User {
  id: number;
  enrollment: string;
  email: string;
  name: string;
}

export interface ReserveResponse {
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
  users: User[];
  id: number;
  date: string;
  name: string;
  adminId: number;
}

interface ReserveState {
  title: string;
  groupTitle: string;
  text: string;
  users: User[];
  id: number;
  adminId: number;
}

const ReserveList: React.FC = () => {
  const [menuIndex, setMenuIndex] = useState<number>();
  const [reserves, setReserves] = useState([] as ReserveState[]);
  const authContext = useAuth();

  const toggleDropmenu = useCallback(
    (index: number) => {
      if (index === menuIndex) {
        setMenuIndex(undefined);
      } else {
        setMenuIndex(index);
      }
    },
    [menuIndex]
  );

  const isReserveAdmin = useCallback((reserve: ReserveState, user: User) => {
    if (reserve.adminId === user.id) {
      return true;
    }
    return false;
  }, []);

  const showDeleteIcon = useCallback(
    (reserve: ReserveState, user: User) => {
      if (isReserveAdmin(reserve, authContext.user)) {
        if (authContext.user.id === user.id) {
          return 'none';
        }

        return 'inline-block';
      }

      return 'none';
    },
    [authContext.user, isReserveAdmin]
  );

  const quitReserve = useCallback(
    async (reserveToQuit: ReserveState) => {
      const response = window.confirm('Tem certeza que deseja sair desta reserva?');

      if (!response) {
        return;
      }

      if (reserveToQuit.users.length <= 3) {
        const response2 = window.confirm(
          'Atenção! Essa reserva possui apenas 3 membros, se você sair ela será deletada, tem certeza que deseja sair?'
        );

        if (!response2) {
          return;
        }
      }

      try {
        await api.delete(`/reserves/${reserveToQuit.id}/users/${authContext.user.id}`);
        const newReserves = reserves.filter((reserve) => {
          return reserve.id !== reserveToQuit.id;
        });
        setReserves(newReserves);
      } catch (e) {
        alert('Erro ao sair da reserva!');
      }
    },
    [authContext.user.id, reserves]
  );

  const deleteGroupMember = useCallback(
    async (reserveId: number, userId: number) => {
      const findReserve = reserves.find((reserve) => {
        return reserve.id === reserveId;
      });

      const response = window.confirm('Tem certeza que deseja excluir este membro da reserva?');

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
        // console.log(e.response.data);
        alert(e.response.data.error);
      }
    },
    [reserves]
  );

  const deleteReserve = useCallback(
    async (reserveId: number) => {
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
        // console.log(e.response.data);
        alert(e.response.data.error);
      }
    },
    [reserves]
  );

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
          const day = reserveDate.getDate();
          const year = reserveDate.getFullYear();

          const title = `Reserva da sala ${initials}`;
          const text = `Horário: ${initialHour} - ${endHour} no dia: ${day} de ${monthFormatted} de ${year}`;
          return {
            title,
            groupTitle: name,
            text,
            users: reserve.users,
            id,
            adminId: reserve.adminId,
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
        <StyledLink to="/reservar">
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
                {reserve.users.map((user) => (
                  <GroupMember key={user.id}>
                    <GroupMemberIcon>{user.name[0]}</GroupMemberIcon>
                    <BageCol>
                      <GroupMemberName>{user.name}</GroupMemberName>
                      <BadgePending visible={false}>Pendente</BadgePending>
                    </BageCol>

                    <GroupMemberIconArea>
                      <AwardSvg src={awardIcon} alt="medalha" visible={isReserveAdmin(reserve, user)} />
                      <FaTimes
                        display={showDeleteIcon(reserve, user)}
                        onClick={() => deleteGroupMember(reserve.id, user.id)}
                      />
                    </GroupMemberIconArea>
                  </GroupMember>
                ))}
              </GroupMemberList>
              <ButtonsContainer>
                <DeleteReserveButton
                  visible={isReserveAdmin(reserve, authContext.user)}
                  onClick={() => deleteReserve(reserve.id)}
                >
                  {/* visible={amIPartyLeader(reserve)}  */}
                  Deletar Reserva
                </DeleteReserveButton>
                <QuitReserveButton onClick={() => quitReserve(reserve)}>Sair</QuitReserveButton>
              </ButtonsContainer>
            </ReserveBottomSide>
          </ReserveContainer>
        ))}
      </ReservesList>
    </Container>
  );
};

export default ReserveList;
