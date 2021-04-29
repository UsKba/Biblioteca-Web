import React, { useEffect, useState } from 'react';
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
  Enrollment,
  EnrollmentContainer,
  EnrollmentAndInformation,
  Email,
  Campus,
  CampusA,
} from './styles';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [campusURL, setCampusURL] = useState('');

  useEffect(() => {
    if (user.campus === 'CA') {
      setCampusURL('https://goo.gl/maps/ALWeMF7grNxuXKQc6');
    } else {
      setCampusURL('');
    }
  }, [user.campus]);

  return (
    <Container>
      <ProfileLeftSide>
        <EnrollmentAndInformation>
          <ProfileIcon bgColor={user.color}>
            <ProfileIconInitials>{user.name[0].toUpperCase()}</ProfileIconInitials>
          </ProfileIcon>
          <ProfileInformation>
            <ProfileName>{user.name}</ProfileName>
            <EnrollmentContainer>
              <Enrollment>
                <strong># </strong>
                {user.enrollment}
              </Enrollment>
            </EnrollmentContainer>
          </ProfileInformation>
        </EnrollmentAndInformation>
        <Email>{user.email}</Email>
      </ProfileLeftSide>
      <ProfileRightSide>
        <CampusA href={campusURL} target="_blank" rel="noopener noreferrer">
          <Campus>{user.campus}</Campus>
          <FiMapPin />
        </CampusA>
      </ProfileRightSide>
    </Container>
  );
};

export default Profile;
