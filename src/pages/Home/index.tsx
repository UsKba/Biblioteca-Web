import React, { useState, useCallback } from 'react';

import FriendList from '~/components/FriendList';
import ReserveList from '~/components/ReserveList';

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
  const [screenSwipe, setScreenSwipe] = useState(1);

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
