import React from 'react';
import {
  Container,
  ProfilePanel,
  ProfileIcon,
  ProfileIconInitials,
  ProfileInformation,
  ProfileInformationDetails,
  LeftSide,
  FriendsPanel,
  FriendsInformation,
  FriendsDetails,
  FriendsPanelDetails,
  SearchingBar,
  AddFriends,
  SearchArea
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
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


      <LeftSide>
        <SearchArea>
          <SearchingBar></SearchingBar>
          <AddFriends></AddFriends>
        </SearchArea>

        <FriendsPanel>
          <FriendsPanelDetails>
            <ProfileIcon>
              <ProfileIconInitials>D</ProfileIconInitials>
            </ProfileIcon>
            <FriendsInformation>
              <FriendsDetails>José Dudu</FriendsDetails>
            </FriendsInformation>
          </FriendsPanelDetails>

          {/* <FriendsPanelDetails>
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
          </FriendsPanelDetails> */}
        </FriendsPanel>
      </LeftSide>
    </Container>
  );
};

export default Profile;
