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

export const BackgroundContainer = styled.div`
  display: flex;
  max-height: 220px;
  width: 100%;
  background-color: ${colors.terciary};
  padding: 18px;
  margin-bottom: 40px;
`;

export const NotificationContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.terciary};
  padding: 18px 18px 14px 15px;
  margin-bottom: 40px;
`;

export const ProfileLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  color: ${colors.dark};
`;

export const ProfileName = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.dark};
  margin-bottom: 10px;
  @media only screen and (max-width: 640px) {
    font-size: 18px;
  }
`;

export const HashTag = styled.span`
  font-size: 19px;
  color: ${colors.dark};
  font-family: 'Ubuntu';
  font-weight: 600;
  margin-right: 5px;
`;

export const Enrollment = styled.span`
  font-size: 15px;
  color: ${colors.dark};
`;

export const Email = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

export const EnrollmentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EnrollmentAndInformation = styled.div`
  display: flex;
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${colors.primary};
  color: ${colors.terciary};
  border-radius: 100px;
`;

export const ProfileIconInitials = styled.span`
  font-size: 35px;
`;

export const ProfileRightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const CampusContainer = styled.div`
  display: flex;
  svg {
    color: ${colors.secondary};
    font-size: 20px;
  }
  align-items: top;
`;

export const Campus = styled.span`
  font-size: 19px;
  font-weight: bold;
  color: ${colors.dark};
  margin-right: 10px;
`;

export const NotificationHead = styled.div`
  display: flex;
  height: 2em;
  margin-left: 5px;
  align-items: center;
  color: ${colors.dark};
`;

export const NotificationMail = styled.span`
  color: #666666;
  font-size: 14px;
  margin-left: 5px;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const NotificationTitle = styled.span`
  margin-top: 10px;
  font-weight: bold;
  font-size: 19px;
  @media only screen and (max-width: 640px) {
    font-size: 15px;
  }
`;

export const NotificationParaghaph = styled.span`
  font-size: 14px;
  margin-top: 10px;
  text-align: justify;
  margin-right: 15px;
`;

export const NotificationText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  svg {
    color: ${colors.dark};
    font-size: 20px;
    align-self: flex-end;
  }
`;

export const Notification = styled.div`
  display: column;
`;

export const NotificationTop = styled.div`
  display: flex;
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
    border: 3px solid rgba(99, 138, 242, 0.9);
  }
`;

export const StyledLink = styled(Link)`
  width: 206px;
`;
