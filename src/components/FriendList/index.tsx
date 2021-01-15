import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaPlus, FaArrowLeft, FaArrowRight, FaChevronLeft } from 'react-icons/fa';
import { FiCheck, FiX } from 'react-icons/fi';
import { MdBlock } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

import api from '~/services/api';

import colors from '~/styles/colors';

import { useAuth } from '~/contexts/AuthContext';
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
  TitleSmall,
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
  PendingIconContainer,
  FriendSearchPanel,
  SvgContainer,
  SearchResultsText,
  ReserveButtonDiv,
} from './styles';

interface Friend {
  id: number;
  name: string;
  enrollment: string;
  email: string;
}

interface User {
  id: number;
  name: string;
  enrollment: string;
  email: string;
}

interface FriendListProps {
  onFriendClick?: (friend: Friend) => void;
}

const FriendList: React.FC<FriendListProps> = ({ onFriendClick }) => {
  const [friendsPanelVisible, setFriendsPanelVisible] = useState(true);
  const [search, setSearch] = useState('');
  const [reserveButton, setReserveButton] = useState(false);
  const [searchUsers, setSearchUsers] = useState([] as User[]);
  const location = useLocation();

  const [pendingButtonClicked, setPendingButtonClicked] = useState(false);
  const [iconPendingButtonClicked, setIconPendingButtonClicked] = useState(false);

  const [searchPanelVisible, setSearchPanelVisible] = useState(false);

  const friendsContext = useFriends();
  const authContext = useAuth();

  const titlePages = {
    '/reservar': true,
  };

  const pendingButtonText = useCallback(() => {
    if (pendingButtonClicked) {
      return 'Lista de amigos';
    }
    return 'Pedidos pendentes';
  }, [pendingButtonClicked]);

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
      openFriendSearchPanel(event.target.value);
      const response = await api.get<User[]>('/search', {
        params: {
          enrollment: event.target.value,
        },
      });
      setSearchUsers(response.data);
    },
    [openFriendSearchPanel]
  );

  useEffect(() => {
    const reserveButtonStatus = titlePages[location.pathname];
    setReserveButton(reserveButtonStatus);
  }, [location.pathname, titlePages]);

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

      <EnrollmentInput value={search} onChange={handleInputChange} hideIcon />

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

        <PendingFriendsAlert visible={false}>10</PendingFriendsAlert>
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
      {/* <EmptyContainer visible>
        <EmptyTitle>Ninguém foi encontrado...</EmptyTitle>
        <EmptySpan>Confira a sua pesquisa e tente novamente!</EmptySpan>
      </EmptyContainer> */}

      {/* Painel de procurar amigos para adicionar */}

      <FriendSearchPanel visible={searchPanelVisible}>
        {searchUsers
          .filter((user) => user.id !== authContext.user.id)
          .map((user) => (
            <>
              <FriendsPanelDetails key={user.id}>
                <FriendIcon>
                  <FriendIconInitials>{user.name[0]}</FriendIconInitials>
                </FriendIcon>
                <FriendsDetails>
                  <FriendName>{user.name}</FriendName>
                  <EnrollmentContainer>
                    <FriendEnrollment>{user.enrollment}</FriendEnrollment>
                  </EnrollmentContainer>
                </FriendsDetails>
                <SvgContainer>
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
        <LineContainer left>
          <Line1 />
          <Line2 />
        </LineContainer>
        <EmptyContainer visible={friendsContext.requests.received.length === 0}>
          <EmptyTitle>Nenhum pedido recebido...</EmptyTitle>
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
        <TitleSmall>Pedidos Enviados</TitleSmall>
        <LineContainer left>
          <Line1 />
          <Line2 />
        </LineContainer>
        {friendsContext.requests.sent.map((request) => (
          <>
            <FriendsPanelDetails key={request.id}>
              <FriendIcon>
                <FriendIconInitials>{request.receiver.name[0]}</FriendIconInitials>
              </FriendIcon>
              <FriendsDetails>
                <FriendName>{request.receiver.name}</FriendName>
                <EnrollmentContainer>
                  <FriendEnrollment>{request.receiver.enrollment}</FriendEnrollment>
                </EnrollmentContainer>
              </FriendsDetails>
            </FriendsPanelDetails>
          </>
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
