import React, { useState } from 'react';
import { Container, Logo } from './styles';

import Form from './Form';

export default function Main() {
  return (
    <Container>
      <Logo src={require('../../assets/Logo.png')} />
      <Form />
    </Container>
  );
}
