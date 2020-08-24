import React from 'react';

import Spinner from '~/components/Spinner';

import LogoImg from '~/assets/Logo.png';
import { useAuth } from '~/contexts/AuthContext';

import { Container, Logo, LoginButton } from './styles';

const Login: React.FC = () => {
  const { signInSuapUrl, loading } = useAuth();

  return (
    <Container>
      <Logo src={LogoImg} />
      <a href={signInSuapUrl}>
        <LoginButton>{loading ? <Spinner /> : 'Login com o SUAP'}</LoginButton>
      </a>
    </Container>
  );
};

export default Login;
