import React from 'react';

import { Container, StatusContainer, StatusSpan, StatusColor } from './styles';

const Status: React.FC = () => {
  return (
    <Container>
      <StatusContainer>
        <StatusColor status={0} />
        <StatusSpan>Funcionando</StatusSpan>
      </StatusContainer>

      <StatusContainer>
        <StatusColor status={1} />
        <StatusSpan>Indisponível</StatusSpan>
      </StatusContainer>
    </Container>
  );
};

export default Status;
