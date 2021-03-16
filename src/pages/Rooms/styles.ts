import styled from 'styled-components';

import colors from '~/styles/colors';

import { Button } from '~/components/MainButton/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const TableTopInformation = styled.div`
  display: flex;
  justify-content: space-between;

  height: 75px;
  width: 100%;
  max-width: 1200px;

  margin-top: 30px;
  padding-bottom: 10px;
`;

export const Table = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1200px;

  border: solid 0.5px rgba(50, 44, 66, 0.5);
  border-radius: 5px;

  background-color: ${colors.terciary};
`;

interface TableWarningProps {
  visible?: boolean;
}

export const TableWarning = styled.span<TableWarningProps>`
  display: ${({ visible }) => (visible === true ? 'none' : 'flex')};

  font-size: 24px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.dark};

  margin: 215px 0 215px 0;
`;

interface TableColumnProps {
  visible?: boolean;
}

export const TableColumn = styled.div<TableColumnProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;

  min-height: 535px;
  flex: 1;

  padding: 15px 35px;
  border-right: solid 0.5px rgba(50, 44, 66, 0.5);

  &:last-child {
    border-right: none;
  }
`;

export const RoomTitle = styled.div`
  font-size: 27px;
  font-family: 'roboto';
  font-weight: bold;

  color: ${colors.dark};

  margin-bottom: 30px;
`;

interface RoomCardProps {
  isReserved?: boolean;
}

export const RoomCard = styled.div<RoomCardProps>`
  display: flex;
  position: relative;

  width: 100%;
`;

interface RoomCardInformationProps {
  isReserved?: boolean;
}

export const RoomCardInformation = styled.button<RoomCardInformationProps>`
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 79px;

  align-items: center;
  justify-content: space-between;

  padding: 12px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-style: none;

  color: ${colors.terciary};
  background-color: ${(props) => (props.isReserved ? colors.red : colors.primary)};

  &:hover {
    cursor: ${(props) => (props.isReserved ? 'not-allowed' : 'pointer')};
    background-color: ${(props) => (props.isReserved ? colors.lightred : colors.lightprimary)};
  }

  svg {
    font-size: 40px;
    color: ${colors.terciary};
  }
`;

export const ReserveCardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: space-between;

  align-items: center;
`;

export const RoomCardHour = styled.span`
  font-family: 'Roboto';
  font-size: 12px;

  color: ${colors.terciary};
`;

export const Dropdown = styled.select`
  height: 40px;
  width: 200px;

  padding: 10px;

  font-family: 'Roboto';
  font-weight: bold;
  color: ${colors.dark};

  outline: none;
  border: solid 0.5px rgba(50, 44, 66, 0.5);
  border-radius: 5px;
`;

export const Option = styled.option``;

export const RentButton = styled(Button)`
  margin: 0;
  border-radius: 5px;
  border: solid 0.5px rgba(50, 44, 66, 0.5);

  background-color: ${colors.terciary};
  color: ${colors.text};

  &:hover {
    border: solid 0.5px ${colors.primary};
  }
`;

export interface DotsProps {
  visible?: boolean;
}

export const DotsContainer = styled.div<DotsProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
  flex-direction: column;
  position: absolute;
  top: 5px;
  right: 0;
  z-index: 5;

  svg {
    font-size: 28px;
    color: white;
    cursor: pointer;
  }
`;

export interface OptionsDropdownProps {
  visible?: boolean;
}

export const OptionsDropdown = styled.div<OptionsDropdownProps>`
  display: ${({ visible }) => (visible === true ? 'flex' : 'none')};
  flex-direction: column;

  position: absolute;
  z-index: 10;

  height: 60px;
  width: 140px;

  margin-top: 26px;

  box-shadow: 2px 2px 15px ${colors.dark};
`;

export const EditButton = styled.button`
  align-self: center;
  z-index: 10;

  width: 100%;

  padding: 8px;
  border: none;
  border-bottom: 1px solid rgba(50, 44, 66, 0.3);
  border-radius: 3px 3px 0 0;

  color: ${colors.dark};
  background-color: ${colors.terciary};

  &:hover {
    color: ${colors.primary};
  }
`;

export const CancelReserveButton = styled.button`
  width: 100%;
  z-index: 10;

  padding: 8px;
  border: none;
  border-radius: 0 0 3px 3px;

  color: ${colors.dark};
  background-color: ${colors.terciary};

  &:hover {
    color: ${colors.red};
  }
`;

interface SettingsContainerProps {
  visible?: boolean;
}

export const SettingsContainer = styled.div<SettingsContainerProps>`
  display: ${({ visible }) => (visible === true ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 30%;
  left: 40%;
  z-index: 10;

  height: 250px;
  width: 350px;

  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
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

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const DropdownLabel = styled.span`
  width: auto;
  padding: 10px;
  color: ${colors.dark};

  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
`;
