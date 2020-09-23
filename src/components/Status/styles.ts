import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-left: solid 6px ${colors.primary};
  border-radius: 7px;
  padding: 4px;
  max-height: 8.5em;
  justify-content: space-between;
`;

interface ComputerStatusProps {
  status: number;
}

export const StatusColor = styled.div<ComputerStatusProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => colors.computerStatus[status]};
`;

export const StatusContainer = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
`;

export const StatusSpan = styled.span`
  font-size: 16px;
  margin-left: 5px;
`;
