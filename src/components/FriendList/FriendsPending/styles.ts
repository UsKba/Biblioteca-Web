import styled from 'styled-components';

import colors from '~/styles/colors';

interface FriendsPanelProps {
  visible?: boolean;
}

export const FriendsPanel = styled.div<FriendsPanelProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
  flex-direction: column;
  overflow-y: scroll;

  max-height: 400px;

  margin-top: 7px;

  border-radius: 5px;

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const FriendsPanelDetails = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 10px;
  padding: 10px;

  border-radius: 5px;

  background-color: ${colors.terciary};
`;

export const FriendIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;

  margin-left: 7px;

  border-radius: 100px;

  background-color: #638af2;
  color: ${colors.terciary};
`;

export const FriendIconInitials = styled.span`
  font-size: 15px;
`;

export const FriendsDetails = styled.span`
  display: flex;
  flex-direction: column;

  margin-left: 11px;
`;

export const FriendName = styled.span`
  margin-bottom: 3px;

  font-size: 14px;
  font-weight: 600;

  color: ${colors.dark};
`;

export const FriendEnrollment = styled.span`
  font-size: 14px;

  color: ${colors.dark};
`;

export const EnrollmentContainer = styled.div`
  display: flex;
`;

interface PendingPanelHiddenProps {
  appear?: boolean;
}

export const PendingPanelHidden = styled.div<PendingPanelHiddenProps>`
  display: none;
  flex-direction: column;
  height: auto;

  border-radius: 5px;
  margin: 10px 0 10px 0;
  opacity: 0;
  transition: 0.5s;

  ${(props) => props.appear && 'display: flex; opacity: 1;'};
`;

export const AcceptContainer = styled.div`
  display: flex;
  margin-left: 3em;
  justify-content: space-between;
  color: ${colors.red};
`;
