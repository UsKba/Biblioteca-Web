import React, { useCallback, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import { useAuth } from '~/contexts/AuthContext';

import {
  ComputerContainer,
  ComputerName,
  ComputerSpan,
  ComputerStatus,
  ComputerTextContainer,
  ComputerStatusContainer,
  SettingsIconContainer,
  SettingsContainer,
  SettingsTitle,
  SettingsText,
  SettingsButtonsContainer,
  CancelButton,
  SaveButton,
  Dropdown,
  Option,
  DropdownContainer,
  DropdownLabel,
} from './styles';

interface Computer {
  name: string;
  id: number;
  desc: string;
  status: number;
}

interface ComputerCardProps {
  computer: Computer;
  settingsOpen: boolean;
  settingsClick: () => void;
}

const ComputerCard: React.FC<ComputerCardProps> = ({ computer, settingsOpen, settingsClick }) => {
  const authContext = useAuth();
  const [selectedComputerStatus, setSelectedComputerStatus] = useState(Number);
  const [temporaryComputerStatus, setTemporaryComputerStatus] = useState(Number);

  // const changeSettingsVisibility = useCallback(() => {
  //   setSettingsVisibility(!settingsVisibility);
  // }, [settingsVisibility]);

  const checkUserRole = useCallback(() => {
    if (authContext.user.role === 'student') {
      return false;
    }

    return true;
  }, [authContext.user.role]);

  return (
    <ComputerContainer>
      <ComputerTextContainer>
        <ComputerName>{`Computador ${computer.name}`}</ComputerName>
        <ComputerStatusContainer>
          <ComputerStatus status={selectedComputerStatus} />
          <ComputerSpan>{computer.desc}</ComputerSpan>
        </ComputerStatusContainer>
      </ComputerTextContainer>

      <SettingsIconContainer visible={checkUserRole()} onClick={() => settingsClick()}>
        <BiDotsVerticalRounded />
      </SettingsIconContainer>

      <SettingsContainer visible={settingsOpen}>
        <SettingsTitle>Laboratório</SettingsTitle>
        <SettingsText>{`Computador ${computer.name}`}</SettingsText>
        <DropdownContainer>
          <DropdownLabel>Status:</DropdownLabel>
          <Dropdown onChange={(event) => setTemporaryComputerStatus(Number(event.target.value))}>
            <Option value="0">Disponível</Option>
            <Option value="3">Indisponível</Option>
          </Dropdown>
        </DropdownContainer>
        <SettingsButtonsContainer>
          <CancelButton onClick={() => settingsClick()}>Cancelar</CancelButton>
          <SaveButton
            onClick={() => {
              setSelectedComputerStatus(temporaryComputerStatus);
              settingsClick();
            }}
          >
            Salvar
          </SaveButton>
        </SettingsButtonsContainer>
      </SettingsContainer>
    </ComputerContainer>
  );
};

export default ComputerCard;
