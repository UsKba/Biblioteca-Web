import React, { useState } from 'react';

import {
  Container,
  Input,
  InputContainer,
  InputLabel,
  LoginButton,
  ForgotPassword,
  Warning,
} from './styles';

const Form: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <InputContainer>
        <InputLabel htmlFor="matricula">Matrícula Suap</InputLabel>
        <Input
          id="matricula"
          type="text"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="senha">Senha</InputLabel>
        <Input
          id="senha"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </InputContainer>

      <Warning>Matricula ou senha inválida</Warning>
      <LoginButton>ENTRAR</LoginButton>
      <ForgotPassword href="https://suap.ifrn.edu.br/comum/solicitar_trocar_senha/">
        Esqueci minha senha
      </ForgotPassword>
    </Container>
  );
};

export default Form;
