import React from 'react';
import {
    Container,
    ComponentsContainer,
    InputButtonContainer,
    InputContainer,
    InputLabel,
    Input,
    Button,
    AddComponentButton,
    ButtonContainer,
    SpanContainer,
    SpanLabel,
    Span,
    Text
} from './styles';

const RentRoom: React.FC = () => {
  return(
    <Container>
      <Text>Sala F1-5<br/> 8:00 - 9:00  </Text>
      <ComponentsContainer>
        <InputContainer>
          <InputLabel >Adicionar Componentes:</InputLabel>
          <InputButtonContainer>
            <Input>
            </Input>
            <AddComponentButton> + </AddComponentButton>
          </InputButtonContainer>

        </InputContainer>
        <SpanContainer>
          <SpanLabel>Grupo:</SpanLabel>
          <Span>Idaslon</Span>
          <Span>Dudu</Span>
          <Span>Null</Span>
        </SpanContainer>
        <Button>Reservar Sala</Button>
      </ComponentsContainer>

    </Container>
  );
}

export default RentRoom;
