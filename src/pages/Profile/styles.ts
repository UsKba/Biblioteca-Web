import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const ProfilePanel = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 500px;
  width: 65%;
  background-color: #fff;
  max-height: 45%;
  padding: 10px;
  border-radius: 5px;
  /* min-width: 25%; */
  min-height: 120px;
  margin: 15px 0 0 15px;
  align-items: center;
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
  width: 190px;
  background-color: #fff;
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

export const FriendIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
`;

export const ProfileIconInitials = styled.span`
  font-size: 30px;
`;

export const FriendIconInitials = styled.span`
  font-size: 15px;
`;

export const ProfileInformation = styled.div`
  margin-left: 18px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileInformationDetails = styled.span`
  font-weight: bold;
`;

export const FriendsDetails = styled.div`
  padding: 10px;
`;

export const SearchArea = styled.div`
  display: flex;
  width: 225px;
  margin: 15px 15px 0 0;
  justify-content: space-between;
`;

export const AddArea = styled.div`
  display: flex;
  width: 225px;
  margin: 15px 15px 0 0;
  justify-content: space-between;
`;

export const AddSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  background-color: #fff;
  color: #333;
  padding: 4px 10px;
  border-radius: 5px;
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
