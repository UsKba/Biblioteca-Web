import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TableContainer = styled.div`
  display: flex;
  height: 550px;
  width: 100%;
  max-width: 950px;
  flex-direction: column;

  background-color: ${colors.terciary};

  margin-bottom: 70px;
`;

export const Title = styled.span`
  font-size: 40px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.dark};

  margin: 10px 0 10px 0;
`;

export const TopSide = styled.div`
  display: flex;

  width: 100%;
  height: 35%;

  padding: 0 18px 18px 50px;

  background-color: ${colors.terciary};
`;

export const DateList = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

export const WeekDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeekDay = styled.span`
  font-family: 'Ubuntu';
  font-size: 18px;

  color: ${colors.text};

  margin-bottom: 15px;
`;

export const WeekDayNumber = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;

  color: ${colors.text};
`;

export const CurrentDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 155px;

  border-radius: 0 0 90px 90px;

  background-color: ${colors.primary};
`;

export const CurrentDay = styled.span`
  font-size: 45px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.terciary};

  margin-top: 25px;
`;

export const CurrentMonth = styled.span`
  font-size: 25px;
  font-family: 'Ubuntu';

  color: ${colors.terciary};

  margin-top: 10px;
`;

export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 18px;

  width: 100%;
  max-width: 200px;
  height: 160px;
`;

export const ScheduleButton = styled.button`
  width: 100%;
  height: 45px;

  border: 2px solid ${colors.primary};
  border-radius: 100px;
  background-color: ${colors.terciary};
  color: ${colors.text};
`;

export const BottomSide = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;

  justify-content: center;

  padding: 0 0 30px 25px;
`;

interface RectangleProps {
  backgroundColor?: string;
  borderColor?: string;
}

export const Rectangle = styled.div<RectangleProps>`
  text-align: center;

  width: 100%;
  max-width: 150px;
  height: 48px;

  margin: 10px 25px 10px 0;
  border-radius: 8px;
  border: 2px solid ${(props) => props.borderColor || colors.primary};
  padding: 13.5px;

  background-color: ${(props) => props.backgroundColor || colors.background};

  font-family: 'Roboto';
  font-size: 16px;
  color: ${colors.terciary};
`;

// export const DatePicker = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   width: 100%;
//   align-self: center;
//   background-color: #fff;
//   padding: 10px;
//   border-radius: 10px 10px 0 0;

//   > svg {
//     font-size: 2rem;
//     color: #333;
//   }
// `;

// export const RoomTypes = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-self: center;
//   width: 100%;
//   background-color: #fff;
//   padding: 10px 120px 10px 120px;
// `;

// interface RoomStatus {
//   status: number;
// }

// const RoomColors = ['#f55', 'orange', 'white', '#2B9348', '#333'];

// export const Color = styled.div<RoomStatus>`
//   width: 25px;
//   height: 25px;
//   background-color: ${({ status }) => RoomColors[status]};
//   border-radius: 100px;
//   align-self: center;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
// `;

// export const ColorStatus = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const ColorName = styled.span`
//   font-size: 16px;
//   margin-left: 5px;
// `;

// export const DateInterval = styled.h1`
//   font-weight: lighter;
//   font-size: 30px;
//   margin-right: 25px;
//   margin-left: 25px;
// `;
// export const RoomList = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   width: 100%;
//   align-self: center;
//   background-color: #fff;
// `;

// export const Line = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex: 1 1;
// `;

// interface Rectangle {
//   backgroundColor?: string;
// }

// export const Rectangle = styled.div<Rectangle>`
//   display: flex;
//   flex-direction: column;
//   flex: 1 1;
//   padding: 15px;
//   min-height: 100px;
//   max-height: 100px;
//   border: 0px solid rgba(0, 0, 0, 0.1);
//   border-bottom-width: 1px;
//   border-left-width: 1px;
//   color: #fff;
//   font-size: 20px;
//   font-weight: none;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.backgroundColor};
// `;

// export const StudentName = styled.span`
//   color: #fff;
//   font-size: 16px;
//   font-weight: lighter;
//   cursor: pointer;
// `;

// export const Weeks = styled.div`
//   width: 100%;
//   align-self: center;
//   display: flex;
//   flex-direction: row;
//   flex: 1;
//   background-color: #fff;
// `;

// interface WeekName {
//   active?: boolean;
// }

// export const Week = styled.div`
//   padding: 15px;
//   flex: 1 1;
//   justify-content: center;
//   text-align: center;
// `;

// export const WeekName = styled.span<WeekName>`
//   cursor: pointer;

//   color: ${(props) => (props.active ? '#333' : '#333')};
//   ${(props) => props.active && 'border-bottom: 5px solid #333'};
//   ${(props) => props.active && 'font-weight: bold'};

//   padding: 5px 15px;
//   font-size: 18px;
// `;
