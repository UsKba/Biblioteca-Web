import React from 'react';

import Spinner from '~/components/Spinner';

import LogoImg from '~/assets/Logo.png';
import { useAuth } from '~/contexts/AuthContext';

import { Container, Logo, LoginButton } from './styles';

export default function Login() {
  const { signInSuapUrl, loading } = useAuth();

  return (
    <Container>
      <Logo src={LogoImg} />
      <LoginButton>{loading ? <Spinner /> : <a href={signInSuapUrl}>Login com o SUAP</a>}</LoginButton>
    </Container>
  );
}
