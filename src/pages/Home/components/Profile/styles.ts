import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;

  max-height: 220px;
  width: 100%;

  padding: 25px 25px 35px 25px;
  margin-bottom: 40px;
  border-radius: 3px;
  background-color: ${colors.terciary};
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
  color: ${colors.dark};

  font-size: 25px;
  font-weight: 500;
  @media only screen and (max-width: 640px) {
    font-size: 18px;
  }
`;

export const Enrollment = styled.span`
  color: ${colors.dark};
  font-size: 15px;
`;

export const Email = styled.span`
  margin-top: 20px;

  color: ${colors.dark};

  font-size: 16px;
  font-weight: bold;
`;

export const EnrollmentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EnrollmentAndInformation = styled.div`
  display: flex;

  align-items: center;
`;

interface ProfileIconProps {
  bgColor: string;
}

export const ProfileIcon = styled.div<ProfileIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 60px;

  border-radius: 100px;

  background-color: ${(props) => props.bgColor};
  color: ${colors.terciary};
`;

export const ProfileIconInitials = styled.span`
  font-size: 35px;
`;

export const ProfileRightSide = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const CampusA = styled.a`
  display: flex;
  align-items: top;
  max-height: 20px;
  svg {
    font-size: 20px;
    color: ${colors.secondary};
  }
  &:hover {
    svg {
      color: ${colors.primary};
    }
    span {
      color: ${colors.primary};
    }
  }
`;

export const Campus = styled.span`
  margin-right: 10px;

  color: ${colors.dark};

  font-size: 19px;
  font-weight: bold;
`;
