import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';
import { AxiosResponseError } from '../../../types';
import { Container, Input, InputContainer, InputLabel, LoginButton, ForgotPassword, Warning } from './styles';

interface SessionResponse {
  token: string;
  user: {
    id: number;
    email: string;
    enrollment: string;
    name: string;
  };
}

const Form: React.FC = () => {
  const history = useHistory();

  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();

  function atualizarMatricula(evento: React.ChangeEvent<HTMLInputElement>) {
    setMatricula(evento.target.value);
  }

  function atualizarSenha(evento: React.ChangeEvent<HTMLInputElement>) {
    setSenha(evento.target.value);
  }

  async function handleLogin() {
    // 20181104010048
    // pass123

    try {
      await api.post<SessionResponse>('/users', {
        enrollment: matricula,
        password: senha,
      });

      history.push('/profile');
    } catch (err) {
      const responseError = err as AxiosResponseError;

      setErrorMessage(responseError.response?.data?.error);
    }
  }

  return (
    <Container>
      <InputContainer>
        <InputLabel htmlFor="matricula">Matrícula Suap:</InputLabel>
        <Input id="matricula" type="text" value={matricula} onChange={atualizarMatricula} />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="senha">Senha:</InputLabel>
        <Input id="senha" type="password" value={senha} onChange={atualizarSenha} />
      </InputContainer>
      <Warning>{errorMessage}</Warning>
      <LoginButton disabled={senha.length === 0 || matricula.length === 0} onClick={handleLogin}>
        ENTRAR
      </LoginButton>

      <ForgotPassword href="https://suap.ifrn.edu.br/comum/solicitar_trocar_senha/">Esqueci minha senha</ForgotPassword>
    </Container>
  );
};

export default Form;
