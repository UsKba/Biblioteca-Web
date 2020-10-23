import styled from 'styled-components';

import { Link } from 'react-router-dom';

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
  width: 315px;
  background-color: ${colors.terciary};
  height: 30em;
  padding: 10px;
  border-radius: 5px;
  min-height: 120px;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

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

interface LineStatus {
  backGroundColor?: string;
  alignment?: string;
}

export const SideLine = styled.div<LineStatus>`
  display: flex;
  width: 3px;
  height: 100%;
  align-self: ${(props) => props.alignment};
  background-color: ${(props) => props.backGroundColor};

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-family: 'Ubuntu';
  font-weight: bold;
  margin-bottom: 20px;
  color: ${colors.dark};

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

  background-color: lightblue;
  border-radius: 7px;
  margin-bottom: 40px;
  ${(props) => props.big && `height: 8em;`}
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
    width: 50px;
    background-color: #3d6dcc;
    width: 80px;
    height: 3px;
  }
`;
export const LibrarianButton = styled.button`
  padding: 15px;
  border-radius: 5px;
  border: none;

  background-color: ${colors.secondary};
  color: ${colors.terciary};

  @media only screen and (max-width: 640px) {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: ${colors.primary};
  }

  &:active {
    background-color: rgba(99, 138, 242, 0.6);
  }
`;

export const StyledLink = styled(Link)`
  max-width: 210px;
`;

export const EmptyContainer = styled.div`
  display: flex;
  display: none;
  flex-direction: column;

  max-width: 450px;
  height: 100px;

  padding: 10px;
  align-items: center;
  text-align: center;

  background-color: ${colors.terciary};
`;

export const EmptyTitle = styled.span`
  font-family: 'Ubuntu';
  font-size: 16px;

  margin-bottom: 10px;

  color: ${colors.dark};
`;

export const EmptySpan = styled.span`
  font-family: 'Roboto';
  font-size: 14px;

  color: ${colors.text};
`;
