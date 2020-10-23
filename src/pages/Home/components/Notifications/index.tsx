import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { FriendIcon, FriendIconInitials } from '~/components/FriendList/styles';

import {
  NotificationContainer,
  NotificationHead,
  NotificationMail,
  NotificationTitle,
  NotificationParaghaph,
  NotificationDate,
  NotificationText,
  Notification,
  NotificationTop,
  NotificationLeft,
  NotificationRight,
} from './styles';

const Notifications: React.FC = () => {
  return (
    <NotificationContainer>
      <Notification>
        <NotificationTop>
          <NotificationLeft>
            <FriendIcon>
              <FriendIconInitials>T</FriendIconInitials>
            </FriendIcon>
            <NotificationHead>
              Tallys Aureliano Júnior
              <NotificationMail>{'<tallys@aureliano.com.br>'}</NotificationMail>
            </NotificationHead>
          </NotificationLeft>
          <NotificationRight>
            <NotificationDate>15:31 - 22/08</NotificationDate>
          </NotificationRight>
        </NotificationTop>

        <NotificationText>
          <NotificationTitle>Trabalho</NotificationTitle>
          <NotificationParaghaph>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using.
          </NotificationParaghaph>
          <FiTrash2 />
        </NotificationText>
      </Notification>
    </NotificationContainer>
  );
};

export default Notifications;
