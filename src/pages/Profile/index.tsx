import React from 'react';
import {
  Container,
  ProfilePanel,
  ProfileIcon,
  ProfileIconInitials,
  ProfileInformation,
  ProfileInformationDetails,
  LeftSide,
  RightSide,
  FriendsPanel,
  FriendsInformation,
  FriendsDetails,
  FriendsPanelDetails,
  SearchingBar,
  AddFriends,
  SearchArea,
  MessageButton
} from './styles';
import PageHome from '../Profile/PageHome';

const users = [
  {
    name: 'Lonlon',
    email: 'lonlon@gmail.com',
    id: 1,
  },
  {
    name: 'Zanat',
    email: 'zanat@gmail.com',
    id: 2,
  },
  {
    name: 'Neitan',
    email: 'neitan@gmail.com',
    id: 3,
  },
];

const Profile: React.FC = () => {
  return (

    <Container>
      <LeftSide>
        <ProfilePanel>
          <ProfileIcon>
            <ProfileIconInitials>H</ProfileIconInitials>
          </ProfileIcon>
          <ProfileInformation>
            <ProfileInformationDetails>Halyson Junior</ProfileInformationDetails>
            <ProfileInformationDetails>20181104010017</ProfileInformationDetails>
            <ProfileInformationDetails>
              santos.junior@ifrn.edu.br
            </ProfileInformationDetails>
          </ProfileInformation>
        </ProfilePanel>
        <PageHome/>
      </LeftSide>

      <RightSide>
        <SearchArea>
          <SearchingBar type="text" id="data"></SearchingBar>
          <AddFriends></AddFriends>
        </SearchArea>

        <FriendsPanel>
          <FriendsPanelDetails>
            <ProfileIcon>
              <ProfileIconInitials>J</ProfileIconInitials>
            </ProfileIcon>
            <FriendsInformation>
              <FriendsDetails>José Dudu</FriendsDetails>
            </FriendsInformation>
          </FriendsPanelDetails>

          <FriendsPanelDetails>
            <ProfileIcon>
              <ProfileIconInitials>B</ProfileIconInitials>
            </ProfileIcon>
            <FriendsInformation>
              <FriendsDetails>Bruno Eduardo</FriendsDetails>
            </FriendsInformation>
          </FriendsPanelDetails>
          <FriendsPanelDetails>
            <ProfileIcon>
              <ProfileIconInitials>H</ProfileIconInitials>
            </ProfileIcon>
            <FriendsInformation>
              <FriendsDetails>Halyson Santos</FriendsDetails>
            </FriendsInformation>
          </FriendsPanelDetails>
        </FriendsPanel>
        <MessageButton>Falar com Bibliotecário</MessageButton>
      </RightSide>
    </Container>

  );
};

export default Profile;
