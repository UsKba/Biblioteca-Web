import React, { useState } from 'react';

// import api from '~/services/api';

import FriendList from '~/components/FriendList';
import ReserveList from '~/components/ReserveList';

import Notifications from './components/Notifications';
import Profile from './components/Profile';
import Requests from './components/Requests';

// import { AxiosResponseError } from '~/types';

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

const reserve = {
  room: {
    id: 1,
    initials: 'F1-8',
  },
  schedule: {
    id: 1,
    initialHour: '08:00',
    endHour: '09:00',
    periodId: 1,
  },
  users: [
    {
      id: 1,
      enrollment: '2018110401009',
      email: 'dudu@gmail.com',
      name: 'Tallys Aureliano',
    },

    {
      id: 2,
      enrollment: '2018110401010',
      email: 'dede@gmail.com',
      name: 'Tallys asd',
    },

    {
      id: 5,
      enrollment: '2018110401011',
      email: 'dada@gmail.com',
      name: 'Tallys 123',
    },
  ],
  id: 2,
  date: '2020/12/30',
  name: 'Reserva história',
  adminId: 1,
};

const Home: React.FC = () => {
  const [screenSwipe, setScreenSwipe] = useState(1);

  function handleChangeSwipe(index: number) {
    setScreenSwipe(index);
  }
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

        <Title>Notificações</Title>
        <Notifications />
        <Requests reserve={reserve} />

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
