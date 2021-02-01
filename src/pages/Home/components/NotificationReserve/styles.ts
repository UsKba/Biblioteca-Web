import styled from 'styled-components';

import colors from '~/styles/colors';

import { FriendIcon } from '~/components/FriendList/styles';

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px 10px;

  background-color: ${colors.terciary};
  border-bottom: solid 1px #ccc;
`;

export const NotificationHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  height: 2em;

  margin-left: 5px;

  color: ${colors.dark};
`;

export const NotificationMail = styled.span`
  margin-left: 5px;

  color: #666666;

  font-size: 14px;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const NotificationTitle = styled.span`
  margin-top: 22px;

  color: ${colors.dark};

  font-family: 'Ubuntu';
  font-weight: bold;
  font-size: 18px;
  @media only screen and (max-width: 640px) {
    font-size: 15px;
  }
`;

export const NotificationParaghaph = styled.span`
  text-align: justify;

  margin: 10px 20px 0 0;

  color: ${colors.dark};

  font-size: 14px;
  font-family: 'Roboto';
`;

export const NotificationDate = styled.span`
  font-size: 12px;
  font-family: 'Roboto';

  color: #666666;
`;

export const NotificationText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  svg {
    color: ${colors.dark};

    align-self: flex-end;

    font-size: 20px;
    &:hover {
      cursor: pointer;
      color: ${colors.red};
    }
  }
`;

export const NotificationTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NotificationLeft = styled.div`
  display: flex;
`;

export const NotificationRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Accept = styled.button`
  display: flex;
  align-items: center;
  align-self: center;

  height: 30px;

  margin-left: auto;
  padding: 9px 20px;
  border: 2px solid ${colors.primary};
  border-radius: 100px;

  color: ${colors.primary};
  background-color: transparent;

  font-size: 14px;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.terciary};
  }

  &:active {
    border: 2px solid rgba(99, 138, 242, 0.9);
    background-color: rgba(99, 138, 242, 0.6);
  }
`;
export const Reject = styled.button`
  display: flex;
  align-items: center;
  align-self: center;

  height: 30px;

  margin-left: 10px;
  padding: 9px 20px;
  border: 2px solid ${colors.red};
  border-radius: 100px;

  color: ${colors.red};
  background-color: transparent;

  font-size: 14px;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.red};
    color: ${colors.terciary};
  }

  &:active {
    border: 2px solid rgba(239, 71, 111, 0.9);
    background-color: rgba(239, 71, 111, 0.6);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;

  margin-top: 16px;
`;

export const UserIcon = styled(FriendIcon)`
  margin-left: 0;
`;
