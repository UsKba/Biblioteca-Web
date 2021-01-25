import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

import { Button } from '~/components/MainButton/styles';

// export const Container = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   width: 100%;
// `;

// export const TableContainer = styled.div`
//   display: flex;
//   flex-direction: column;

//   width: 100%;
//   max-width: 950px;

//   margin-bottom: 20px;
//   border-radius: 10px;

//   background-color: ${colors.terciary};
// `;

// export const Title = styled.span`
//   font-size: 40px;
//   font-family: 'Ubuntu';
//   font-weight: bold;

//   color: ${colors.dark};

//   margin: 10px 10px 10px 0;
// `;

// export const TopSide = styled.div`
//   display: flex;

//   width: 100%;
//   height: 35%;

//   padding: 0 18px 18px 50px;
//   border-radius: 10px 10px 0 0;

//   background-color: ${colors.terciary};
// `;

// export const CurrentDayContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   width: 155px;
//   height: 160px;

//   border-radius: 0 0 90px 90px;

//   background-color: ${colors.primary};
// `;

// export const CurrentDay = styled.span`
//   margin-top: 25px;

//   font-size: 45px;
//   font-family: 'Ubuntu';
//   font-weight: bold;

//   color: ${colors.terciary};
// `;

// export const CurrentMonth = styled.span`
//   margin-top: 10px;

//   font-size: 25px;
//   font-family: 'Ubuntu';

//   color: ${colors.terciary};

//   text-transform: capitalize;
// `;

// export const ScheduleList = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   width: 100%;
//   max-width: 200px;

//   padding-top: 18px;

//   height: 160px;
// `;

// interface ButtonProps {
//   active?: boolean;
// }

// export const ScheduleButton = styled(Button)<ButtonProps>`
//   width: 100%;
//   height: 45px;

//   border: 2px solid ${colors.primary};
//   border-radius: 100px;

//   margin-right: 20px;

//   background-color: ${({ active }) => (active === true ? `${colors.primary}` : `${colors.terciary}`)};
//   color: ${({ active }) => (active === true ? `${colors.terciary}` : `${colors.text}`)};
// `;

// export const BottomSide = styled.div`
//   display: flex;
//   flex: 1;
//   flex-wrap: wrap;
//   justify-content: center;

//   padding: 0 0 30px 25px;
// `;

// interface RectangleProps {
//   backgroundColor?: string;
//   borderColor?: string;
// }

// export const Rectangle = styled.div<RectangleProps>`
//   text-align: center;

//   width: 100%;
//   max-width: 150px;
//   height: 48px;

//   margin: 10px 25px 10px 0;
//   padding: 13.5px;

//   border-radius: 8px;
//   border: 2px solid ${(props) => props.borderColor || colors.primary};

//   font-family: 'Roboto';
//   font-size: 16px;

//   color: ${colors.terciary};
//   background-color: ${(props) => props.backgroundColor || colors.background};
// `;

// export const TitleContainer = styled.div`
//   display: flex;
//   align-items: center;

//   width: 100%;
//   max-width: 950px;
// `;

// export const RentButton = styled(Button)`
//   margin: 0;

//   color: ${colors.text};
// `;

// export const StyledLink = styled(Link)`
//   height: 50px;
// `;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const TableTopInformation = styled.div`
  display: flex;

  height: 75px;
  width: 100%;
  max-width: 1200px;

  margin-top: 30px;
  padding-bottom: 10px;

  background-color: yellow;
`;

export const Table = styled.div`
  display: flex;

  height: 550px;
  width: 100%;
  max-width: 1200px;

  border: solid 0.5px ${colors.grey};
  border-right: none;

  background-color: ${colors.terciary};
`;

export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  flex: 1;

  padding: 20px 35px;

  border-right: solid 0.5px ${colors.grey};
`;

export const RoomTitle = styled.div`
  font-size: 27px;
  font-family: 'roboto';
  font-weight: bold;

  color: ${colors.dark};

  margin-bottom: 30px;
`;

interface RoomCardProps {
  bgColor?: string;
}

export const RoomCard = styled.div<RoomCardProps>`
  display: flex;
  flex-direction: column;

  height: 79px;
  width: 100%;

  background-color: ${(props) => props.bgColor || colors.primary};
`;
