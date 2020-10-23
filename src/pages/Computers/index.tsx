import React, { useState } from 'react';

import Status from '~/components/Status';

import ComputerModal from './components/ComputerModal';
import {
  Container,
  LeftSide,
  MiddleSide,
  MiddleTop,
  MiddleBottom,
  MiddleLeft,
  MiddleRight,
  RightSide,
  H1,
  H2,
  ComputerList,
  ComputerButton,
  ComputerName,
  ComputerSpan,
  ErrorContainer,
  ErrorSpan,
  ErrorSpanLink,
  ComputerStatus,
  ComputerTextContainer,
  MobileNavText,
  MobileNav,
  Line,
} from './styles';

const RoomComputers = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedComputer, setSelectedComputer] = useState('');
  const [screenSwipe, setScreenSwipe] = useState(1);

  function handleChangeSwipe(index: number) {
    setScreenSwipe(index);
  }
  function openModal(computer: string) {
    setSelectedComputer(computer);
    setModalVisible(true);
  }
  return (
    <>
      <ComputerModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedComputer={selectedComputer}
      />
      <Container>
        <MobileNav>
          <MobileNavText onClick={() => handleChangeSwipe(0)}>
            Laboratório
            <Line />
          </MobileNavText>
          <MobileNavText onClick={() => handleChangeSwipe(1)}>
            Biblioteca
            <Line />
          </MobileNavText>
        </MobileNav>

        <LeftSide>
          <Status />
        </LeftSide>
        <MiddleSide>
          <MiddleTop>
            <H1>Computadores</H1>
          </MiddleTop>
          <MiddleBottom>
            <MiddleLeft visible={screenSwipe === 0}>
              <H2>Laboratório</H2>
              <ComputerList>
                <ComputerButton onClick={() => openModal('01')}>
                  <ComputerTextContainer>
                    <ComputerName>Computador 01</ComputerName>
                    <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={0} />
                </ComputerButton>
                <ComputerButton onClick={() => openModal('02')}>
                  <ComputerTextContainer>
                    <ComputerName>Computador 02</ComputerName>
                    <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={0} />
                </ComputerButton>
                <ComputerButton onClick={() => openModal('03')}>
                  <ComputerTextContainer>
                    <ComputerName>Computador 03</ComputerName>
                    <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={1} />
                </ComputerButton>
                <ComputerButton onClick={() => openModal('04')}>
                  <ComputerTextContainer>
                    <ComputerName>Computador 04</ComputerName>
                    <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={3} />
                </ComputerButton>
                <ComputerButton onClick={() => openModal('05')}>
                  <ComputerTextContainer>
                    <ComputerName>Computador 05</ComputerName>
                    <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={1} />
                </ComputerButton>
                <ComputerButton onClick={() => openModal('06')}>
                  <ComputerTextContainer>
                    <ComputerName>Computador 06</ComputerName>
                    <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={0} />
                </ComputerButton>
              </ComputerList>
            </MiddleLeft>
            <MiddleRight visible={screenSwipe === 1}>
              <H2>Biblioteca</H2>
              <ComputerButton onClick={() => openModal('01')}>
                <ComputerTextContainer>
                  <ComputerName>Computador 01</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerTextContainer>
                <ComputerStatus status={0} />
              </ComputerButton>
              <ComputerButton onClick={() => openModal('02')}>
                <ComputerTextContainer>
                  <ComputerName>Computador 02</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerTextContainer>
                <ComputerStatus status={0} />
              </ComputerButton>
              <ComputerButton onClick={() => openModal('03')}>
                <ComputerTextContainer>
                  <ComputerName>Computador 03</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerTextContainer>
                <ComputerStatus status={2} />
              </ComputerButton>
              <ComputerButton onClick={() => openModal('04')}>
                <ComputerTextContainer>
                  <ComputerName>Computador 04</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerTextContainer>
                <ComputerStatus status={1} />
              </ComputerButton>
            </MiddleRight>
          </MiddleBottom>
        </MiddleSide>
        <RightSide>
          <ErrorContainer>
            <ErrorSpan>Nehum computador disponível no momento.</ErrorSpan>
            <ErrorSpanLink>Avise-me quando houver.</ErrorSpanLink>
          </ErrorContainer>
        </RightSide>
      </Container>
    </>
  );
};

export default RoomComputers;
