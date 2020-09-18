import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import EnrollmentInput from '../EnrollmentInput';
import {
  FriendsContainer,
  FriendsPanel,
  FriendsDetails,
  FriendName,
  FriendEnrollment,
  FriendHashTag,
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
} from './styles';

const FriendList: React.FC = () => {
  const [friendListOpen, setFriendListOpen] = useState(false);
  const [lineOpen, setLineOpen] = useState(false);

  function toggleFriendList() {
    setFriendListOpen(!friendListOpen);
  }
  function toggleLine() {
    setLineOpen(!lineOpen);
  }

  return (
    <FriendsContainer>
      <TitlePanel>
        <Title>Amigos</Title>
        <PlusContainer rotateIcon={friendListOpen}>
          <FaPlus
            onClick={() => {
              toggleFriendList();
              toggleLine();
            }}
          />
        </PlusContainer>
      </TitlePanel>

      <EnrollmentInput />

      <LineContainer>
        <Line2 />
        <Line1 />
      </LineContainer>

      <FriendsPanelHidden small={friendListOpen}>
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>J</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>Joaldo Martin</FriendName>
            <EnrollmentContainer>
              <FriendHashTag>#</FriendHashTag>
              <FriendEnrollment>20181104010028</FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>O</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>Otário Oliveira</FriendName>
            <EnrollmentContainer>
              <FriendHashTag>#</FriendHashTag>
              <FriendEnrollment>20181104010031</FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
        <LineContainer left>
          <Line2 />
          <Line1 />
        </LineContainer>
      </FriendsPanelHidden>

      <EmptyContainer>
        <EmptyTitle>Ninguém aqui...</EmptyTitle>
        <EmptySpan>Você não possui amigos, clique em + para adicionar alguém.</EmptySpan>
      </EmptyContainer>

      <FriendsPanel>
        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>J</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>José Dudu</FriendName>
            <EnrollmentContainer>
              <FriendHashTag>#</FriendHashTag>
              <FriendEnrollment>20181104010017</FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>R</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>Rebecca Lewis</FriendName>
            <EnrollmentContainer>
              <FriendHashTag>#</FriendHashTag>
              <FriendEnrollment>20181104010016</FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>E</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>Elise Butler</FriendName>
            <EnrollmentContainer>
              <FriendHashTag>#</FriendHashTag>
              <FriendEnrollment>20181104010013</FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>S</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>Sara West</FriendName>
            <EnrollmentContainer>
              <FriendHashTag>#</FriendHashTag>
              <FriendEnrollment>20181104010010</FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>A</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>Aaliyah Mendoza</FriendName>
            <EnrollmentContainer>
              <FriendHashTag>#</FriendHashTag>
              <FriendEnrollment>20181104010019</FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>J</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>Joshua Robertson</FriendName>
            <EnrollmentContainer>
              <FriendHashTag>#</FriendHashTag>
              <FriendEnrollment>20181104010030</FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>

        <FriendsPanelDetails>
          <FriendIcon>
            <FriendIconInitials>R</FriendIconInitials>
          </FriendIcon>
          <FriendsDetails>
            <FriendName>Rose Fisher</FriendName>
            <EnrollmentContainer>
              <FriendHashTag>#</FriendHashTag>
              <FriendEnrollment>20181104010063</FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
      </FriendsPanel>
    </FriendsContainer>
  );
};

export default FriendList;
