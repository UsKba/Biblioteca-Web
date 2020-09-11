import React from 'react';

import colors from '~/styles/colors';

import DateList from '~/components/DateList';

import {
  Container,
  TableContainer,
  Title,
  TopSide,
  BottomSide,
  ScheduleList,
  ScheduleButton,
  Rectangle,
  CurrentDayContainer,
  CurrentDay,
  CurrentMonth,
} from './styles';

const RoomReservation: React.FC = () => {
  return (
    <Container>
      <Title>Salas</Title>
      <TableContainer>
        <TopSide>
          <CurrentDayContainer>
            <CurrentDay>27</CurrentDay>
            <CurrentMonth>Janeiro</CurrentMonth>
          </CurrentDayContainer>
          <DateList />
          <ScheduleList>
            <ScheduleButton>Manhã</ScheduleButton>
            <ScheduleButton>Tarde</ScheduleButton>
            <ScheduleButton>Noite</ScheduleButton>
          </ScheduleList>
        </TopSide>

        <BottomSide>
          <Rectangle backgroundColor={colors.primary}>Salas e Horários</Rectangle>
          <Rectangle backgroundColor={colors.primary}>Sala F1-3</Rectangle>
          <Rectangle backgroundColor={colors.primary}>Sala F1-4</Rectangle>
          <Rectangle backgroundColor={colors.primary}>Sala F1-5</Rectangle>
          <Rectangle backgroundColor={colors.primary}>Sala F1-6</Rectangle>

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
        </BottomSide>
      </TableContainer>
    </Container>
  );
};

export default RoomReservation;
