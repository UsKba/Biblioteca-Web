import React, { useState, useEffect } from 'react';

import getFirstDayOfWeek from '~/utils/firstDayOfWeek';
import { isWeekend, DAY_IN_MILLISECONDS } from '~/utils/time';

import { Container } from './styles';
import WeekDay from './Weekday';

interface Props {
  selectDay?: (day: Date) => void;
}

const DateList: React.FC<Props> = ({ selectDay }) => {
  const sunday = getFirstDayOfWeek();
  const today = new Date();

  const [selectedWeekDay, setSelectedWeekDay] = useState(isWeekend(today) ? 1 : today.getDay());
  const days = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (!selectDay) return;
    const selectedDate = new Date(sunday.getTime() + selectedWeekDay * DAY_IN_MILLISECONDS);
    selectDay(selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        />
      ))}
    </Container>
  );
};

export default DateList;