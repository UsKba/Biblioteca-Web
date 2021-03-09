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

  margin: 0 10px 0 auto;
  border-radius: 100px;

  background-color: ${({ status }) => colors.computerStatus[status]};
`;

export const ComputerSpan = styled.span`
  text-align: start;

  width: 230px;

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
  position: absolute;
  z-index: 1;

  top: 25px;
  right: 10px;

  height: 50px;
  width: 150px;

  background-color: ${colors.red};
`;
