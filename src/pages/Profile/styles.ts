import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const ProfilePanel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 35%;
  background-color: ${colors.terciary};
  height: 30em;
  padding: 10px;
  border-radius: 5px;
  /* min-width: 25%; */
  min-height: 120px;
  margin: 40px 0 0 40px;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

`;

export const LeftSide = styled.div`
  display:flex;
  flex-direction: column;
`;

export const MiddleSide = styled.div`
  display: flex;
  flex: 1;

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
  background-color: ${colors.terciary};
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
  background-color: ${colors.terciary};
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

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #333;
  color: #fff;
  border-radius: 100px;
  margin-top: 23px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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

export const ProfileIconInitials = styled.span`
  font-size: 50px;
`;

export const FriendIconInitials = styled.span`
  font-size: 15px;
`;

export const ProfileInformation = styled.div`
  margin-top: 30px;
  height: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
`;

export const ProfileInformationDetails = styled.span`
  font-weight: bold;
`;

export const ProfileName = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

export const EmailContainer = styled.div`
  margin-top: 95%;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
  background-color: ${colors.terciary};
  color: #333;
  padding: 4px 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
