import React from 'react';
import { FaDesktop } from 'react-icons/fa';

import {
  Alpha,
  Popup,
  PopupContentTop,
  PopupContentMid,
  PopupStatus,
  PopupContentDiv,
  PopupContentBottom,
} from './styles';

interface OwnProps {
  modalVisible: boolean;
  setModalVisible: (newState: boolean) => void;
  selectedComputer: string;
}
const ComputerModal: React.FC<OwnProps> = ({ modalVisible, setModalVisible, selectedComputer }) => {
  return (
    <Alpha modalVisible={modalVisible} onClick={() => setModalVisible(false)}>
      <Popup>
        <PopupContentTop>
          Computador: PC-
          {selectedComputer}
        </PopupContentTop>
        <PopupContentDiv>
          <PopupContentMid>Status: Disponível</PopupContentMid>
          <PopupStatus />
        </PopupContentDiv>
        <PopupContentBottom>
          <FaDesktop />
        </PopupContentBottom>
      </Popup>
    </Alpha>
  );
};

export default ComputerModal;
