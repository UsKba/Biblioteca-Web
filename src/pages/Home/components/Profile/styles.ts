import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  max-height: 220px;
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
  color: ${colors.dark};
`;

export const ProfileName = styled.span`
  font-size: 25px;
  font-weight: 500;
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
  color: ${colors.dark};
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

export const CampusA = styled.a`
  display: flex;
  svg {
    color: ${colors.secondary};
    font-size: 20px;
    &:hover {
      color: ${colors.primary};
    }
  }
  align-items: top;
`;

export const Campus = styled.span`
  font-size: 19px;
  font-weight: bold;
  color: ${colors.dark};
  margin-right: 10px;
`;
