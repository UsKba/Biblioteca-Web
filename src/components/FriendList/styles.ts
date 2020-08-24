import styled from 'styled-components';

import colors from '~/styles/colors';

export const SearchingBar = styled.input`
  height: 25px;
  width: 220px;
  background-color: ${colors.terciary};
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: text;
`;

export const IconContainer = styled.div`
  padding: 3px 7.25px;
  align-items: center;
  justify-content: center;
  min-width: 5%;
  background-color: #333;
  border: none;
  border-radius: 6px;

  cursor: pointer;

  > svg {
    color: #fff;

    font-size: 10px;
  }
`;

export const FriendsContainer = styled.div`
  background-color: rgba(3, 3, 3, 0.6);
  padding: 10px;
  border-radius: 5px;
`;

export const FriendsPanel = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  min-height: 120px;
  background-color: ${colors.terciary};
  margin-top: 7px;
  padding: 10px;
  border-radius: 5px;

  /* margin-right: auto; */
  /* margin-left: 970px; */
`;

export const FriendsPanelDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const FriendIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #333;
  color: ${colors.terciary};
  border-radius: 100px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const FriendIconInitials = styled.span`
  font-size: 15px;
`;

export const FriendsDetails = styled.div`
  padding: 10px;
`;

export const SearchArea = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`;

export const AddArea = styled.div`
  display: flex;
  width: 225px;
  margin-bottom: 5px;
  justify-content: space-between;
`;

export const AddSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  background-color: ${colors.terciary};
  color: #333;
  padding: 4px 10px;
  border-radius: 5px;
`;
