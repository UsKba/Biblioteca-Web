import styled from 'styled-components';

import colors from '~/styles/colors';

export const ComputerContainer = styled.div`
  display: flex;
  position: relative;

  align-items: center;
  justify-content: space-between;

  width: 95%;

  margin-bottom: 12px;
  padding: 10px 8px;

  border: none;
  border-left: solid 6px ${colors.primary};
  border-radius: 4px;

  background-color: ${colors.terciary};
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const ComputerName = styled.span`
  margin-bottom: 5px;

  color: ${colors.dark};

  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
`;

export const ComputerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  height: 60px;

  margin-left: 10px;
`;

interface ComputerStatusProps {
  status: number;
}

export const ComputerStatus = styled.div<ComputerStatusProps>`
  display: flex;

  width: 22px;
  height: 22px;

  margin: 0 5px 0 0;
  border-radius: 100px;

  background-color: ${({ status }) => colors.computerStatus[status]};
`;

export const ComputerStatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ComputerSpan = styled.span`
  text-align: start;

  width: 250px;

  color: ${colors.dark};

  font-size: 15px;
  font-family: 'Roboto';
`;

interface SettingsIconContainerProps {
  visible?: boolean;
}

export const SettingsIconContainer = styled.div<SettingsIconContainerProps>`
  display: ${({ visible }) => (visible === true ? 'flex' : 'none')};
  position: absolute;
  top: 5px;
  right: 0;

  svg {
    font-size: 25px;

    cursor: pointer;
  }
`;

interface SettingsContainerProps {
  visible?: boolean;
}

export const SettingsContainer = styled.div<SettingsContainerProps>`
  display: ${({ visible }) => (visible === true ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  height: 250px;
  width: 280px;

  background-color: white;
  box-shadow: 2px 2px 5px grey;
  border-radius: 4px;
`;

export const SettingsTitle = styled.span`
  width: 100%;

  color: ${colors.dark};

  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;

  padding: 15px;
  text-align: center;
`;

export const SettingsText = styled.span`
  width: 100%;

  color: ${colors.dark};

  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
`;

export const SettingsButtonsContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 20px;
`;

export const CancelButton = styled.button`
  color: ${colors.dark};
  font-size: 18px;
  font-family: 'Roboto';
  width: 75px;
  height: 15px;
  background-color: none;
  background: none;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SaveButton = styled.button`
  padding: 7px 27px;

  font-weight: bold;

  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  background-color: white;
  margin-top: 6px;

  transition: 0.3s;
  &:hover {
    color: ${colors.terciary};
    background-color: ${colors.primary};
  }
`;

export const Dropdown = styled.select`
  height: 40px;
  width: 160px;

  padding: 10px;

  font-family: 'Roboto';
  font-weight: bold;
  color: ${colors.dark};

  outline: none;
  border: solid 0.5px rgba(50, 44, 66, 0.5);
  border-radius: 5px;
`;

export const Option = styled.option``;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const DropdownLabel = styled.span`
  width: auto;
  padding: 10px;
  color: ${colors.dark};

  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
  margin-left: 15px;
`;
