import React from 'react';
import { BsCardChecklist } from 'react-icons/bs';
import { FaUserAlt, FaUsers, FaBell } from 'react-icons/fa';
import { useHistory, Route } from 'react-router-dom';

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
          <Button onClick={() => history.push('/configuracoes-geral')} active={pathname === '/configuracoes-geral'}>
            <BsCardChecklist />
            Configurações Gerais
          </Button>
          <Button onClick={() => history.push('/configuracoes-usuario')} active={pathname === '/configuracoes-usuario'}>
            <FaUserAlt />
            Configurações do Usuário
          </Button>
          <Button
            onClick={() => history.push('/configuracoes-notificacao')}
            active={pathname === '/configuracoes-notificacao'}
          >
            <FaBell />
            Configurações de Notificações
          </Button>
          <Button onClick={() => history.push('/configuracoes-grupo')} active={pathname === '/configuracoes-grupo'}>
            <FaUsers />
            Configurações de Grupo
          </Button>
        </ButtonList>
      </LeftSide>

      <RightSide>
        <Route path="/configuracoes-usuario" exact>
          <Label>Configurações do Usuário</Label>
          <SettingContainer>
            <SettingSpanContainer>
              <SettingTitle>Aceitar amigos automaticamente</SettingTitle>
              <SettingDesc>Aceita amigos sem necessidade de adiciona-los</SettingDesc>
            </SettingSpanContainer>
            <ToggleSwitch />
          </SettingContainer>
        </Route>

        <Route path="/configuracoes-notificacao" exact>
          <Label>Configurações de Notificação</Label>
          <SettingContainer>
            <SettingSpanContainer>
              <SettingTitle>Aviso de Notificações</SettingTitle>
              <SettingDesc>Avisa quando você recebe uma nova notificação sem estar na página inicial</SettingDesc>
            </SettingSpanContainer>
            <ToggleSwitch />
          </SettingContainer>

          <SettingContainer>
            <SettingSpanContainer>
              <SettingTitle>Notificações de computadores</SettingTitle>
              <SettingDesc>Avisa quando um novo computador está disponível</SettingDesc>
            </SettingSpanContainer>
            <ToggleSwitch />
          </SettingContainer>

          <SettingContainer>
            <SettingSpanContainer>
              <SettingTitle>Notificações de salas</SettingTitle>
              <SettingDesc>Avisa quando uma nova sala está disponível</SettingDesc>
            </SettingSpanContainer>
            <ToggleSwitch />
          </SettingContainer>
        </Route>

        <Route path="/configuracoes-grupo" exact>
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

        <Route path="/configuracoes-geral" exact>
          <Label>Configurações Gerais</Label>
          <SettingContainer>
            <SettingSpanContainer>
              <SettingTitle>Tema Escuro</SettingTitle>
              <SettingDesc>Abilita um tema escuro do site para uso noturno</SettingDesc>
            </SettingSpanContainer>
            <ToggleSwitch />
          </SettingContainer>
        </Route>
      </RightSide>
    </Container>
  );
};

export default Settings;
