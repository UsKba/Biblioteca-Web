import React, { useState } from 'react';
import { Container, Logo, BackgroundContainer, Image } from './styles';
import Form from './Form';

export default function Login() {
  return (

      <Container>
        <Logo src={require('../../assets/Logo.png')} />
        <Form />
      </Container>

  );
}
