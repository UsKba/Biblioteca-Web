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
        {rooms.map((room) => (
          <TableColumn key={room.id} visible={weekendCheck()}>
            <RoomTitle>{room.initials}</RoomTitle>

            {schedules
              .filter((schedule) => schedule.periodId === selectedPeriodId)
              .map((schedule) => (
                <RoomCard key={schedule.id} onClick={() => handleReserveClick(schedule, room)}>
                  {isRoomReserved(room, schedule) ? (
                    <RoomCardInformation isReserved disabled>
                      Sala reservada
                      <RoomCardHour>Até {schedule.endHour}</RoomCardHour>
                    </RoomCardInformation>
                  ) : (
                    <RoomCardInformation isReserved={false}>
                      <BsPlus />
                      <RoomCardHour>
                        {schedule.initialHour} - {schedule.endHour}
                      </RoomCardHour>
                    </RoomCardInformation>
                  )}

                  <DotsContainer visible={checkUserRole()}>
                    <BiDotsVerticalRounded />
                  </DotsContainer>
                </RoomCard>
              ))}
          </TableColumn>
        ))}
      </Table>
    </Container>
  );
};

export default Rooms;
