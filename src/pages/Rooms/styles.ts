import styled from 'styled-components';

import colors from '~/styles/colors';

import { Button } from '~/components/MainButton/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;

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
  margin-bottom: 40px;
  background-color: ${colors.terciary};
`;

interface TableWarningProps {
  visible?: boolean;
}

export const TableWarning = styled.span<TableWarningProps>`
  display: ${({ visible }) => (visible === true ? 'none' : 'flex')};
  width: 800px;
  font-size: 50px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.dark};

  margin: 215px 0 0 0;
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

export const ReserveCardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: space-between;

  align-items: center;
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

export const Image = styled.img`
  height: 330px;
  width: 260px;

  margin-left: 40px;
`;

export const PageHelpContainer = styled.div`
  position: fixed;

  right: 37px;
  bottom: 30px;

  svg {
    color: ${colors.dark};
    font-size: 35px;
  }
`;
