import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';

import colors from '~/styles/colors';

import DateList from '~/components/DateList';
import EnrollmentInput from '~/components/EnrollmentInput';
import FriendList from '~/components/FriendList';
import Button from '~/components/MainButton';

import roomPath from '~/assets/room.jpg';
import { useAuth } from '~/contexts/AuthContext';

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

  const { user } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState('');
  const [components, setComponents] = useState<number[]>([]);
  const [schedules, setSchedules] = useState([] as ScheduleState[]);
  const [rooms, setRooms] = useState([] as RoomState[]);

  const [periods, setPeriods] = useState([] as PeriodState[]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(1);

  const [selectedScheduleId, setSelectedScheduleId] = useState(0);
  const [selectedRoomId, setSelectedRoomId] = useState(0);

  function handleAddComponent() {
    const findComponent = components.find((element) => {
      return element === Number(username);
    });

    if (username === '') {
      alert('Por favor digite um id');
      return;
    }

    if (findComponent !== undefined) {
      alert('Não é possível adicionar o mesmo usuário duas vezes.');
      return;
    }

    if (components.length >= 6) {
      alert('Grupo cheio!');
      return;
    }

    setComponents([...components, Number(username)]);
    setUsername('');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function removeComponent(componentId: number) {
    if (componentId !== user.id) {
      const newComponents = components.filter((element) => {
        return element !== componentId;
      });
      setComponents(newComponents);
    }
  }

  async function handleCreateReserve() {
    try {
      const response = await api.post<ReserveResponse>('/reserves', {
        roomId: selectedRoomId,
        scheduleId: selectedScheduleId,
        day: 23,
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

  useEffect(() => {
    setComponents([user.id]);
  }, [user]);

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
                onClick={() => setSelectedScheduleId(schedule.id)}
                colorActive={selectedScheduleId === schedule.id}
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
              <RoomButton key={room.id} onClick={() => setSelectedRoomId(room.id)} active={selectedRoomId === room.id}>
                <Room>{room.initials}</Room>
                <Image src={roomPath} />
              </RoomButton>
            ))}
          </ChooseRoom>
        </RoomContainer>
        <ComponentsContainer>
          <Title2>Componentes</Title2>
          <Components>
            <InputContainer>
              <EnrollmentInput
                type="number"
                ref={inputRef}
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
                <Component key={component} onClick={() => removeComponent(component)}>
                  {component}
                </Component>
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
