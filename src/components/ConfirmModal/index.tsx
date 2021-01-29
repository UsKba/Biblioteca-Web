import React from 'react';

import { Container, Title, Text, ButtonsDiv, DeclineButton, AcceptButton } from './styles';

const ConfirmModal: React.FC = () => {
  return (
    <Container>
      <Title>Sair da Reserva</Title>
      <Text>Você realmente deseja sair desta reserva?</Text>
      <ButtonsDiv>
        <DeclineButton>Não</DeclineButton>
        <AcceptButton>Sim</AcceptButton>
      </ButtonsDiv>
    </Container>
  );
};

export default ConfirmModal;
