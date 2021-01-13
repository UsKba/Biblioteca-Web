import React from 'react';

import { FriendIcon, FriendIconInitials } from '~/components/FriendList/styles';
import { ReserveResponse } from '~/components/ReserveList';

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
  Accept,
  Reject,
  ButtonsContainer,
} from './styles';

interface NotificationReserveProps {
  reserve: ReserveResponse;
}

const NotificationReserve: React.FC<NotificationReserveProps> = ({ reserve }) => {
  function formatText() {
    const formatter = new Intl.DateTimeFormat('pt-br', { month: 'long' });
    const reserveDate = new Date(reserve.date);
    const monthFormatted = formatter.format(reserveDate);
    const day = reserveDate.getDate();

    const admin = reserve.users.find((element) => element.id === reserve.adminId);
    const username = admin ? admin.name : '';
    const roominitials = reserve.room.initials;
    const { initialHour } = reserve.schedule;
    const { endHour } = reserve.schedule;
    const text = `${username}, te convidou para a reserva da sala ${roominitials} para o dia ${day} de ${monthFormatted}, no horário das ${initialHour} às  ${endHour}`;

    return text;
  }
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
          <NotificationTitle>Convite de reserva de sala</NotificationTitle>
          <NotificationParaghaph>{formatText()}</NotificationParaghaph>
          <ButtonsContainer>
            <Accept>Aceitar</Accept>
            <Reject>Rejeitar</Reject>
          </ButtonsContainer>
        </NotificationText>
      </Notification>
    </NotificationContainer>
  );
};

export default NotificationReserve;
