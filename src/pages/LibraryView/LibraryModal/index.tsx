import React from 'react';

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
          {selectedRoom}
          <TableTop />
          <TableBottom>
            <TableLeft>
              <LeftInfo backgroundColor="#1c91ff">07:15 - 08:15</LeftInfo>
              <LeftInfo backgroundColor="#1c91ff">08:15 - 09:15</LeftInfo>
              <LeftInfo backgroundColor="#1c91ff">09:15 - 10:15</LeftInfo>
              <LeftInfo backgroundColor="#1c91ff">10:15 - 11:15</LeftInfo>
              <LeftInfo backgroundColor="#1c91ff">11:15 - 12:00</LeftInfo>
            </TableLeft>
            <TableRight>
              <RightInfo backgroundColor="#F55">Bruno, Halyson, Arthur</RightInfo>
              <RightInfo backgroundColor="#2B9348">Hiterlan, Breno, Dudu</RightInfo>
              <RightInfo backgroundColor="#faa61a">Isadora, Caio, Silvio </RightInfo>
              <RightInfo> </RightInfo>
              <RightInfo backgroundColor="#faa61a">Idaslon, Nathan, Nayara</RightInfo>
            </TableRight>
          </TableBottom>
        </Table>
      </Container>
    </Alpha>
  );
};

export default LibraryModal;
