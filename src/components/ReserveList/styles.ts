import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 14px;

  @media only screen and (max-width: 640px) {
    padding: 0;
    margin-bottom: 31em;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-family: 'Ubuntu';
  font-weight: bold;
  color: ${colors.dark};

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
  studentsAmount: number;
}

export const ReserveContainer = styled.div<ReserveContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  width: 100%;
  height: 120px;

  margin-bottom: 10px;
  border-radius: 5px;
  border-left: solid 6px ${colors.primary};
  padding: 10px;

  transition: 0.25s;
  background-color: ${colors.terciary};
  ${(props) => props.small && `height: ${170 + props.studentsAmount * 32}px;`}
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
  font-size: 15px;
  font-weight: 600;
  color: ${colors.text};
  align-self: center;

  margin-bottom: 15px;
`;

export const ReserveText = styled.span`
  font-size: 13px;
  text-align: justify;
  color: ${colors.text};

  margin-bottom: 8px;
`;

export const ReserveGroupName = styled.span`
  font-size: 14px;
  font-family: 'Ubuntu';
  font-weight: bold;
  color: ${colors.text};
  align-self: flex-start;
`;

export const GroupMemberList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const GroupMember = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 7px;

  svg {
    color: ${colors.red};
    cursor: pointer;
    &:hover {
      color: ${colors.lightred};
    }
  }
`;

export const GroupMemberIcon = styled.div`
  font-size: 14px;
  font-family: 'Roboto';

  text-align: center;
  padding: 5px 0;

  width: 25px;
  height: 25px;

  border-radius: 100px;
  margin-right: 10px;

  color: ${colors.terciary};
  background-color: ${colors.secondary};
`;

export const GroupMemberName = styled.span`
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: auto;

  color: ${colors.text};
`;

export const ArrowTextContainer = styled.div`
  display: flex;

  svg {
    font-size: 20px;

    color: ${colors.dark};
    margin-left: 10px;
  }
`;

export const DeleteReserveButton = styled.button`
  font-size: 12.5px;

  text-align: center;

  margin: 0 0 10px auto;

  padding: 8px 6px;
  border-radius: 5px;
  border: none;

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

  max-width: 450px;
  height: 100px;

  padding: 10px;
  align-items: center;
  text-align: center;

  background-color: ${colors.terciary};
`;

export const EmptyTitle = styled.span`
  font-family: 'Ubuntu';
  font-size: 16px;

  margin-bottom: 10px;

  color: ${colors.dark};
`;

export const EmptySpan = styled.span`
  font-family: 'Roboto';
  font-size: 14px;

  color: ${colors.text};
`;
