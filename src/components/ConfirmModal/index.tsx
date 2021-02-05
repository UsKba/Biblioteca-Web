import React, { useCallback, useState } from 'react';

import { Container, Title, Text, ButtonsDiv, DeclineButton, AcceptButton } from './styles';

interface ModalProps {
  // modalVisible: boolean;
  // setModalVisible: (newState: boolean) => void;
  modalTitle: string;
  modalContent: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const ConfirmModal: React.FC<ModalProps> = ({ modalTitle, modalContent, onOpen, onClose }) => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleButtonClick = useCallback(() => {
    setModalVisible(false);
  }, [setModalVisible]);
  return (
    <Container>
      <Title>{modalTitle}</Title>
      <Text>{modalContent}</Text>
      <ButtonsDiv>
        <DeclineButton onClick={handleButtonClick}>Não</DeclineButton>
        <AcceptButton>Sim</AcceptButton>
      </ButtonsDiv>
    </Container>
  );
};

export default ConfirmModal;
