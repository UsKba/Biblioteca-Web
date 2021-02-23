/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';

import getFirstDayOfWeek from '~/utils/firstDayOfWeek';
import { DAY_IN_MILLISECONDS } from '~/utils/time';

import { Container } from './styles';
import WeekDay from './WeekDay';

interface Props {
  selectDay?: (day: Date) => void;
}

const DateList: React.FC<Props> = ({ selectDay }) => {
  const sunday = getFirstDayOfWeek();
  const today = new Date();
  // const [selectedWeekDay, setSelectedWeekDay] = useState(isWeekend(today) ? 1 : today.getDay());
  const [selectedWeekDay, setSelectedWeekDay] = useState(today.getDay());
  const days = [1, 2, 3, 4, 5];

  const isToday = useCallback(
    (weekDay: number) => {
      return weekDay === today.getDay();
    },
    [today]
  );

  useEffect(() => {
    if (!selectDay) return;
    const selectedDate = new Date(sunday.getTime() + selectedWeekDay * DAY_IN_MILLISECONDS);
    selectDay(selectedDate);
  }, [selectedWeekDay, selectDay, sunday.getTime]);

  return (
    <Container>
      {days.map((day) => (
        <WeekDay
          key={day}
          disabled={day < today.getDay()}
          date={new Date(sunday.getTime() + day * DAY_IN_MILLISECONDS)}
          active={selectedWeekDay === day}
          onClick={() => setSelectedWeekDay(day)}
          isToday={isToday(day)}
        />
      ))}
    </Container>
  );
};

export default DateList;
