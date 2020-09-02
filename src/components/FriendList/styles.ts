import styled from 'styled-components';

import colors from '~/styles/colors';

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 14px 10px 0 10px;
`;

export const TitlePanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
  svg {
    color: ${colors.secondary};
    font-size: 15px;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  font-family: 'Ubuntu';
`;

export const SearchArea = styled.div`
  display: flex;
  height: 45px;
  width: 277px;
`;

export const SearchHashTag = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Ubuntu';

  height: 45px;
  width: 35px;
  padding: 10px;
  border-radius: 6px 0 0 6px;

  background-color: ${colors.terciary};
  color: #666666;
`;

export const SearchingBar = styled.input`
  height: 45px;
  width: 220px;
  background-color: ${colors.terciary};
  border: none;
  border-radius: 0;
  padding: 5px;
  cursor: text;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 7.25px;
  min-width: 5%;
  background-color: ${colors.terciary};
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;

  > svg {
    color: ${colors.dark};
    font-size: 15px;
  }
`;

export const FriendsPanel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 7px;
  border-radius: 5px;
`;

export const FriendsPanelDetails = styled.div`
  display: flex;
  background-color: ${colors.terciary};
  padding: 10px;
  border-radius: 5px;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const FriendIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #638af2;
  color: ${colors.terciary};
  border-radius: 100px;
`;

export const FriendIconInitials = styled.span`
  font-size: 15px;
`;

export const FriendsDetails = styled.span`
  display: flex;
  flex-direction: column;

  margin-left: 5px;
`;

export const FriendName = styled.span`
  color: ${colors.dark};
  margin-bottom: 3px;
`;

export const FriendEnrollment = styled.span`
  font-size: 14px;
  color: ${colors.dark};
`;

export const EnrollmentContainer = styled.div`
  display: flex;
`;

export const FriendHashTag = styled.span`
  font-family: 'Ubuntu';
  font-weight: bold;
  font-size: 15px;
  opacity: 80%;
  color: ${colors.dark};

  margin-right: 5px;
`;
