import React from 'react';
import { BsCardChecklist } from 'react-icons/bs';
import { FaUserAlt, FaUsers, FaBell, FaCogs } from 'react-icons/fa';
import { useHistory, Switch, Route } from 'react-router-dom';

import ToggleSwitch from '~/components/ToggleSwitch';

import {
  Container,
  LeftSide,
  RightSide,
  ButtonList,
  Button,
  Label,
  SettingContainer,
  SettingSpanContainer,
  SettingTitle,
  SettingDesc,
} from './styles';

// settings/v
const Settings: React.FC = () => {
  const history = useHistory();
  const { pathname } = history.location;
  return (
    <Container>
      <LeftSide>
        <Label>Configurações</Label>
        <ButtonList>
          <Button onClick={() => history.push('/settings-general')} active={pathname === '/settings-general'}>
            <BsCardChecklist />
            Configurações Gerais
          </Button>
          <Button onClick={() => history.push('/settings-user')} active={pathname === '/settings-user'}>
            <FaUserAlt />
            Configurações do Usuário
          </Button>
          <Button onClick={() => history.push('/settings-notification')} active={pathname === '/settings-notification'}>
            <FaBell />
            Configurações de Notificações
          </Button>
          <Button onClick={() => history.push('/settings-voz')} active={pathname === '/settings-voz'}>
            <FaUsers />
            Configurações de Grupo
          </Button>
          <Button>
            <FaCogs />
            Configurações de Exemplo
          </Button>
        </ButtonList>
      </LeftSide>
      <RightSide>
        <Switch>
          <Route path="/settings-user" exact>
            <Label>Configurações do Usuário</Label>
          </Route>

          <Route path="/settings-notification" exact>
            <Label>Configurações de Notificação</Label>
            <SettingContainer>
              <SettingSpanContainer>
                <SettingTitle>Aviso de Notificações</SettingTitle>
                <SettingDesc>Avisa quando você recebe uma nova notificação sem estar na página inicial</SettingDesc>
              </SettingSpanContainer>
              <ToggleSwitch />
            </SettingContainer>
          </Route>

          <Route path="/settings-voz" exact>
            <Label>Configurações de Grupo </Label>
            <SettingContainer>
              <SettingSpanContainer>
                <SettingTitle>Entrada automática em grupos</SettingTitle>
                <SettingDesc>
                  Permite você entrar em grupos automaticamente (desde que não entrem em conflito de horários).
                </SettingDesc>
              </SettingSpanContainer>
              <ToggleSwitch />
            </SettingContainer>
          </Route>

          <Route path="/settings-general" exact>
            <Label>Configurações Gerais</Label>
          </Route>
        </Switch>
      </RightSide>
    </Container>
  );
};

export default Settings;
