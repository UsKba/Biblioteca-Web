import React from 'react';
import { FiMapPin } from 'react-icons/fi';

import { useAuth } from '~/contexts/AuthContext';

import {
  Container,
  ProfileIcon,
  ProfileIconInitials,
  ProfileInformation,
  ProfileLeftSide,
  ProfileRightSide,
  ProfileName,
  HashTag,
  Enrollment,
  EnrollmentContainer,
  EnrollmentAndInformation,
  Email,
  Campus,
  CampusA,
} from './styles';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <ProfileLeftSide>
        <EnrollmentAndInformation>
          <ProfileIcon>
            <ProfileIconInitials>{user.name[0].toUpperCase()}</ProfileIconInitials>
          </ProfileIcon>
          <ProfileInformation>
            <ProfileName>{user.name}</ProfileName>
            <EnrollmentContainer>
              <HashTag>#</HashTag>
              <Enrollment>{user.enrollment}</Enrollment>
            </EnrollmentContainer>
          </ProfileInformation>
        </EnrollmentAndInformation>
        <Email>{user.email}</Email>
      </ProfileLeftSide>
      <ProfileRightSide>
        <CampusA href="https://goo.gl/maps/ALWeMF7grNxuXKQc6" target="_blank" rel="noopener noreferrer">
          <Campus>{user.campus}</Campus>
          <FiMapPin />
        </CampusA>
      </ProfileRightSide>
    </Container>
  );
};

export default Profile;
