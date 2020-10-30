import styled from 'styled-components';

import colors from '~/styles/colors';

interface AlphaProps {
  modalVisible: boolean;
}

export const Alpha = styled.div<AlphaProps>`
  display: ${({ modalVisible }) => (modalVisible ? 'flex' : 'none')};
  flex: 1;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;

  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const Container = styled.div`
  display: flex;
  align-self: center;

  height: 60%;
  width: 80%;

  border-radius: 13px;
  margin: 15px;

  background-color: ${colors.terciary};
`;

export const Model = styled.div`
  align-self: left;

  height: 100%;
  width: 60%;

  border-radius: 7px 0 0 7px;

  background-color: ${colors.background};
`;

export const Table = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 7px 7px 0 0;
  margin: 5em 1em 1em 1em;

  background-color: ${colors.terciary};
`;

export const TableTop = styled.div`
  height: 12%;
  width: 100%;
`;

export const TableBottom = styled.div`
  display: flex;
  flex: 1;

  height: 80%;
`;

export const TableLeft = styled.div`
  align-self: bottom;

  width: 35%;
`;
export const TableRight = styled.div`
  justify-content: center;

  width: 65%;
`;

interface Rectangle {
  backgroundColor?: string;
}
export const RightInfo = styled.div<Rectangle>`
  text-align: center;

  height: 20%;
  width: 100%;

  padding: 14px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  background-color: ${(props) => props.backgroundColor};
  color: #fff;

  font-size: 18px;
`;

export const LeftInfo = styled.div<Rectangle>`
  text-align: center;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: none;
  border-bottom: none;

  height: 20%;
  width: 100%;

  padding: 15px;

  background-color: ${(props) => props.backgroundColor};
  color: #fff;

  font-size: 18px;
`;

export const RoomName = styled.div`
  text-align: center;

  padding: 15px;

  font-size: 18px;
`;
