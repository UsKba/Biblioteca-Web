import React from 'react';
import {useHistory, Switch, Route } from 'react-router-dom';

import {
  Container,
  LeftSide,
  RightSide,
  Button
} from './styles';


// settings/v
const Settings= () => {

  const history = useHistory();
  const pathname = history.location.pathname;
  return(
    <Container>
      <LeftSide>
        <Button onClick={() => history.push('/settings/user/')} active={pathname === '/settings/user/'}>Configurações do Usuário</Button>
        <Button onClick={() => history.push('/settings/notification/')} active={pathname === '/settings/notification/'}>Configurações de Notificação</Button>
        <Button onClick={() => history.push('/settings/voz/')} active={pathname === '/settings/voz/'}>Morra Bruno Voz</Button>
      </LeftSide>

      <RightSide>
        <Switch>
            <Route path="/settings/user" exact>
              <div>Configurações do usuário</div>
            </Route>


            <Route path="/settings/notification" exact>
              <div>Configurações de Notificação</div>
            </Route>

            <Route path="/settings/voz" exact>
              <div>Configurações de Voz</div>
            </Route>

        </Switch>
      </RightSide>
    </Container>
  )
}

export default Settings;
