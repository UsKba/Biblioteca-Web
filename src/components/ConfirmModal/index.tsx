import React, { useCallback, useState } from 'react';

import { Container, Title, Text, ButtonsDiv, DeclineButton, AcceptButton } from './styles';

interface ModalProps {
  visible: boolean;
  setVisible: (newState: boolean) => void;
  title: string;
  content: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const ConfirmModal: React.FC<ModalProps> = ({ visible, setVisible, title, content, onOpen, onClose }) => {
  const handleButtonClick = useCallback(() => {
    setVisible(false);
  }, [setVisible]);
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{content}</Text>
      <ButtonsDiv>
        <DeclineButton onClick={handleButtonClick}>Não</DeclineButton>
        <AcceptButton>Sim</AcceptButton>
      </ButtonsDiv>
    </Container>
  );
};

export default ConfirmModal;
