import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 14px;
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

export const TitlePanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
  svg {
    color: ${colors.secondary};
    font-size: 15px;
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

interface ReserveContainerProps {
  small?: boolean;
  usersAmount: number;
}

export const ReservesList = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 124px);

  ::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 0 0 10px 5px;
  }

  /* height: calc(100vh - 50px); */
`;

export const ReserveContainer = styled.div<ReserveContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;

  height: 120px;

  width: 98%;

  padding: 10px;
  border-radius: 5px;
  border-left: solid 6px ${colors.primary};
  margin-bottom: 10px;

  transition: 0.25s;
  background-color: ${colors.terciary};
  ${(props) => props.small && `height: ${170 + props.usersAmount * 46}px;`}//32px
`;

interface ReserveTopSideProps {
  rotateIcon?: boolean;
}

export const ReserveTopSide = styled.div<ReserveTopSideProps>`
  display: flex;
  flex-direction: column;

  padding-bottom: 15px;

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
  font-size: 13px;
  text-align: justify;
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

  width: 100%;
`;

export const GroupMember = styled.div`
  display: flex;
  align-items: center;

  padding: 7px;
  border-radius: 7px;
  margin-bottom: 7px;

  background-color: ${colors.background};

  svg {
    color: ${colors.red};
    cursor: pointer;
    &:hover {
      color: ${colors.lightred};
    }
  }
`;

export const GroupMemberIcon = styled.div`
  text-align: center;

  height: 25px;
  width: 25px;

  padding: 5px 0;
  margin-right: 10px;

  border-radius: 100px;

  font-size: 14px;
  font-family: 'Roboto';

  color: ${colors.terciary};
  background-color: ${colors.secondary};
`;

export const GroupMemberName = styled.span`
  margin-right: auto;

  font-size: 14px;
  font-family: 'Roboto';

  color: ${colors.text};
`;

export const ArrowTextContainer = styled.div`
  display: flex;

  svg {
    margin-left: 10px;

    font-size: 20px;

    color: ${colors.dark};
  }
`;

export const DeleteReserveButton = styled.button`
  text-align: center;

  margin-left: auto;
  padding: 8px 6px;

  border-radius: 5px;
  border: none;

  font-size: 12.5px;

  color: ${colors.terciary};
  background-color: ${colors.secondary};

  &:hover {
    background-color: ${colors.primary};
  }

  &:active {
    background-color: rgba(99, 138, 242, 0.6);
  }
`;

export const StyledLink = styled(Link)`
  max-width: 15px;
  height: 15px;
`;

export const EmptyContainer = styled.div`
  display: flex;
  display: none;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-width: 450px;
  height: 100px;

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
