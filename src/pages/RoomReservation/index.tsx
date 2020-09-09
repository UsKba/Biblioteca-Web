import React from 'react';

import colors from '~/styles/colors';

import {
  Container,
  TableContainer,
  Title,
  TopSide,
  BottomSide,
  DateList,
  ScheduleList,
  ScheduleButton,
  Rectangle,
  CurrentDayContainer,
  CurrentDay,
  CurrentMonth,
  WeekDayContainer,
  WeekDay,
  WeekDayNumber,
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
          <DateList>
            <WeekDayContainer>
              <WeekDay>Seg</WeekDay>
              <WeekDayNumber>09</WeekDayNumber>
            </WeekDayContainer>
            <WeekDayContainer>
              <WeekDay>Ter</WeekDay>
              <WeekDayNumber>10</WeekDayNumber>
            </WeekDayContainer>
            <WeekDayContainer>
              <WeekDay>Qua</WeekDay>
              <WeekDayNumber>11</WeekDayNumber>
            </WeekDayContainer>
            <WeekDayContainer>
              <WeekDay>Qui</WeekDay>
              <WeekDayNumber>12</WeekDayNumber>
            </WeekDayContainer>
            <WeekDayContainer>
              <WeekDay>Sex</WeekDay>
              <WeekDayNumber>13</WeekDayNumber>
            </WeekDayContainer>
          </DateList>
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

{
  /* <Container>
<DatePicker>
  <FaChevronLeft />
  <DateInterval>25/04 - 29/05</DateInterval>

  <FaChevronRight />
</DatePicker>
<RoomTypes>
  <ColorStatus>
    <Color status={0} />
    <ColorName>Ocupada</ColorName>
  </ColorStatus>
  <ColorStatus>
    <Color status={1} />
    <ColorName>Reservada</ColorName>
  </ColorStatus>
  <ColorStatus>
    <Color status={2} />
    <ColorName>Disponível</ColorName>
  </ColorStatus>
  <ColorStatus>
    <Color status={3} />
    <ColorName>Sua Reserva</ColorName>
  </ColorStatus>
  <ColorStatus>
    <Color status={4} />
    <ColorName>Indisponível</ColorName>
  </ColorStatus>
</RoomTypes>
<Weeks>
  <Week>
    <WeekName>Segunda</WeekName>
  </Week>

  <Week>
    <WeekName active>Terça</WeekName>
  </Week>

  <Week>
    <WeekName>Quarta</WeekName>
  </Week>

  <Week>
    <WeekName>Quinta</WeekName>
  </Week>

  <Week>
    <WeekName>Sexta</WeekName>
  </Week>
</Weeks>
<RoomList>
  <Line>
    <Rectangle backgroundColor="#1c91ff" />
    <Rectangle backgroundColor="#1c91ff">F1-3</Rectangle>
    <Rectangle backgroundColor="#1c91ff">F1-4</Rectangle>
    <Rectangle backgroundColor="#1c91ff">F1-5</Rectangle>
    <Rectangle backgroundColor="#1c91ff">F1-6</Rectangle>
  </Line>

  <Line>
    <Rectangle backgroundColor="#1c91ff">07:15 - 08:00</Rectangle>
    <Rectangle />
    <Rectangle />
    <Rectangle />
    <Rectangle />
  </Line>

  <Line>
    <Rectangle backgroundColor="#1c91ff">08:00 - 09:00</Rectangle>
    <Rectangle backgroundColor="#2B9348">
      <StudentName>Nathan</StudentName>
      <StudentName>José Eduardo</StudentName>
      <StudentName>Halyson</StudentName>
    </Rectangle>
    <Rectangle />
    <Rectangle />
    <Rectangle />
  </Line>

  <Line>
    <Rectangle backgroundColor="#1c91ff">09:00 - 10:00</Rectangle>
    <Rectangle />
    <Rectangle />
    <Rectangle backgroundColor="#F55">
      <StudentName>Idaslon</StudentName>
      <StudentName>Carlos Eduardo</StudentName>
      <StudentName>Bruno Eduardo</StudentName>
      <StudentName>...</StudentName>
    </Rectangle>
    <Rectangle />
  </Line>

  <Line>
    <Rectangle backgroundColor="#1c91ff">10:00 - 11:00</Rectangle>
    <Rectangle backgroundColor="orange">
      <StudentName>Natália</StudentName>
      <StudentName>João Eduardo</StudentName>
      <StudentName>Júlio</StudentName>
      <StudentName>...</StudentName>
    </Rectangle>
    <Rectangle backgroundColor="#F55">
      <StudentName>Haline</StudentName>
      <StudentName>Haludilson</StudentName>
      <StudentName>Haleber</StudentName>
    </Rectangle>
    <Rectangle />
    <Rectangle />
  </Line>

  <Line>
    <Rectangle backgroundColor="#1c91ff">11:00 - 12:00</Rectangle>
    <Rectangle backgroundColor="#F55">
      <StudentName>José Eduardo</StudentName>
      <StudentName>Halysete</StudentName>
      <StudentName>Halynildo</StudentName>
      <StudentName>...</StudentName>
    </Rectangle>
    <Rectangle backgroundColor="#333" />
    <Rectangle />
    <Rectangle backgroundColor="#333" />
  </Line>
</RoomList>
</Container> */
}
