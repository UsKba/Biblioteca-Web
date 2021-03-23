import React, { useCallback, useEffect, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import { putRequest } from '~/utils/api';
import { checkUserIsAdmin } from '~/utils/user';

import { useAuth } from '~/contexts/AuthContext';
import { Computer } from '~/types/';

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

interface ComputerCardProps {
  computer: Computer;
  settingsOpen: boolean;
  settingsClick: () => void;
}

const ComputerCard: React.FC<ComputerCardProps> = ({ computer, settingsOpen, settingsClick }) => {
  const authContext = useAuth();
  const [selectedComputerStatus, setSelectedComputerStatus] = useState(Number);
  const [temporaryComputerStatus, setTemporaryComputerStatus] = useState(Number);
  const [computerDesc, setComputerDesc] = useState(String);

  const changeComputerStatus = useCallback(
    async (computerStatus: number) => {
      const { error } = await putRequest(`/computers/${computer.id}`, {
        status: computerStatus,
      });
      if (error) {
        alert(error.error);
      }
    },
    [computer.id]
  );

  const changeComputerDesc = useCallback((computerStatus: number) => {
    if (computerStatus === 0) {
      setComputerDesc('funcionando');
    } else {
      setComputerDesc('indisponível');
    }
  }, []);

  useEffect(() => {
    changeComputerDesc(computer.status);
  }, [changeComputerDesc, computer.status]);

  return (
    <ComputerContainer>
      <ComputerTextContainer>
        <ComputerName>{`Computador ${computer.identification}`}</ComputerName>
        <ComputerStatusContainer>
          <ComputerStatus status={computer.status} />
          <ComputerSpan>{`O computador está ${computerDesc}`}</ComputerSpan>
        </ComputerStatusContainer>
      </ComputerTextContainer>

      <SettingsIconContainer visible={checkUserIsAdmin(authContext.user)} onClick={() => settingsClick()}>
        <BiDotsVerticalRounded />
      </SettingsIconContainer>

      <SettingsContainer visible={settingsOpen}>
        <SettingsTitle>{`${computer.local.name}`}</SettingsTitle>
        <SettingsText>{`Computador ${computer.identification}`}</SettingsText>
        <DropdownContainer>
          <DropdownLabel>Status:</DropdownLabel>
          <Dropdown onChange={(event) => setTemporaryComputerStatus(Number(event.target.value))}>
            <Option value="0">Funcionando</Option>
            <Option value="1">Indisponível</Option>
          </Dropdown>
        </DropdownContainer>
        <SettingsButtonsContainer>
          <CancelButton onClick={() => settingsClick()}>Cancelar</CancelButton>
          <SaveButton
            onClick={() => {
              setSelectedComputerStatus(temporaryComputerStatus);
              changeComputerStatus(selectedComputerStatus);
              changeComputerDesc(computer.status);
              // settingsClick();
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
