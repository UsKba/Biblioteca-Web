import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

import colors from '~/styles/colors';

import {
  FriendsPanel,
  FriendsDetails,
  FriendName,
  FriendEnrollment,
  FriendsPanelDetails,
  FriendIcon,
  FriendIconInitials,
  PendingPanelHidden,
  AcceptContainer,
  EnrollmentContainer,
} from './styles';

const FriendsPending: React.FC = () => {
  const [pendingListOpen, setPendingListOpen] = useState(false);

  function togglePendingList() {
    setPendingListOpen(!pendingListOpen);
  }
  return <div />;
};

export default FriendsPending;
/*  <PendingPanelHidden appear={pendingListOpen}>
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
                <FaPlus color={colors.primary} />
                <FaTimes />
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
                <FaPlus color={colors.primary} />
                <FaTimes />
              </AcceptContainer>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
      </FriendsPanel>
    // </PendingPanelHidden> */
