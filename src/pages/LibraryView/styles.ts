import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  align-self: center;
  background-color: #fff;
  margin-top:20px;
  border-radius: 10px;

`;

export const IndividualButton = styled.button`
  width:9em;
  height:30%;
  background-color: #ff9d00;
  color: #fff;
  font-weight: 400;
  border:none;
  border-radius: 10px 0 0 0;
`;

export const ComputerRoomButton = styled.button`
  width: 9em;
  height: 70%;
  background-color: #0d9e00;
  color: #fff;
  font-weight: 400;
  border: none;
  border-radius: 0 0 0 10px;
`;

export const ComputerButton = styled.button`
  width:6em;
  height:3.5em;
  background-color:#00c99e;
  color: #fff;
  font-weight: 400;
  border: none;
  margin: 0 1em 0 0;
`;

export const LibrarianButton = styled.button`
  background-color:#003d9e;
  color: #fff;
  font-weight: 400;
  width:20em;
  height:12em;
  border: none;
  margin-left: 10em;
`;

export const RoomButton = styled.button`
  background-color: #D64C4C;
  color: #fff;
  font-weight: 400;
  width: 25%;
  height: 9em;
  border: none;
  border-right: solid #fff 3px;
`;

export const RoomButtonLarge = styled.button`
  background-color: #D64C4C;
  color: #fff;
  font-weight: 400;
  width: 25%;
  height: 21em;
  border: none;
  border-radius: 0 10px 0 0;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopMiddleSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const MiddleSide = styled.div`
  display: flex;
  flex-direction: column;

`;

export const DownMiddleSide = styled.div`
  display: flex;
  flex-direction: column;

`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const Bookshelf = styled.div`
  display: row;
  background-color:grey;
  width: 10%;
  height: 30%;
  margin: 0 10% 0 5%;
`;


