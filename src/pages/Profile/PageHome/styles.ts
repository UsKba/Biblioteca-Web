import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const DayReservesContainer = styled.div`
  align-self: flex-start;
  width: 673px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 15px 15px 0 15px;
  background-color: rgba(3, 3, 3, 0.6);
`;

export const DatePicker = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.terciary};
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0 0;

  width: 100%;

  > svg {
    color: #333;
    font-size: 2rem;
  }
`;

export const DateInterval = styled.h1`
  font-weight: lighter;
  font-size: 20px;
  margin-right: 25px;
  margin-left: 25px;
`;

export const Week = styled.div`
  padding: 15px;
  flex: 1 1;
  justify-content: center;
  text-align: center;
`;

interface WeekName {
  active?: boolean;
}

export const WeekName = styled.span<WeekName>`
  cursor: pointer;

  color: ${(props) => (props.active ? '#333' : '#333')};
  ${(props) => props.active && 'border-bottom: 5px solid #333'};
  ${(props) => props.active && 'font-weight: bold'};

  padding: 5px 15px;
  font-size: 18px;
`;

export const Weeks = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: row;
  background-color: ${colors.terciary};
  border-radius: 0 0 5px 5px;
  margin-bottom: 15px;
`;

export const Reserves = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    justify-content: center;
  }
`;

export const Reserve = styled.div`
  display: flex;
  margin-bottom: 15px;
  flex-direction: column;
  border-radius: 5px;
  min-width: 180px;
`;

export const Room = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  border-radius: 7px 7px 0 0;
  margin-bottom: 4px;
  background-color: ${colors.terciary};
`;
export const Hour = styled.span`
  display: flex;
  flex-direction: column;
  font-weight: bold;

  background-color: ${colors.terciary};
  height: 4em;
  text-align: center;
`;

export const HourInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const InfoH = styled.span`
  text-align: center;
  margin-top: 5px;
`;

export const Date = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  border-radius: 0 0 7px 7px;
  margin-top: 4px;
  background-color: ${colors.terciary};
`;
