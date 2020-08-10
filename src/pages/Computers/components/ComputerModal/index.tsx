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
}
const ComputerModal: React.FC<OwnProps> = ({ modalVisible, setModalVisible }) => {
  return (
    <Alpha modalVisible={modalVisible}>
      <Popup>
        <PopupContentTop>Computador: PC 01</PopupContentTop>
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
