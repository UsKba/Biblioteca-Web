import React, { useState, useCallback } from 'react';

import { putRequest } from '~/utils/api';

import { Room, Schedule } from '~/types/';

import { Dropdown, Option } from '../../styles';
import {
  HiddenContainer,
  SettingsContainer,
  SettingsTitle,
  SettingsText,
  SettingsButtonsContainer,
  CancelButton,
  SaveButton,
  DropdownContainer,
  DropdownLabel,
} from './styles';

interface RoomCardModalProps {
  room: Room;
  schedule: Schedule;
  visible: boolean;
  handleButtonClick: () => void;
}

const RoomCardModal: React.FC<RoomCardModalProps> = ({ room, schedule, visible, handleButtonClick }) => {
  const [selectedReserveStatus, setSelectedReserveStatus] = useState(Number);

  const changeReserveStatus = useCallback(
    async (reserveStatus: number) => {
      const { error } = await putRequest(`/rooms/${room.id}`, {
        status: reserveStatus,
      });
      if (error) {
        alert(error.error);
      }
    },
    [room.id]
  );

  return (
    <HiddenContainer visible={visible}>
      <SettingsContainer>
        <SettingsTitle>{`Sala ${room.initials} (${room.status})`}</SettingsTitle>
        <SettingsText>{`Horário: ${schedule.initialHour} - ${schedule.endHour}`}</SettingsText>

        <DropdownContainer>
          <DropdownLabel>Status:</DropdownLabel>
          <Dropdown onChange={(event) => setSelectedReserveStatus(Number(event.target.value))}>
            <Option value="0">Disponível</Option>
            <Option value="1">Indisponível</Option>
          </Dropdown>
        </DropdownContainer>

        <SettingsButtonsContainer>
          <CancelButton onClick={() => handleButtonClick()}>Cancelar</CancelButton>
          <SaveButton
            onClick={() => {
              changeReserveStatus(selectedReserveStatus);
              handleButtonClick();
            }}
          >
            Salvar
          </SaveButton>
        </SettingsButtonsContainer>
      </SettingsContainer>
    </HiddenContainer>
  );
};

export default RoomCardModal;
