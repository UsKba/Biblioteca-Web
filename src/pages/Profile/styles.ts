import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
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

export const LeftSide = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
`;

export const MiddleSide = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1000px;

  padding: 14px 34px 0 34px;
`;

export const RightSide = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: flex-start;
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
`;

export const ReserveList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 14px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-family: 'Ubuntu';
  font-weight: bold;
  margin-bottom: 20px;
  color: ${colors.dark};
`;

export const ReserveContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 110px;

  margin-bottom: 10px;

  border-radius: 5px;
  border-left: solid 6px #4ad2d8;
  background-color: ${colors.terciary};
`;

export const ReserveLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReserveRightSide = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 15px;
    color: ${colors.dark};
  }
`;

export const ReserveTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.text};
  align-self: center;
  margin: 11px 0 13px 0;
`;

export const ReserveText = styled.span`
  font-size: 13px;
  margin-left: 11px;
  color: ${colors.text};
`;

export const ReserveGroupName = styled.span`
  font-size: 14px;
  font-family: 'Ubuntu';
  font-weight: bold;
  color: ${colors.text};
  margin: 10px 0 0 11px;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  height: 160px;
  width: 100%;
  background-color: ${colors.terciary};
  padding: 18px;
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
`;

export const ProfileName = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.dark};
  margin-bottom: 10px;
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
  width: 65px;
  height: 65px;
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

export const NotifHead = styled.div`
  height: 2em;
  width: 100%;
  margin-left: 5px;
`;

export const NotiMail = styled.span`
  color: #666666;
  font-size: 14px;
  margin-left: 5px;
`;

export const NotiTitle = styled.span`
  margin-top: 10px;
  font-weight: bold;
  font-size: 19px;
`;

export const NotiP = styled.span`
  font-size: 15px;
  margin-top: 10px;
`;

export const NotiText = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Notification = styled.div`
  display: column;
`;
