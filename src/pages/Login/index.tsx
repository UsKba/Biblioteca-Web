import React from 'react';

import Form from './Form';
import { Container, Logo, BackgroundContainer, Image } from './styles';

export default function Login() {
  return (
    <Container>
      <Logo src={require('../../assets/Logo.png')} />
      <Form />
    </Container>
  );
}
