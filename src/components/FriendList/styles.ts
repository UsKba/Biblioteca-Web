import styled from 'styled-components';

import colors from '~/styles/colors';

export const FriendsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: fixed;

  padding: 14px 10px 0 10px;
`;

export const TitlePanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 19px;

  svg {
    font-size: 15px;

    color: ${colors.secondary};

    cursor: pointer;
    &:hover {
      color: ${colors.primary};
    }
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  font-family: 'Ubuntu';

  color: ${colors.dark};

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

// interface FriendPanelProps {
//   goDown: boolean;
// }
interface FriendsPanelHiddenProps {
  small?: boolean;
}

export const FriendsPanelHidden = styled.div<FriendsPanelHiddenProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  height: 0px;

  border-radius: 5px;
  margin-bottom: 10px;

  opacity: 0;
  transition: 0.5s;
  ${(props) => props.small && ' height:155px; visibility: visible; opacity: 1;'}
`;

export const FriendsPanel = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  max-height: 450px;

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
  align-items: center;
`;

interface LineContainerProps {
  left?: boolean;
}

export const LineContainer = styled.div<LineContainerProps>`
  display: flex;

  margin: 15px 0 15px auto;
  ${(props) => props.left && 'margin: 15px auto 15px 0;'}
`;

export const Line1 = styled.div`
  width: 40px;
  height: 3px;

  background-color: #3d6dcc;

  @media screen and (max-width: 600px) {
    width: 50px;
  }
`;

export const Line2 = styled.div`
  width: 40px;
  height: 3px;

  background-color: #638af2;

  @media screen and (max-width: 600px) {
    width: 50px;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  display: none;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-width: 450px;
  height: 100px;

  padding: 10px;

  background-color: ${colors.terciary};
`;

export const EmptyTitle = styled.span`
  font-family: 'Ubuntu';
  font-size: 16px;

  margin-bottom: 10px;

  color: ${colors.dark};
`;

export const EmptySpan = styled.span`
  font-family: 'Roboto';
  font-size: 14px;

  color: ${colors.text};
`;

interface PlusContainerProps {
  rotateIcon?: boolean;
}

export const PlusContainer = styled.div<PlusContainerProps>`
  transition: 0.28s;

  ${(props) =>
    props.rotateIcon && `transform: rotate(45deg); svg{ color: ${colors.red}; &:hover { color: ${colors.lightred}};}`}
`;
