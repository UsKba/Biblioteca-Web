import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from '~/assets/oops.svg';

import { Container, T1, T2, Text, Buttons, Image, OutlineButton } from './styles';

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <Text>
        <T1>
          Oops...
          <br />
          Nada por aqui!
        </T1>
        <T2>
          Você não tem acesso a esta página
          <br />
          ou ela não existe
        </T2>
        <Buttons>
          <Link to="/#">
            <OutlineButton>Página Inicial</OutlineButton>
          </Link>
          <Link to="/#">
            <OutlineButton>Suporte</OutlineButton>
          </Link>
        </Buttons>
      </Text>
      <Image src={Img1} />
    </Container>
  );
};

export default PageNotFound;
