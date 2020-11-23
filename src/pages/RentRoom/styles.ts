import styled from 'styled-components';

import colors from '~/styles/colors';

import { Button } from '~/components/MainButton/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  width: 100%;

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

  /* @media only screen and (max-width: 640px) {
    display: ${(props) => !props.visible && 'none'};

    padding: 14px 10px 0 10px;
  } */
  @media only screen and (max-width: 640px) {
    max-width: 100%;
  }
`;

export const RightSide = styled.div<MobileModeProps>`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  max-width: 300px;

  @media only screen and (max-width: 640px) {
    display: ${(props) => !props.visible && 'none'};

    justify-content: center;
  }
`;

export const RoomScheduling = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 36px;
`;

export const DateListContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  height: 50px;
  width: 80%;

  margin-bottom: 40px;
`;

export const Title = styled.span`
  margin-bottom: 20px;

  font-size: 36px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.dark};
`;

export const Title2 = styled.span`
  margin-bottom: 36px;

  font-size: 24px;
  font-family: 'Ubuntu';
  font-weight: 500;

  color: ${colors.dark};
`;

export const Title3 = styled.span`
  margin: 20px 0 20px 0;

  font-size: 18px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.text};
`;

export const Period = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 50px;
`;

export const ChoosePeriod = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 4em;
`;

interface PeriodButtonProps {
  active?: boolean;
}

export const PeriodButton = styled(Button)<PeriodButtonProps>`
  width: 10em;

  background-color: ${({ active }) => (active === false ? `${colors.terciary}` : `${colors.primary}`)};
  color: ${({ active }) => (active === false ? `${colors.text}` : `${colors.terciary}`)};

  &:hover {
    background-color: ${({ active }) => (active === false ? `${colors.lightprimary}` : `${colors.primary}`)};
  }
  @media only screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 0;
    padding: 0 55px;
  }
`;

export const Hour = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChooseHour = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media only screen and (max-width: 640px) {
    justify-content: space-between;
  }
`;

interface StyledButtonProps {
  colorActive?: boolean;
  visible?: boolean;
}

export const HourButton = styled(Button)<StyledButtonProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'block')};

  width: 16em;

  margin-bottom: 1em;

  background-color: ${({ colorActive }) => (colorActive === false ? `${colors.terciary}` : `${colors.primary}`)};
  color: ${({ colorActive }) => (colorActive === false ? `${colors.text}` : `${colors.terciary}`)};

  &:hover {
    background-color: ${({ colorActive }) => (colorActive === false ? `${colors.lightprimary}` : `${colors.primary}`)};
  }

  @media only screen and (max-width: 640px) {
    width: 45%;
    padding: 5px 0;

    font-size: 16px;
  }
`;

export const RentButton = styled(Button)`
  margin-bottom: 5px;
  align-self: flex-start;

  padding: 9px 25px;

  color: ${colors.text};
  @media only screen and (max-width: 640px) {
    align-self: center;
  }
`;

export const CancelButton = styled(Button)`
  position: fixed;
  left: 5px;
  bottom: 5px;

  padding: 9px 20px;

  color: ${colors.text};
`;

export const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChooseRoom = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 14px;

  @media only screen and (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const Room = styled.span`
  text-align: center;

  font-family: 'Ubuntu';

  color: ${colors.dark};
`;

interface RoomButtonProps {
  active?: boolean;
}

export const RoomButton = styled.button<RoomButtonProps>`
  display: flex;
  flex-direction: column;

  padding: 10px;

  border: 3px solid ${({ active }) => (active === false ? `${colors.terciary}` : `${colors.primary}`)};
  border-radius: 8px;

  background-color: transparent;

  &:hover {
    border: 3px solid ${({ active }) => (active === false ? `${colors.lightprimary}` : `${colors.primary}`)};
  }
`;

export const Image = styled.img`
  height: 77px;
  width: 125;

  margin-top: 10px;

  @media only screen and (max-width: 640px) {
    height: 65px;
  }
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 50px;
`;

export const Group = styled.span`
  height: 45px;
  width: 100%;
  max-width: 250px;

  padding: 15px 5px;

  font-size: 16px;
  font-family: 'Roboto';

  background-color: ${colors.background};
  color: ${colors.text};
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

  @media only screen and (max-width: 640px) {
    input {
      width: 190px;
    }
  }
`;

export const InputButton = styled.button`
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 45px;

  margin-left: 10px;

  font-size: 25px;
  font-weight: bold;

  border: none;

  color: ${colors.terciary};
  background-color: ${colors.primary};
`;

interface ErrorContainerProps {
  error?: boolean;
}

export const ErrorContainer = styled.div<ErrorContainerProps>`
  display: none;
  color: red;
  padding: 0.2em;
  ${(props) => props.error && `display: flex;`}
`;

export const ComponentList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Component = styled.span`
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  font-family: 'Roboto';

  padding: 15px 5px;

  height: 45px;
  width: 100%;
  max-width: 250px;

  margin-bottom: 10px;

  background-color: ${colors.background};
  color: ${colors.text};

  svg {
    cursor: pointer;
    color: ${colors.red};
    &:hover {
      color: ${colors.lightred};
    }
  }
`;
