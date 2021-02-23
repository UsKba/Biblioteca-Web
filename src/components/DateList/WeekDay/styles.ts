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

  width: 55px;
  height: 110px;

  padding: 10px 5px;

  border: 2px solid ${colors.primary};
  border-radius: 80px;
  background-color: ${({ active }) => (active === false ? `${colors.terciary}` : `${colors.primary}`)};

  ${({ disabled }) => disabled && `border: 3px solid ${colors.text}B2; opacity: 0.7;`};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  span {
    color: ${({ active }) => (active === false ? `${colors.text}B2;` : `${colors.terciary};`)};
    ${({ disabled }) => disabled && `color: ${colors.text}B2;`};
  }

  &:hover {
    border: 3px solid ${({ active }) => (active === false ? `${colors.lightprimary}` : `${colors.primary}`)};
    ${({ disabled }) => disabled && `border: 3px solid ${colors.text}B2; cursor: no-drop;`};
  }
`;

export const DayOfWeek = styled.span<WeekDayProps>`
  font-family: 'Ubuntu';
  font-size: 18px;
  font-weight: 500;

  color: ${colors.text};
`;

export const WeekDayNumber = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;

  margin: 8px 0;

  color: ${colors.text};
`;

export const Today = styled.span`
  font-family: 'Roboto';
  font-size: 14px;

  color: ${colors.text};
`;
