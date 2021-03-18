import styled from 'styled-components';

import colors from '~/styles/colors';

interface HiddenContainerProps {
  visible?: boolean;
}

export const HiddenContainer = styled.div<HiddenContainerProps>`
  display: ${({ visible }) => (visible === true ? 'flex' : 'none')};

  flex: 1;
  z-index: 10;

  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;

  /* visibility: hidden; */
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* position: fixed;
  top: 30%;
  left: 40%; */

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
  width: 100%;
  align-items: center;
  justify-content: space-around;

  margin-top: 20px;
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
