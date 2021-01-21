import React, { useCallback } from 'react';

import { postRequest } from '~/utils/api';

import { FriendIcon, FriendIconInitials } from '~/components/FriendList/styles';

import { Reserve } from '~/types';

import {
  NotificationContainer,
  NotificationHead,
  NotificationMail,
  NotificationTitle,
  NotificationParaghaph,
  // NotificationDate,
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
  reserve: Reserve;
}

const NotificationReserve: React.FC<NotificationReserveProps> = ({ reserve }) => {
  const formatText = useCallback(() => {
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
  }, [reserve.adminId, reserve.date, reserve.room.initials, reserve.schedule, reserve.users]);

  const headerName = useCallback(() => {
    const admin = reserve.users.find((element) => element.id === reserve.adminId);
    const username = admin ? admin.name : '';
    const text = `${username}`;

    return text;
  }, [reserve.adminId, reserve.users]);

  const headerEmail = useCallback(() => {
    const admin = reserve.users.find((element) => element.id === reserve.adminId);
    const email = admin ? admin.email : '';
    const text = `<${email}>`;

    return text;
  }, [reserve.adminId, reserve.users]);

  const headerInitials = useCallback(() => {
    const admin = reserve.users.find((element) => element.id === reserve.adminId);
    const initials = admin ? admin.name : '';
    const text = `${initials.charAt(0)}`;

    return text;
  }, [reserve.adminId, reserve.users]);

  const adminColor = useCallback(() => {
    const admin = reserve.users.find((element) => element.id === reserve.adminId);
    return admin?.color || '';
  }, [reserve.adminId, reserve.users]);

  const handleAcceptReserve = useCallback(async () => {
    const { error } = await postRequest(`/reserves/${reserve.id}/accept`);
    if (error) {
      alert(error.error);
    }
  }, [reserve.id]);

  const handleRefuseReserve = useCallback(async () => {
    const { error } = await postRequest(`/reserves/${reserve.id}/refuse`);
    if (error) {
      alert(error.error);
    }
  }, [reserve.id]);

  return (
    <NotificationContainer>
      <Notification>
        <NotificationTop>
          <NotificationLeft>
            <FriendIcon bgColor={adminColor()}>
              <FriendIconInitials>{headerInitials()}</FriendIconInitials>
            </FriendIcon>
            <NotificationHead>
              {headerName()}
              <NotificationMail>{headerEmail()}</NotificationMail>
            </NotificationHead>
          </NotificationLeft>
          <NotificationRight>{/* <NotificationDate>15:31 - 22/08</NotificationDate> */}</NotificationRight>
        </NotificationTop>

        <NotificationText>
          <NotificationTitle>Convite de reserva de sala</NotificationTitle>
          <NotificationParaghaph>{formatText()}</NotificationParaghaph>
          <ButtonsContainer>
            <Accept onClick={handleAcceptReserve}>Aceitar</Accept>
            <Reject onClick={handleRefuseReserve}>Rejeitar</Reject>
            {/* <Accept>Aceitar</Accept>
            <Reject>Rejeitar</Reject> */}
          </ButtonsContainer>
        </NotificationText>
      </Notification>
    </NotificationContainer>
  );
};

export default NotificationReserve;
