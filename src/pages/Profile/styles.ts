import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const ProfilePanel = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 500px;
  width: 60%;
  background-color: #fff;
  max-height: 45%;
  padding: 10px;
  border-radius: 5px;
  /* min-width: 25%; */
  min-height: 150px;
  margin: 15px 0 0 15px;
`;

export const LeftSide = styled.div`
  display:flex;
  flex-direction: column;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: auto;
`

export const SearchingBar = styled.input`
  height: 25px;
  width: 195px;
  background-color: #fff;
  border: none;
  border-radius: 6px;
  margin:15px 5px 0 0;
  cursor: text;
`;

export const AddFriends = styled.button`
  width: 25px;
  min-width: 5%;
  background-color: #333;
  border: none;
  border-radius: 6px;
  margin-top: 15px;
`;

export const FriendsPanel = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  min-height: 120px;
  background-color: #fff;
  margin: 7px 15px 0 0;
  padding: 10px;
  border-radius: 5px;
  /* margin-right: auto; */
  /* margin-left: 970px; */
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
  width: 70px;
  height: 70px;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
`;




export const ProfileIconInitials = styled.span`
  font-size: 30px;
`;

export const ProfileInformation = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const ProfileInformationDetails = styled.span`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const FriendsInformation = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FriendsDetails = styled.div`
  margin-bottom: 15px;
`;

export const SearchArea = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const MessageButton = styled.button`
  position: fixed;
  right: 15px;
  bottom: 15px;
  margin-top: auto;
  background-color: #333;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  width: 200px;
  padding: 20px 0px;
  border-radius: 10px;
  border: none;
  outline: none;
`;
