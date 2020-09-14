import React, { useState } from 'react';
import { FiMapPin, FiTrash2 } from 'react-icons/fi';

// import api from '~/services/api';
import FriendList from '~/components/FriendList';
import { FriendIcon, FriendIconInitials } from '~/components/FriendList/styles';
import ReserveList from '~/components/ReserveList';

import { useAuth } from '~/contexts/AuthContext';
// import { AxiosResponseError } from '~/types';

import {
  Container,
  LeftSide,
  MiddleSide,
  RightSide,
  SideLine,
  Title,
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
  CampusA,
  NotificationHead,
  NotificationMail,
  NotificationTitle,
  NotificationParaghaph,
  NotificationDate,
  NotificationText,
  Notification,
  NotificationTop,
  NotificationLeft,
  NotificationRight,
  MobileNav,
  MobileNavText,
  Line,
  LibrarianButton,
  StyledLink,
  NotificationContainer,
} from './styles';

interface UserResponse {
  name: string;
  enrollment: string;
  email: string;
  id: number;
}

const Home: React.FC = () => {
  const { user } = useAuth();
  const [screenSwipe, setScreenSwipe] = useState(1);

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

  // function handleChangeSWipe(index: number) {
  //   setScreenSwipe(index)
  // }

  function handleChangeSwipe(index: number) {
    setScreenSwipe(index);
  }

  return (
    <Container>
      <MobileNav>
        <MobileNavText onClick={() => handleChangeSwipe(0)}>
          {/* <MobileNavText onClick={() => handleChangeSWipe(0)}> */}
          Reservas
          <Line />
        </MobileNavText>
        <MobileNavText onClick={() => handleChangeSwipe(1)}>
          Perfil
          <Line />
        </MobileNavText>
        <MobileNavText onClick={() => handleChangeSwipe(2)}>
          Amigos
          <Line />
        </MobileNavText>
      </MobileNav>

      <LeftSide visible={screenSwipe === 0}>
        <ReserveList />
        <SideLine backGroundColor="#3D6DCC" alignment="flex-end" />
      </LeftSide>

      <MiddleSide visible={screenSwipe === 1}>
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
            <CampusA href="https://goo.gl/maps/ALWeMF7grNxuXKQc6" target="_blank" rel="noopener noreferrer">
              <Campus>{user.campus}</Campus>
              <FiMapPin />
            </CampusA>
          </ProfileRightSide>
        </BackgroundContainer>

        <Title>Notificações</Title>
        <NotificationContainer>
          <Notification>
            <NotificationTop>
              <NotificationLeft>
                <FriendIcon>
                  <FriendIconInitials>T</FriendIconInitials>
                </FriendIcon>
                <NotificationHead>
                  Tallys Aureliano Júnior
                  <NotificationMail>{'<tallys@aureliano.com.br>'}</NotificationMail>
                </NotificationHead>
              </NotificationLeft>
              <NotificationRight>
                <NotificationDate>15:31 - 22/08</NotificationDate>
              </NotificationRight>
            </NotificationTop>

            <NotificationText>
              <NotificationTitle>Trabalho</NotificationTitle>
              <NotificationParaghaph>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using.
              </NotificationParaghaph>
              <FiTrash2 />
            </NotificationText>
          </Notification>
        </NotificationContainer>
        <StyledLink to="/report">
          <LibrarianButton>Falar com o bibliotecário</LibrarianButton>
        </StyledLink>
      </MiddleSide>

      <RightSide visible={screenSwipe === 2}>
        <SideLine backGroundColor="#638AF2" alignment="flex-start" />
        <FriendList />
      </RightSide>
    </Container>
  );
};

export default Home;
