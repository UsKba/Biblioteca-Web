import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { checkUserIsAdmin } from '~/utils/user';

import Navbar from '~/components/Navbar';

import { useAuth } from '~/contexts/AuthContext';
import About from '~/pages/About';
import Computers from '~/pages/Computers';
import Help from '~/pages/Help';
import Home from '~/pages/Home';
import MakeWarning from '~/pages/MakeWarning';
import PageNotFound from '~/pages/PageNotFound';
import Reserve from '~/pages/Reserve';
import Rooms from '~/pages/Rooms';
import Settings from '~/pages/Settings';

export default function Routes() {
  const authContext = useAuth();

  const [userStatus, setUserStatus] = useState(Boolean);

  useEffect(() => {
    if (checkUserIsAdmin(authContext.user)) {
      setUserStatus(true);
    }
    setUserStatus(false);
  }, [authContext.user]);

  return (
    <>
      <Route
        path={[
          '/salas',
          '/',
          '/computadores',
          '/reservar',
          '/bibliotecario',
          '/configuracoes',
          '/configuracoes-usuario',
          '/configuracoes-notificacao',
          '/configuracoes-geral',
          '/configuracoes-grupo',
          '/bibliotecario',
          '/sobre',
          '/ajuda',
          '/criar-aviso',
        ]}
        exact
        component={Navbar}
      />
      <Switch>
        <Route path="/salas" exact component={Rooms} />
        <Route path="/" exact component={Home} />
        <Route path="/computadores" exact component={Computers} />
        <Route path="/reservar" exact component={Reserve} />

        <Route path="/configuracoes" exact component={Settings} />
        <Route path="/configuracoes-usuario" exact component={Settings} />
        <Route path="/configuracoes-notificacao" exact component={Settings} />
        <Route path="/configuracoes-geral" exact component={Settings} />
        <Route path="/configuracoes-grupo" exact component={Settings} />
        <Route path="/sobre" exact component={About} />
        <Route path="/ajuda" exact component={Help} />
        <>
          {userStatus ? (
            <Route path="/criar-aviso" exact component={MakeWarning} />
          ) : (
            <Route path="/criar-aviso" exact component={MakeWarning} />
          )}
        </>
        <Route path="/" component={PageNotFound} />
      </Switch>
    </>
  );
}
