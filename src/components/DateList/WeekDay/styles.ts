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

  max-width: 43px;

  padding: 10px 5px;

  border: 3px solid ${colors.primary};
  border-radius: 100px;
  background-color: ${({ active }) => (active === false ? `${colors.terciary}` : `${colors.primary}`)};

  ${({ disabled }) => disabled && `border: 3px solid ${colors.text}; opacity: 0.7;`}
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  span {
    color: ${({ active }) => (active === false ? `${colors.text}` : `${colors.terciary}`)};
    ${({ disabled }) => disabled && `color: ${colors.text};`}
  }

  &:hover {
    border: 3px solid ${({ active }) => (active === false ? `${colors.lightprimary}` : `${colors.primary}`)};
    ${({ disabled }) => disabled && `border: 3px solid ${colors.text}; cursor: no-drop;`}
  }
`;

export const DayOfWeek = styled.span<WeekDayProps>`
  font-family: 'Ubuntu';
  font-size: 18px;

  margin-bottom: 18px;

  color: ${colors.text};
`;

export const WeekDayNumber = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;

  color: ${colors.text};
`;

export const Today = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;

  color: ${colors.text};
`;
