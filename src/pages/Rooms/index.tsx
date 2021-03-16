/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-alert */
import React, { useEffect, useState, useCallback } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { getRequest } from '~/utils/api';
import getFirstDayOfWeek from '~/utils/firstDayOfWeek';

import { useAuth } from '~/contexts/AuthContext';
import { Reserve, Period as PeriodInterface, Room, Schedule } from '~/types/';

import DateList from './components/DateList';
import {
  Container,
  TableTopInformation,
  Table,
  TableColumn,
  TableWarning,
  RoomTitle,
  RoomCard,
  RoomCardInformation,
  RoomCardHour,
  Dropdown,
  Option,
  RentButton,
  DotsContainer,
  OptionsDropdown,
  EditButton,
  CancelReserveButton,
  SettingsContainer,
  SettingsTitle,
  SettingsText,
  SettingsButtonsContainer,
  CancelButton,
  SaveButton,
  DropdownContainer,
  DropdownLabel,
} from './styles';

const Rooms: React.FC = () => {
  const history = useHistory();
  const authContext = useAuth();
  const [reserves, setReserves] = useState([] as Reserve[]);
  const [reserveRoomState, setReserveRoomState] = useState(false);
  const [, setPeriods] = useState([] as PeriodInterface[]);
  const [rooms, setRooms] = useState([] as Room[]);
  const [schedules, setSchedules] = useState([] as Schedule[]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(1);
  const [selectedWeekday, setSelectedWeekday] = useState<number>();
  const [menuIndex, setMenuIndex] = useState<number>();
  const [menuIndex2, setMenuIndex2] = useState<number>();
  const [settingsModalStatus, setSettingsModalStatus] = useState(false);
  const [selectedReserveStatus, setSelectedReserveStatus] = useState(Number);
  const [temporaryReserveStatus, setTemporaryReserveStatus] = useState(Number);

  function handleListReserves() {
    toast.dark('Erro ao listar as reservas', {});
  }

  const handleReserveClick = useCallback(
    (schedule: Schedule, room: Room) => {
      if (!reserveRoomState) {
        history.push({
          pathname: '/reservar',
          state: { schedule, room, weekDay: selectedWeekday },
        });
      }
    },
    [history, reserveRoomState, selectedWeekday]
  );

  const isRoomReserved = useCallback(
    (room: Room, schedule: Schedule) => {
      const findReserve = reserves.find((reserve) => {
        const date = new Date(reserve.date);
        return (
          reserve.room.initials === room.initials &&
          reserve.schedule.id === schedule.id &&
          date.getDay() === selectedWeekday
        );
      });

      if (findReserve) {
        return true;
      }

      return false;
    },
    [reserves, selectedWeekday]
  );

  const onWeekdayChange = useCallback((weekday: number) => {
    setSelectedWeekday(weekday);
  }, []);

  useEffect(() => {
    async function loadReserves() {
      const sunday = getFirstDayOfWeek();
      const monday = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate() + 1);
      const friday = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate() + 5);

      const startDate = `${monday.getFullYear()}/${monday.getMonth()}/${monday.getDate()}`;
      const endDate = `${friday.getFullYear()}/${friday.getMonth()}/${friday.getDate()}`;

      const { data, error } = await getRequest<Reserve[]>('reserves/all', {
        params: {
          startDate,
          endDate,
        },
      });

      if (error || !data) {
        handleListReserves();
        return;
      }

      // console.log(data);
      setReserves(data || []);
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

    async function loadSchedules() {
      const { data, error } = await getRequest('/schedules');

      if (error) {
        alert(error.error);
        return;
      }

      setSchedules(data);
    }

    loadReserves();
    loadPeriods();
    loadSchedules();
    loadRooms();
  }, []);

  const weekendCheck = useCallback(() => {
    const today = new Date();
    if (today.getDay() < 1 || today.getDay() > 5) {
      return false;
    }
    return true;
  }, []);

  const checkUserRole = useCallback(() => {
    if (authContext.user.role === 'student') {
      return false;
    }

    return true;
  }, [authContext.user.role]);

  const toggleSettingsMenu = useCallback(
    (index: number, index2: number) => {
      if (index === menuIndex) {
        setMenuIndex(undefined);
        setMenuIndex2(undefined);
      } else {
        setMenuIndex(index);
        setMenuIndex2(index2);
      }
    },
    [menuIndex]
  );

  const handleSettingsModal = useCallback(() => {
    setSettingsModalStatus(!settingsModalStatus);
  }, [settingsModalStatus]);

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
      <TableTopInformation>
        <Dropdown onChange={(event) => setSelectedPeriodId(Number(event.target.value))}>
          <Option value="1">Manhã</Option>
          <Option value="2">Tarde</Option>
          <Option value="3">Noite</Option>
        </Dropdown>

        <DateList onWeekdayChange={onWeekdayChange} />
        <Link to="/reservar">
          <RentButton>Reservar sala</RentButton>
        </Link>
      </TableTopInformation>
      <Table>
        <TableWarning visible={weekendCheck()}>Reserva de salas indisponível nos finais de semana.</TableWarning>
        {rooms.map((room, index) => (
          <TableColumn key={room.id} visible={weekendCheck()}>
            <RoomTitle>{room.initials}</RoomTitle>

            {schedules
              .filter((schedule) => schedule.periodId === selectedPeriodId)
              .map((schedule, index2) => (
                <RoomCard key={schedule.id}>
                  {isRoomReserved(room, schedule) ? (
                    <RoomCardInformation isReserved disabled>
                      Sala reservada
                      <RoomCardHour>Até {schedule.endHour}</RoomCardHour>
                    </RoomCardInformation>
                  ) : (
                    <RoomCardInformation isReserved={false} onClick={() => handleReserveClick(schedule, room)}>
                      <BsPlus />
                      <RoomCardHour>
                        {schedule.initialHour} - {schedule.endHour}
                      </RoomCardHour>
                    </RoomCardInformation>
                  )}

                  <DotsContainer visible={checkUserRole()}>
                    <BiDotsVerticalRounded
                      onClick={() => {
                        toggleSettingsMenu(index, index2);
                        setSettingsModalStatus(false);
                      }}
                    />
                    <OptionsDropdown visible={menuIndex === index && menuIndex2 === index2}>
                      <EditButton onClick={() => handleSettingsModal()}>Editar</EditButton>
                      <CancelReserveButton>Cancelar Reserva</CancelReserveButton>
                    </OptionsDropdown>
                  </DotsContainer>

                  <SettingsContainer visible={settingsModalStatus}>
                    <SettingsTitle>Sala {room.initials}</SettingsTitle>
                    <SettingsText>Reservada até as {schedule.endHour}</SettingsText>

                    <DropdownContainer>
                      <DropdownLabel>Status:</DropdownLabel>
                      <Dropdown onChange={(event) => setTemporaryReserveStatus(Number(event.target.value))}>
                        <Option value="0">Disponível</Option>
                        <Option value="1">Reservada</Option>
                        <Option value="2">Indisponível</Option>
                      </Dropdown>
                    </DropdownContainer>

                    <SettingsButtonsContainer>
                      <CancelButton onClick={() => setSettingsModalStatus(false)}>Cancelar</CancelButton>
                      <SaveButton
                        onClick={() => {
                          setSelectedReserveStatus(temporaryReserveStatus);
                        }}
                      >
                        Salvar
                      </SaveButton>
                    </SettingsButtonsContainer>
                  </SettingsContainer>
                </RoomCard>
              ))}
          </TableColumn>
        ))}
      </Table>
    </Container>
  );
};

export default Rooms;
