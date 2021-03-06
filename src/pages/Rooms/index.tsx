/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-alert */
import React, { useEffect, useState, useCallback } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { getRequest } from '~/utils/api';
import getFirstDayOfWeek from '~/utils/firstDayOfWeek';

import Megaphone from '~/assets/megaphone_alt.svg';
import { useAuth } from '~/contexts/AuthContext';
import { Reserve, Period as PeriodInterface, Room, Schedule } from '~/types/';

import DateList from './components/DateList';
import RoomCard from './components/RoomCard';
import {
  Container,
  TableTopInformation,
  Table,
  TableColumn,
  TableWarning,
  RoomTitle,
  Dropdown,
  Option,
  RentButton,
  Image,
  PageHelpContainer,
  DateListContainer,
  MobileNavContainer,
  MobileNav,
  MobileNavText,
  Line,
} from './styles';

const Rooms: React.FC = () => {
  const history = useHistory();

  const [reserves, setReserves] = useState([] as Reserve[]);
  const [, setPeriods] = useState([] as PeriodInterface[]);
  const [rooms, setRooms] = useState([] as Room[]);
  const [schedules, setSchedules] = useState([] as Schedule[]);
  const [selectedPeriodId, setSelectedPeriodId] = useState(1);
  const [selectedWeekday, setSelectedWeekday] = useState<number>();
  const [menuIndex, setMenuIndex] = useState<number>();
  const [menuIndex2, setMenuIndex2] = useState<number>();
  const [screenSwipe, setScreenSwipe] = useState(1);

  function handleListReserves() {
    toast.dark('Erro ao listar as reservas', {});
  }

  const handleReserveClick = useCallback(
    (schedule: Schedule, room: Room) => {
      history.push({
        pathname: '/reservar',
        state: { schedule, room, weekDay: selectedWeekday },
      });
    },
    [history, selectedWeekday]
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
        toast.dark(error.error);
        return;
      }

      setPeriods(data);
    }

    async function loadRooms() {
      const { data, error } = await getRequest('/rooms');

      if (error) {
        toast.dark(error.error);
        return;
      }

      setRooms(data);
    }

    async function loadSchedules() {
      const { data, error } = await getRequest('/schedules');

      if (error) {
        toast.dark(error.error);
        return;
      }

      setSchedules(data);
    }

    loadReserves();
    loadPeriods();
    loadSchedules();
    loadRooms();
  }, [rooms]);

  const weekendCheck = useCallback(() => {
    const today = new Date();
    if (today.getDay() < 1 || today.getDay() > 5) {
      return false;
    }
    return true;
  }, []);

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

  const closeSettingsMenu = useCallback(() => {
    setMenuIndex(undefined);
    setMenuIndex2(undefined);
  }, []);

  const handleChangeSwipe = useCallback((index: number) => {
    setScreenSwipe(index);
  }, []);

  const TITLE = 'Salas - Smart Library';

  return (
    <Container>
      <title>{TITLE}</title>

      <PageHelpContainer>
        <a href="/ajuda#perguntas">
          <AiOutlineQuestionCircle />
        </a>
      </PageHelpContainer>

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
      <TableTopInformation margin={weekendCheck()}>
        <Dropdown onChange={(event) => setSelectedPeriodId(Number(event.target.value))}>
          <Option value="1">Manhã</Option>
          <Option value="2">Tarde</Option>
          <Option value="3">Noite</Option>
        </Dropdown>

        <DateListContainer>
          <DateList onWeekdayChange={onWeekdayChange} />
        </DateListContainer>

        <MobileNavContainer>
          <MobileNav>
            <MobileNavText onClick={() => handleChangeSwipe(1)}>
              F1-3
              <Line active={screenSwipe === 1} />
            </MobileNavText>
            <MobileNavText onClick={() => handleChangeSwipe(2)}>
              F1-4
              <Line active={screenSwipe === 2} />
            </MobileNavText>
            <MobileNavText onClick={() => handleChangeSwipe(3)}>
              F1-5
              <Line active={screenSwipe === 3} />
            </MobileNavText>
            <MobileNavText onClick={() => handleChangeSwipe(4)}>
              F1-6
              <Line active={screenSwipe === 4} />
            </MobileNavText>
          </MobileNav>
        </MobileNavContainer>

        <Link to="/reservar">
          <RentButton>Reservar sala</RentButton>
        </Link>
      </TableTopInformation>
      <Table>
        <TableWarning visible={weekendCheck()}>
          Reserva de salas indisponível {'\n'} nos finais {'\n'} de semana.
          <Image src={Megaphone} />
        </TableWarning>
        {rooms
          .sort((a, b) => a.id - b.id)
          .map((room, index) => (
            <TableColumn key={room.id} visible={weekendCheck()} mobileVisible={room.id === screenSwipe}>
              <RoomTitle>{room.initials}</RoomTitle>

              {schedules
                .filter((schedule) => schedule.periodId === selectedPeriodId)
                .map((schedule, index2) => (
                  <RoomCard
                    key={schedule.id}
                    schedule={schedule}
                    room={room}
                    roomReserved={isRoomReserved(room, schedule)}
                    isWeekendCheck={weekendCheck()}
                    optionsDropdownVisible={menuIndex === index && menuIndex2 === index2}
                    handleReserveClick={handleReserveClick}
                    handleDotsClick={() => {
                      toggleSettingsMenu(index, index2);
                    }}
                    closeSettingsMenu={closeSettingsMenu}
                  />
                ))}
            </TableColumn>
          ))}
      </Table>
    </Container>
  );
};

export default Rooms;
