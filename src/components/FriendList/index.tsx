import React, { useState } from 'react';
import { FaPlus, FaArrowRight, FaTimes } from 'react-icons/fa';

import colors from '~/styles/colors';

import { useFriends } from '~/contexts/FriendsContext';

import EnrollmentInput from '../EnrollmentInput';
import {
  FriendsContainer,
  FriendsPanel,
  FriendsDetails,
  FriendName,
  FriendEnrollment,
  FriendsPanelDetails,
  FriendIcon,
  FriendIconInitials,
  TitlePanel,
  Title,
  EnrollmentContainer,
  Line1,
  Line2,
  LineContainer,
  EmptyContainer,
  EmptyTitle,
  EmptySpan,
  FriendsPanelHidden,
  PlusContainer,
  PendingButton,
  PendingPanelHidden,
  AcceptContainer,
} from './styles';

const FriendList: React.FC = () => {
  const [friendListOpen, setFriendListOpen] = useState(false);
  const [lineOpen, setLineOpen] = useState(false);
  const [pendingListOpen, setPendingListOpen] = useState(false);
  const [friendsPanelVisible, setFriendsPanelVisible] = useState(true);
  const friendsContext = useFriends();
  const [search, setSearch] = useState('');

  function toggleFriendList() {
    setFriendListOpen(!friendListOpen);
  }
  function toggleLine() {
    setLineOpen(!lineOpen);
  }
  function togglePendingList() {
    setPendingListOpen(!pendingListOpen);
  }

  return (
    <FriendsContainer>
      <TitlePanel>
        <Title>Amigos</Title>
        <PlusContainer rotateIcon={friendListOpen}>
          <FaPlus
            onClick={() => {
              friendsContext.sendInvite(Number(search));
              setSearch('');
              // toggleFriendList();
              // toggleLine();
            }}
          />
        </PlusContainer>
      </TitlePanel>

      <EnrollmentInput value={search} onChange={(event) => setSearch(event.target.value)} />

      <LineContainer>
        <Line2 />
        <Line1 />
      </LineContainer>

      <PendingButton
        onClick={() => {
          togglePendingList();
          setFriendsPanelVisible(!friendsPanelVisible);
        }}
      >
        Pedidos Pendentes
        <FaArrowRight />
      </PendingButton>

      <PendingPanelHidden appear={pendingListOpen}>
        <FriendsPanel>
          {friendsContext.invites.map((invite) => (
            <FriendsPanelDetails key={invite.id}>
              <FriendIcon>
                <FriendIconInitials>{invite.senderId}</FriendIconInitials>
              </FriendIcon>
              <FriendsDetails>
                <FriendName>{invite.senderId}</FriendName>
                <EnrollmentContainer>
                  <FriendEnrollment>{invite.senderId}</FriendEnrollment>
                  <AcceptContainer>
                    <FaPlus color={colors.primary} onClick={() => friendsContext.acceptInvite(invite.id)} />

                    <FaTimes />
                  </AcceptContainer>
                </EnrollmentContainer>
              </FriendsDetails>
            </FriendsPanelDetails>
          ))}
        </FriendsPanel>
      </PendingPanelHidden>

      <EmptyContainer>
        <EmptyTitle>Ninguém aqui...</EmptyTitle>
        <EmptySpan>Você não possui amigos, clique em + para adicionar alguém.</EmptySpan>
      </EmptyContainer>

      <FriendsPanel visible={friendsPanelVisible}>
        {friendsContext.friends.map((friend) => (
          <FriendsPanelDetails key={friend.id}>
            <FriendIcon>
              <FriendIconInitials>{friend.name[0]}</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>
              <FriendName>{friend.name}</FriendName>
              <EnrollmentContainer>
                <FriendEnrollment>
                  <strong># </strong>
                  {friend.enrollment}
                </FriendEnrollment>
              </EnrollmentContainer>
            </FriendsDetails>
          </FriendsPanelDetails>
        ))}
      </FriendsPanel>
    </FriendsContainer>
  );
};

export default FriendList;
