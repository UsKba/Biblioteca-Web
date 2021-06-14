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
  @media only screen and (max-height: 600px) {
    margin-top: 250px;
  }

  @media only screen and (max-width: 640px) {
    padding: 0 12px;

    margin: 250px 0 35px 0;

    justify-content: center;
  }
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
  @media only screen and (min-width: 1700px) {
    max-width: 1500px;
  }
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
  mobileVisible?: boolean;
}

export const TableColumn = styled.div<TableColumnProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};

  flex-direction: column;
  align-items: center;

  min-height: 535px;
  flex: 1;

  padding: 15px 35px 5px 35px;
  border-right: solid 0.5px rgba(50, 44, 66, 0.5);

  &:last-child {
    border-right: none;
  }

  @media only screen and (max-width: 640px) {
    display: ${({ mobileVisible }) => (mobileVisible === false ? 'none' : 'flex')};

    min-height: auto;
  }
`;

export const RoomTitle = styled.div`
  font-size: 27px;
  font-family: 'roboto';
  font-weight: bold;

  color: ${colors.dark};

  margin-bottom: 30px;

  @media only screen and (max-width: 640px) {
    display: none;
  }
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

  @media only screen and (max-width: 640px) {
    width: 150px;
    margin-right: auto;
  }
`;

export const Option = styled.option``;

export const RentButton = styled(Button)`
  margin: 0;
  border-radius: 5px;
  border: solid 0.5px rgba(50, 44, 66, 0.5);

  background-color: ${colors.terciary};
  color: ${colors.dark};

  font-weight: bold;

  &:hover {
    border: solid 0.5px ${colors.primary};
  }

  @media only screen and (max-width: 640px) {
    width: 150px;
    height: 40px;

    font-size: 16px;

    padding: 9px 0px;
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

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const DateListContainer = styled.div`
  @media only screen and (max-width: 640px) {
    position: absolute;

    top: 80px;
  }

  div {
    width: 300px;
  }
`;

export const MobileNavContainer = styled.div`
  position: absolute;

  top: 150px;
`;

export const MobileNav = styled.div`
  display: none;
  @media only screen and (max-width: 640px) {
    display: flex;

    justify-content: space-around;

    width: 250px;
    height: 30px;

    margin-top: 14px;
  }
`;

export const MobileNavText = styled.div<LineProps>`
  @media only screen and (max-width: 640px) {
    text-align: center;

    font-size: 24px;
    font-family: 'Ubuntu';
    color: ${colors.dark};
  }
`;

interface LineProps {
  active?: boolean;
}

export const Line = styled.div<LineProps>`
  @media screen and (max-width: 640px) {
    height: 3px;

    width: 50px;

    background-color: ${(props) => props.active && colors.primary};
  }
`;
