import React from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';

import colors from '~/styles/colors';

import DateList from '~/components/DateList';

import {
  Container,
  TableContainer,
  Title,
  TitleContainer,
  TopSide,
  BottomSide,
  ScheduleList,
  ScheduleButton,
  Rectangle,
  CurrentDayContainer,
  CurrentDay,
  CurrentMonth,
  StyledLink,
  RentButton,
} from './styles';

const RoomReservation: React.FC = () => {
  const history = useHistory();
  const { pathname } = history.location;
  return (
    <Container>
      <TitleContainer>
        <Title>Salas</Title>
        <StyledLink to="/rent">
          <RentButton>Alugar sala</RentButton>
        </StyledLink>
      </TitleContainer>
      <TableContainer>
        <TopSide>
          <CurrentDayContainer>
            <CurrentDay>27</CurrentDay>
            <CurrentMonth>Janeiro</CurrentMonth>
          </CurrentDayContainer>
          <DateList />
          <ScheduleList>
            <ScheduleButton onClick={() => history.push('/reserve-morning')} active={pathname === '/reserve-morning'}>
              Manhã
            </ScheduleButton>
            <ScheduleButton
              onClick={() => history.push('/reserve-afternoon')}
              active={pathname === '/reserve-afternoon'}
            >
              Tarde
            </ScheduleButton>
            <ScheduleButton onClick={() => history.push('/reserve-night')} active={pathname === '/reserve-night'}>
              Noite
            </ScheduleButton>
          </ScheduleList>
        </TopSide>

        <BottomSide>
          <Switch>
            <Route path="/reserve-morning" exact>
              <Rectangle backgroundColor={colors.primary}>Salas e Horários</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-3</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-4</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-5</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-6</Rectangle>

              <Rectangle backgroundColor={colors.primary}>7:15 - 8:00</Rectangle>
              <Rectangle borderColor={colors.roomStatus[2]} />
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[3]} />

              <Rectangle backgroundColor={colors.primary}>8:00 - 9:00</Rectangle>
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[0]} />
              <Rectangle borderColor={colors.roomStatus[2]} />
              <Rectangle />

              <Rectangle backgroundColor={colors.primary}>9:00 - 10:00</Rectangle>
              <Rectangle />
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[2]} />

              <Rectangle backgroundColor={colors.primary}>10:00 - 11:00</Rectangle>
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[2]} />
              <Rectangle />

              <Rectangle backgroundColor={colors.primary}>11:00 - 12:00</Rectangle>
              <Rectangle borderColor={colors.roomStatus[3]} />
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[3]} />
            </Route>

            <Route path="/reserve-afternoon" exact>
              <Rectangle backgroundColor={colors.primary}>Salas e Horários</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-3</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-4</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-5</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-6</Rectangle>

              <Rectangle backgroundColor={colors.primary}>13:15 - 14:00</Rectangle>
              <Rectangle borderColor={colors.roomStatus[2]} />
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[3]} />

              <Rectangle backgroundColor={colors.primary}>14:00 - 15:00</Rectangle>
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[0]} />
              <Rectangle borderColor={colors.roomStatus[2]} />
              <Rectangle />

              <Rectangle backgroundColor={colors.primary}>15:00 - 16:00</Rectangle>
              <Rectangle />
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[2]} />

              <Rectangle backgroundColor={colors.primary}>16:00 - 17:00</Rectangle>
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[2]} />
              <Rectangle />

              <Rectangle backgroundColor={colors.primary}>17:00 - 18:00</Rectangle>
              <Rectangle borderColor={colors.roomStatus[3]} />
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[3]} />
            </Route>

            <Route path="/reserve-night" exact>
              <Rectangle backgroundColor={colors.primary}>Salas e Horários</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-3</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-4</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-5</Rectangle>
              <Rectangle backgroundColor={colors.primary}> F1-6</Rectangle>

              <Rectangle backgroundColor={colors.primary}>18:15 - 19:00</Rectangle>
              <Rectangle borderColor={colors.roomStatus[2]} />
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[3]} />

              <Rectangle backgroundColor={colors.primary}>19:00 - 20:00</Rectangle>
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[0]} />
              <Rectangle borderColor={colors.roomStatus[2]} />
              <Rectangle />

              <Rectangle backgroundColor={colors.primary}>20:00 - 21:00</Rectangle>
              <Rectangle />
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[2]} />

              <Rectangle backgroundColor={colors.primary}>21:00 - 22:00</Rectangle>
              <Rectangle />
              <Rectangle />
              <Rectangle borderColor={colors.roomStatus[2]} />
              <Rectangle />
            </Route>
          </Switch>
        </BottomSide>
      </TableContainer>
    </Container>
  );
};

export default RoomReservation;
