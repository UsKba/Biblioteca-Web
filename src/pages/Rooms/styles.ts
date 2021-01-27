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

  height: 550px;
  width: 100%;
  max-width: 1200px;

  border: solid 0.5px ${colors.grey};
  border-radius: 5px;

  background-color: ${colors.terciary};
`;

interface TableColumnProps {
  removeBorder?: boolean;
}

export const TableColumn = styled.div<TableColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  flex: 1;

  padding: 20px 35px;
  border-right: ${(props) => (props.removeBorder === true ? 'none' : `solid 0.5px ${colors.grey};`)};
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
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  height: 79px;
  width: 100%;

  padding: 12px;
  border-radius: 5px;

  background-color: ${(props) => (props.isReserved === true ? colors.red : colors.primary)};

  svg {
    font-size: 40px;
    color: ${colors.terciary};

    cursor: pointer;
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

  padding: 10px 8px;

  font-family: 'Roboto';
  font-weight: bold;
  color: ${colors.dark};

  outline: none;
  border: solid 0.5px ${colors.grey};
  border-radius: 5px;
`;

export const RentButton = styled(Button)`
  margin: 0;

  color: ${colors.text};
`;
