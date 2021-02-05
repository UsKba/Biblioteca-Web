/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { getRequest } from '~/utils/api';
import getFirstDayOfWeek from '~/utils/firstDayOfWeek';

import { Reserve, Period as PeriodInterface } from '~/types/';

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
  const [selectedPeriodId, setSelectedPeriodId] = useState(1);

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

      const mondayReserves = data.filter((reserve) => {
        const dateOfReserve = new Date(reserve.date);

        if (dateOfReserve.getUTCDay() === 1) {
          return true;
        }
        return false;
      });

      console.log(mondayReserves);
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

    loadReserves();
    loadPeriods();
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
        {reserves.map((reserve) => (
          <TableColumn key={reserve.id} visible={reserve.schedule.periodId === selectedPeriodId}>
            <RoomTitle>{reserve.room.initials}</RoomTitle>
            <RoomCard isReserved>
              <BsPlus />
              <RoomCardHour>
                {reserve.schedule.initialHour} - {reserve.schedule.endHour}
              </RoomCardHour>
            </RoomCard>

            {/* <RoomCard>
              <BsPlus />
              <RoomCardHour>7:15 - 8:00</RoomCardHour>
            </RoomCard>
            <RoomCard>
              <BsPlus />
              <RoomCardHour>8:00 - 9:00</RoomCardHour>
            </RoomCard>
            <RoomCard>
              <BsPlus />
              <RoomCardHour>9:00 - 10:00</RoomCardHour>
            </RoomCard>
            <RoomCard>
              <BsPlus />
              <RoomCardHour>10:00 - 11:00</RoomCardHour>
            </RoomCard> */}
          </TableColumn>
        ))}
      </Table>
    </Container>
  );
};

export default Rooms;
