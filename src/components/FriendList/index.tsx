import React from 'react';
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
} from './styles';

const FriendList: React.FC = () => {
  return (
    <FriendsContainer>
      <TitlePanel>
        <Title>Amigos</Title>
        <FaPlus />
      </TitlePanel>

      <EnrollmentInput />

      <LineContainer>
        <Line2 />
        <Line1 />
      </LineContainer>

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
              <FriendEnrollment>20181104010017</FriendEnrollment>
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
              <FriendEnrollment>20181104010017</FriendEnrollment>
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
              <FriendEnrollment>20181104010017</FriendEnrollment>
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
              <FriendEnrollment>20181104010017</FriendEnrollment>
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
              <FriendEnrollment>20181104010017</FriendEnrollment>
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
              <FriendEnrollment>20181104010017</FriendEnrollment>
            </EnrollmentContainer>
          </FriendsDetails>
        </FriendsPanelDetails>
      </FriendsPanel>
    </FriendsContainer>
  );
};

export default FriendList;
