import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// import api from '~/services/api';

import FriendList from '~/components/FriendList';

import { useAuth } from '~/contexts/AuthContext';
// import { AxiosResponseError } from '~/types';

import PageHome from './PageHome';
import {
  Container,
  LeftSide,
  MiddleSide,
  RightSide,
  SideLine,
  ReserveList,
  Title,
  ReserveContainer,
  ReserveLeftSide,
  ReserveRightSide,
  ReserveTitle,
  ReserveText,
  ReserveGroupName,
  BackgroundContainer,
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
  CampusContainer,
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
        <ReserveList>
          <Title>Reservas</Title>
          <ReserveContainer>
            <ReserveLeftSide>
              <ReserveTitle>Reserva da Sala F1-3</ReserveTitle>
              <ReserveText>Sala reservada às 07-00 - 08:00 no dia</ReserveText>
              <ReserveText>7 de abril de 2020</ReserveText>
              <ReserveGroupName>Os caba</ReserveGroupName>
            </ReserveLeftSide>
            <ReserveRightSide>
              <FaChevronDown />
            </ReserveRightSide>
          </ReserveContainer>
          <ReserveContainer>
            <ReserveLeftSide>
              <ReserveTitle>Reserva da Sala F1-3</ReserveTitle>
              <ReserveText>Sala reservada às 07-00 - 08:00 no dia</ReserveText>
              <ReserveText>7 de abril de 2020</ReserveText>
              <ReserveGroupName>Os caba</ReserveGroupName>
            </ReserveLeftSide>
            <ReserveRightSide>
              <FaChevronDown />
            </ReserveRightSide>
          </ReserveContainer>
          <ReserveContainer>
            <ReserveLeftSide>
              <ReserveTitle>Reserva da Sala F1-3</ReserveTitle>
              <ReserveText>Sala reservada às 07-00 - 08:00 no dia</ReserveText>
              <ReserveText>7 de abril de 2020</ReserveText>
              <ReserveGroupName>Os caba</ReserveGroupName>
            </ReserveLeftSide>
            <ReserveRightSide>
              <FaChevronDown />
            </ReserveRightSide>
          </ReserveContainer>
        </ReserveList>
        <SideLine backGroundColor="#3D6DCC" alignment="flex-end" />
      </LeftSide>
      <MiddleSide>
        <Title>Perfil</Title>
        <BackgroundContainer>
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
            <CampusContainer>
              <Campus>{user.campus}</Campus>
              <FiMapPin />
            </CampusContainer>
          </ProfileRightSide>
        </BackgroundContainer>
        <Title>Notificações</Title>
        <BackgroundContainer />
      </MiddleSide>
      <RightSide>
        <SideLine backGroundColor="#638AF2" alignment="flex-start" />
        <FriendList />
      </RightSide>
    </Container>
  );
};

export default Profile;

/* <Container>
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
    </Container> */
