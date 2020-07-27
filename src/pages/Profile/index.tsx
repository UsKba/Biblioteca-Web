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
  FriendsDetails,
  FriendsPanelDetails,
  FriendIcon,
  FriendIconInitials,
  SearchingBar,
  IconContainer,
  SearchArea,
  AddArea,
  AddSpan,
  MessageButton
} from './styles';
import PageHome from '../Profile/PageHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

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
            <ProfileInformationDetails>santos.junior@ifrn.edu.br</ProfileInformationDetails>
          </ProfileInformation>
        </ProfilePanel>
        <PageHome/>
      </LeftSide>

      <RightSide>
        <SearchArea>
          <SearchingBar type="text" id="data" placeholder="Pesquise por amigos..."></SearchingBar>
          <IconContainer>
            <FontAwesomeIcon
                icon={faSearch}
                size= 'xs'
                color= '#fff'
            />
          </IconContainer>
        </SearchArea>

        <FriendsPanel>
          <FriendsPanelDetails>
            <FriendIcon>
              <FriendIconInitials>J</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>José Dudu</FriendsDetails>
          </FriendsPanelDetails>

          <FriendsPanelDetails>
            <FriendIcon>
              <FriendIconInitials>J</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>José Dudu</FriendsDetails>
          </FriendsPanelDetails>

          <FriendsPanelDetails>
            <FriendIcon>
              <FriendIconInitials>J</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>José Dudu</FriendsDetails>
          </FriendsPanelDetails>

          <FriendsPanelDetails>
            <FriendIcon>
              <FriendIconInitials>J</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>José Dudu</FriendsDetails>
          </FriendsPanelDetails>

          <FriendsPanelDetails>
            <FriendIcon>
              <FriendIconInitials>J</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>José Dudu</FriendsDetails>
          </FriendsPanelDetails>

          <FriendsPanelDetails>
            <FriendIcon>
              <FriendIconInitials>J</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>José Dudu</FriendsDetails>
          </FriendsPanelDetails>

          <FriendsPanelDetails>
            <FriendIcon>
              <FriendIconInitials>J</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>José Dudu</FriendsDetails>
          </FriendsPanelDetails>

        </FriendsPanel>

        <AddArea>
          <AddSpan>Adicione amigos agora:</AddSpan>
          <IconContainer>
            <FontAwesomeIcon
                  icon={faPlus}
                  size= 'xs'
                  color= '#fff'
              />
          </IconContainer>
        </AddArea>
        <MessageButton>Falar com Bibliotecário</MessageButton>
      </RightSide>
    </Container>

  );
};

export default Profile;
