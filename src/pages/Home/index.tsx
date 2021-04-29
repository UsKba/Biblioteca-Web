import React, { useState, useCallback } from 'react';

// import ConfirmModal from '~/components/ConfirmModal';
import FriendList from '~/components/FriendList';
import ReserveList from '~/components/ReserveList';

import Profile from './components/Profile';
import Warning from './components/Warning';

// import Notifications from './components/Notifications';

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
  // const [modalVisible, setModalVisible] = useState(false);
  const [screenSwipe, setScreenSwipe] = useState(1);

  // const handleOpenModal = useCallback(() => {
  //   setModalVisible(true);
  // }, []);

  // const handleCloseModal = useCallback(() => {
  //   setModalVisible(false);
  // }, []);

  const handleChangeSwipe = useCallback((index: number) => {
    setScreenSwipe(index);
  }, []);
  const TITLE = 'Smart Library';

  return (
    <Container>
      <title>{TITLE}</title>

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
        <SideLine alignment="flex-end" />
      </LeftSide>

      <MiddleSide visible={screenSwipe === 1}>
        <Title>Perfil</Title>
        <Profile />
        <Title>Avisos</Title>

        <Warning />

        <EmptyContainer>
          <EmptyTitle>Caixa de correio vazia...</EmptyTitle>
          <EmptySpan>Nenhum aviso encontrado, quando ocorrer algo na biblioteca nós o avisaremos aqui.</EmptySpan>
        </EmptyContainer>
      </MiddleSide>

      <RightSide visible={screenSwipe === 2}>
        <SideLine alignment="flex-start" />
        <FriendList />
      </RightSide>
    </Container>
  );
};

export default Home;
