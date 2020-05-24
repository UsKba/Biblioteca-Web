import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const DatePicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  align-self: center;
  background-color: #fff;
  margin-top: 20px;
  padding: 10px;
`;

export const DateInterval = styled.h1`
  font-weight: lighter;
  font-size: 30px;
  margin-right: 25px;
  margin-left: 25px;
`;
export const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 90%;
  align-self: center;
  border-radius: 10px;
  background-color: #fff;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1;

  &:first {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

interface IRectangle {
  backgroundColor?: string;
}

export const Rectangle = styled.div<IRectangle>`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 15px;
  min-height: 100px;
  border: 0px solid rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
  border-left-width: 1px;
  color: #fff;
  font-size: 20px;
  font-weight: none;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;

export const StudentName = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: lighter;
  cursor: pointer;
`;

export const Weeks = styled.div`
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: #fff;
`;

interface IWeekName {
  active?: boolean;
}

export const Week = styled.div`
  padding: 15px;
  flex: 1 1;
  justify-content: center;
  text-align: center;
`;

export const WeekName = styled.span<IWeekName>`
  cursor: pointer;

  color: ${(props) => (props.active ? '#007BFF' : '#333')};
  ${(props) => props.active && 'border-bottom: 5px solid #007bff'};
  ${(props) => props.active && 'font-weight: bold'};

  padding: 5px 15px;
  font-size: 18px;
`;
