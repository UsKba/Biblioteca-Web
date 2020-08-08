import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

import {
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
} from './styles';

const FriendList: React.FC = () => {
  return (
    <FriendsContainer>
      <SearchArea>
        <SearchingBar type="text" id="data" placeholder="Pesquise por amigos..." />
        <IconContainer>
          <FaSearch />
        </IconContainer>
      </SearchArea>

      <FriendsPanel>
        <AddArea>
          <AddSpan>Adicione amigos agora:</AddSpan>
          <IconContainer>
            <FaPlus />
          </IconContainer>
        </AddArea>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>J</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>José Dudu</FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>R</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>Rebecca Lewis</FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>E</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>Elise Butler</FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>S</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>Sara West</FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>A</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>Aaliyah Mendoza</FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>J</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>Joshua Robertson</FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>R</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>Rose Fisher</FriendsDetails>
        </FriendsPanelDetails>
      </FriendsPanel>
    </FriendsContainer>
  );
};

export default FriendList;
