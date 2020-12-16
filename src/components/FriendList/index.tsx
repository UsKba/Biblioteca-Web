import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { MdBlock } from 'react-icons/md';
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
  // FriendsPanelHidden,
  PlusContainer,
  PendingButton,
  PendingPanelHidden,
  AcceptContainer,
} from './styles';

const FriendList: React.FC = () => {
  // const friendsPanelRef = useRef<HTMLDivElement>(null);
  // const [friendListOpen, setFriendListOpen] = useState(false);
  // const [lineOpen, setLineOpen] = useState(false);
  const [pendingListOpen, setPendingListOpen] = useState(false);
  const [friendsPanelVisible, setFriendsPanelVisible] = useState(true);
  const friendsContext = useFriends();
  const [search, setSearch] = useState('');

  // function toggleFriendList() {
  //   setFriendListOpen(!friendListOpen);
  // }
  // function toggleLine() {
  //   setLineOpen(!lineOpen);
  // }
  function togglePendingList() {
    setPendingListOpen(!pendingListOpen);
  }

  // useEffect(() => {
  //   // console.log(friendsPanelRef.current?.clientHeight);
  //   // if (friendsPanelRef.current?.clientHeight < 400) {
  //   // }
  // }, [friendsPanelRef]);

  return (
    <FriendsContainer>
      <TitlePanel>
        <Title>Amigos</Title>
        <PlusContainer>
          {/* rotateIcon={friendListOpen} */}
          <FaPlus
            onClick={() => {
              friendsContext.sendInvite(search);
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
                <FriendIconInitials>{invite.sender.name[0]}</FriendIconInitials>
              </FriendIcon>
              <FriendsDetails>
                <FriendName>{invite.sender.name}</FriendName>
                <EnrollmentContainer>
                  <FriendEnrollment>{invite.sender.enrollment}</FriendEnrollment>
                  <AcceptContainer>
                    <FaPlus color={colors.primary} onClick={() => friendsContext.acceptInvite(invite.id)} />
                    <FaTimes />
                  </AcceptContainer>
                </EnrollmentContainer>
              </FriendsDetails>
            </FriendsPanelDetails>
          ))}
        </FriendsPanel>
        <FriendsPanel>
          <FriendsPanelDetails>
            <FriendIcon>
              <FriendIconInitials>A</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>
              <FriendName>Arisson Santas</FriendName>
              <EnrollmentContainer>
                <FriendEnrollment>20181104010062</FriendEnrollment>
                <AcceptContainer>
                  <FiCheck color={colors.primary} />
                  <FaTimes color={colors.red} />
                  <MdBlock color={colors.dark} />
                </AcceptContainer>
              </EnrollmentContainer>
            </FriendsDetails>
          </FriendsPanelDetails>
          <FriendsPanelDetails>
            <FriendIcon>
              <FriendIconInitials>H</FriendIconInitials>
            </FriendIcon>
            <FriendsDetails>
              <FriendName>Hari Holiveiro</FriendName>
              <EnrollmentContainer>
                <FriendEnrollment>20181104010004</FriendEnrollment>
                <AcceptContainer>
                  <FiCheck color={colors.primary} />
                  <FaTimes color={colors.red} />
                  <MdBlock color={colors.dark} />
                </AcceptContainer>
              </EnrollmentContainer>
            </FriendsDetails>
          </FriendsPanelDetails>
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
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>A</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>AAAA</FriendName>
            <EnrollmentContainer>
              <FriendEnrollment>
                <strong># </strong>
                AAAAAAAAAAAA
              </FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>A</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>AAAA</FriendName>
            <EnrollmentContainer>
              <FriendEnrollment>
                <strong># </strong>
                AAAAAAAAAAAA
              </FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>A</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>AAAA</FriendName>
            <EnrollmentContainer>
              <FriendEnrollment>
                <strong># </strong>
                AAAAAAAAAAAA
              </FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>A</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>AAAA</FriendName>
            <EnrollmentContainer>
              <FriendEnrollment>
                <strong># </strong>
                AAAAAAAAAAAA
              </FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>A</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>AAAA</FriendName>
            <EnrollmentContainer>
              <FriendEnrollment>
                <strong># </strong>
                AAAAAAAAAAAA
              </FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>A</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>AAAA</FriendName>
            <EnrollmentContainer>
              <FriendEnrollment>
                <strong># </strong>
                AAAAAAAAAAAA
              </FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>A</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>AAAA</FriendName>
            <EnrollmentContainer>
              <FriendEnrollment>
                <strong># </strong>
                AAAAAAAAAAAA
              </FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
      </FriendsPanel>
    </FriendsContainer>
  );
};

export default FriendList;
