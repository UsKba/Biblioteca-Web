import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';

import colors from '~/styles/colors';

import DateList from '~/components/DateList';
import EnrollmentInput from '~/components/EnrollmentInput';
import FriendList from '~/components/FriendList';
import Button from '~/components/MainButton';

import room from '~/assets/room.jpg';

import {
  Container,
  LeftSide,
  MiddleSide,
  RightSide,
  RoomScheduling,
  DateListContainer,
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

interface ReserveResponse {
  day: number;
  id: number;
  month: number;
  roomId: number;
  scheduleId: number;
  year: number;
}

const RentRoom: React.FC = () => {
  const history = useHistory();

  const [components, setComponents] = useState<number[]>([]);
  const [username, setUsername] = useState('');
  const [selectedShiftButton, setSelectedShiftButton] = useState(0);
  const [selectedHourButton, setSelectedHourButton] = useState(0);
  const [selectedRoomButton, setSelectedRoomButton] = useState(0);

  function handleAddComponent() {
    if (components.length < 6) {
      setComponents([...components, Number(username)]);
      setUsername('');
    } else {
      alert('Grupo cheio!');
    }
  }

  async function handleCreateReserve() {
    try {
      const response = await api.post<ReserveResponse>('/reserves', {
        roomId: 1,
        scheduleId: 2,
        day: 9,
        month: 9,
        // janeiro = month: 0
        year: 2020,
        classmatesIDs: components,
      });
      console.log(response.data);
      history.push('/');
      alert('Reserva criada!');
    } catch (e) {
      console.log(e.response.data);
      alert(e.response.data.error);
    }
  }

  return (
    <Container>
      <LeftSide />
      <MiddleSide>
        <RoomScheduling>
          <Title>Agendamento de sala</Title>
          <Title2>Escolha uma data</Title2>
        </RoomScheduling>
        <DateListContainer>
          <DateList />
        </DateListContainer>
        <Shift>
          <Title2>Escolha um turno</Title2>
          <ChooseShift>
            <ShiftButton onClick={() => setSelectedShiftButton(1)} active={selectedShiftButton === 1}>
              Manhã
            </ShiftButton>
            <ShiftButton onClick={() => setSelectedShiftButton(2)} active={selectedShiftButton === 2}>
              Tarde
            </ShiftButton>
            <ShiftButton onClick={() => setSelectedShiftButton(3)} active={selectedShiftButton === 3}>
              Noite
            </ShiftButton>
          </ChooseShift>
        </Shift>
        <Hour>
          <Title2>Escolha um horário</Title2>
          <ChooseHour>
            <HourButton onClick={() => setSelectedHourButton(1)} active={selectedHourButton === 1}>
              7:15 - 8:00
            </HourButton>
            <HourButton onClick={() => setSelectedHourButton(2)} active={selectedHourButton === 2}>
              8:00 - 9:00
            </HourButton>
            <HourButton onClick={() => setSelectedHourButton(3)} active={selectedHourButton === 3}>
              9:00 - 10:00
            </HourButton>
            <HourButton onClick={() => setSelectedHourButton(4)} active={selectedHourButton === 4}>
              10:00 - 11:00
            </HourButton>
          </ChooseHour>
        </Hour>
        <RoomContainer>
          <Title2>Escolha uma sala</Title2>
          <ChooseRoom>
            <RoomButton onClick={() => setSelectedRoomButton(1)} active={selectedRoomButton === 1}>
              <Room>F1-3</Room>
              <Image src={room} />
            </RoomButton>
            <RoomButton onClick={() => setSelectedRoomButton(2)} active={selectedRoomButton === 2}>
              <Room>F1-4</Room>
              <Image src={room} />
            </RoomButton>
            <RoomButton onClick={() => setSelectedRoomButton(3)} active={selectedRoomButton === 3}>
              <Room>F1-5</Room>
              <Image src={room} />
            </RoomButton>
            <RoomButton onClick={() => setSelectedRoomButton(4)} active={selectedRoomButton === 4}>
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
                type="number"
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
              {components.map((component) => (
                <Component key={component}>{component}</Component>
              ))}
            </ComponentList>
          </Components>
        </ComponentsContainer>
        <HourButton onClick={handleCreateReserve}>Alugar Sala</HourButton>
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
