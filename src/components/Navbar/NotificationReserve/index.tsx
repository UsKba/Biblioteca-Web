/* eslint-disable no-alert */
import React, { useCallback } from 'react';

import { FriendIconInitials } from '~/components/FriendList/styles';

import { useReserve } from '~/contexts/ReserveContext';
import { Reserve } from '~/types';

import {
  NotificationContainer,
  NotificationHead,
  NotificationMail,
  NotificationTitle,
  NotificationParaghaph,
  // NotificationDate,
  NotificationText,
  NotificationTop,
  NotificationLeft,
  NotificationRight,
  Accept,
  Reject,
  ButtonsContainer,
  UserIcon,
} from './styles';

interface NotificationReserveProps {
  reserve: Reserve;
}

const NotificationReserve: React.FC<NotificationReserveProps> = ({ reserve }) => {
  const reserveContext = useReserve();
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
    const text = `${username}, te convidou para a reserva da sala ${roominitials} para o dia ${day} de ${monthFormatted}, no horário das ${initialHour} às ${endHour}`;

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

  const reserveTitle = useCallback(() => {
    const { name } = reserve;
    const text = ` ${name}`;

    return text;
  }, [reserve]);

  const refuseReserve = useCallback(() => {
    const response = window.confirm('Tem certeza que deseja recusar o pedido desta reserva?');

    if (!response) {
      return;
    }

    if (reserve.users.length <= 3) {
      const response2 = window.confirm(
        'Atenção! Essa reserva possui apenas 3 membros, se você recusar ela será deletada, tem certeza que deseja sair?'
      );

      if (!response2) {
        return;
      }
    }

    reserveContext.handleRefuseReserve(reserve.id);
  }, [reserve.id, reserve.users.length, reserveContext]);

  return (
    <NotificationContainer>
      <NotificationTop>
        <NotificationLeft>
          <UserIcon bgColor={adminColor()}>
            <FriendIconInitials>{headerInitials()}</FriendIconInitials>
          </UserIcon>
          <NotificationHead>
            {headerName()}
            <NotificationMail>{headerEmail()}</NotificationMail>
          </NotificationHead>
        </NotificationLeft>
        <NotificationRight>{/* <NotificationDate>15:31 - 22/08</NotificationDate> */}</NotificationRight>
      </NotificationTop>

      <NotificationText>
        <NotificationTitle>
          Convite de reserva de sala:
          {reserveTitle()}
        </NotificationTitle>
        <NotificationParaghaph>{formatText()}</NotificationParaghaph>
      </NotificationText>
      <ButtonsContainer>
        <Accept onClick={() => reserveContext.handleAcceptReserve(reserve.id)}>Aceitar</Accept>
        <Reject onClick={() => refuseReserve()}>Rejeitar</Reject>
      </ButtonsContainer>
    </NotificationContainer>
  );
};

export default NotificationReserve;