import React, { useState, useCallback } from 'react';

import colors from '~/styles/colors';

import Status from '~/components/Status';

import { useAuth } from '~/contexts/AuthContext';

import ComputerCard from './Components/ComputerCard';
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
  ErrorContainer,
  ErrorSpan,
  ErrorSpanLink,
  MobileNavText,
  MobileNav,
  Line,
  MobileStatus,
  MobileStatusContainer,
  MobileStatusSpan,
  MobileStatusList,
} from './styles';

const RoomComputers = () => {
  const authContext = useAuth();
  const [screenSwipe, setScreenSwipe] = useState(1);
  const [settingsIndex, setSettingsIndex] = useState(-1);
  const [computerLocal, setComputerLocal] = useState(-1);

  const computers = [
    {
      id: 1,
      name: '01',
      desc: 'Este computador está funcionando',
      status: 0,
    },
    {
      id: 2,
      name: '02',
      desc: 'Este computador está indisponível',
      status: 2,
    },
    {
      id: 3,
      name: '03',
      desc: 'Este computador está funcionando',
      status: 0,
    },
    {
      id: 4,
      name: '04',
      desc: 'Este computador está indisponível',
      status: 3,
    },
  ];

  const handleChangeSwipe = useCallback((index: number) => {
    setScreenSwipe(index);
  }, []);

  const handleSettingsClick = useCallback(
    (index: number, computerLocalNumber: number) => {
      if (settingsIndex === index && computerLocal === computerLocalNumber) {
        setSettingsIndex(-1);
        setComputerLocal(-1);
      } else {
        setSettingsIndex(index);
        setComputerLocal(computerLocalNumber);
      }
    },
    [computerLocal, settingsIndex]
  );

  // const changeSettingsVisibility = useCallback(() => {}, []);

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
                {computers.map((computer, index) => (
                  <ComputerCard
                    key={computer.id}
                    computer={computer}
                    settingsOpen={index === settingsIndex && computerLocal === 1}
                    settingsClick={() => handleSettingsClick(index, 1)}
                  />
                ))}
              </ComputerList>
            </MiddleLeft>

            <MiddleRight visible={screenSwipe === 1}>
              <H2>Biblioteca</H2>
              <ComputerList>
                {computers.map((computer, index) => (
                  <ComputerCard
                    key={computer.id}
                    computer={computer}
                    settingsOpen={index === settingsIndex && computerLocal === 0}
                    settingsClick={() => handleSettingsClick(index, 0)}
                  />
                ))}
              </ComputerList>
            </MiddleRight>
          </MiddleBottom>
        </MiddleSide>

        <RightSide>
          <ErrorContainer visible={false}>
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
