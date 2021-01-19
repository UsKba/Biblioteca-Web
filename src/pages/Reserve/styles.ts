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

  @media only screen and (max-width: 640px) {
    max-width: 100%;
  }
  @media only screen and (min-width: 640px) {
    overflow-y: scroll;
    height: calc(100vh - 50px);
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
`;

export const DateListContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  width: 80%;

  margin-bottom: 40px;
`;

export const Title = styled.span`
  margin-bottom: 36px;

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

export const Period = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;
`;

export const ChoosePeriod = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

interface PeriodButtonProps {
  active?: boolean;
}

export const PeriodButton = styled(Button)<PeriodButtonProps>`
  width: 10em;

  margin: 0;

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

  margin-bottom: 16px;
`;

export const ChooseHour = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media only screen and (max-width: 640px) {
    justify-content: space-between;
  }

  &:after {
    content: '';
    width: 199.5px;
  }
`;

interface StyledButtonProps {
  colorActive?: boolean;
  visible?: boolean;
}

export const HourButton = styled(Button)<StyledButtonProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'block')};

  padding: 9px 39.5px;

  margin: 0;
  margin-bottom: 20px;

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
  margin: 26px 0 46px 0;
  align-self: flex-start;

  padding: 9px 55px;

  color: ${colors.text};
  @media only screen and (max-width: 640px) {
    align-self: center;
  }
`;

export const CancelButton = styled.button`
  position: fixed;
  left: 20px;
  bottom: 45px;

  height: 50px;
  width: 255px;

  border-radius: 10px;
  border: none;
  background-color: #ff5555;
  font-size: 18px;
  color: ${colors.background};
`;

export const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;
`;

export const ChooseRoom = styled.div`
  display: flex;
  justify-content: space-around;

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

  margin-bottom: 36px;
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
  margin-bottom: 40px;
`;

export const Components = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;

  margin-right: 120px;

  @media only screen and (max-width: 640px) {
    input {
      width: 190px;
    }
  }
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

  margin-right: 180px;
`;

export const Component = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-family: 'Roboto';

  padding: 15px 5px;

  height: 65px;
  width: 100%;

  margin-bottom: 10px;

  background-color: ${colors.background};
  color: ${colors.text};

  svg {
    cursor: pointer;
    color: ${colors.red};
    margin-right: 20px;
    &:hover {
      color: ${colors.lightred};
    }
  }
`;

export const ComponentInfo = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Enrollment = styled.span`
  color: ${colors.dark};
  font-size: 15px;
`;

export const HashTag = styled.span`
  margin-right: 5px;

  color: ${colors.dark};

  font-size: 19px;
  font-weight: 600;
  font-family: 'Ubuntu';
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;

  border-radius: 100px;

  background-color: ${colors.primary};
  color: ${colors.terciary};
`;

export const ProfileIconInitials = styled.span`
  font-size: 20px;
`;

export const ComponentContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
`;

export const SearchArea = styled.div`
  display: flex;
  flex: 1;

  border-radius: 5px;
  margin-bottom: 20px;
`;

export const SearchHashTag = styled.span`
  display: flex;

  height: 50px;
  width: 35px;

  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: bold;
  font-family: 'Ubuntu';

  color: #666666;
  background: ${colors.background};
`;

export const SearchingBar = styled.input`
  height: 50px;
  width: 100%;

  padding: 5px;

  border: none;
  border-radius: 0;

  background-color: ${colors.background};

  cursor: text;
`;

interface IconContainerProps {
  visible: boolean;
}

export const IconContainer = styled.div<IconContainerProps>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
`;
