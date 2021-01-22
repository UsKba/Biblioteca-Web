import React, { useEffect, useState, useCallback } from 'react';

import FriendList from '~/components/FriendList';
import ReserveList from '~/components/ReserveList';

import { useAuth } from '~/contexts/AuthContext';
import { useReserve } from '~/contexts/ReserveContext';
import { Reserve } from '~/types';

import NotificationReserve from './components/NotificationReserve';
// import Notifications from './components/Notifications';
import Profile from './components/Profile';
import {
  Container,
  LeftSide,
  MiddleSide,
  RightSide,
  SideLine,
  Title,
  MobileNav,
  MobileNavText,
  Line,
  EmptyContainer,
  EmptySpan,
  EmptyTitle,
} from './styles';

const Home: React.FC = () => {
  const auth = useAuth();
  const [screenSwipe, setScreenSwipe] = useState(1);
  const [pendingReserveList, setPendingReserveList] = useState([] as Reserve[]);
  const { reserves } = useReserve();

  useEffect(() => {
    if (reserves.length === 0) {
      return;
    }

    const pendingReserves = [] as Reserve[];

    for (let i = 0; i < reserves.length; i += 1) {
      const users1 = reserves[i].users;

      const userLogged = users1.find((user) => user.id === auth.user.id);
      if (userLogged?.status === 0) {
        // console.log('Usuário logado não aceitou a reserva');
        pendingReserves.push(reserves[i]);
      }
      // console.log(users1);
    }

    setPendingReserveList(pendingReserves);
  }, [auth.user.id, reserves]);

  const handleChangeSwipe = useCallback((index: number) => {
    setScreenSwipe(index);
  }, []);

  return (
    <Container>
      <MobileNav>
        <MobileNavText onClick={() => handleChangeSwipe(0)}>
          Reservas
          <Line active={screenSwipe === 0} />
        </MobileNavText>
        <MobileNavText onClick={() => handleChangeSwipe(1)}>
          Perfil
          <Line active={screenSwipe === 1} />
        </MobileNavText>
        <MobileNavText onClick={() => handleChangeSwipe(2)}>
          Amigos
          <Line active={screenSwipe === 2} />
        </MobileNavText>
      </MobileNav>

      <LeftSide visible={screenSwipe === 0}>
        <ReserveList />
        <SideLine backGroundColor="#3D6DCC" alignment="flex-end" />
      </LeftSide>

      <MiddleSide visible={screenSwipe === 1}>
        <Title>Perfil</Title>
        <Profile />

        {/* <Title>Avisos</Title> */}
        {/* <Notifications /> */}

        {pendingReserveList.map((reserve) => (
          <NotificationReserve key={reserve.id} reserve={reserve} />
        ))}

        <EmptyContainer>
          <EmptyTitle>Caixa de correio vazia...</EmptyTitle>
          <EmptySpan>
            Você não possui nenhuma notificação, quando ocorrer algo na biblioteca nós o avisaremos aqui.
          </EmptySpan>
        </EmptyContainer>
      </MiddleSide>

      <RightSide visible={screenSwipe === 2}>
        <SideLine backGroundColor="#638AF2" alignment="flex-start" />
        <FriendList />
      </RightSide>
    </Container>
  );
};

export default Home;
