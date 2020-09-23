import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;

  padding: 20px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;

  padding: 20px;
`;

export const MiddleSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const MiddleTop = styled.div`
  padding: 30px 0;
  text-align: center;
`;

export const MiddleBottom = styled.div`
  display: flex;
  flex: 1;
`;

export const MiddleLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  text-align: center;

  padding-right: 35px;
`;

export const MiddleRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  padding-left: 20px;
`;

export const H1 = styled.span`
  font-size: 32px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.dark};

  margin-bottom: 30px;
`;

export const H2 = styled.span`
  font-size: 25px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.dark};
`;

export const ComputerList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  height: 380px;
`;

export const ComputerButton = styled.button`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  width: 95%;

  border: none;
  margin-bottom: 12px;
  border-left: solid 6px ${colors.primary};
  border-radius: 4px;

  padding: 10px 8px;
  background-color: ${colors.terciary};
`;

export const ComputerName = styled.span`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;

  margin-bottom: 5px;

  color: ${colors.dark};
`;

export const ComputerSpan = styled.span`
  font-size: 15px;
  font-family: 'Roboto';
  max-width: 200px;
  text-align: justify;

  color: ${colors.dark};
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;

  border-radius: 4px;
  background-color: ${colors.terciary};
`;

export const ErrorSpan = styled.span`
  font-size: 14px;
  font-family: 'Roboto';
`;

export const ErrorSpanLink = styled.span`
  font-size: 14px;
  font-family: 'Roboto';

  cursor: pointer;

  color: ${colors.secondary};
`;

// export const ComputerStatus = styled.div<ComputerStatusProps>`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${({ status }) => colors.computerStatus[status]};
// `;
