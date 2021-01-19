/* eslint-disable no-alert */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';

import { getRequest, postRequest } from '~/utils/api';

import DateList from '~/components/DateList';
import FriendList from '~/components/FriendList';
import ReserveList from '~/components/ReserveList';

import roomPath from '~/assets/room.jpg';
import { useAuth } from '~/contexts/AuthContext';
import {
  Friend,
  User,
  Schedule,
  Reserve as ReserveInterface,
  Room as RoomInterface,
  Period as PeriodInterface,
} from '~/types';

import {
  Container,
  LeftSide,
  MiddleSide,
  RightSide,
  RoomScheduling,
  DateListContainer,
  Title2,
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
  SearchArea,
  SearchHashTag,
  SearchingBar,
  IconContainer,
} from './styles';

const Reserve: React.FC = () => {
  const history = useHistory();

  const { user } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);

  const [enrollment, setEnrollment] = useState('');
  const [reserveName, setReserveName] = useState('');
  const [components, setComponents] = useState<User[]>([]);
  const [schedules, setSchedules] = useState([] as Schedule[]);
  const [rooms, setRooms] = useState([] as RoomInterface[]);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [periods, setPeriods] = useState([] as PeriodInterface[]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(1);

  const [selectedScheduleId, setSelectedScheduleId] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState(1);

  const [addComponentError, setAddComponentError] = useState('');

  useEffect(() => {
    const selectedPeriodSchedules = schedules.filter((schedule) => schedule.periodId === selectedPeriodId);
    if (selectedPeriodSchedules.length === 0) return;
    const firstScheduleId = selectedPeriodSchedules[0].id;

    setSelectedScheduleId(firstScheduleId);
  }, [schedules, selectedPeriodId]);

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleAddComponent = useCallback(async () => {
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

    const { data, error } = await getRequest('/search', { params: { enrollment } });

    if (error) {
      alert(error.error);
      return;
    }

    if (data!.length === 0) {
      alert('Usuário não encontrado');
      return;
    }

    setComponents([...components, data[0]]);
    setEnrollment('');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [components, enrollment]);

  const isReserveAdmin = useCallback(
    (componentEnrollment: string) => {
      if (componentEnrollment !== user.enrollment) {
        return true;
      }
      return false;
    },
    [user.enrollment]
  );

  const removeComponent = useCallback(
    (componentEnrollment: string) => {
      if (componentEnrollment !== user.enrollment) {
        const newComponents = components.filter((element) => {
          return element.enrollment !== componentEnrollment;
        });
        setComponents(newComponents);
      }
    },
    [components, user.enrollment]
  );

  const handleCreateReserve = useCallback(async () => {
    const { data, error } = await postRequest<ReserveInterface>('/reserves', {
      name: reserveName,
      roomId: selectedRoomId,
      scheduleId: selectedScheduleId,
      day: selectedDay.getDate(),
      month: selectedDay.getMonth(),
      // janeiro = month: 0
      year: selectedDay.getFullYear(),
      classmatesEnrollments: components.map((component) => component.enrollment),
    });

    if (error) {
      alert(error.error);
      return;
    }

    console.log(data);
    history.push('/');
    alert('Reserva criada!');
  }, [components, history, reserveName, selectedDay, selectedRoomId, selectedScheduleId]);

  const handleFriendClick = useCallback(
    (friend: Friend) => {
      const findComponent = components.find((element) => {
        return element.enrollment === friend.enrollment;
      });

      if (findComponent !== undefined) {
        alert('Não é possível adicionar o mesmo usuário duas vezes.');
        return;
      }

      if (components.length >= 6) {
        alert('Grupo cheio!');
        return;
      }
      setComponents([...components, friend]);
    },
    [components]
  );

  useEffect(() => {
    async function loadSchedules() {
      const { data, error } = await getRequest('/schedules');

      if (error) {
        alert(error.error);
        return;
      }

      setSchedules(data);
    }

    async function loadPeriods() {
      const { data, error } = await getRequest('/periods');

      if (error) {
        alert(error.error);
        return;
      }

      setPeriods(data);
    }

    async function loadRooms() {
      const { data, error } = await getRequest('/rooms');

      if (error) {
        alert(error.error);
        return;
      }

      setRooms(data);
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
          {/* <Title>Agendamento de sala</Title> */}
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

        <ComponentsContainer>
          <Title2>Adicione componentes:</Title2>
          <Components>
            <InputContainer>
              <SearchArea>
                <SearchingBar
                  type="number"
                  ref={inputRef}
                  placeholder="Digite uma matrícula"
                  value={enrollment}
                  onChange={(event) => {
                    setEnrollment(event.target.value);
                  }}
                />
              </SearchArea>
              <InputButton onClick={handleAddComponent}>+</InputButton>
            </InputContainer>

            <ErrorContainer error={addComponentError !== ''}>{addComponentError}</ErrorContainer>
            {/* <Title3>Grupo:</Title3> */}
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
                  <IconContainer visible={isReserveAdmin(component.enrollment)}>
                    <FaTimes onClick={() => removeComponent(component.enrollment)} />
                  </IconContainer>
                </Component>
              ))}
            </ComponentList>
          </Components>
        </ComponentsContainer>
        <GroupContainer>
          <Title2>Nomeie sua reserva:</Title2>
          <InputContainer>
            <SearchArea>
              <SearchHashTag>#</SearchHashTag>
              <SearchingBar
                type="text"
                maxLength={25}
                placeholder="Exemplo: Grupo de História"
                value={reserveName}
                onChange={(event) => {
                  setReserveName(event.target.value);
                  console.log(event.target.value);
                }}
                style={{ marginRight: '60px' }}
              />
            </SearchArea>
          </InputContainer>
        </GroupContainer>
        <RentButton onClick={handleCreateReserve}>Confirmar</RentButton>
      </MiddleSide>
      <RightSide>
        <FriendList onFriendClick={handleFriendClick} />
      </RightSide>
    </Container>
  );
};

export default Reserve;
