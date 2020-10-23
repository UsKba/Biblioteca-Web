import styled from 'styled-components';

import colors from '~/styles/colors';

export const NotificationContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.terciary};
  padding: 18px 18px 14px 15px;
  margin-bottom: 40px;
`;

export const NotificationHead = styled.div`
  display: flex;
  height: 2em;
  margin-left: 5px;
  align-items: center;
  color: ${colors.dark};
`;

export const NotificationMail = styled.span`
  color: #666666;
  font-size: 14px;
  margin-left: 5px;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const NotificationTitle = styled.span`
  margin-top: 22px;
  font-family: 'Ubuntu';
  font-weight: bold;
  font-size: 19px;
  color: ${colors.dark};
  @media only screen and (max-width: 640px) {
    font-size: 15px;
  }
`;

export const NotificationParaghaph = styled.span`
  font-size: 14px;
  font-family: 'Roboto';
  text-align: justify;
  margin: 10px 20px 0 0;
  color: ${colors.dark};
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
    font-size: 20px;
    align-self: flex-end;
    &:hover {
      color: ${colors.red};
      cursor: pointer;
    }
  }
`;

export const Notification = styled.div`
  display: column;
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
