import styled from 'styled-components';

export const SearchingBar = styled.input`
  height: 25px;
  width: 190px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: text;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const FriendsContainer = styled.div`
  margin: 40px 40px 0 0;
`;

export const FriendsPanel = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  min-height: 120px;
  background-color: #fff;
  margin-top: 7px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

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
  color: #fff;
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
  width: 225px;
  justify-content: space-between;
`;

export const AddArea = styled.div`
  display: flex;
  width: 225px;
  margin-top: 6px;

  justify-content: space-between;
`;

export const AddSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  background-color: #fff;
  color: #333;
  padding: 4px 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
