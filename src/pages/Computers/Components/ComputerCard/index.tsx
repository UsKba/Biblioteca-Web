import React, { useCallback, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import { useAuth } from '~/contexts/AuthContext';

import {
  ComputerContainer,
  ComputerName,
  ComputerSpan,
  ComputerStatus,
  ComputerTextContainer,
  SettingsContainer,
  SettingsIconContainer,
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
        <ComputerSpan>{computer.desc}</ComputerSpan>
      </ComputerTextContainer>
      <ComputerStatus status={computer.status} />

      <SettingsIconContainer visible={checkUserRole()} onClick={() => settingsClick()}>
        <BiDotsVerticalRounded />
        <SettingsContainer visible={settingsOpen} />
      </SettingsIconContainer>
    </ComputerContainer>
  );
};

export default ComputerCard;
