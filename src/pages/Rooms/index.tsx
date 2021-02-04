/* eslint-disable no-alert */
import React, { useCallback, useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { useHistory, Switch, Route, Link } from 'react-router-dom';

import { getRequest } from '~/utils/api';
import getFirstDayOfWeek from '~/utils/firstDayOfWeek';

import colors from '~/styles/colors';

import { Reserve } from '~/types/';

import DateList from './components/DateList';
import {
  Container,
  TableTopInformation,
  Table,
  TableColumn,
  RoomTitle,
  RoomCard,
  RoomCardHour,
  Dropdown,
  RentButton,
} from './styles';

const Rooms: React.FC = () => {
  const history = useHistory();
  const { pathname } = history.location;
  const formatter = new Intl.DateTimeFormat('pt-br', { month: 'long' });
  const reserveDate = new Date();
  const monthFormatted = formatter.format(reserveDate);
  const [reserves, setReserves] = useState([] as Reserve[]);

  const changePeriod = useCallback(
    (periodValue) => {
      if (periodValue === '1') {
        history.push('/salas-manha');
        return;
      }
      if (periodValue === '2') {
        history.push('/salas-tarde');
        return;
      }
      if (periodValue === '3') {
        history.push('/salas-noite');
      }
    },
    [history]
  );

  useEffect(() => {
    async function getReserves() {
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

    getReserves();
  }, []);

  return (
    <Container>
      <TableTopInformation>
        <Dropdown onChange={(event) => changePeriod(event.target.value)}>
          <option value="1">Manhã</option>
          <option value="2">Tarde</option>
          <option value="3">Noite</option>
        </Dropdown>

        <DateList />
        <Link to="/reservar">
          <RentButton>Reservar sala</RentButton>
        </Link>
      </TableTopInformation>
      <Table>
        <Switch>
          <Route path="/salas-manha" exact>
            {reserves.map((reserve) => (
              <TableColumn key={reserve.id}>
                <RoomTitle>F1-3</RoomTitle>
                <RoomCard>
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
                </RoomCard>
              </TableColumn>
            ))}
          </Route>

          <Route path="/salas-tarde" exact>
            <TableColumn>
              <RoomTitle>F1-3</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>13:15 - 14:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>14:00 - 15:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>16:00 - 17:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>17:00 - 18:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn>
              <RoomTitle>F1-4</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>13:15 - 14:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>14:00 - 15:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>16:00 - 17:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>17:00 - 18:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn>
              <RoomTitle>F1-5</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>13:15 - 14:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>14:00 - 15:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>16:00 - 17:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>17:00 - 18:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn removeBorder>
              <RoomTitle>F1-6</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>13:15 - 14:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>14:00 - 15:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>16:00 - 17:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>17:00 - 18:00</RoomCardHour>
              </RoomCard>
            </TableColumn>
          </Route>
          <Route path="/salas-noite" exact>
            <TableColumn>
              <RoomTitle>F1-3</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>18:15 - 19:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>19:00 - 20:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>20:00 - 21:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>21:00 - 22:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn>
              <RoomTitle>F1-4</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>18:15 - 19:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>19:00 - 20:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>20:00 - 21:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>21:00 - 22:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn>
              <RoomTitle>F1-5</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>18:15 - 19:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>19:00 - 20:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>20:00 - 21:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>21:00 - 22:00</RoomCardHour>
              </RoomCard>
            </TableColumn>

            <TableColumn removeBorder>
              <RoomTitle>F1-6</RoomTitle>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>18:15 - 19:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>19:00 - 20:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>20:00 - 21:00</RoomCardHour>
              </RoomCard>
              <RoomCard>
                <BsPlus />
                <RoomCardHour>21:00 - 22:00</RoomCardHour>
              </RoomCard>
            </TableColumn>
          </Route>
        </Switch>
      </Table>
    </Container>
  );
};

export default Rooms;
