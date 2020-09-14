import React, { useState } from 'react';

import colors from '~/styles/colors';

import DateList from '~/components/DateList';
import EnrollmentInput from '~/components/EnrollmentInput';
import FriendList from '~/components/FriendList';

import room from '~/assets/room.jpg';

import {
  Container,
  LeftSide,
  MiddleSide,
  RightSide,
  RoomScheduling,
  Title,
  Title2,
  Title3,
  ChooseShift,
  ShiftButton,
  Shift,
  Hour,
  ChooseHour,
  HourButton,
  ChooseRoom,
  Room,
  RoomContainer,
  Image,
  RoomButton,
  Components,
  ComponentsContainer,
  InputContainer,
  InputButton,
  ComponentList,
  Component,
} from './styles';

const RentRoom: React.FC = () => {
  const [components, setComponents] = useState<string[]>([]);
  const [username, setUsername] = useState('');

  function handleAddComponent() {
    if (components[3] === undefined) {
      setComponents([...components, username]);
    } else if (components[3] !== undefined) {
      alert('Grupo cheio');
    }
  }

  return (
    <Container>
      <LeftSide />
      <MiddleSide>
        <RoomScheduling>
          <Title>Agendamento de sala</Title>
          <Title2>Escolha uma data</Title2>
          <DateList />
        </RoomScheduling>
        <Shift>
          <Title2>Escolha um turno</Title2>
          <ChooseShift>
            <ShiftButton> Manhã</ShiftButton>
            <ShiftButton>Tarde</ShiftButton>
            <ShiftButton>Noite</ShiftButton>
          </ChooseShift>
        </Shift>
        <Hour>
          <Title2>Escolha um horário</Title2>
          <ChooseHour>
            <HourButton>7:15 - 8:00</HourButton>
            <HourButton>8:00 - 9:00</HourButton>
            <HourButton>9:00 - 10:00</HourButton>
            <HourButton>10:00 - 11:00</HourButton>
          </ChooseHour>
        </Hour>
        <RoomContainer>
          <Title2>Escolha uma sala</Title2>
          <ChooseRoom>
            <RoomButton>
              <Room>F1-3</Room>
              <Image src={room} />
            </RoomButton>
            <RoomButton>
              <Room>F1-4</Room>
              <Image src={room} />
            </RoomButton>
            <RoomButton>
              <Room>F1-5</Room>
              <Image src={room} />
            </RoomButton>
            <RoomButton>
              <Room>F1-6</Room>
              <Image src={room} />
            </RoomButton>
          </ChooseRoom>
        </RoomContainer>
        <ComponentsContainer>
          <Title2>Componentes</Title2>
          <Components>
            <InputContainer>
              <EnrollmentInput
                placeholder="Digite um nome"
                hideIcon
                backgroundColor={colors.background}
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <InputButton onClick={handleAddComponent}>+</InputButton>
            </InputContainer>
            <Title3>Grupo:</Title3>
            <ComponentList>
              <Component>{components[0]}</Component>
              <Component>{components[1]}</Component>
              <Component>{components[2]}</Component>
              <Component>{components[3]}</Component>
            </ComponentList>
          </Components>
        </ComponentsContainer>
      </MiddleSide>
      <RightSide>
        <FriendList />
      </RightSide>
    </Container>
  );
};

export default RentRoom;

/* <LeftItemsContainer>
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
</RightItemsContainer> */
