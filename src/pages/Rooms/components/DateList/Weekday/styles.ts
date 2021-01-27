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


  ${({ disabled }) => disabled && `opacity: 0.7;`}
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  span {
    color: ${({ active }) => (active === false ? `${colors.text}B2;` : `${colors.primary};`)};
    ${({ disabled }) => disabled && `color: ${colors.text}B2;`}
  }

  &:hover {
    border-bottom: 3px solid ${({ active }) => (active === false ? `${colors.lightprimary}` : `${colors.primary}`)};
    ${({ disabled }) => disabled && `border: 3px transparent; cursor: no-drop;`}
  }
`;

export const DayOfWeek = styled.span<WeekDayProps>`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;

  color: ${colors.text};
`;

export const WeekDayNumber = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: medium;

  margin: 8px 0 0 0;

  color: ${colors.text};
`;
