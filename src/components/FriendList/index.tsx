import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaPlus, FaArrowRight } from 'react-icons/fa';
import { FiCheck, FiX } from 'react-icons/fi';
import { MdBlock } from 'react-icons/md';

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
  // FriendsPanelHidden,
  PlusContainer,
  PendingButton,
  AcceptContainer,
  PendingFriendsAlert,
} from './styles';

const FriendList: React.FC = () => {
  const [pendingListOpen, setPendingListOpen] = useState(false);
  const [friendsPanelVisible, setFriendsPanelVisible] = useState(true);
  const friendsContext = useFriends();
  const [search, setSearch] = useState('');
  const [pendingButtonClicked, setPendingButtonClicked] = useState(false);

  function togglePendingList() {
    setPendingListOpen(!pendingListOpen);
  }

  function pendingButtonText() {
    if (pendingButtonClicked) {
      return 'Lista de amigos';
    }
    return 'Pedidos pendentes';
  }

  return (
    <FriendsContainer>
      <TitlePanel>
        <Title>Amigos</Title>
        <PlusContainer>
          {/* rotateIcon={friendListOpen} */}
          <AiOutlineUserAdd
            title="Adicionar amigos"
            onClick={() => {
              friendsContext.sendInvite(search);
              setSearch('');
              // toggleFriendList();
              // toggleLine();
            }}
          />
        </PlusContainer>
      </TitlePanel>

      <EnrollmentInput value={search} onChange={(event) => setSearch(event.target.value)} hideIcon />

      <LineContainer left={false}>
        <Line2 />
        <Line1 />
      </LineContainer>

      <PendingButton
        onClick={() => {
          togglePendingList();
          setFriendsPanelVisible(!friendsPanelVisible);
          setPendingButtonClicked(!pendingButtonClicked);
        }}
      >
        <PendingFriendsAlert visible={false}>10</PendingFriendsAlert>
        {pendingButtonText()}
        <FaArrowRight />
      </PendingButton>

      <LineContainer left>
        <Line2 />
        <Line1 />
      </LineContainer>

      {/* Painel de procurar amigos para adicionar */}

      {/* Painel de pedidos de amizade */}
      <FriendsPanel visible={!friendsPanelVisible}>
        <EmptyContainer visible={friendsContext.requests.received.length === 0}>
          <EmptyTitle>Nenhum pedido...</EmptyTitle>
          <EmptySpan>Você não possui pedidos pendentes.</EmptySpan>
        </EmptyContainer>

        {friendsContext.requests.received.map((request) => (
          <>
            <FriendsPanelDetails key={request.id}>
              <FriendIcon>
                <FriendIconInitials>{request.sender.name[0]}</FriendIconInitials>
              </FriendIcon>
              <FriendsDetails>
                <FriendName>{request.sender.name}</FriendName>
                <EnrollmentContainer>
                  <FriendEnrollment>{request.sender.enrollment}</FriendEnrollment>
                  <AcceptContainer>
                    <FiCheck color={colors.primary} onClick={() => friendsContext.acceptInvite(request.id)} />
                    <FiX color={colors.red} onClick={() => friendsContext.recuseInvite(request.id)} />
                    <MdBlock color={colors.dark} />
                  </AcceptContainer>
                </EnrollmentContainer>
              </FriendsDetails>
            </FriendsPanelDetails>
          </>
        ))}
      </FriendsPanel>

      <FriendsPanel visible={friendsPanelVisible}>
        <EmptyContainer visible={friendsContext.friends.length === 0}>
          <EmptyTitle>Ninguém aqui...</EmptyTitle>
          <EmptySpan>Você não possui amigos, clique no ícone acima para adicionar alguém.</EmptySpan>
        </EmptyContainer>
        {/* <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>aaaaaaaaaaaa</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>aaaaaaaa</FriendName>
            <EnrollmentContainer>
              <FriendEnrollment>
                <strong># </strong>
                aaaaaaaaaaaaaa
              </FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails> */}

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
