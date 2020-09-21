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

export const WeekDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
