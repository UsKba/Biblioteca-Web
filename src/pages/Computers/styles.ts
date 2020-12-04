import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 0.5;

  flex-direction: column;

  padding: 20px;
`;

export const RightSide = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;

  padding: 20px;
`;

export const MiddleSide = styled.div`
  display: flex;
  flex: 2;

  flex-direction: column;
`;

export const MiddleTop = styled.div`
  text-align: center;

  padding: 30px 0;
  @media only screen and (max-width: 640px) {
    padding-top: 0;
  }
`;

export const MiddleBottom = styled.div`
  display: flex;
  flex: 1;
`;
interface MobileModeProps {
  visible?: boolean;
}

export const MiddleLeft = styled.div<MobileModeProps>`
  display: flex;

  flex: 1;
  flex-direction: column;
  text-align: center;

  padding-right: 35px;

  @media only screen and (max-width: 640px) {
    display: ${(props) => !props.visible && 'none'};

    flex-direction: column;
    align-items: center;
    align-self: center;

    padding-right: 0;
  }
`;

export const MiddleRight = styled.div<MobileModeProps>`
  display: flex;
  flex: 1;

  flex-direction: column;
  text-align: center;

  padding-left: 20px;

  @media only screen and (max-width: 640px) {
    display: ${(props) => !props.visible && 'none'};
    flex-direction: column;
    align-self: center;
    align-items: center;

    padding-left: 0;
  }
`;

export const H1 = styled.span`
  margin-bottom: 30px;

  color: ${colors.dark};

  font-size: 32px;
  font-family: 'Ubuntu';
  font-weight: bold;
`;

export const H2 = styled.span`
  color: ${colors.dark};

  font-size: 25px;
  font-family: 'Ubuntu';
  font-weight: bold;
`;

export const ComputerList = styled.div<MobileModeProps>`
  display: flex;
  flex-direction: column;

  height: 380px;

  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const ComputerButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 95%;

  margin-bottom: 12px;
  padding: 10px 8px;

  border-left: solid 6px ${colors.primary};
  border-radius: 4px;
  border: none;

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

  margin-left: 10px;
`;

interface ComputerStatusProps {
  status: number;
}

export const ComputerStatus = styled.div<ComputerStatusProps>`
  display: flex;

  width: 22px;
  height: 22px;

  margin-right: 10px;
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

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;

  border-radius: 4px;

  background-color: ${colors.terciary};

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const ErrorSpan = styled.span`
  font-size: 14px;
  font-family: 'Roboto';
`;

export const ErrorSpanLink = styled.span`
  color: ${colors.secondary};

  font-size: 14px;
  font-family: 'Roboto';

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const MobileNav = styled.div`
  display: none;

  @media only screen and (max-width: 640px) {
    display: flex;
    align-self: center;
    justify-content: space-around;

    width: 301px;
    height: 30px;

    margin-top: 14px;
  }
`;

export const MobileNavText = styled.div`
  @media only screen and (max-width: 640px) {
    height: 100%;

    text-align: center;

    font-size: 18px;
    font-family: 'Ubuntu';
  }
`;

interface LineStatus {
  active: boolean;
}

export const Line = styled.div<LineStatus>`
  @media screen and (max-width: 640px) {
    height: 3px;
    width: auto;

    background-color: ${(props) => props.active && colors.primary};

    font-family: 'Ubuntu';
  }
`;

export const MobileStatusList = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;

  height: 25px;
  width: 100%;

  padding: 0 5px;

  background-color: ${colors.terciary};

  position: fixed;
  left: 0;
  bottom: 0;
  @media only screen and (max-width: 640px) {
    display: flex;
  }
`;

interface MobileStatusProps {
  bgColor?: string;
}

export const MobileStatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileStatus = styled.div<MobileStatusProps>`
  border-radius: 100px;

  height: 20px;
  width: 20px;

  margin-right: 3px;

  background-color: ${(props) => props.bgColor};
`;

export const MobileStatusSpan = styled.span`
  font-family: 'Roboto';
  font-size: 12px;

  color: ${colors.text};
`;
