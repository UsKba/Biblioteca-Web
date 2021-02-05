import styled from 'styled-components';

import colors from '~/styles/colors';

export const FriendsContainer = styled.div`
  flex: 1;
  flex-direction: column;

  padding: 14px 0 0 10px;

  @media only screen and (max-width: 640px) {
    position: initial;
    margin-bottom: 50vh;
  }
`;

interface TitlePanelProps {
  rotateIcon?: boolean;
}

export const TitlePanel = styled.div<TitlePanelProps>`
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
    transition: 0.25s;
    ${(props) => props.rotateIcon && `transform: rotate(180deg);`}
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

export const TitleSmall = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Ubuntu';

  color: ${colors.dark};

  margin-bottom: 15px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

// interface FriendPanelProps {
//   goDown: boolean;
// }r
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

interface FriendSearchPanelProps {
  visible?: boolean;
}

export const FriendSearchPanel = styled.div<FriendSearchPanelProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
  flex-direction: column;
`;

interface FriendsPanelProps {
  visible?: boolean;
}

export const FriendsPanel = styled.div<FriendsPanelProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
  flex-direction: column;
  overflow-y: auto;

  max-height: 390px;

  margin-top: 7px;

  border-radius: 5px;
  /* ::-webkit-scrollbar {
    width: 0;
  } */
  ::-webkit-scrollbar-track {
    background: #c9c9c9;
  }
`;

export const FriendsPanelDetails = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  width: 280px;

  margin-bottom: 10px;
  padding: 7px;

  border-radius: 5px;

  background-color: ${colors.terciary};
`;

interface FriendIconProps {
  bgColor: string;
}

export const FriendIcon = styled.div<FriendIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;

  margin-left: 7px;

  border-radius: 100px;

  background-color: ${(props) => props.bgColor};
  color: ${colors.terciary};
`;

export const FriendIconInitials = styled.span`
  font-size: 15px;
`;

export const FriendsDetails = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  height: 35px;

  margin-left: 11px;
`;

export const FriendRequestDetails = styled.div`
  display: flex;
  flex: 1;

  height: 35px;

  margin-left: 11px;
`;

export const FriendName = styled.span`
  font-size: 14px;
  font-weight: 600;

  color: ${colors.dark};
`;

export const FriendEnrollment = styled.span`
  font-size: 14px;

  color: ${colors.dark};
`;

export const FriendNameAndEnrollmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface LineContainerProps {
  searchVisibilityToggle?: boolean;

  left?: boolean;
}

export const LineContainer = styled.div<LineContainerProps>`
  display: ${({ searchVisibilityToggle }) => (searchVisibilityToggle === true ? 'none' : 'flex')};

  margin: 15px 20px 15px 0;

  justify-content: ${({ left }) => (left === false ? 'flex-end;' : 'flex-start;')};
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

interface PlusContainerProps {
  visible?: boolean;
}

export const PlusContainer = styled.div<PlusContainerProps>`
  display: ${({ visible }) => (visible === true ? 'flex' : 'none')};
  margin-right: 20px;
  svg {
    font-size: 20px;
  }
`;

interface TimesContainerProps {
  visible?: boolean;
}

export const TimesContainer = styled.div<TimesContainerProps>`
  display: ${({ visible }) => (visible === true ? 'none' : 'flex')};
  margin-right: 20px;
  svg {
    color: ${colors.red};
    font-size: 20px;
    &:hover {
      color: ${colors.lightred};
    }
  }
`;

interface PendingButtonProps {
  searchVisibilityToggle?: boolean;
}

export const PendingButton = styled.button<PendingButtonProps>`
  display: ${({ searchVisibilityToggle }) => (searchVisibilityToggle === true ? 'none' : 'flex')};

  height: 45px;
  width: 280px;

  padding: 15px;
  border: none;

  background-color: ${colors.terciary};
  color: #666666;

  cursor: pointer;
`;

interface PendingIconContainerProps {
  appearIcon?: boolean;
  left?: boolean;
}

export const PendingIconContainer = styled.div<PendingIconContainerProps>`
  ${(props) => !props.appearIcon && `display: none;`}
  ${({ left }) => (left === true ? 'margin-left: auto;' : 'margin-right: 10px;')}
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
  justify-content: space-between;
  align-items: center;

  width: 5em;

  margin-left: auto;
  svg {
    cursor: pointer;
  }
`;

interface PendingFriendsAlertProps {
  visible?: boolean;
}

export const PendingFriendsAlert = styled.div<PendingFriendsAlertProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;

  height: 20px;
  width: 20px;

  font-size: 12px;

  border-radius: 100px;

  margin-right: 10px;

  background-color: ${colors.red};
  color: ${colors.terciary};
`;

interface EmptyContainerProps {
  visible: boolean;
}

export const EmptyContainer = styled.div<EmptyContainerProps>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 10px;
  width: 280px;

  margin-bottom: 10px;

  background-color: ${colors.terciary};
`;

export const EmptyTitle = styled.span`
  margin-bottom: 10px;

  font-family: 'Ubuntu';
  font-size: 16px;

  color: ${colors.dark};
`;

export const EmptySpan = styled.span`
  font-family: 'Roboto';
  font-size: 14px;

  color: ${colors.text};
`;

export const SvgContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;

  svg {
    color: ${colors.primary};
    cursor: pointer;
  }
`;

interface SearchResultsTextProps {
  visible: boolean;
}

export const SearchResultsText = styled.span<SearchResultsTextProps>`
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};

  color: ${colors.dark};
  font-size: 14px;
  font-weight: bold;

  margin-bottom: 10px;
`;

interface ReserveButtonDivProps {
  visible: boolean;
}

export const ReserveButtonDiv = styled.div<ReserveButtonDivProps>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  margin-left: auto;

  svg {
    color: ${colors.primary};
    cursor: pointer;
  }
`;
