import React, { useState, useEffect, useCallback } from 'react';

import getFirstDayOfWeek from '~/utils/firstDayOfWeek';
import { isWeekend, DAY_IN_MILLISECONDS } from '~/utils/time';

import { Container } from './styles';
import WeekDay from './Weekday';

interface Props {
  selectDay?: (day: Date) => void;
  onWeekdayChange?: (weekday: number) => void;
}

const DateList: React.FC<Props> = ({ selectDay, onWeekdayChange }) => {
  const sunday = getFirstDayOfWeek();
  const today = new Date();

  const [selectedWeekDay, setSelectedWeekDay] = useState<number>(-1);
  const days = [1, 2, 3, 4, 5];

  const handleWeekdayClick = useCallback(
    (weekday: number) => {
      setSelectedWeekDay(weekday);

      if (onWeekdayChange) {
        onWeekdayChange(weekday);
      }
    },
    [onWeekdayChange]
  );

  useEffect(() => {
    if (selectedWeekDay === -1) {
      if (!isWeekend(today)) {
        setSelectedWeekDay(today.getDay());
        if (onWeekdayChange) {
          onWeekdayChange(today.getDay());
        }
      } else {
        setSelectedWeekDay(1);
      }
    }

    if (!selectDay) return;
    const selectedDate = new Date(sunday.getTime() + selectedWeekDay * DAY_IN_MILLISECONDS);
    selectDay(selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedWeekDay, selectDay, sunday.getTime, onWeekdayChange, today]);

  return (
    <Container>
      {days.map((day) => (
        <WeekDay
          key={day}
          disabled={day < today.getDay()}
          date={new Date(sunday.getTime() + day * DAY_IN_MILLISECONDS)}
          active={selectedWeekDay === day}
          onClick={() => handleWeekdayClick(day)}
        />
      ))}
    </Container>
  );
};

export default DateList;
