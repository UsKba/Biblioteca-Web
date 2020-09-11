import React from 'react';

import { Container, WeekDayContainer, WeekDay, WeekDayNumber } from './styles';

const DateList: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default DateList;
