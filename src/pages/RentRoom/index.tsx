import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';

import api from '~/services/api';

import colors from '~/styles/colors';

import DateList from '~/components/DateList';
import EnrollmentInput from '~/components/EnrollmentInput';
import FriendList from '~/components/FriendList';
import ReserveList from '~/components/ReserveList';

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
  RentButton,
  CancelButton,
  ChooseRoom,
  Room,
  RoomContainer,
  Image,
  RoomButton,
  GroupContainer,
  Components,
  ComponentsContainer,
  InputContainer,
  InputButton,
  ComponentList,
  Component,
  ErrorContainer,
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
  const [groupName, setGroupName] = useState('');
  const [components, setComponents] = useState<number[]>([]);
  const [schedules, setSchedules] = useState([] as ScheduleState[]);
  const [rooms, setRooms] = useState([] as RoomState[]);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [periods, setPeriods] = useState([] as PeriodState[]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(1);

  const [selectedScheduleId, setSelectedScheduleId] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState(1);

  const [groupNameError, setGroupNameError] = useState('');
  const [addComponentError, setAddComponentError] = useState('');

  useEffect(() => {
    const selectedPeriodSchedules = schedules.filter((schedule) => schedule.periodId === selectedPeriodId);
    if (selectedPeriodSchedules.length === 0) return;
    const firstScheduleId = selectedPeriodSchedules[0].id;

    setSelectedScheduleId(firstScheduleId);
  }, [schedules, selectedPeriodId]);

  function validateGroupName() {
    if (groupName === '') {
      setGroupNameError('O nome do grupo não pode estar vazio');
    } else if (groupName.length < 3) {
      setGroupNameError('O nome do grupo não pode ter menos que 3 caracteres');
    } else {
      setGroupNameError('');
    }
  }

  function handleAddComponent() {
    const findComponent = components.find((element) => {
      return element === Number(username);
    });

    if (username === '') {
      setAddComponentError('Por favor digite um id');
      return;
    }

    if (findComponent !== undefined) {
      setAddComponentError('Não é possível adicionar o mesmo usuário duas vezes.');
      return;
    }

    if (components.length >= 6) {
      setAddComponentError('Grupo cheio!');
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
        day: selectedDay.getDate(),
        month: selectedDay.getMonth(),
        // janeiro = month: 0
        year: selectedDay.getFullYear(),
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
      <LeftSide>
        <Link to="/">
          <CancelButton>Cancelar Agendamento</CancelButton>
        </Link>
        <ReserveList />
      </LeftSide>
      <MiddleSide>
        <RoomScheduling>
          <Title>Agendamento de sala</Title>
          <Title2>Escolha uma data</Title2>
        </RoomScheduling>
        <DateListContainer>
          <DateList selectDay={setSelectedDay} />
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
                {`${schedule.initialHour} - ${schedule.endHour} `}
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
        <GroupContainer>
          <Title2>Nomeie sua reserva:</Title2>
          <InputContainer>
            <EnrollmentInput
              type="text"
              onBlur={() => {
                validateGroupName();
              }}
              hideIcon
              placeholder="Exemplo: Grupo de História"
              backgroundColor={colors.background}
              value={groupName}
              onChange={(event) => {
                setGroupName(event.target.value);
                console.log(event.target.value);
              }}
            />
          </InputContainer>
          <ErrorContainer error={groupNameError !== ''}>{groupNameError}</ErrorContainer>
        </GroupContainer>
        <ComponentsContainer>
          <Title2>Adicione componentes:</Title2>
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
            <ErrorContainer error={addComponentError !== ''}>{addComponentError}</ErrorContainer>
            <Title3>Grupo:</Title3>
            <ComponentList>
              {components.map((component) => (
                <Component key={component}>
                  {component}
                  <FaTimes onClick={() => removeComponent(component)} />
                </Component>
              ))}
            </ComponentList>
          </Components>
        </ComponentsContainer>
        <div>
          <RentButton onClick={handleCreateReserve}>Agendar Sala</RentButton>
        </div>
      </MiddleSide>
      <RightSide>
        <FriendList />
      </RightSide>
    </Container>
  );
};

export default RentRoom;
