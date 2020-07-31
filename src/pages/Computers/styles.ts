import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

export const Container = styled.div`
  display: flex;
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
  flex-basis: 16.6666%;
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

const statusColors = ['green', 'yellow', 'red', 'black'];

export const ComputerStatus = styled.div<IComputerStatus>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ status }) => statusColors[status]};
`;

export const ComputersOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #eee;
  width: 40%;
  border-radius: 5px;
`;

export const ComputerIcon = styled(FontAwesomeIcon).attrs({
  icon: faDesktop,
  color: 'white',
  size: '3x',
})`
  background-color: green;
  padding: 10px;
  border-radius: 5px;
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
