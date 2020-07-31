import React from 'react';
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
  RightSide,
  FriendsContainer,
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
import FriendList from '../Profile/FriendList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

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
            <ProfileName>Halyson Junior</ProfileName>
            <ProfileInformationDetails>(20181104010017)</ProfileInformationDetails>
            <EmailContainer>
             <ProfileInformationDetails>santos.junior@ifrn.edu.br</ProfileInformationDetails>
            </EmailContainer>
          </ProfileInformation>
        </ProfilePanel>
        <PageHome/>
      </LeftSide>

      <RightSide>
        <FriendList></FriendList>
        <Link to='/report'>
          <MessageButton>Falar com Bibliotecário</MessageButton>
        </Link>

      </RightSide>
    </Container>

  );
};

export default Profile;
