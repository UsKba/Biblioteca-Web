/* eslint-disable no-alert */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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
  PageHelpContainer,
} from './styles';

interface ReserveLocationState {
  room: RoomInterface;
  schedule: Schedule;
  weekDay: number;
}

const Reserve: React.FC = () => {
  const location = useLocation();

  function handleMatricula() {
    toast.dark('Matrícula inválida', {});
  }
  function handleFindComponent() {
    toast.dark('Usuário não encontrado', {});
  }
  function handleAddDoubleComponent() {
    toast.dark('Não é possível adicionar o mesmo usuário duas vezes', {});
  }
  function handleFullGroup() {
    toast.dark('Grupo Cheio', {});
  }
  function handleCreateReserveToast() {
    toast.dark('Reserva Criada!', {});
  }
  const history = useHistory();

  const { user } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);

  const [enrollment, setEnrollment] = useState('');
  const [reserveName, setReserveName] = useState('');
  const [addComponentError, setAddComponentError] = useState('');

  const [components, setComponents] = useState<User[]>([]);
  const [schedules, setSchedules] = useState([] as Schedule[]);
  const [rooms, setRooms] = useState([] as RoomInterface[]);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [periods, setPeriods] = useState([] as PeriodInterface[]);

  const [selectedPeriodId, setSelectedPeriodId] = useState(1);
  const [selectedScheduleId, setSelectedScheduleId] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState(1);

  useEffect(() => {
    const data = location.state as ReserveLocationState | undefined;

    if (!data) {
      const selectedPeriodSchedules = schedules.filter((schedule) => schedule.periodId === selectedPeriodId);
      if (selectedPeriodSchedules.length === 0) return;
      const firstScheduleId = selectedPeriodSchedules[0].id;

      setSelectedScheduleId(firstScheduleId);

      return;
    }

    const now = new Date();
    const sumDays = data.weekDay - now.getDay();
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + sumDays);

    setSelectedDay(date);
    setSelectedPeriodId(data.schedule.periodId);
    setSelectedScheduleId(data.schedule.id);
    setSelectedRoomId(data.room.id);
  }, [location, schedules, selectedPeriodId]);

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

    if (enrollment.length < 14) {
      handleMatricula();
      // alert('Digite uma matrícula com pelo menos 14 números');
      return;
    }

    if (error) {
      alert(error.error);
      return;
    }

    if (data!.length === 0) {
      handleFindComponent();
      // alert('Usuário não encontrado');
      return;
    }

    if (findComponent !== undefined) {
      handleAddDoubleComponent();
      // alert('Não é possível adicionar o mesmo usuário duas vezes');
      return;
    }

    if (components.length >= 6) {
      handleFullGroup();
      // alert('Grupo cheio');
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
    const { error } = await postRequest<ReserveInterface>('/reserves', {
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

    history.push('/');
    handleCreateReserveToast();
  }, [components, history, reserveName, selectedDay, selectedRoomId, selectedScheduleId]);

  const handleFriendClick = useCallback(
    (friend: Friend) => {
      const findComponent = components.find((element) => {
        return element.enrollment === friend.enrollment;
      });

      if (findComponent !== undefined) {
        handleAddDoubleComponent();
        // alert('Não é possível adicionar o mesmo usuário duas vezes.');
        return;
      }

      if (components.length >= 6) {
        handleFullGroup();
        // alert('Grupo cheio!');
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

      // console.log(data);
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
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <LeftSide>
        <Link to="/">
          <CancelButton onClick={goBack}>Cancelar Reserva</CancelButton>
        </Link>
        <ReserveList />
      </LeftSide>
      <MiddleSide>
        <RoomScheduling>
          {/* <Title>Agendamento de sala</Title> */}
          <Title2>Escolha uma data</Title2>
        </RoomScheduling>
        <DateListContainer>
          <DateList selectDay={setSelectedDay} defaultWeekDay={selectedDay.getDay()} />
        </DateListContainer>
        <Period>
          <Title2>Escolha um turno</Title2>
          <ChoosePeriod>
            {periods.map((period) => (
              <PeriodButton
                key={period.id}
                onClick={() => {
                  setSelectedPeriodId(period.id);
                }}
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
            {rooms
              .sort((a, b) => a.id - b.id)
              .map((room) => (
                <RoomButton
                  key={room.id}
                  onClick={() => setSelectedRoomId(room.id)}
                  active={selectedRoomId === room.id}
                  isBroken={room.status === 1}
                >
                  <Room>{room.initials}</Room>
                  <Image src={roomPath} />
                </RoomButton>
              ))}
          </ChooseRoom>
        </RoomContainer>

        <GroupContainer>
          <Title2>Nome da Reserva</Title2>
          <InputContainer>
            <SearchArea>
              <SearchHashTag>#</SearchHashTag>
              <SearchingBar
                type="text"
                maxLength={25}
                placeholder="Digite o Nome do Grupo"
                value={reserveName}
                onChange={(event) => {
                  setReserveName(event.target.value);
                  // console.log(event.target.value);
                }}
                style={{ marginRight: '60px' }}
              />
            </SearchArea>
          </InputContainer>
        </GroupContainer>
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
                    if (addComponentError) {
                      setAddComponentError('');
                    }
                  }}
                />
              </SearchArea>
              <InputButton onClick={handleAddComponent}>+</InputButton>
            </InputContainer>

            <ErrorContainer error={addComponentError !== ''}>{addComponentError}</ErrorContainer>

            <ComponentList>
              {components.map((component) => (
                <Component key={component.enrollment}>
                  <ComponentContainer>
                    <ProfileIcon bgColor={component.color}>
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
        <RentButton onClick={handleCreateReserve}>Confirmar</RentButton>
      </MiddleSide>
      <RightSide>
        <FriendList onFriendClick={handleFriendClick} />
      </RightSide>
      <PageHelpContainer>
        <a href="/ajuda#perguntas">
          <AiOutlineQuestionCircle />
        </a>
      </PageHelpContainer>
    </Container>
  );
};

export default Reserve;
