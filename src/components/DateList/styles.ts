import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 527px;
  height: 192px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

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

  &:hover {
    border: 3px solid ${({ active }) => (active === false ? `${colors.lightprimary}` : `${colors.primary}`)};
  }
`;

export const WeekDay = styled.span`
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

export const Chevrons = styled.div`
  svg {
    font-size: 20px;
    color: ${colors.dark};
  }
`;
