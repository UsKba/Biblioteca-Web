import React from 'react';

import {
  Container,
  LeftSide,
  RightSide,
  Button
} from './styles';

const Settings: React.FC = () => {
  return(
    <Container>
      <LeftSide>
        <Button active>Configurações do Usuário</Button>
        <Button>Sem Sao</Button>
        <Button>Morra Bruno Eduardo</Button>
      </LeftSide>

      <RightSide>

      </RightSide>
    </Container>
  )
}

export default Settings;
