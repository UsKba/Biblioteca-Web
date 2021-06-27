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

  @media only screen and (max-width: 640px) {
    display: none;
  }
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

  margin-top: 90px;

  flex-direction: column;
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

export const H2 = styled.span`
  color: ${colors.dark};
  margin-bottom: 15px;

  font-size: 25px;
  font-family: 'Ubuntu';
  font-weight: bold;
`;

export const ComputerList = styled.div<MobileModeProps>`
  display: flex;
  flex-direction: column;

  height: 365px;

  overflow-y: auto;

  ::-webkit-scrollbar-track {
    background: #e0e0e0;
  }
`;

interface ErrorContainerProps {
  visible: boolean;
}

export const ErrorContainer = styled.div<ErrorContainerProps>`
  display: ${({ visible }) => (visible === true ? 'flex' : 'none')};
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

  padding: 0 20px;

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

  height: 16px;
  width: 16px;

  margin-right: 3px;

  background-color: ${(props) => props.bgColor};
`;

export const MobileStatusSpan = styled.span`
  font-family: 'Roboto';
  font-size: 12px;

  color: ${colors.text};
`;

export const PageHelpContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 37px;

  svg {
    color: ${colors.dark};
    font-size: 35px;
  }

  @media only screen and (max-width: 640px) {
    top: 60px;
    right: 10px;
  }
`;
