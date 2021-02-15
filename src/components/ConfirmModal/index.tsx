import React, { useCallback } from 'react';

import { Container, Title, Text, ButtonsDiv, DeclineButton, AcceptButton } from './styles';

interface ModalProps {
  visible: boolean;
  setVisible: (newState: boolean) => void;
  title: string;
  content: string;
  onAcceptClick?(): void;
}

const ConfirmModal: React.FC<ModalProps> = ({ visible, setVisible, title, content, onAcceptClick }) => {
  const handleDeclineClick = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const handleAcceptClick = useCallback(() => {
    if (onAcceptClick) {
      onAcceptClick();
    }
  }, [onAcceptClick]);

  if (!visible) {
    return null;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Text>{content}</Text>
      <ButtonsDiv>
        <DeclineButton onClick={handleDeclineClick}>Não</DeclineButton>
        <AcceptButton onClick={handleAcceptClick}>Sim</AcceptButton>
      </ButtonsDiv>
    </Container>
  );
};

export default ConfirmModal;
