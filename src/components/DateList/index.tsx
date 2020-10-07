import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Container, WeekDayContainer, WeekDay, WeekDayNumber, Chevrons } from './styles';

const DateList: React.FC = () => {
  const [selectedWeekDay, setSelectedWeekDay] = useState(0);
  return (
    <Container>
      <Chevrons>
        <FaChevronLeft />
      </Chevrons>
      <WeekDayContainer onClick={() => setSelectedWeekDay(1)} active={selectedWeekDay === 1}>
        <WeekDay>Seg</WeekDay>
        <WeekDayNumber>09</WeekDayNumber>
      </WeekDayContainer>
      <WeekDayContainer onClick={() => setSelectedWeekDay(2)} active={selectedWeekDay === 2}>
        <WeekDay>Ter</WeekDay>
        <WeekDayNumber>10</WeekDayNumber>
      </WeekDayContainer>
      <WeekDayContainer onClick={() => setSelectedWeekDay(3)} active={selectedWeekDay === 3}>
        <WeekDay>Qua</WeekDay>
        <WeekDayNumber>11</WeekDayNumber>
      </WeekDayContainer>
      <WeekDayContainer onClick={() => setSelectedWeekDay(4)} active={selectedWeekDay === 4}>
        <WeekDay>Qui</WeekDay>
        <WeekDayNumber>12</WeekDayNumber>
      </WeekDayContainer>
      <WeekDayContainer onClick={() => setSelectedWeekDay(5)} active={selectedWeekDay === 5}>
        <WeekDay>Sex</WeekDay>
        <WeekDayNumber>13</WeekDayNumber>
      </WeekDayContainer>
      <Chevrons>
        <FaChevronRight />
      </Chevrons>
    </Container>
  );
};

export default DateList;
