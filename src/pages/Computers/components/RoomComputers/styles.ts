import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

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
  margin: 15px 0 15px 0;
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

interface IComputerStatus {
  status: number;
}

const statusColors = ['#2B9348', '#f2f072', '#f55', '#333'];

export const ComputerStatus = styled.div<IComputerStatus>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ status }) => statusColors[status]};
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

export const ComputerIcon = styled(FontAwesomeIcon).attrs({
  icon: faDesktop,
  color: 'white',
  size: '3x',
})<IComputerStatus>`
  background-color: ${({ status }) => statusColors[status]};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

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

export const TopSide = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  height: 10em;
  padding: 1px;
`;

export const BottomSide = styled.div`
  display: flex;
`;
