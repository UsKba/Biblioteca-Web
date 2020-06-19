import React from 'react';
import {
  ProfilePanel,
  ProfileIcon,
  ProfileIconInitials,
  ProfileInformation,
  ProfileInformationDetails,
  FriendsPanel,
  FriendsInformation,
  FriendsDetails,
  FriendsPanelDetails,
  SearchingBar,
  AddFriends,
} from './styles';
// import { Container } from './styles';

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
    <>
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

      <SearchingBar></SearchingBar>
      <AddFriends></AddFriends>

      <FriendsPanel>
        <FriendsPanelDetails>
          <ProfileIcon>
            <ProfileIconInitials>D</ProfileIconInitials>
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
    </>
  );
};

export default Profile;
