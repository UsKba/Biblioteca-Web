import React from 'react';

import colors from '~/styles/colors';

import {
  Container,
  Model,
  Alpha,
  Table,
  TableLeft,
  TableRight,
  TableTop,
  TableBottom,
  RightInfo,
  LeftInfo,
  RoomName,
} from './styles';

interface OwnProps {
  modalVisible: boolean;
  setModalVisible: (newState: boolean) => void;
  selectedRoom: string;
}

const LibraryModal: React.FC<OwnProps> = ({ modalVisible, setModalVisible, selectedRoom }) => {
  return (
    <Alpha modalVisible={modalVisible} onClick={() => setModalVisible(false)}>
      <Container>
        <Model />
        <Table>
          <RoomName>{selectedRoom}</RoomName>

          <TableTop />
          <TableBottom>
            <TableLeft>
              <LeftInfo backgroundColor={colors.primary}>07:15 - 08:15</LeftInfo>
              <LeftInfo backgroundColor={colors.primary}>08:15 - 09:15</LeftInfo>
              <LeftInfo backgroundColor={colors.primary}>09:15 - 10:15</LeftInfo>
              <LeftInfo backgroundColor={colors.primary}>10:15 - 11:15</LeftInfo>
              <LeftInfo backgroundColor={colors.primary}>11:15 - 12:00</LeftInfo>
            </TableLeft>
            <TableRight>
              <RightInfo backgroundColor={colors.roomStatus[2]}>Bruno, Halyson, Arthur</RightInfo>
              <RightInfo backgroundColor={colors.roomStatus[0]}>Hiterlan, Breno, Dudu</RightInfo>
              <RightInfo />
              <RightInfo backgroundColor={colors.roomStatus[3]}> </RightInfo>
              <RightInfo backgroundColor={colors.roomStatus[2]}>Idaslon, Nathan, Nayara</RightInfo>
            </TableRight>
          </TableBottom>
        </Table>
      </Container>
    </Alpha>
  );
};

export default LibraryModal;
