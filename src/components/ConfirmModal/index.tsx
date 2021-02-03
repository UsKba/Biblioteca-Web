import React, { useCallback, useState } from 'react';

import { Container, Title, Text, ButtonsDiv, DeclineButton, AcceptButton, Modal } from './styles';

interface ModalProps {
  // modalVisible: boolean;
  // setModalVisible: (newState: boolean) => void;
  modalTitle: string;
  modalContent: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const ConfirmModal: React.FC<ModalProps> = ({ modalTitle, modalContent, onOpen, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = useCallback(() => {
    setModalVisible(false);
  }, [setModalVisible]);
  return (
    <Modal>
      <Container>
        <Title>{modalTitle}</Title>
        <Text>{modalContent}</Text>
        <ButtonsDiv>
          <DeclineButton onClick={handleButtonClick}>Não</DeclineButton>
          <AcceptButton>Sim</AcceptButton>
        </ButtonsDiv>
      </Container>
    </Modal>
  );
};

export default ConfirmModal;
