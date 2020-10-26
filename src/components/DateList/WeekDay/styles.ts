import styled from 'styled-components';

import colors from '~/styles/colors';

interface WeekDayProps {
  active?: boolean;
}

export const WeekDayContainer = styled.div<WeekDayProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  padding: 10px 5px;
  border: 3px solid ${({ active }) => (active === false ? `${colors.terciary}` : `${colors.primary}`)};
  border-radius: 100px;

  background-color: ${({ active }) => (active === false ? `${colors.terciary}` : `${colors.primary}`)};

  span {
    color: ${({ active }) => (active === false ? `${colors.text}` : `${colors.terciary}`)};
  }

  &:hover {
    border: 3px solid ${({ active }) => (active === false ? `${colors.lightprimary}` : `${colors.primary}`)};
  }
`;

export const DayOfWeek = styled.span<WeekDayProps>`
  font-family: 'Ubuntu';
  font-size: 18px;

  color: ${colors.text};

  margin-bottom: 15px;
`;

export const WeekDayNumber = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;

  color: ${colors.text};
`;
