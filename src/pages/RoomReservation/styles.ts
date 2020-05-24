import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
`;

export const DatePicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
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
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IRectangle {
  backgroundColor?: string;
}

export const Rectangle = styled.div<IRectangle>`
  display: flex;
  flex-grow: 1;
  width: 150px;
  height: 50px;
  border: 1px solid #000;
  background-color: ${(props) => props.backgroundColor};
`;
