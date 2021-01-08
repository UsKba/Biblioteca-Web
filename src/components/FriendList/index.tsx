import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
  SvgPlusContainer,
  SearchResultsText,
} from './styles';

const FriendList: React.FC = () => {
  const [friendsPanelVisible, setFriendsPanelVisible] = useState(true);
  const friendsContext = useFriends();
  const [search, setSearch] = useState('');

  const [pendingButtonClicked, setPendingButtonClicked] = useState(false);
  const [iconPendingButtonClicked, setIconPendingButtonClicked] = useState(false);

  const [searchPanelVisible, setSearchPanelVisible] = useState(false);

  function pendingButtonText() {
    if (pendingButtonClicked) {
      return 'Lista de amigos';
    }
    return 'Pedidos pendentes';
  }

  function openFriendSearchPanel() {
    if (search.length > 1) {
      return setSearchPanelVisible(true);
    }
    return setSearchPanelVisible(false);
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

      <EnrollmentInput
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          openFriendSearchPanel();
          console.log(searchPanelVisible);
        }}
        hideIcon
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
      {/* <EmptyContainer visible>
        <EmptyTitle>Ninguém foi encontrado...</EmptyTitle>
        <EmptySpan>Confira a sua pesquisa e tente novamente!</EmptySpan>
      </EmptyContainer> */}

      {/* Painel de procurar amigos para adicionar */}

      <FriendSearchPanel visible={searchPanelVisible}>
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>C</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>Cátio</FriendName>
            <EnrollmentContainer>
              <FriendEnrollment>
                <strong># </strong>
                20181104010069
              </FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
          <SvgPlusContainer>
            <FaPlus />
          </SvgPlusContainer>
        </FriendsPanelDetails>
      </FriendSearchPanel>

      {/* Painel de pedidos de amizade */}
      <FriendsPanel visible={!friendsPanelVisible}>
        <TitleSmall>Pedidos Recebidos</TitleSmall>
        <LineContainer left>
          <Line1 />
          <Line2 />
        </LineContainer>
        <EmptyContainer
          visible={friendsContext.requests.received.length === 0}
          searchVisibilityToggle={searchPanelVisible}
        >
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

        <EmptyContainer visible={friendsContext.requests.sent.length === 0} searchVisibilityToggle={searchPanelVisible}>
          <EmptyTitle>Nenhum pedido enviado...</EmptyTitle>
          <EmptySpan>Você não possui pedidos pendentes.</EmptySpan>
        </EmptyContainer>
      </FriendsPanel>

      {/* Painel de lista de amigos */}
      <FriendsPanel visible={friendsPanelVisible}>
        <EmptyContainer visible={friendsContext.friends.length === 0} searchVisibilityToggle={searchPanelVisible}>
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
