import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import suap from '~/services/suap';

import Form from './Form';
import { Container, Logo } from './styles';

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    suap.init();

    // suap.logout();

    console.log('Entrou');
    console.log(suap.getLoginURL());
    console.log('Authenticado', suap.isAuthenticated());

    if (suap.isAuthenticated()) {
      const scope = 'identificacao email&state=';

      suap.getResource(scope, (response: any) => {
        // fazer requisiçao pro backend

        // token

        console.log(JSON.stringify(response, null, 4));
      });
    }
  }, []);

  // function handleLogin() {
  //   history.push(suap.getLoginURL(), {});
  // }

  return (
    <Container>
      <Logo src={require('../../assets/Logo.png')} />
      <a href={suap.getLoginURL()}>Login com o SUAP</a>
    </Container>
  );
}
