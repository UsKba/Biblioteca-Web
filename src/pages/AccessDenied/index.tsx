import React from 'react';
import { MdError } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, H1, H2, InitialButton } from './styles';

const AccessDenied: React.FC = () => {
  return (
    <Container>
      <MdError />
      <H1>Ops!</H1>
      <H2>Você não tem acesso a essa página.</H2>

      <Link to="/">
        <InitialButton>Retornar</InitialButton>
      </Link>
    </Container>
  );
};

export default AccessDenied;
