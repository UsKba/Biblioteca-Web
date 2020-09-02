import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-self: center;
`;
export const ProfilePanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  background-color: ${colors.terciary};
  height: 30em;
  padding: 10px;
  border-radius: 5px;
  min-height: 120px;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const LeftSide = styled.div`
  display: flex;
  width: 23.2%;
`;

export const MiddleSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 14px 34px 0 34px;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 23.2%;
  flex-direction: column;
  background-color: green;
`;

interface LineStatus {
  backGroundColor?: string;
  alignment?: string;
}

export const SideLine = styled.div<LineStatus>`
  display: flex;
  width: 3px;
  height: 100%;
  align-self: ${(props) => props.alignment};
  background-color: ${(props) => props.backGroundColor};
`;

export const ReserveList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 14px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-family: 'Ubuntu';
  font-weight: bold;
  margin-bottom: 20px;
  color: ${colors.dark};
`;

export const ReserveContainer = styled.div`
  display: flex;
  width: 100%;
  height: 110px;
  background-color: ${colors.terciary};
  justify-content: space-around;
  border-left: solid 6px cyan;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ReserveLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReserveRightSide = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 15px;
    color: ${colors.dark};
  }
`;

export const ReserveTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.text};
  align-self: center;
  margin: 11px 0 13px 0;
`;

export const ReserveText = styled.span`
  font-size: 13px;
  margin-left: 11px;
  color: ${colors.text};
`;

export const ReserveGroupName = styled.span`
  font-size: 14px;
  font-family: 'Ubuntu';
  font-weight: bold;
  color: ${colors.text};
  margin: 10px 0 0 11px;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  height: 160px;
  width: 100%;
  background-color: ${colors.terciary};
  padding: 18px;
  margin-bottom: 40px;
`;

export const ProfileLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const ProfileName = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.dark};
  margin-bottom: 10px;
`;

export const HashTag = styled.span`
  font-size: 19px;
  color: ${colors.dark};
  font-family: 'Ubuntu';
  font-weight: 600;
  margin-right: 5px;
`;

export const Enrollment = styled.span`
  font-size: 15px;
  color: ${colors.dark};
`;

export const Email = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

export const EnrollmentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EnrollmentAndInformation = styled.div`
  display: flex;
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  background-color: ${colors.primary};
  color: ${colors.terciary};
  border-radius: 100px;
`;

export const ProfileIconInitials = styled.span`
  font-size: 35px;
`;

export const ProfileRightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const CampusContainer = styled.div`
  display: flex;
  svg {
    color: ${colors.secondary};
    font-size: 20px;
  }
`;

export const Campus = styled.span`
  font-size: 19px;
  font-weight: bold;
  color: ${colors.dark};
  margin-right: 10px;
`;

// export const Container = styled.div`
//   display: flex;
//   flex: 1;
//   width: 100%;
//   align-self: center;
//   background-color: green;
// `;
// export const ProfilePanel = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 315px;
//   background-color: ${colors.terciary};
//   height: 30em;
//   padding: 10px;
//   border-radius: 5px;
//   min-height: 120px;
//   align-items: center;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
// `;

// export const LeftSide = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const MiddleSide = styled.div`
//   display: flex;
//   flex: 1;
//   justify-content: center;
// `;

// export const RightSide = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   margin-left: auto;
// `;

// export const SearchingBar = styled.input`
//   height: 25px;
//   width: 190px;
//   background-color: ${colors.terciary};
//   border: none;
//   border-radius: 5px;
//   padding: 5px;
//   cursor: text;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
// `;

// export const IconContainer = styled.div`
//   padding: 3px 7.25px;
//   align-items: center;
//   justify-content: center;
//   min-width: 5%;
//   background-color: #333;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
// `;

// export const FriendsContainer = styled.div`
//   margin: 40px 40px 0 0;
// `;

// export const FriendsPanel = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 300px;
//   min-height: 120px;
//   background-color: ${colors.terciary};
//   margin-top: 7px;
//   padding: 10px;
//   border-radius: 5px;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

//   /* margin-right: auto; */
//   /* margin-left: 970px; */
// `;

// export const FriendsPanelDetails = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 10px;
// `;

// export const ProfileIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100px;
//   height: 100px;
//   background-color: #333;
//   color: #fff;
//   border-radius: 100px;
//   margin-top: 23px;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
// `;

// export const FriendIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 35px;
//   height: 35px;
//   background-color: #333;
//   color: ${colors.terciary};
//   border-radius: 100px;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
// `;

// export const ProfileIconInitials = styled.span`
//   font-size: 50px;
// `;

// export const FriendIconInitials = styled.span`
//   font-size: 15px;
// `;

// export const ProfileInformation = styled.div`
//   flex: 1;
//   margin-top: 30px;
//   height: 70px;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   justify-content: space-between;
// `;

// export const ProfileInformationDetails = styled.span`
//   font-weight: bold;
// `;

// export const ProfileName = styled.span`
//   font-size: 28px;
//   font-weight: bold;
// `;

// export const EmailContainer = styled.div`
//   margin-top: auto;
//   padding: 10px;
//   border-radius: 5px;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
// `;

// export const FriendsDetails = styled.div`
//   padding: 10px;
// `;

// export const SearchArea = styled.div`
//   display: flex;
//   width: 225px;
//   justify-content: space-between;
// `;

// export const AddArea = styled.div`
//   display: flex;
//   width: 225px;
//   margin-top: 6px;

//   justify-content: space-between;
// `;

// export const AddSpan = styled.span`
//   font-size: 15px;
//   font-weight: bold;
//   background-color: ${colors.terciary};
//   color: #333;
//   padding: 4px 10px;
//   border-radius: 5px;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
// `;

// export const MessageButton = styled.button`
//   position: fixed;
//   right: 15px;
//   bottom: 15px;
//   margin-top: auto;
//   background-color: #333;
//   cursor: pointer;
//   color: #fff;
//   font-weight: bold;
//   font-size: 16px;
//   width: 200px;
//   padding: 20px 0px;
//   border-radius: 10px;
//   border: none;
//   outline: none;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
// `;
