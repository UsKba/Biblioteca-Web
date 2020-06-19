import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
`;
export const DayReservesContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const DatePicker = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-top: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 15px 15px 0 0;
`;

export const DateInterval = styled.h1`
  font-weight: lighter;
  font-size: 20px;
  margin-right: 25px;
  margin-left: 25px;
`;
export const MessageButton = styled.button`
  align-self: flex-end;
  background-color: #333;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  width: 15%;
  padding: 20px 0px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin: 15px;
`;

export const Week = styled.div`
  padding: 15px;
  flex: 1 1;
  justify-content: center;
  text-align: center;
`;

interface IWeekName {
  active?: boolean;
}

export const WeekName = styled.span<IWeekName>`
  cursor: pointer;

  color: ${(props) => (props.active ? '#483D8B' : '#333')};
  ${(props) => props.active && 'border-bottom: 5px solid #483D8B'};
  ${(props) => props.active && 'font-weight: bold'};

  padding: 5px 15px;
  font-size: 18px;
`;

export const Weeks = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 0 0 15px 15px;
`;

export const Reserves = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

export const Reserve = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 30px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  min-width: 25%;
`;

export const Room = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;
export const Hour = styled.span`
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center;
`;
export const StudentName = styled.span`
  text-align: center;
`;
