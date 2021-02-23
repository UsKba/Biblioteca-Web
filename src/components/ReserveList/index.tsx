/* eslint-disable no-alert */
import React, { useState, useEffect, useCallback } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlus, FaChevronDown, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { deleteRequest } from '~/utils/api';

import awardIcon from '~/assets/award.svg';
import reserveConfig from '~/config/reserve';
import { useAuth } from '~/contexts/AuthContext';
import { useReserve } from '~/contexts/ReserveContext';
import { User } from '~/types';

import QuitReserveModal from './QuitReserveModal';
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
import { ReserveState } from './types';

const pageTitle = { '/reservar': false };

const ReserveList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [reserveToQuit, setReserveToQuit] = useState<ReserveState>();
  const [menuIndex, setMenuIndex] = useState<number>();
  const [reserves, setReserves] = useState([] as ReserveState[]);
  const authContext = useAuth();
  const reserveContext = useReserve();
  const location = useLocation();

  const handleQuitReserve = useCallback(async () => {
    if (!reserveToQuit) {
      return;
    }

    const { error } = await deleteRequest(`/reserves/${reserveToQuit.id}/users/${authContext.user.id}`);

    if (error) {
      alert(error.error);
      return;
    }

    const newReserves = reserves.filter((reserve) => {
      return reserve.id !== reserveToQuit.id;
    });

    setReserves(newReserves);
  }, [authContext.user.id, reserveToQuit, reserves]);

  function handleMinimumUsers() {
    toast.dark('Pelo menos 3 usuários na reserva são necessários', {});
  }
  function handleNotFindReserve() {
    toast.dark('Reserva não encontrada', {});
  }
  function handleDeleteReserveToast() {
    toast.dark('Reserva deletada!', {});
  }
  function handleDeleteUserToast() {
    toast.dark('Usuário deletado!', {});
  }

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

  const reserveDayClose = useCallback((reserve: ReserveState) => {
    const d = new Date();

    if (reserve.date === d.getDate()) {
      return true;
    }
    return false;
  }, []);

  const cardVisible = useCallback((reserve: ReserveState) => {
    const loggedUser = reserve.users.find((user) => authContext.user.id === user.id);
    if (loggedUser?.status === reserveConfig.statusAccepted) {
      return true;
    }
    return false;
    // [to-do bug] ao colocar dependência, para de funcionar
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLoggedAccepted = useCallback(
    (reserve: ReserveState) => {
      const loggedUser = reserve.users.find((user) => authContext.user.id === user.id);
      if (loggedUser?.status === reserveConfig.statusAccepted) {
        return true;
      }
      return false;
    },
    [authContext.user.id]
  );

  const userLoggedRefusedAllReserves = useCallback(() => {
    for (let i = 0; i < reserves.length; i += 1) {
      const userAccepted = userLoggedAccepted(reserves[i]);
      if (userAccepted) {
        return false;
      }
    }
    return true;
  }, [reserves, userLoggedAccepted]);

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

  const quitReserve = useCallback((reserve: ReserveState) => {
    setModalVisible(true);
    setReserveToQuit(reserve);
  }, []);

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
        handleNotFindReserve();
        // alert('Reserva não encontrada');
        return;
      }

      if (findReserve.users.length <= 3) {
        handleMinimumUsers();
        // alert('Pelo menos 3 usuários na reserva são necessários');
        return;
      }

      const { error } = await deleteRequest(`/reserves/${reserveId}/users/${userId}`);

      if (error) {
        alert(error.error);
        return;
      }
      handleDeleteUserToast();
      // alert('Usuário deletado!');
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
    },
    [reserves]
  );

  const deleteReserve = useCallback(
    async (reserveId: number) => {
      const response = window.confirm('Tem certeza que deseja excluir esta reserva?');

      if (!response) {
        return;
      }

      const { error } = await deleteRequest(`/reserves/${reserveId}`);

      if (error) {
        alert(error.error);
        return;
      }
      handleDeleteReserveToast();
      // alert('Reserva deletada!');

      const newReserves = reserves.filter((reserve) => {
        return reserve.id !== reserveId;
      });

      setReserves(newReserves);
    },
    [reserves]
  );

  useEffect(() => {
    async function loadReserves() {
      const formatter = new Intl.DateTimeFormat('pt-br', { month: 'long' });

      const reservesFormatted = reserveContext.reserves.map((reserve) => {
        const { date, name, id } = reserve;
        const { initials } = reserve.room;
        const { initialHour, endHour } = reserve.schedule;

        const reserveDate = new Date(date);
        const monthFormatted = formatter.format(reserveDate);
        const day = reserveDate.getDate();
        const month = reserveDate.getMonth() + 1;

        const year = reserveDate.getFullYear();

        function getDayName(dateStr, locale) {
          const nameDate = new Date(dateStr);
          return nameDate.toLocaleDateString(locale, { weekday: 'long' });
        }

        const dateStr = `${month}/${day}/${year}`;
        const dayName = getDayName(dateStr, 'pt-BR');
        const title = `Reserva da sala ${initials}`;
        const text = `Horário: ${initialHour} - ${endHour} no dia: ${day} de ${monthFormatted} de ${year} (${dayName})`;

        return {
          title,
          groupTitle: name,
          text,
          users: reserve.users,
          id,
          adminId: reserve.adminId,
          date: reserveDate.getDate(),
        };
      });

      setReserves(reservesFormatted);
    }
    loadReserves();
  }, [reserveContext.reserves]);

  const checkPageURL = useCallback(() => {
    const title = pageTitle[location.pathname];
    return title;
  }, [location.pathname]);

  return (
    <Container>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <QuitReserveModal
        visible={modalVisible}
        setVisible={setModalVisible}
        reserveToQuit={reserveToQuit || ({} as ReserveState)}
        onConfirm={handleQuitReserve}
      />
      <TitlePanel visible={checkPageURL()}>
        <Title>Reservas</Title>
        <StyledLink to="/reservar">
          <FaPlus />
        </StyledLink>
      </TitlePanel>

      <EmptyContainer visible={reserves.length === 0 || userLoggedRefusedAllReserves()}>
        <EmptyTitle>Não há reservas...</EmptyTitle>
        <EmptySpan>Você não possui reservas, reserve uma sala na página de reservas.</EmptySpan>
      </EmptyContainer>

      <ReservesList>
        {reserves.map((reserve, index) => (
          <ReserveContainer
            visible={cardVisible(reserve)}
            key={String(reserve.id)}
            small={menuIndex === index}
            usersAmount={reserve.users.length}
            reserveTitle={Boolean(reserve.groupTitle)}
            changeColor={reserveDayClose(reserve)}
          >
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
                    <GroupMemberIcon bgColor={user.color}>{user.name[0]}</GroupMemberIcon>
                    <BageCol>
                      <GroupMemberName>{user.name}</GroupMemberName>
                      <BadgePending visible={user.status === reserveConfig.statusPending}>Pendente</BadgePending>
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
