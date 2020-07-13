import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 7px;
  margin-top: 20px;
  width: 30%;
  margin-right: 20px;
  align-self: right;
  margin-bottom: 20px;
  padding: 5px;
`;

export const LeftContainer = styled.div`
  display: flex;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const ComputerOverview = styled.div`
  flex-basis: 16.6666%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ComputersOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #eee;
  width: 61%;
  height: 20%;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;

export const ComputerIcon = styled(FontAwesomeIcon).attrs({
  icon: faDesktop,
  color: 'white',
  size: '3x',
})`
  background-color: gray;
  padding: 7px;
  border-radius: 5px;
`;

export const AlterationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  height: 42%;
  background-color: white;
  margin: 20px 0 0 20px;
  border-radius: 7px;
`;

export const AlterationLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AlterationRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const AlterationSpan = styled.span`
  font-size: 18px;
  font-weight: 550;
  margin-top: 10px;
`;

export const AlterationComputer = styled.span`
  background-color: gray;
  font-weight: 600;
  color: #fff;
  padding: 10px 5px;
  width: 5em;
  border-radius: 7px;
  margin: 13px 0 10px 9px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AlterationButton = styled.button`
  background-color: gray;
  color: white;
  padding: 10px 5px;
  border: none;
  margin: 7px;
  border-radius: 7px;
  min-width: 6em;
`;

export const AlterationStatus = styled.div`
  background-color: #32e85a;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  margin-left: 8px;
`;
