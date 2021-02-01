import React, { useCallback } from 'react';
import { BsPlus } from 'react-icons/bs';
import { useHistory, Switch, Route, Link } from 'react-router-dom';

import colors from '~/styles/colors';

import DateList from './components/DateList';
import {
  // Container,
  // TableContainer,
  // Title,
  // TitleContainer,
  // TopSide,
  // BottomSide,
  // ScheduleList,
  // ScheduleButton,
  // Rectangle,
  // CurrentDayContainer,
  // CurrentDay,
  // CurrentMonth,
  // StyledLink,
  // RentButton,

  Container,
  TableTopInformation,
  Table,
  TableColumn,
  RoomTitle,
  RoomCard,
  RoomCardHour,
  Dropdown,
  RentButton,
} from './styles';

const Rooms: React.FC = () => {
  const history = useHistory();
  const { pathname } = history.location;
  const formatter = new Intl.DateTimeFormat('pt-br', { month: 'long' });
  const reserveDate = new Date();
  const monthFormatted = formatter.format(reserveDate);

  const changePeriod = useCallback(
    (periodValue) => {
      if (periodValue === '1') {
        history.push('/salas-manha');
        return;
      }
      if (periodValue === '2') {
        history.push('/salas-tarde');
        return;
      }
      if (periodValue === '3') {
        history.push('/salas-noite');
      }
    },
    [history]
  );

  return (
    <Container>
      <TableTopInformation>
        <Dropdown onChange={(event) => changePeriod(event.target.value)}>
          <option value="1" selected>
            Manhã
          </option>
          <option value="2">Tarde</option>
          <option value="3">Noite</option>
        </Dropdown>

        <DateList />
        <Link to="/reservar">
          <RentButton>Reservar sala</RentButton>
        </Link>
      </TableTopInformation>
      <Table>
        <Switch>
          <Route path="/salas-manha" exact>
            <TableColumn>
              <RoomTitle>F1-3</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>7:15 - 8:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>8:00 - 9:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>9:00 - 10:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>10:00 - 11:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>11:00 - 12:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn>
              <RoomTitle>F1-4</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>7:15 - 8:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>8:00 - 9:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>9:00 - 10:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>10:00 - 11:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>11:00 - 12:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn>
              <RoomTitle>F1-5</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>7:15 - 8:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>8:00 - 9:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>9:00 - 10:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>10:00 - 11:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>11:00 - 12:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn removeBorder>
              <RoomTitle>F1-6</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>7:15 - 8:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>8:00 - 9:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>9:00 - 10:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>10:00 - 11:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>11:00 - 12:00</RoomCardHour>
              </RoomCard>
            </TableColumn>
          </Route>

          <Route path="/salas-tarde" exact>
            <TableColumn>
              <RoomTitle>F1-3</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>13:15 - 14:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>14:00 - 15:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>16:00 - 17:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>17:00 - 18:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn>
              <RoomTitle>F1-4</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>13:15 - 14:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>14:00 - 15:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>16:00 - 17:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>17:00 - 18:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn>
              <RoomTitle>F1-5</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>13:15 - 14:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>14:00 - 15:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>16:00 - 17:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>17:00 - 18:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn removeBorder>
              <RoomTitle>F1-6</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>13:15 - 14:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>14:00 - 15:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>16:00 - 17:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>17:00 - 18:00</RoomCardHour>
              </RoomCard>
            </TableColumn>
          </Route>
          <Route path="/salas-noite" exact>
            <TableColumn>
              <RoomTitle>F1-3</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>18:15 - 19:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>19:00 - 20:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>20:00 - 21:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>21:00 - 22:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn>
              <RoomTitle>F1-4</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>18:15 - 19:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>19:00 - 20:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>20:00 - 21:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>21:00 - 22:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn>
              <RoomTitle>F1-5</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>18:15 - 19:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>19:00 - 20:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>20:00 - 21:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>21:00 - 22:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn removeBorder>
              <RoomTitle>F1-6</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>18:15 - 19:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>19:00 - 20:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>20:00 - 21:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>21:00 - 22:00</RoomCardHour>
              </RoomCard>
            </TableColumn>
          </Route>
        </Switch>
      </Table>
    </Container>
    // <Container>
    //   <TitleContainer>
    //     <Title>Salas</Title>
    //     <StyledLink to="/reservar">
    //       <RentButton>Agendar sala</RentButton>
    //     </StyledLink>
    //   </TitleContainer>
    //   <TableContainer>
    //     <TopSide>
    //       <CurrentDayContainer>
    //         <CurrentDay>{reserveDate.getDate()}</CurrentDay>
    //         <CurrentMonth>{monthFormatted}</CurrentMonth>
    //       </CurrentDayContainer>
    //       <DateList />
    //       <ScheduleList>
    //         <ScheduleButton onClick={() => history.push('/salas-manha')} active={pathname === '/salas-manha'}>
    //           Manhã
    //         </ScheduleButton>
    //         <ScheduleButton onClick={() => history.push('/salas-tarde')} active={pathname === '/salas-tarde'}>
    //           Tarde
    //         </ScheduleButton>
    //         <ScheduleButton onClick={() => history.push('/salas-noite')} active={pathname === '/salas-noite'}>
    //           Noite
    //         </ScheduleButton>
    //       </ScheduleList>
    //     </TopSide>

    //     <BottomSide>
    //       <Switch>
    //         <Route path="/salas-manha" exact>
    //           <Rectangle backgroundColor={colors.primary}>Salas e Horários</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-3</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-4</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-5</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-6</Rectangle>

    //           <Rectangle backgroundColor={colors.primary}>7:15 - 8:00</Rectangle>
    //           <Rectangle borderColor={colors.roomStatus[2]} />
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[3]} />

    //           <Rectangle backgroundColor={colors.primary}>8:00 - 9:00</Rectangle>
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[0]} />
    //           <Rectangle borderColor={colors.roomStatus[2]} />
    //           <Rectangle />

    //           <Rectangle backgroundColor={colors.primary}>9:00 - 10:00</Rectangle>
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[2]} />

    //           <Rectangle backgroundColor={colors.primary}>10:00 - 11:00</Rectangle>
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[2]} />
    //           <Rectangle />

    //           <Rectangle backgroundColor={colors.primary}>11:00 - 12:00</Rectangle>
    //           <Rectangle borderColor={colors.roomStatus[3]} />
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[3]} />
    //         </Route>

    //         <Route path="/salas-tarde" exact>
    //           <Rectangle backgroundColor={colors.primary}>Salas e Horários</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-3</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-4</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-5</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-6</Rectangle>

    //           <Rectangle backgroundColor={colors.primary}>13:15 - 14:00</Rectangle>
    //           <Rectangle borderColor={colors.roomStatus[2]} />
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[3]} />

    //           <Rectangle backgroundColor={colors.primary}>14:00 - 15:00</Rectangle>
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[0]} />
    //           <Rectangle borderColor={colors.roomStatus[2]} />
    //           <Rectangle />

    //           <Rectangle backgroundColor={colors.primary}>15:00 - 16:00</Rectangle>
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[2]} />

    //           <Rectangle backgroundColor={colors.primary}>16:00 - 17:00</Rectangle>
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[2]} />
    //           <Rectangle />

    //           <Rectangle backgroundColor={colors.primary}>17:00 - 18:00</Rectangle>
    //           <Rectangle borderColor={colors.roomStatus[3]} />
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[3]} />
    //         </Route>

    //         <Route path="/salas-noite" exact>
    //           <Rectangle backgroundColor={colors.primary}>Salas e Horários</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-3</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-4</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-5</Rectangle>
    //           <Rectangle backgroundColor={colors.primary}> F1-6</Rectangle>

    //           <Rectangle backgroundColor={colors.primary}>18:15 - 19:00</Rectangle>
    //           <Rectangle borderColor={colors.roomStatus[2]} />
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[3]} />

    //           <Rectangle backgroundColor={colors.primary}>19:00 - 20:00</Rectangle>
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[0]} />
    //           <Rectangle borderColor={colors.roomStatus[2]} />
    //           <Rectangle />

    //           <Rectangle backgroundColor={colors.primary}>20:00 - 21:00</Rectangle>
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[2]} />

    //           <Rectangle backgroundColor={colors.primary}>21:00 - 22:00</Rectangle>
    //           <Rectangle />
    //           <Rectangle />
    //           <Rectangle borderColor={colors.roomStatus[2]} />
    //           <Rectangle />
    //         </Route>
    //       </Switch>
    //     </BottomSide>
    //   </TableContainer>
    // </Container>
  );
};

export default Rooms;
