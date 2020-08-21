import React from 'react';
import { Link } from 'react-router-dom';

import { Container, T1, T2, Text, InitialButton, Buttons } from './styles';

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <Text>
        <T1>Página não encontrada</T1>
        <T2>
          A página que você tentou acessar não existe,
          <br />
          tente voltar para a página inicial, ou entre em
          <br />
          contato com nosso suporte.
        </T2>
        <Buttons>
          <Link to="/home">
            <InitialButton>Página Inicial</InitialButton>
          </Link>
          <Link to="/#">
            <InitialButton>Suporte</InitialButton>
          </Link>
        </Buttons>
      </Text>
    </Container>
  );
};

export default PageNotFound;
