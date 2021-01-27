import React, { useCallback } from 'react';

import { DayOfWeek, WeekDayContainer, WeekDayNumber } from './styles';

interface Props {
  date: Date;
  onClick: () => void;
  active: boolean;
  disabled?: boolean;
}

const WEEK_DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const WeekDay: React.FC<Props> = ({ date, onClick, active, disabled }) => {
  const handleButtonClick = useCallback(() => {
    if (!disabled) {
      onClick();
    }
  }, [disabled, onClick]);

  return (
    <WeekDayContainer disabled={disabled} onClick={handleButtonClick} active={active}>
      <DayOfWeek>{WEEK_DAYS[date.getDay()]}</DayOfWeek>
      <WeekDayNumber>{date.getDate()}</WeekDayNumber>
    </WeekDayContainer>
  );
};

export default WeekDay;
