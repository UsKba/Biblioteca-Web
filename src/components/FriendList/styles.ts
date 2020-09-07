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
    cursor: pointer;
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
  margin-left: 7px;
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
  color: ${colors.dark};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 3px;
`;

export const FriendEnrollment = styled.span`
  font-size: 14px;
  color: ${colors.dark};
`;

export const EnrollmentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FriendHashTag = styled.span`
  font-family: 'Ubuntu';
  font-weight: bold;
  font-size: 15px;
  opacity: 80%;
  color: ${colors.dark};
  margin-right: 5px;
`;

export const LineContainer = styled.div`
  display: flex;
  margin: 15px 0 30px auto;
`;

export const Line1 = styled.div`
  background-color: #3d6dcc;
  width: 40px;
  height: 3px;
  @media screen and (max-width: 600px) {
    width: 50px;
  }
`;

export const Line2 = styled.div`
  background-color: #638af2;
  width: 40px;
  height: 3px;
  @media screen and (max-width: 600px) {
    width: 50px;
  }
`;
