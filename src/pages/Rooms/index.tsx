/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-alert */
import React, { useEffect, useState, useCallback } from 'react';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { getRequest } from '~/utils/api';
import getFirstDayOfWeek from '~/utils/firstDayOfWeek';

import { Reserve, Period as PeriodInterface, Room, Schedule } from '~/types/';

import DateList from './components/DateList';
import {
  Container,
  TableTopInformation,
  Table,
  TableColumn,
  RoomTitle,
  RoomCard,
  RoomCardHour,
  // Dropdown,
  RentButton,
  PeriodButtonList,
  PeriodButton,
} from './styles';

const Rooms: React.FC = () => {
  const [reserves, setReserves] = useState([] as Reserve[]);
  const [periods, setPeriods] = useState([] as PeriodInterface[]);
  const [rooms, setRooms] = useState([] as Room[]);
  const [schedules, setSchedules] = useState([] as Schedule[]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(1);

  const isRoomReserved = useCallback(
    (room: Room, schedule: Schedule) => {
      const findReserve = reserves.find((reserve) => {
        return reserve.room.initials === room.initials && reserve.schedule.id === schedule.id;
      });

      if (findReserve) {
        return true;
      }

      return false;
    },
    [reserves]
  );

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
        alert('Erro ao listar as reservas');
        return;
      }

      console.log(data);
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

  return (
    <Container>
      <TableTopInformation>
        <PeriodButtonList>
          {periods.map((period) => (
            <PeriodButton
              key={period.id}
              onClick={() => setSelectedPeriodId(period.id)}
              active={selectedPeriodId === period.id}
            >
              {period.name}
            </PeriodButton>
          ))}
        </PeriodButtonList>

        <DateList />
        <Link to="/reservar">
          <RentButton>Reservar sala</RentButton>
        </Link>
      </TableTopInformation>
      <Table>
        {rooms.map((room) => (
          <TableColumn key={room.initials}>
            <RoomTitle>{room.initials}</RoomTitle>

            {schedules
              .filter((schedule) => schedule.periodId === selectedPeriodId)
              .map((schedule) => (
                <RoomCard key={schedule.id} isReserved={isRoomReserved(room, schedule)}>
                  <BsPlus />
                  <RoomCardHour>
                    {schedule.initialHour} - {schedule.endHour}
                  </RoomCardHour>
                </RoomCard>
              ))}
          </TableColumn>
        ))}
      </Table>
    </Container>
  );
};

export default Rooms;
