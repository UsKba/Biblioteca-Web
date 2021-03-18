import React, { useState } from 'react';

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
  handleCancelClick: () => void;
}

const RoomCardModal: React.FC<RoomCardModalProps> = ({ room, schedule, visible, handleCancelClick }) => {
  const [selectedReserveStatus, setSelectedReserveStatus] = useState(Number);
  const [temporaryReserveStatus, setTemporaryReserveStatus] = useState(Number);

  return (
    <HiddenContainer visible={visible}>
      <SettingsContainer>
        <SettingsTitle>{`Sala ${room.initials}`}</SettingsTitle>
        <SettingsText>{`Reservada até as ${schedule.endHour}`}</SettingsText>

        <DropdownContainer>
          <DropdownLabel>Status:</DropdownLabel>
          <Dropdown onChange={(event) => setTemporaryReserveStatus(Number(event.target.value))}>
            <Option value="0">Disponível</Option>
            <Option value="1">Reservada</Option>
            <Option value="2">Indisponível</Option>
          </Dropdown>
        </DropdownContainer>

        <SettingsButtonsContainer>
          <CancelButton onClick={() => handleCancelClick()}>Cancelar</CancelButton>
          <SaveButton
            onClick={() => {
              setSelectedReserveStatus(temporaryReserveStatus);
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
