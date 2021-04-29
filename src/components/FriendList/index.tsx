import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaPlus, FaArrowLeft, FaArrowRight, FaChevronLeft, FaTimes } from 'react-icons/fa';
import { FiCheck, FiX } from 'react-icons/fi';
import { MdBlock } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

import { getRequest } from '~/utils/api';

import colors from '~/styles/colors';

import { useAuth } from '~/contexts/AuthContext';
import { useFriends } from '~/contexts/FriendsContext';
import { User, Friend } from '~/types';

import EnrollmentInput from '../EnrollmentInput';
import {
  FriendsContainer,
  FriendsPanel,
  FriendsDetails,
  FriendRequestDetails,
  FriendName,
  FriendEnrollment,
  FriendNameAndEnrollmentContainer,
  FriendsPanelDetails,
  FriendIcon,
  FriendIconInitials,
  TitlePanel,
  Title,
  TitleSmall,
  Line1,
  Line2,
  LineContainer,
  EmptyContainer,
  EmptyTitle,
  EmptySpan,
  PlusContainer,
  TimesContainer,
  PendingButton,
  AcceptContainer,
  PendingFriendsAlert,
  PendingIconContainer,
  FriendSearchPanel,
  SvgContainer,
  SearchResultsText,
  ReserveButtonDiv,
  AddFriendIconText,
} from './styles';

interface FriendListProps {
  onFriendClick?: (friend: Friend) => void;
}

const titlePages = {
  '/reservar': true,
};

