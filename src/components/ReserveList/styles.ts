import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

import { SearchArea } from '~/components/EnrollmentInput/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 14px 10px 0 10px;
  @media only screen and (min-height: 1700px) {
    margin-right: auto;
  }
`;

export const Title = styled.span`
  color: ${colors.dark};

  font-size: 22px;
  font-family: 'Ubuntu';
  font-weight: bold;
  @media only screen and (max-width: 640px) {
    font-size: 17px;
  }
`;

interface TitlePanelProps {
  visible?: boolean;
}

export const TitlePanel = styled.div<TitlePanelProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
  svg {
    display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
    color: ${colors.secondary};
    font-size: 15px;
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

export const ReservesList = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 175px);

  ::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 0 0 10px 5px;
  }

  /* height: calc(100vh - 50px); */
`;

interface ReserveContainerProps {
  small?: boolean;
  usersAmount: number;
  reserveTitle: boolean;
  visible: boolean;
  changeColor: boolean;
  big?: boolean;
}

export const ReserveContainer = styled.div<ReserveContainerProps>`
  display: ${({ visible }) => (visible === true ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;

  height: 120px;
  height: ${(props) => props.small && `${219 + props.usersAmount * 46}px`};
  height: ${(props) => props.small && props.big && `${303 + props.usersAmount * 46}px`};

  width: 100%;

  padding: 10px;
  border-radius: 5px;
  border-left: ${({ changeColor }) => (changeColor ? `solid 6px rgb(43, 147, 72)` : `solid 6px ${colors.primary}`)};
  margin-bottom: 10px;

  transition: 0.25s;
  background-color: ${colors.terciary};
`;

interface ReserveTopSideProps {
  rotateIcon?: boolean;
}

export const ReserveTopSide = styled.div<ReserveTopSideProps>`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;

  cursor: pointer;

  svg {
    transition: 0.25s;
    ${(props) => props.rotateIcon && `transform: rotate(180deg);`}
  }
`;

export const ReserveBottomSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

export const ReserveTitle = styled.span`
  align-self: center;

  font-size: 15px;
  font-weight: 600;

  margin-bottom: 15px;

  color: ${colors.text};
`;

export const ReserveText = styled.span`
  font-size: 14px;
  color: ${colors.text};

  margin-bottom: 8px;
`;

export const ReserveGroupName = styled.span`
  align-self: flex-start;

  color: ${colors.text};

  font-size: 14px;
  font-family: 'Ubuntu';
  font-weight: bold;
`;

export const GroupMemberList = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  width: 100%;
`;

export const GroupMember = styled.div`
  display: flex;
  align-items: center;

  max-height: 39px;

  padding: 7px 10px 7px 7px;
  border-radius: 7px;
  margin-bottom: 7px;

  background-color: ${colors.background};
`;

export const GroupMemberIconArea = styled.div`
  display: flex;

  margin-left: auto;

  svg {
    color: ${colors.red};
    cursor: pointer;
    &:hover {
      color: ${colors.lightred};
    }
  }
`;

interface GroupMemberIcon {
  bgColor: string;
}

export const GroupMemberIcon = styled.div<GroupMemberIcon>`
  text-align: center;

  height: 25px;
  width: 25px;

  padding: 5px 0;
  margin-right: 10px;

  border-radius: 100px;

  font-size: 14px;
  font-family: 'Roboto';

  color: ${colors.terciary};
  background-color: ${(props) => props.bgColor};
`;

export const GroupMemberName = styled.span`
  margin-right: 4px;

  font-size: 14px;
  font-family: 'Roboto';

  color: ${colors.text};
`;

export const ArrowTextContainer = styled.div`
  display: flex;
  svg {
    margin-left: 10px;

    font-size: 18px;

    color: ${colors.dark};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface DeleteReserveButtonProps {
  visible: boolean;
}

export const DeleteReserveButton = styled.button<DeleteReserveButtonProps>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  text-align: center;

  margin-right: auto;

  border-radius: 5px;
  border: none;

  font-size: 12.5px;

  color: ${colors.text};
  background-color: transparent;

  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const QuitReserveButton = styled.button`
  display: flex;
  text-align: center;

  margin-left: auto;
  padding: 6px 21px;

  border-radius: 5px;
  border: none;

  font-size: 12.5px;

  color: ${colors.terciary};
  background-color: ${colors.red};

  &:hover {
    background-color: ${colors.lightred};
  }
`;

export const StyledLink = styled(Link)`
  max-width: 15px;
  height: 15px;
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

interface AwardSvgProps {
  visible: boolean;
}

export const AwardSvg = styled.img<AwardSvgProps>`
  display: ${(props) => !props.visible && 'none'};
`;

interface BadgeVisibleProps {
  visible?: boolean;
}

export const BadgePending = styled.div<BadgeVisibleProps>`
  width: 55px;
  height: 15px;
  border-radius: 7px;
  border: 2px solid #faa61a;
  color: #faa61a;
  font-size: 8px;
  text-align: center;
  display: ${(props) => !props.visible && 'none'};
`;

export const BadgeReject = styled.div`
  width: 55px;
  height: 15px;
  border-radius: 7px;
  border: 2px solid ${colors.red};
  color: ${colors.red};
  font-size: 8px;
  text-align: center;
`;

export const BageCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EnrollmentContainer = styled.div`
  display: flex;
  justify-items: space-between;
  text-align: center;
`;
export const EnrollmentInput = styled.input`
  flex: 1;

  height: 39px;
  width: auto;

  border: none;
  border-radius: 0 5px 5px 0;
  padding: 5px 10px;
  margin: 15px 0 7px 0;

  font-size: 12px;

  background-color: ${colors.terciary};
`;

export const Hashtag = styled.div`
  font-size: 18px;
  height: 39px;
  margin-top: 15px;
  font-weight: bold;
  background-color: ${colors.terciary};
  text-align: center;
  padding: 8px 0 0 5px;
  border-radius: 5px 0 0 5px;
`;

export const EnrollmentButton = styled.button`
  height: 38px;
  width: 38px;

  border: none;
  border-radius: 5px;
  margin-left: 10px;

  color: ${colors.terciary};
  background-color: ${colors.primary};
`;

export const MemberEnrollmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodayContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface TodayProps {
  visible?: boolean;
}

export const Today = styled.div<TodayProps>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  color: rgb(43, 147, 72);

  font-size: 14px;
  font-family: 'Ubuntu';
  font-weight: bold;
`;

interface AddComponentContainerProps {
  big?: boolean;
  rotateIcon?: boolean;
}

export const AddComponentContainer = styled.div<AddComponentContainerProps>`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: ${({ big }) => (big === false ? '39px' : '135px')};
  background-color: ${colors.background};
  border-radius: 5px;
  color: ${colors.text};
  padding: 10px 10px 0 10px;
  font-size: 14px;
  transition: 0.25s;
  overflow: hidden;

  svg {
    color: ${colors.primary};
    cursor: pointer;
    transition: 0.25s;
    ${(props) => props.rotateIcon && `transform: rotate(45deg);`}
    &:hover {
      color: ${colors.lightprimary};
    }
  }
`;

export const AddComponentTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddComponentButtons = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
`;

export const CancellButton = styled.button`
  width: 80px;
  height: 30px;

  color: ${colors.dark};

  background-color: ${colors.background};
  border: none;
  font-size: 15px;

  :hover {
    text-decoration: underline;
  }
`;

export const AddButton = styled.button`
  width: 80px;
  height: 30px;

  color: white;
  background-color: ${colors.primary};
  border: none;
  font-size: 15px;
  border-radius: 5px;
`;
