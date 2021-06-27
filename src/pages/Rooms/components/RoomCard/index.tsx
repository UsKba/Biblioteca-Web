import React, { useCallback, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';

import { checkUserIsAdmin } from '~/utils/user';

import roomConfig from '~/config/room';
import { useAuth } from '~/contexts/AuthContext';
import { Room, Schedule } from '~/types/';

import RoomCardModal from '../RoomCardModal';
import {
  Container,
  RoomCardInformation,
  RoomCardHour,
  DotsContainer,
  OptionsDropdown,
  EditButton,
  CancelReserveButton,
} from './styles';

interface RoomCardProps {
  schedule: Schedule;
  room: Room;
  roomReserved: boolean;
  optionsDropdownVisible: boolean;
  isWeekendCheck: boolean;

  handleReserveClick: (schedule: Schedule, room: Room) => void;
  handleDotsClick: () => void;
  closeSettingsMenu: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  schedule,
  room,
  roomReserved,
  optionsDropdownVisible,
  isWeekendCheck,
  handleReserveClick,
  handleDotsClick,
  closeSettingsMenu,
}) => {
  const authContext = useAuth();
  const [modalVisible, setModalVisible] = useState(false);

  if (room.status === roomConfig.indisponible) {
    return (
      <Container visible={isWeekendCheck}>
        <RoomCardInformation disabled IsBroken>
          Sala indisponível
        </RoomCardInformation>

        <DotsContainer visible={checkUserIsAdmin(authContext.user)}>
          <BiDotsVerticalRounded onClick={handleDotsClick} />
          <OptionsDropdown visible={optionsDropdownVisible}>
            <EditButton
              onClick={() => {
                setModalVisible(true);
                closeSettingsMenu();
              }}
            >
              Editar
            </EditButton>
            <CancelReserveButton>Cancelar Reserva</CancelReserveButton>
          </OptionsDropdown>
        </DotsContainer>

        <RoomCardModal
          room={room}
          schedule={schedule}
          visible={modalVisible}
          handleButtonClick={() => setModalVisible(false)}
        />
      </Container>
    );
  }

  return (
    <Container visible={isWeekendCheck}>
      {roomReserved ? (
        <RoomCardInformation isReserved disabled>
          Sala reservada
          <RoomCardHour>{`Até ${schedule.endHour}`}</RoomCardHour>
        </RoomCardInformation>
      ) : (
        <RoomCardInformation isReserved={false} onClick={() => handleReserveClick(schedule, room)}>
          <BsPlus />
          <RoomCardHour>{`${schedule.initialHour} - ${schedule.endHour}`}</RoomCardHour>
        </RoomCardInformation>
      )}

      <DotsContainer visible={checkUserIsAdmin(authContext.user)}>
        <BiDotsVerticalRounded onClick={handleDotsClick} />
        <OptionsDropdown visible={optionsDropdownVisible}>
          <EditButton
            onClick={() => {
              setModalVisible(true);
              closeSettingsMenu();
            }}
          >
            Editar
          </EditButton>
          <CancelReserveButton>Cancelar Reserva</CancelReserveButton>
        </OptionsDropdown>
      </DotsContainer>

      <RoomCardModal
        room={room}
        schedule={schedule}
        visible={modalVisible}
        handleButtonClick={() => setModalVisible(false)}
      />
    </Container>
  );
};

export default RoomCard;
