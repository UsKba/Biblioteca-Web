import styled from 'styled-components';

import colors from '~/styles/colors';

interface WeekDayProps {
  active?: boolean;
  disabled?: boolean;
}

export const WeekDayContainer = styled.div<WeekDayProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 5px;

  border: 3px solid ${({ active }) => (active === false ? `${colors.terciary}` : `${colors.primary}`)};
  border-radius: 100px;
  background-color: ${({ active }) => (active === false ? `${colors.terciary}` : `${colors.primary}`)};

  ${({ disabled }) => disabled && 'background-color: #636363; border: 3px solid #636363;'}
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  span {
    color: ${({ active }) => (active === false ? `${colors.text}` : `${colors.terciary}`)};
    ${({ disabled }) => disabled && 'color: #FFF;'}
  }

  &:hover {
    border: 3px solid ${({ active }) => (active === false ? `${colors.lightprimary}` : `${colors.primary}`)};
    ${({ disabled }) => disabled && 'border: 3px solid #636363;'}
  }
`;

export const DayOfWeek = styled.span<WeekDayProps>`
  margin-bottom: 15px;

  font-family: 'Ubuntu';
  font-size: 18px;

  color: ${colors.text};
`;

export const WeekDayNumber = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;

  color: ${colors.text};
`;
