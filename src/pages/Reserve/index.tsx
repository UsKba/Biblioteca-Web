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
  Enrollment,
  ComponentInfo,
  HashTag,
  ProfileIcon,
  ProfileIconInitials,
  ComponentContainer,
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

interface User {
  id: number;
  enrollment: string;
  email: string;
  name: string;
}

const Reserve: React.FC = () => {
  const history = useHistory();

  const { user } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);

  const [enrollment, setEnrollment] = useState('');
  const [reserveName, setReserveName] = useState('');
  const [components, setComponents] = useState<User[]>([]);
  const [schedules, setSchedules] = useState([] as ScheduleState[]);
  const [rooms, setRooms] = useState([] as RoomState[]);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [periods, setPeriods] = useState([] as PeriodState[]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(1);

  const [selectedScheduleId, setSelectedScheduleId] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState(1);

  const [reserveNameError, setReserveNameError] = useState('');
  const [addComponentError, setAddComponentError] = useState('');

  useEffect(() => {
    const selectedPeriodSchedules = schedules.filter((schedule) => schedule.periodId === selectedPeriodId);
    if (selectedPeriodSchedules.length === 0) return;
    const firstScheduleId = selectedPeriodSchedules[0].id;

    setSelectedScheduleId(firstScheduleId);
  }, [schedules, selectedPeriodId]);

  function goBack() {
    history.goBack();
  }

  function validateGroupName() {
    if (reserveName === '') {
      setReserveNameError('O nome da reserva não pode estar vazio');
    } else if (reserveName.length < 3) {
      setReserveNameError('O nome da reserva não pode ter menos que 3 caracteres');
    } else {
      setReserveNameError('');
    }
  }

  async function handleAddComponent() {
    const findComponent = components.find((element) => {
      return element.enrollment === enrollment;
    });

    if (enrollment === '') {
      setAddComponentError('Por favor digite uma matrícula');
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

    try {
      const response = await api.get(`/search`, { params: { enrollment } });

      if (response.data.length === 0) {
        alert('Usuário não encontrado');
        return;
      }
      setComponents([...components, response.data[0]]);
      setEnrollment('');

      if (inputRef.current) {
        inputRef.current.focus();
      }
    } catch (e) {
      console.log(e);
    }
  }

  function removeComponent(componentEnrollment: string) {
    if (componentEnrollment !== user.enrollment) {
      const newComponents = components.filter((element) => {
        return element.enrollment !== componentEnrollment;
      });
      setComponents(newComponents);
    }
  }

  async function handleCreateReserve() {
    try {
      const response = await api.post<ReserveResponse>('/reserves', {
        name: reserveName,
        roomId: selectedRoomId,
        scheduleId: selectedScheduleId,
        day: selectedDay.getDate(),
        month: selectedDay.getMonth(),
        // janeiro = month: 0
        year: selectedDay.getFullYear(),
        classmatesEnrollments: components.map((component) => component.enrollment),
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
    setComponents([user]);
  }, [user]);

  return (
    <Container>
      <LeftSide>
        <Link to="/">
          <CancelButton onClick={goBack}>Cancelar Agendamento</CancelButton>
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
          <Title2>Escolha um Horário</Title2>
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
              value={reserveName}
              onChange={(event) => {
                setReserveName(event.target.value);
                console.log(event.target.value);
              }}
            />
          </InputContainer>
          <ErrorContainer error={reserveNameError !== ''}>{reserveNameError}</ErrorContainer>
        </GroupContainer>
        <ComponentsContainer>
          <Title2>Adicione componentes:</Title2>
          <Components>
            <InputContainer>
              <EnrollmentInput
                type="number"
                ref={inputRef}
                placeholder="Digite uma matrícula"
                hideIcon
                backgroundColor={colors.background}
                value={enrollment}
                onChange={(event) => {
                  setEnrollment(event.target.value);
                }}
              />
              <InputButton onClick={handleAddComponent}>+</InputButton>
            </InputContainer>
            <ErrorContainer error={addComponentError !== ''}>{addComponentError}</ErrorContainer>
            <Title3>Grupo:</Title3>
            <ComponentList>
              {components.map((component) => (
                <Component key={component.enrollment}>
                  <ComponentContainer>
                    <ProfileIcon>
                      <ProfileIconInitials>{component.name[0].toUpperCase()}</ProfileIconInitials>
                    </ProfileIcon>
                    <ComponentInfo>
                      {component.name}
                      <Enrollment>
                        {' '}
                        <HashTag>#</HashTag>
                        {component.enrollment}
                      </Enrollment>
                    </ComponentInfo>
                  </ComponentContainer>
                  <FaTimes onClick={() => removeComponent(component.enrollment)} />
                </Component>
              ))}
            </ComponentList>
          </Components>
        </ComponentsContainer>
        <RentButton onClick={handleCreateReserve}>Agendar Sala</RentButton>
      </MiddleSide>
      <RightSide>
        <FriendList />
      </RightSide>
    </Container>
  );
};

export default Reserve;
