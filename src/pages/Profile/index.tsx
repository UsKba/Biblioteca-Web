import React from 'react';
import { Link } from 'react-router-dom';

// import api from '~/services/api';

import FriendList from '~/components/FriendList';

import { useAuth } from '~/contexts/AuthContext';
// import { AxiosResponseError } from '~/types';

import PageHome from './PageHome';
import {
  Container,
  ProfilePanel,
  ProfileIcon,
  ProfileIconInitials,
  ProfileInformation,
  ProfileName,
  EmailContainer,
  ProfileInformationDetails,
  LeftSide,
  MiddleSide,
  RightSide,
  MessageButton,
} from './styles';

interface UserResponse {
  name: string;
  enrollment: string;
  email: string;
  id: number;
}

const Profile: React.FC = () => {
  const { user } = useAuth();
  // como usar api 2020 atualizado
  // useEffect(() => {
  //   async function load() {
  //     try {
  //       const response = await api.get<UserResponse>('/users/1');
  //       const { name } = response.data;

  //       setUsername(name);
  //       setEnrollment(response.data.enrollment);
  //       setEmail(response.data.email);
  //     } catch (err) {
  //       const responseError = err as AxiosResponseError;

  //       console.log('error', responseError.response?.data?.error);
  //     }
  //   }

  //   load();
  // }, []);

  return (
    <Container>
      <LeftSide>
        <ProfilePanel>
          <ProfileIcon>
            <ProfileIconInitials>{user.name[0].toUpperCase()}</ProfileIconInitials>
          </ProfileIcon>
          <ProfileInformation>
            <ProfileName>{user.name}</ProfileName>
            <ProfileInformationDetails>
              Campus-
              {user.campus}
            </ProfileInformationDetails>
            <ProfileInformationDetails>{user.enrollment}</ProfileInformationDetails>
            <EmailContainer>
              <ProfileInformationDetails>{user.email}</ProfileInformationDetails>
            </EmailContainer>
          </ProfileInformation>
        </ProfilePanel>
      </LeftSide>

      <MiddleSide>
        <PageHome />
      </MiddleSide>

      <RightSide>
        <FriendList />
        <Link to="/report">
          <MessageButton>Falar com Bibliotecário</MessageButton>
        </Link>
      </RightSide>
    </Container>
  );
};

export default Profile;
