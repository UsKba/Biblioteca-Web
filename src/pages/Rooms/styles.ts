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

  height: 500px;
  width: 100%;
  max-width: 1200px;

  border: solid 0.5px rgba(50, 44, 66, 0.5);
  border-radius: 5px;

  background-color: ${colors.terciary};
`;

interface TableColumnProps {
  removeBorder?: boolean;
  visible?: boolean;
}

export const TableColumn = styled.div<TableColumnProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  flex: 1;

  padding: 20px 35px 40px;
  border-right: ${(props) => (props.removeBorder === true ? 'none' : `solid 0.5px rgba(50, 44, 66, 0.5);`)};
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

  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.isReserved === true ? colors.lightred : colors.lightprimary)};
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

  padding: 10px 8px;

  font-family: 'Roboto';
  font-weight: bold;
  color: ${colors.dark};

  outline: none;
  border: solid 0.5px rgba(50, 44, 66, 0.5);
  border-radius: 5px;
`;

export const RentButton = styled(Button)`
  margin: 0;
  border-radius: 5px;
  border: solid 0.5px rgba(50, 44, 66, 0.5);

  color: ${colors.text};

  &:hover {
    border: solid 0.5px ${colors.primary};
  }
`;

export const PeriodButtonList = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 400px;
`;

interface PeriodButtonProps {
  active?: boolean;
}

export const PeriodButton = styled(Button)<PeriodButtonProps>`
  width: 120px;

  margin: 0 0 7px 0;
  padding: 7px 15px;
  border-radius: 5px;
  border: solid 0.5px rgba(50, 44, 66, 0.5);

  background-color: ${({ active }) => (active === false ? `${colors.terciary}` : `${colors.primary}`)};
  color: ${({ active }) => (active === false ? `${colors.text}` : `${colors.terciary}`)};

  &:hover {
    border: solid 0.5px ${colors.primary};
    background-color: ${({ active }) => (active === false ? `${colors.lightprimary}` : `${colors.primary}`)};
  }
`;
