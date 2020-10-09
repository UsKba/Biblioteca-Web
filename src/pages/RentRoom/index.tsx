import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';

import colors from '~/styles/colors';

import DateList from '~/components/DateList';
import EnrollmentInput from '~/components/EnrollmentInput';
import FriendList from '~/components/FriendList';
import Button from '~/components/MainButton';

import roomPath from '~/assets/room.jpg';

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
  ChoosePeriod,
  PeriodButton,
  Period,
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

interface PeriodState {
  id: number;
  name: string;
  initialHour: string;
  endHour: string;
}

interface ScheduleState {
  id: number;
  initialHour: string;
  endHour: string;
  periodId: number;
}

interface RoomState {
  id: number;
  initials: string;
  available: boolean;
}

const RentRoom: React.FC = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [components, setComponents] = useState<number[]>([]);
  const [schedules, setSchedules] = useState([] as ScheduleState[]);
  const [rooms, setRooms] = useState([] as RoomState[]);

  const [periods, setPeriods] = useState([] as PeriodState[]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(1);

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
        day: 22,
        month: 9,
        // janeiro = month: 0
        year: 2020,
        classmatesIDs: components,
      });
      console.log(response.data);
      history.push('/');
      alert('Reserva criada!');
    } catch (e) {
      console.log(e);
      alert(e.response.data.error);
    }
  }

  useEffect(() => {
    async function loadSchedules() {
      try {
        const response = await api.get('/schedules');
        setSchedules(response.data);
      } catch (e) {
        console.log(e.response.data);
      }
    }

    async function loadPeriods() {
      try {
        const response = await api.get('/periods');
        setPeriods(response.data);
      } catch (e) {
        console.log(e.response.data);
      }
    }

    async function loadRooms() {
      try {
        const response = await api.get('/rooms');
        setRooms(response.data);
      } catch (e) {
        console.log(e.response.data);
      }
    }

    loadSchedules();
    loadPeriods();
    loadRooms();
  }, []);

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
        <Period>
          <Title2>Escolha um turno</Title2>
          <ChoosePeriod>
            {periods.map((period) => (
              <PeriodButton
                key={period.id}
                onClick={() => setSelectedPeriodId(period.id)}
                active={selectedPeriodId === period.id}
              >
                {period.name}
              </PeriodButton>
            ))}
          </ChoosePeriod>
        </Period>
        <Hour>
          <Title2>Escolha um horário</Title2>
          <ChooseHour>
            {schedules.map((schedule) => (
              <HourButton
                key={schedule.id}
                onClick={() => setSelectedHourButton(schedule.id)}
                colorActive={selectedHourButton === schedule.id}
                visible={schedule.periodId === selectedPeriodId}
              >
                {`${schedule.initialHour} - ${schedule.endHour}`}
              </HourButton>
            ))}
          </ChooseHour>
        </Hour>
        <RoomContainer>
          <Title2>Escolha uma sala</Title2>
          <ChooseRoom>
            {rooms.map((room) => (
              <RoomButton
                key={room.id}
                onClick={() => setSelectedRoomButton(room.id)}
                active={selectedRoomButton === room.id}
              >
                <Room>{room.initials}</Room>
                <Image src={roomPath} />
              </RoomButton>
            ))}
            {/* <RoomButton onClick={() => setSelectedRoomButton(rooms[0].id)} active={selectedRoomButton === rooms[0].id}>
              <Room>{rooms[0].initials}</Room>
              <Image src={room} />
            </RoomButton>
            <RoomButton onClick={() => setSelectedRoomButton(rooms[1].id)} active={selectedRoomButton === rooms[1].id}>
              <Room>{rooms[1].id}</Room>
              <Image src={room} />
            </RoomButton>
            <RoomButton onClick={() => setSelectedRoomButton(rooms[2].id)} active={selectedRoomButton === rooms[2].id}>
              <Room>{rooms[2].id}</Room>
              <Image src={room} />
            </RoomButton>
            <RoomButton onClick={() => setSelectedRoomButton(rooms[3].id)} active={selectedRoomButton === rooms[3].id}>
              <Room>{rooms[3].id}</Room>
              <Image src={room} />
            </RoomButton> */}
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
