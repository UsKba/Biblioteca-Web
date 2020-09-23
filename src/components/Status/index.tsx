import React from 'react';

import { Container, StatusContainer, StatusSpan, StatusColor } from './styles';

const Status: React.FC = () => {
  return (
    <Container>
      <StatusContainer>
        <StatusColor status={0} />
        <StatusSpan>Disponível</StatusSpan>
      </StatusContainer>

      <StatusContainer>
        <StatusColor status={1} />
        <StatusSpan>Ausente</StatusSpan>
      </StatusContainer>

      <StatusContainer>
        <StatusColor status={2} />
        <StatusSpan>Ocupado</StatusSpan>
      </StatusContainer>

      <StatusContainer>
        <StatusColor status={3} />
        <StatusSpan>Indisponível</StatusSpan>
      </StatusContainer>
    </Container>
  );
};

export default Status;
