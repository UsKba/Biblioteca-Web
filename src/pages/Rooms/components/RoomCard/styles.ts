import styled from 'styled-components';

import colors from '~/styles/colors';

interface ContainerProps {
  isReserved?: boolean;
  visible?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
  position: relative;

  width: 100%;
`;

interface RoomCardInformationProps {
  isReserved?: boolean;
  IsBroken?: boolean;
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
  background-color: ${(props) => props.IsBroken && colors.black};

  &:hover {
    cursor: ${(props) => (props.isReserved ? 'not-allowed' : 'pointer')};
    cursor: ${(props) => props.IsBroken && 'not-allowed'};
    background-color: ${(props) => (props.isReserved ? colors.lightred : colors.lightprimary)};
    background-color: ${(props) => props.IsBroken && colors.lightblack};
  }

  svg {
    font-size: 40px;
    color: ${colors.terciary};
  }
`;

export const RoomCardHour = styled.span`
  font-family: 'Roboto';
  font-size: 12px;

  color: ${colors.terciary};
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

  margin: 26px 0 0 20px;

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
