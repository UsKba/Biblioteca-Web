import React, { useState, useCallback } from 'react';

import colors from '~/styles/colors';

import Status from '~/components/Status';

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
  ComputerContainer,
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
  MobileStatus,
  MobileStatusContainer,
  MobileStatusSpan,
  MobileStatusList,
} from './styles';

const RoomComputers = () => {
  const [screenSwipe, setScreenSwipe] = useState(1);

  const handleChangeSwipe = useCallback((index: number) => {
    setScreenSwipe(index);
  }, []);

  return (
    <>
      <Container>
        <MobileNav>
          <MobileNavText onClick={() => handleChangeSwipe(0)}>
            Laboratório
            <Line active={screenSwipe === 0} />
          </MobileNavText>
          <MobileNavText onClick={() => handleChangeSwipe(1)}>
            Biblioteca
            <Line active={screenSwipe === 1} />
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
                <ComputerContainer>
                  <ComputerTextContainer>
                    <ComputerName>Computador 01</ComputerName>
                    <ComputerSpan>Este computador está disponível</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={0} />
                </ComputerContainer>
                <ComputerContainer>
                  <ComputerTextContainer>
                    <ComputerName>Computador 02</ComputerName>
                    <ComputerSpan>Este computador está disponível</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={0} />
                </ComputerContainer>
                <ComputerContainer>
                  <ComputerTextContainer>
                    <ComputerName>Computador 03</ComputerName>
                    <ComputerSpan>Este computador está ausente há 2 horas e 30 minutos</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={1} />
                </ComputerContainer>
                <ComputerContainer>
                  <ComputerTextContainer>
                    <ComputerName>Computador 04</ComputerName>
                    <ComputerSpan>Este computador está indisponível</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={3} />
                </ComputerContainer>
                <ComputerContainer>
                  <ComputerTextContainer>
                    <ComputerName>Computador 05</ComputerName>
                    <ComputerSpan>Este computador está ausente há 2 horas e 30 minutos</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={1} />
                </ComputerContainer>
                <ComputerContainer>
                  <ComputerTextContainer>
                    <ComputerName>Computador 06</ComputerName>
                    <ComputerSpan>Este computador está disponível</ComputerSpan>
                  </ComputerTextContainer>
                  <ComputerStatus status={0} />
                </ComputerContainer>
              </ComputerList>
            </MiddleLeft>
            <MiddleRight visible={screenSwipe === 1}>
              <H2>Biblioteca</H2>
              <ComputerContainer>
                <ComputerTextContainer>
                  <ComputerName>Computador 01</ComputerName>
                  <ComputerSpan>Este computador está disponível</ComputerSpan>
                </ComputerTextContainer>
                <ComputerStatus status={0} />
              </ComputerContainer>
              <ComputerContainer>
                <ComputerTextContainer>
                  <ComputerName>Computador 02</ComputerName>
                  <ComputerSpan>Este computador está disponível</ComputerSpan>
                </ComputerTextContainer>
                <ComputerStatus status={0} />
              </ComputerContainer>
              <ComputerContainer>
                <ComputerTextContainer>
                  <ComputerName>Computador 03</ComputerName>
                  <ComputerSpan>Este computador está em uso há 2 horas e 30 minutos</ComputerSpan>
                </ComputerTextContainer>
                <ComputerStatus status={2} />
              </ComputerContainer>
              <ComputerContainer>
                <ComputerTextContainer>
                  <ComputerName>Computador 04</ComputerName>
                  <ComputerSpan>Este computador está ausente há 2 horas e 30 minutos</ComputerSpan>
                </ComputerTextContainer>
                <ComputerStatus status={1} />
              </ComputerContainer>
            </MiddleRight>
          </MiddleBottom>
        </MiddleSide>
        <RightSide>
          <ErrorContainer>
            <ErrorSpan>Nehum computador disponível no momento.</ErrorSpan>
            <ErrorSpanLink>Avise-me quando houver.</ErrorSpanLink>
          </ErrorContainer>
        </RightSide>
        <MobileStatusList>
          <MobileStatusContainer>
            <MobileStatus bgColor={colors.computerStatus[0]} />
            <MobileStatusSpan>Disponível</MobileStatusSpan>
          </MobileStatusContainer>

          <MobileStatusContainer>
            <MobileStatus bgColor={colors.computerStatus[1]} />
            <MobileStatusSpan>Ausente</MobileStatusSpan>
          </MobileStatusContainer>

          <MobileStatusContainer>
            <MobileStatus bgColor={colors.computerStatus[2]} />
            <MobileStatusSpan>Ocupado</MobileStatusSpan>
          </MobileStatusContainer>

          <MobileStatusContainer>
            <MobileStatus bgColor={colors.computerStatus[3]} />
            <MobileStatusSpan>Indisponível</MobileStatusSpan>
          </MobileStatusContainer>
        </MobileStatusList>
      </Container>
    </>
  );
};

export default RoomComputers;
