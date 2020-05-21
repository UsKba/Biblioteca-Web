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
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [aviso, setAviso] = useState(false);

  function atualizarMatricula(evento: React.ChangeEvent<HTMLInputElement>) {
    setMatricula(evento.target.value);
  }

  function atualizarSenha(evento: React.ChangeEvent<HTMLInputElement>) {
    setSenha(evento.target.value);
  }

  function chamarSuap() {
    setAviso(true);
  }

  return (
    <Container>
      <InputContainer>
        <InputLabel htmlFor="matricula">Matrícula Suap</InputLabel>
        <Input
          id="matricula"
          type="text"
          value={matricula}
          onChange={atualizarMatricula}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="senha">Senha</InputLabel>
        <Input
          id="senha"
          type="password"
          value={senha}
          onChange={atualizarSenha}
        />
      </InputContainer>
      <Warning>{aviso && 'Matricula ou senha inválida'}</Warning>
      <LoginButton
        disabled={senha.length === 0 || matricula.length === 0}
        onClick={chamarSuap}
      >
        ENTRAR
      </LoginButton>

      <ForgotPassword href="https://suap.ifrn.edu.br/comum/solicitar_trocar_senha/">
        Esqueci minha senha
      </ForgotPassword>
    </Container>
  );
};

export default Form;
