import styled from 'styled-components';

export const Container = styled.div``;

export const ProfilePanel = styled.div`
  display: flex;
  flex-direction: row;
  width: 45%;
  background-color: #fff;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  min-width: 25%;
  min-height: 180px;
  margin-left: 40px;
`;

export const SearchingBar = styled.div`
  height: 25px;
  width: 300px;
  background-color: #fff;
  border-radius: 6px;
  margin-left: 970px;
  margin-top: -178px;
  margin-bottom: -25px;
  cursor: text;
`;

export const AddFriends = styled.div`
  height: 25px;
  width: 25px;
  margin-left: 1280px;
  background-color: #333;
  border-radius: 6px;
`;

export const FriendsPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: #c4c4c4;
  margin-top: 7px;
  padding: 10px;
  border-radius: 5px;
  margin-right: 5px;
  margin-left: 970px;
`;

export const FriendsPanelDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
`;

export const ProfileIconInitials = styled.span`
  font-size: 35px;
`;

export const ProfileInformation = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const ProfileInformationDetails = styled.span`
  margin-bottom: 12px;
  font-weight: bold;
`;

export const FriendsInformation = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FriendsDetails = styled.div`
  margin-bottom: 15px;
`;