const FriendList: React.FC<FriendListProps> = ({ onFriendClick }) => {
  const [friendsPanelVisible, setFriendsPanelVisible] = useState(true);
  const [search, setSearch] = useState('');
  const [reserveButton, setReserveButton] = useState(false);
  const [searchUsers, setSearchUsers] = useState([] as User[]);
  const location = useLocation();

  const [pendingButtonClicked, setPendingButtonClicked] = useState(false);
  const [iconPendingButtonClicked, setIconPendingButtonClicked] = useState(false);

  const [searchPanelVisible, setSearchPanelVisible] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(true);

  const friendsContext = useFriends();
  const authContext = useAuth();

  const toggleSearchBars = useCallback(() => {
    setSearchBarVisible(!searchBarVisible);
  }, [searchBarVisible]);

  const pendingButtonText = useCallback(() => {
    if (pendingButtonClicked) {
      return 'Lista de amigos';
    }
    return 'Pedidos pendentes';
  }, [pendingButtonClicked]);

  const openFriendAddPanel = useCallback((value: string) => {
    setSearch(value);

    if (value.length > 0) {
      return setSearchPanelVisible(true);
    }

    return setSearchPanelVisible(false);
  }, []);

  const openFriendSearchPanel = useCallback((value: string) => {
    setSearch(value);

    if (value.length > 0) {
      return setSearchPanelVisible(true);
    }

    return setSearchPanelVisible(false);
  }, []);

  const handleFriendClick = useCallback(
    (friend: Friend) => {
      if (onFriendClick) {
        onFriendClick(friend);
      }
    },
    [onFriendClick]
  );

  const handleInputChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      openFriendAddPanel(event.target.value);

      const { data } = await getRequest<User[]>('/search', {
        params: {
          name: event.target.value,
          // enrollment: event.target.value,
        },
      });

      const usersSearched = data || [];

      const searchUsersFormatted = usersSearched
        .filter((user) => user.id !== authContext.user.id)
        .filter((user) => {
          const userIsFriend = friendsContext.friends.find((friend) => {
            return friend.id === user.id;
          });

          return !userIsFriend;
        });

      setSearchUsers(searchUsersFormatted);
    },
    [authContext.user.id, openFriendAddPanel, friendsContext.friends]
  );

  const handleSearchFriends = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      openFriendSearchPanel(event.target.value);

      const { data } = await getRequest<User[]>('/search', {
        params: {
          name: event.target.value,
          // enrollment: event.target.value,
        },
      });

      const usersSearched = data || [];

      const searchUsersFormatted = usersSearched
        .filter((user) => user.id !== authContext.user.id)
        .filter((user) => {
          const userIsFriend = friendsContext.friends.find((friend) => {
            return friend.id === user.id;
          });

          return userIsFriend;
        });

      setSearchUsers(searchUsersFormatted);
    },
    [authContext.user.id, friendsContext.friends, openFriendSearchPanel]
  );

  useEffect(() => {
    const reserveButtonStatus = titlePages[location.pathname];
    setReserveButton(reserveButtonStatus);
  }, [location.pathname]);

  return (
    <FriendsContainer>
      <TitlePanel>
        <Title>Amigos</Title>
        <PlusContainer
          visible={searchBarVisible}
          onClick={() => {
            toggleSearchBars();
          }}
        >
          <AddFriendIconText>Adicionar amigos</AddFriendIconText>
          <AiOutlineUserAdd
            title="Adicionar amigos"
            onClick={() => {
              toggleSearchBars();
            }}
          />
        </PlusContainer>
        <TimesContainer visible={searchBarVisible}>
          <FaTimes
            onClick={() => {
              toggleSearchBars();
            }}
          />
        </TimesContainer>
      </TitlePanel>

      <EnrollmentInput value={search} onChange={handleSearchFriends} hideIcon visible={searchBarVisible} />

      <EnrollmentInput
        value={search}
        placeholder="Adicione amigos"
        onChange={handleInputChange}
        hideIcon
        visible={!searchBarVisible}
      />

      <LineContainer left={false}>
        <Line2 />
        <Line1 />
      </LineContainer>

      <PendingButton
        searchVisibilityToggle={searchPanelVisible}
        onClick={() => {
          setFriendsPanelVisible(!friendsPanelVisible);
          setPendingButtonClicked(!pendingButtonClicked);
          setIconPendingButtonClicked(!iconPendingButtonClicked);
        }}
      >
        <PendingIconContainer left={false} appearIcon={iconPendingButtonClicked}>
          <FaArrowLeft />
        </PendingIconContainer>

        <PendingFriendsAlert visible={friendsContext.requests.received.length !== 0 && !iconPendingButtonClicked}>
          {friendsContext.requests.received.length}
        </PendingFriendsAlert>
        {pendingButtonText()}

        <PendingIconContainer left appearIcon={!iconPendingButtonClicked}>
          <FaArrowRight />
        </PendingIconContainer>
      </PendingButton>

      <LineContainer left searchVisibilityToggle={searchPanelVisible}>
        <Line1 />
        <Line2 />
      </LineContainer>

      <SearchResultsText visible={searchPanelVisible}>Resultados da pesquisa:</SearchResultsText>
      <EmptyContainer visible={searchUsers.length === 0 && search !== ''}>
        <EmptyTitle>Ninguém foi encontrado...</EmptyTitle>
        <EmptySpan>Confira a sua pesquisa e tente novamente.</EmptySpan>
      </EmptyContainer>

      {/* Painel de procurar amigos para adicionar */}

      <FriendSearchPanel visible={searchPanelVisible}>
        {searchUsers.map((user) => (
          <>
            <FriendsPanelDetails key={user.id}>
              <FriendIcon bgColor={user.color}>
                <FriendIconInitials>{user.name[0]}</FriendIconInitials>
              </FriendIcon>
              <FriendsDetails>
                <FriendName>{user.name}</FriendName>
                <FriendEnrollment>{user.enrollment}</FriendEnrollment>
              </FriendsDetails>
              <ReserveButtonDiv visible={reserveButton && searchBarVisible}>
                <FaChevronLeft onClick={() => handleFriendClick(user)} />
              </ReserveButtonDiv>
              <SvgContainer visible={!searchBarVisible}>
                <FaPlus
                  onClick={() => {
                    friendsContext.sendInvite(user.enrollment);
                  }}
                />
              </SvgContainer>
            </FriendsPanelDetails>
          </>
        ))}
        <LineContainer left>
          <Line1 />
          <Line2 />
        </LineContainer>
      </FriendSearchPanel>

      {/* Painel de pedidos de amizade */}
      <FriendsPanel visible={!friendsPanelVisible}>
        <TitleSmall>Pedidos Recebidos</TitleSmall>

        <EmptyContainer visible={friendsContext.requests.received.length === 0}>
          <EmptyTitle>Nenhum pedido recebido...</EmptyTitle>
          <EmptySpan>Você não possui pedidos pendentes.</EmptySpan>
        </EmptyContainer>

        {friendsContext.requests.received.map((friendRequestReceived) => (
          <FriendsPanelDetails key={friendRequestReceived.id}>
            <FriendIcon bgColor={friendRequestReceived.sender.color}>
              <FriendIconInitials>{friendRequestReceived.sender.name[0]}</FriendIconInitials>
            </FriendIcon>
            <FriendRequestDetails>
              <FriendNameAndEnrollmentContainer>
                <FriendName>{friendRequestReceived.sender.name}</FriendName>
                <FriendEnrollment>
                  <strong># </strong>
                  {friendRequestReceived.sender.enrollment}
                </FriendEnrollment>
              </FriendNameAndEnrollmentContainer>
              <AcceptContainer>
                <FiCheck color={colors.primary} onClick={() => friendsContext.acceptInvite(friendRequestReceived.id)} />
                <FiX color={colors.red} onClick={() => friendsContext.recuseInvite(friendRequestReceived.id)} />
                <MdBlock color={colors.dark} />
              </AcceptContainer>
            </FriendRequestDetails>
          </FriendsPanelDetails>
        ))}
        <TitleSmall>Pedidos Enviados</TitleSmall>

        {friendsContext.requests.sent.map((friendRequestSent) => (
          <FriendsPanelDetails key={friendRequestSent.id}>
            <FriendIcon bgColor={friendRequestSent.receiver.color}>
              <FriendIconInitials>{friendRequestSent.receiver.name[0]}</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>
              <FriendName>{friendRequestSent.receiver.name}</FriendName>
              <FriendEnrollment>
                <strong># </strong>
                {friendRequestSent.receiver.enrollment}
              </FriendEnrollment>
            </FriendsDetails>
          </FriendsPanelDetails>
        ))}

        <EmptyContainer visible={friendsContext.requests.sent.length === 0}>
          <EmptyTitle>Nenhum pedido enviado...</EmptyTitle>
          <EmptySpan>Você não possui pedidos pendentes.</EmptySpan>
        </EmptyContainer>
      </FriendsPanel>

      {/* Painel de lista de amigos */}
      <FriendsPanel visible={friendsPanelVisible}>
        <EmptyContainer visible={friendsContext.friends.length === 0}>
          <EmptyTitle>Ninguém aqui...</EmptyTitle>
          <EmptySpan>Você não possui amigos, clique no ícone de pessoa acima para adicionar alguém.</EmptySpan>
        </EmptyContainer>

        {friendsContext.friends.map((friend) => (
          <FriendsPanelDetails key={friend.id}>
            <FriendIcon bgColor={friend.color}>
              <FriendIconInitials>{friend.name[0]}</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>
              <FriendName>{friend.name}</FriendName>
              <FriendEnrollment>
                <strong># </strong>
                {friend.enrollment}
              </FriendEnrollment>
            </FriendsDetails>
            <ReserveButtonDiv visible={reserveButton}>
              <FaChevronLeft onClick={() => handleFriendClick(friend)} />
            </ReserveButtonDiv>
          </FriendsPanelDetails>
        ))}
      </FriendsPanel>
    </FriendsContainer>
  );
};

export default FriendList;
