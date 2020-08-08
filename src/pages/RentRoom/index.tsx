import React, { useState } from 'react';

import FriendList from '~/components/FriendList';

import {
  Container,
  ComponentsContainer,
  LeftItemsContainer,
  MiddleItemsContainer,
  RightItemsContainer,
  InputButtonContainer,
  InputContainer,
  InputLabel,
  Input,
  Button,
  AddComponentButton,
  SpanContainer,
  SpanLabel,
  Span,
  Text,
  Warning,
} from './styles';

const RentRoom: React.FC = () => {
  const [components, setComponents] = useState<string[]>([]);
  const [username, setUsername] = useState('');

  function handleAddComponent() {
    if (components[2] === undefined) {
      setComponents([...components, username]);
    } else if (components[2] !== undefined) {
      alert('Grupo cheio');
    }
  }

  return (
    <Container>
      <LeftItemsContainer>
        <Text>
          Sala F1-5
          <br />
          8:00 - 9:00
        </Text>
        <Warning>Idaslon já está em uma sala nesse horário</Warning>
      </LeftItemsContainer>

      <MiddleItemsContainer>
        <ComponentsContainer>
          <InputContainer>
            <InputLabel>Adicionar Componentes:</InputLabel>
            <InputButtonContainer>
              <Input
                type="text"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <AddComponentButton onClick={handleAddComponent}> + </AddComponentButton>
            </InputButtonContainer>
          </InputContainer>
          <SpanContainer>
            <SpanLabel>Grupo:</SpanLabel>
            <Span>{components[0]}</Span>
            <Span>{components[1]}</Span>
            <Span>{components[2]}</Span>
          </SpanContainer>
          <Button>Reservar Sala</Button>
        </ComponentsContainer>
      </MiddleItemsContainer>

      <RightItemsContainer>
        <FriendList />
      </RightItemsContainer>
    </Container>
  );
};

export default RentRoom;
