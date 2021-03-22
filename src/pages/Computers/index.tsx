import React, { useState, useCallback, useEffect } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

import { getRequest } from '~/utils/api';

import colors from '~/styles/colors';

import Status from '~/components/Status';

import { useAuth } from '~/contexts/AuthContext';
import { Computer } from '~/types/';

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
  PageHelpContainer,
} from './styles';

const RoomComputers = () => {
  const [screenSwipe, setScreenSwipe] = useState(1);
  const [settingsIndex, setSettingsIndex] = useState(-1);

  const [computers, setComputers] = useState([] as Computer[]);

  useEffect(() => {
    async function loadComputers() {
      const { data, error } = await getRequest('/computers');

      if (error) {
        alert(error.error);
        return;
      }

      setComputers(data);
    }

    loadComputers();
  }, []);

  const handleChangeSwipe = useCallback((index: number) => {
    setScreenSwipe(index);
  }, []);

  const handleSettingsClick = useCallback(
    (index: number) => {
      if (settingsIndex === index) {
        setSettingsIndex(-1);
      } else {
        setSettingsIndex(index);
      }
    },
    [settingsIndex]
  );

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
                {computers.map((computer, index) => {
                  if (computer.local.id === 1) {
                    return (
                      <ComputerCard
                        key={computer.id}
                        computer={computer}
                        settingsOpen={index === settingsIndex}
                        settingsClick={() => handleSettingsClick(index)}
                      />
                    );
                  }

                  return undefined;
                })}
              </ComputerList>
            </MiddleLeft>

            <MiddleRight visible={screenSwipe === 1}>
              <H2>Biblioteca</H2>
              {computers.map((computer, index) => {
                if (computer.local.id === 2) {
                  return (
                    <ComputerCard
                      key={computer.id}
                      computer={computer}
                      settingsOpen={index === settingsIndex}
                      settingsClick={() => handleSettingsClick(index)}
                    />
                  );
                }

                return undefined;
              })}
            </MiddleRight>
          </MiddleBottom>
        </MiddleSide>

        <RightSide>
          <ErrorContainer visible={false}>
            <ErrorSpan>Nehum computador disponível no momento.</ErrorSpan>
            <ErrorSpanLink>Avise-me quando houver.</ErrorSpanLink>
          </ErrorContainer>
        </RightSide>

        <PageHelpContainer>
          <a href="/ajuda#perguntas">
            <AiOutlineQuestionCircle />
          </a>
        </PageHelpContainer>

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
