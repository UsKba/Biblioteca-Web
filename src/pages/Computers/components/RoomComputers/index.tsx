import React, { useState } from 'react';

import Status from '~/components/Status';

import ComputerModal from '../ComputerModal';
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
} from './styles';

interface Props {
  handleClick: (state: boolean) => void;
}
const RoomComputers = ({ handleClick }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedComputer, setSelectedComputer] = useState('');
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
        <LeftSide>
          <Status />
        </LeftSide>
        <MiddleSide>
          <MiddleTop>
            <H1>Computadores</H1>
          </MiddleTop>
          <MiddleBottom>
            <MiddleLeft>
              <H2>Laboratório</H2>
              <ComputerList>
                <ComputerButton onClick={() => openModal('01')}>
                  <ComputerName>Computador 01</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerButton>
                <ComputerButton onClick={() => openModal('02')}>
                  <ComputerName>Computador 02</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerButton>
                <ComputerButton onClick={() => openModal('03')}>
                  <ComputerName>Computador 03</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerButton>
                <ComputerButton onClick={() => openModal('04')}>
                  <ComputerName>Computador 04</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerButton>
                <ComputerButton onClick={() => openModal('05')}>
                  <ComputerName>Computador 05</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerButton>
                <ComputerButton onClick={() => openModal('06')}>
                  <ComputerName>Computador 06</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerButton>
              </ComputerList>
            </MiddleLeft>
            <MiddleRight>
              <H2>Biblioteca</H2>
              <ComputerButton onClick={() => openModal('01')}>
                <ComputerName>Computador 01</ComputerName>
                <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
              </ComputerButton>
              <ComputerButton onClick={() => openModal('02')}>
                <ComputerName>Computador 02</ComputerName>
                <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
              </ComputerButton>
              <ComputerButton onClick={() => openModal('03')}>
                <ComputerName>Computador 03</ComputerName>
                <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
              </ComputerButton>
              <ComputerButton onClick={() => openModal('04')}>
                <ComputerName>Computador 04</ComputerName>
                <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
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
