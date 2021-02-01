import React from 'react';

import { Container, Title, Text, ButtonsDiv, DeclineButton, AcceptButton } from './styles';

interface ModalProps {
  modalTitle: string;
  modalContent: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const ConfirmModal: React.FC<ModalProps> = ({ modalTitle, modalContent, onOpen, onClose }) => {
  return (
    <Container>
      <Title>{modalTitle}</Title>
      <Text>{modalContent}</Text>
      <ButtonsDiv>
        <DeclineButton>Não</DeclineButton>
        <AcceptButton>Sim</AcceptButton>
      </ButtonsDiv>
    </Container>
  );
};

export default ConfirmModal;
