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
  flex-direction: column;
  flex: 0.5;

  padding: 20px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;

  padding: 20px;
`;

export const MiddleSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const MiddleTop = styled.div`
  padding: 30px 0;
  text-align: center;
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
  flex-direction: column;
  flex: 1;

  text-align: center;

  padding-right: 35px;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    align-self: center;

    padding-right: 0;
    display: ${(props) => !props.visible && 'none'};
  }
`;

export const MiddleRight = styled.div<MobileModeProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  padding-left: 20px;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    align-self: center;
    display: ${(props) => !props.visible && 'none'};
  }
`;

export const H1 = styled.span`
  font-size: 32px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.dark};

  margin-bottom: 30px;
`;

export const H2 = styled.span`
  font-size: 25px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.dark};
`;

export const ComputerList = styled.div<MobileModeProps>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  height: 380px;
`;

export const ComputerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 95%;

  border: none;
  margin-bottom: 12px;
  border-left: solid 6px ${colors.primary};
  border-radius: 4px;

  padding: 10px 8px;
  background-color: ${colors.terciary};
`;

export const ComputerName = styled.span`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;

  margin-bottom: 5px;

  color: ${colors.dark};
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
  font-size: 15px;
  font-family: 'Roboto';
  max-width: 200px;
  text-align: justify;

  color: ${colors.dark};
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
  font-size: 14px;
  font-family: 'Roboto';

  cursor: pointer;

  color: ${colors.secondary};
`;

export const MobileNav = styled.div`
  display: none;
  @media only screen and (max-width: 640px) {
    display: flex;
    width: 301px;
    height: 30px;
    align-self: center;
    justify-content: space-around;

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

export const Line = styled.div`
  @media screen and (max-width: 640px) {
    font-family: 'Ubuntu';
    background-color: #3d6dcc;
    width: auto;
    height: 3px;
  }
`;
