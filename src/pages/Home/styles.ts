import styled from 'styled-components';

import colors from '../../styles/colors';

interface MobileModeProps {
  visible?: boolean;
}

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

export const ProfilePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 120px;
  height: 30em;
  width: 315px;

  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  background-color: ${colors.terciary};
`;

export const LeftSide = styled.div<MobileModeProps>`
  display: flex;

  width: 100%;
  max-width: 310px;

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

  @media only screen and (max-width: 640px) {
    display: ${(props) => !props.visible && 'none'};
    padding: 14px 10px 0 10px;
  }
`;

export const RightSide = styled.div<MobileModeProps>`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  max-width: 310px;

  @media only screen and (max-width: 640px) {
    display: ${(props) => !props.visible && 'none'};
    justify-content: center;
  }
`;

interface LineStatus {
  backGroundColor?: string;
  alignment?: string;
}

export const SideLine = styled.div<LineStatus>`
  display: flex;

  width: 3px;
  height: 100%;

  align-self: ${(props) => props.alignment};
  background-color: #d8d8d8;
  /* background-color: ${(props) => props.backGroundColor}; */

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const Title = styled.span`
  margin-bottom: 20px;

  color: ${colors.dark};

  font-size: 22px;
  font-family: 'Ubuntu';
  font-weight: bold;

  @media only screen and (max-width: 640px) {
    font-size: 17px;
  }
`;

interface TrashContainerProps {
  big?: boolean;
}

export const TrashContainer = styled.div<TrashContainerProps>`
  display: flex;
  align-items: center;

  width: 100%;

  margin-bottom: 40px;
  border-radius: 7px;

  background-color: lightblue;

  ${(props) => props.big && `height: 8em;`}
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
    text-align: center;

    height: 100%;

    font-size: 18px;
    font-family: 'Ubuntu';
  }
`;

interface LineProps {
  active?: boolean;
}

export const Line = styled.div<LineProps>`
  @media screen and (max-width: 640px) {
    height: 3px;

    width: 80px;

    background-color: ${(props) => props.active && colors.primary};
  }
`;

export const EmptyContainer = styled.div`
  /* display: flex; */
  display: none;
  flex-direction: column;
  align-items: center;
  text-align: center;

  height: 100px;
  max-width: 450px;

  padding: 10px;

  background-color: ${colors.terciary};
`;

export const EmptyTitle = styled.span`
  margin-bottom: 10px;

  color: ${colors.dark};

  font-family: 'Ubuntu';
  font-size: 16px;
`;

export const EmptySpan = styled.span`
  color: ${colors.text};

  font-family: 'Roboto';
  font-size: 14px;
`;
