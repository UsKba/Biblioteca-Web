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
    margin-bottom: 8em;
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
  }
`;

interface ReserveContainerProps {
  small?: boolean;
}

export const ReserveContainer = styled.div<ReserveContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: hidden; */

  width: 100%;
  height: 120px;

  margin-bottom: 10px;
  border-radius: 5px;
  border-left: solid 6px ${colors.primary};
  padding: 10px;

  transition: 0.25s;
  background-color: ${colors.terciary};
  ${(props) => props.small && 'height: 250px;'}
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

export const ArrowTextContainer = styled.div`
  display: flex;
  svg {
    font-size: 20px;
    color: ${colors.dark};
    margin-left: 10px;
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
