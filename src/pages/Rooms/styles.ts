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
  background-color: white;
  margin-top: 26px;
`;

export const EditButton = styled.button`
  width: 100%;
  border-style: none;
  background-color: white;
  align-self: center;
  border: 1px solid grey;
  border-bottom: none;
  padding: 8px;
`;

export const CancelButton = styled.button`
  width: 100%;
  border-style: none;
  background-color: white;
  border: 1px solid grey;
  padding: 8px;
`;
