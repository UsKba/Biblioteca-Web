import styled from 'styled-components';

import colors from '~/styles/colors';

interface AlphaProps {
  modalVisible: boolean;
}

export const Alpha = styled.div<AlphaProps>`
  z-index: 1;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  height: 100%;
  width: 100%;
  display: ${({ modalVisible }) => (modalVisible ? 'flex' : 'none')};
`;

export const Container = styled.div`
  display: flex;
  width: 80%;
  height: 70%;
  align-self: center;
  background-color: ${colors.terciary};
  border-radius: 13px;
  margin: 15px;
`;

export const Model = styled.div`
  width: 60%;
  height: 100%;
  align-self: left;
  background-color: ${colors.background};
  border-radius: 7px 0 0 7px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.terciary};
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 5em 1em 1em 1em;
  border-radius: 7px 7px 0 0;
`;

export const TableTop = styled.div`
  width: 100%;
  height: 12%;
`;

export const TableBottom = styled.div`
  display: flex;
  height: 80%;
  flex: 1;
`;

export const TableLeft = styled.div`
  width: 35%;
  align-self: bottom;
`;
export const TableRight = styled.div`
  width: 65%;
  justify-content: center;
`;

interface Rectangle {
  backgroundColor?: string;
}
export const RightInfo = styled.div<Rectangle>`
  color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 20%;
  text-align: center;
  padding: 14px;
  font-size: 18px;
  background-color: ${(props) => props.backgroundColor};
`;

export const LeftInfo = styled.div<Rectangle>`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
  border-left: none;
  width: 100%;
  height: 20%;
  padding: 15px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
`;

export const RoomName = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 15px;
`;
