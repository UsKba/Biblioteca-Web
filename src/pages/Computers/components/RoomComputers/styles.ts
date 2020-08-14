import styled from 'styled-components';

import { FaDesktop } from 'react-icons/fa';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 98%;
  justify-content: space-between;
  background-color: #fff;
  align-self: center;
  padding: 50px;
  border-radius: 10px;
  margin: 15px;
`;

export const ComputersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  width: 60%;
`;

export const ComputerContainer = styled.div`
  display: flex;
  flex-basis: 15%;
  justify-content: center;
  align-items: center;
`;

export const ComputerName = styled.span`
  font-size: 25px;
  margin-right: 30px;
`;

interface ComputerStatusProps {
  status: number;
}

export const ComputerStatus = styled.div<ComputerStatusProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ status }) => colors.computerStatus[status]};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ComputersOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #eee;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  width: 40%;
  border-radius: 5px;
`;

export const ComputerIcon = styled(FaDesktop).attrs({
  color: 'white',
})<ComputerStatusProps>`
  background-color: ${({ status }) => colors.computerStatus[status]};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  font-size: 3rem;
`;
export const ComputerOverview = styled.div`
  flex-basis: 16.6666%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ButtonProps {
  active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: white;
  border: none;
  max-height: 2em;
  align-self: center;
  margin-left: 1em;
  svg {
    font-size: 25px;
  }
`;

export const StatusSpan = styled.span`
  font-size: 16px;
  margin-left: 5px;
`;

export const StatusContainer = styled.div`
  display: flex;
  padding: 2px;
  margin-top: 5px;
  align-items: center;
`;

export const LeftSide = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  height: 10em;
  padding: 1px;
`;

export const BottomSide = styled.div`
  display: flex;
`;

export const ComputerButton = styled.button`
  cursor: pointer;
  align-self: center;
  background: none;
  border: none;
  outline: none;
`;
// flex-basis: 16.6666%;
//   display: flex;
//   justify-content: center;
//   align-items: center;

// flex-basis: 16.6666%;
// display: flex;
// justify-content: center;
// align-items: center;
// cursor: pointer;
// align-self: center;
// width: 48px;
// height: 48px;
// background: none;
// padding: 0;
