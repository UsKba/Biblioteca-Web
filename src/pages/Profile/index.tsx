import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// import api from '~/services/api';

import FriendList from '~/components/FriendList';
import { FriendIcon, FriendIconInitials } from '~/components/FriendList/styles';

import { useAuth } from '~/contexts/AuthContext';
// import { AxiosResponseError } from '~/types';

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
  NotifHead,
  NotiMail,
  NotiTitle,
  NotiP,
  NotiText,
  Notification,
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
              <a href="https://goo.gl/maps/ALWeMF7grNxuXKQc6" target="_blank" rel="noopener noreferrer">
                <Campus>{user.campus}</Campus>
                <FiMapPin />
              </a>
            </CampusContainer>
          </ProfileRightSide>
        </BackgroundContainer>

        <Title>Notificações</Title>
        <BackgroundContainer>
          <FriendIcon>
            <FriendIconInitials>T</FriendIconInitials>
          </FriendIcon>
          <Notification>
            <NotifHead>
              Tallys Aureliano Júnior
              <NotiMail>{'<tallys@aureliano.com.br>'}</NotiMail>
            </NotifHead>
            <NotiText>
              <NotiTitle>Trabalho</NotiTitle>
              <NotiP>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using.
              </NotiP>
            </NotiText>
          </Notification>
        </BackgroundContainer>
      </MiddleSide>
      <RightSide>
        <SideLine backGroundColor="#638AF2" alignment="flex-start" />
        <FriendList />
      </RightSide>
    </Container>
  );
};

export default Profile;
