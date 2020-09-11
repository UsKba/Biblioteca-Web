import styled from 'styled-components';

import colors from '~/styles/colors';

import { Button } from '~/components/MainButton/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

interface MobileModeProps {
  visible?: boolean;
}

export const LeftSide = styled.div<MobileModeProps>`
  display: flex;
  width: 100%;
  max-width: 300px;

  @media only screen and (max-width: 640px) {
    display: ${(props) => !props.visible && 'none'};
  }
`;

export const MiddleSide = styled.div<MobileModeProps>`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1000px;

  padding: 14px 34px 0 34px;

  background-color: ${colors.terciary};
  @media only screen and (max-width: 640px) {
    padding: 14px 10px 0 10px;
    display: ${(props) => !props.visible && 'none'};
  }
`;

export const RightSide = styled.div<MobileModeProps>`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 640px) {
    display: ${(props) => !props.visible && 'none'};
    justify-content: center;
  }
`;

export const RoomScheduling = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10em;
  margin: 36px 0 50px 0;
`;

export const Title = styled.span`
  font-size: 36px;
  font-family: 'Ubuntu';
  font-weight: bold;
  margin-bottom: 20px;
  color: ${colors.dark};
`;

export const Title2 = styled.span`
  font-size: 24px;
  font-family: 'Ubuntu';
  font-weight: 500;
  margin-bottom: 36px;
  color: ${colors.dark};
`;

export const Shift = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const ChooseShift = styled.div`
  display: flex;
  width: 100%;
  height: 4em;
  justify-content: space-around;
`;

export const ShiftButton = styled(Button)`
  width: 10em;
`;

export const Hour = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChooseHour = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HourButton = styled(Button)`
  width: 16em;
  margin-bottom: 1em;
`;

export const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChooseRoom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 14px;
`;

export const Room = styled.span`
  font-family: 'Ubuntu';
  text-align: center;
  color: ${colors.dark};
`;

export const RoomButton = styled.button`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  border: 3px solid ${colors.terciary};
  border-radius: 8px;
  padding: 10px;

  &:hover {
    border: 3px solid ${colors.primary};
  }
`;

export const Image = styled.img`
  height: 77px;
  width: 125;
  margin-top: 10px;
`;

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Components = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const InputButton = styled.button`
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50px;

  margin-left: 10px;

  font-size: 25px;
  font-weight: bold;

  border: none;

  color: ${colors.terciary};
  background-color: ${colors.primary};
`;
