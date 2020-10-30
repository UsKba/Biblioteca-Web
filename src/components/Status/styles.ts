import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: 8.5em;

  padding: 4px;

  border-left: solid 6px ${colors.primary};
  border-radius: 7px;

  background-color: #fff;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
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
  align-items: center;

  padding: 2px;
`;

export const StatusSpan = styled.span`
  margin-left: 5px;

  font-size: 16px;
`;
