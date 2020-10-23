import React, { useState } from 'react';

// import api from '~/services/api';
import FriendList from '~/components/FriendList';
import ReserveList from '~/components/ReserveList';

import Notifications from './components/Notifications';
import Profile from './components/Profile';

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
  LibrarianButton,
  StyledLink,
  EmptyContainer,
  EmptySpan,
  EmptyTitle,
} from './styles';

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
          <Line />
        </MobileNavText>
        <MobileNavText onClick={() => handleChangeSwipe(1)}>
          Perfil
          <Line />
        </MobileNavText>
        <MobileNavText onClick={() => handleChangeSwipe(2)}>
          Amigos
          <Line />
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

        <EmptyContainer>
          <EmptyTitle>Caixa de correio vazia...</EmptyTitle>
          <EmptySpan>
            Você não possui nenhuma notificação, quando ocorrer algo na biblioteca nós o avisaremos aqui.
          </EmptySpan>
        </EmptyContainer>

        <StyledLink to="/report">
          <LibrarianButton>Falar com o bibliotecário</LibrarianButton>
        </StyledLink>
      </MiddleSide>

      <RightSide visible={screenSwipe === 2}>
        <SideLine backGroundColor="#638AF2" alignment="flex-start" />
        <FriendList />
      </RightSide>
    </Container>
  );
};

export default Home;
