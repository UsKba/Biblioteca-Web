import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 150px;

  padding: 8px 4px;
  border-left: solid 6px ${colors.primary};
  border-radius: 5px;

  background-color: ${colors.terciary};

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

interface ComputerStatusProps {
  status: number;
}

export const StatusColor = styled.div<ComputerStatusProps>`
  height: 12px;
  width: 12px;

  border-radius: 50%;

  background-color: ${({ status }) => colors.computerStatus[status]};
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusSpan = styled.span`
  margin-left: 5px;

  font-size: 15px;
`;
