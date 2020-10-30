import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-self: center;

  width: 98%;
  margin: 15px;

  background-color: #fff;
  border-radius: 13px;
`;

export const IndividualButton = styled.button`
  font-weight: 400;

  width: 9em;
  height: 30%;

  background-color: ${colors.primary};
  color: #fff;
  border: none;
  border-radius: 10px 0 0 0;
  &:hover {
    background-color: #7e9ced;
  }
`;

// #ff9d00

export const ComputerRoomButton = styled.button`
  width: 9em;
  height: 100%;

  font-weight: 400;
  border: none;
  border-radius: 0 0 0 10px;

  background-color: ${colors.secondary};
  color: #fff;
  &:hover {
    background-color: ${colors.primary};
  }
`;

// #0d9e00

export const ComputerButton = styled.button`
  width: 5em;
  height: 3.5em;

  font-weight: 400;
  border: none;
  border-radius: 0 0 10px 10px;
  margin: 0 1em 0 0;

  background-color: ${colors.secondary};
  color: #fff;
  &:hover {
    background-color: ${colors.primary};
  }
`;

// #00c99e

export const LibrarianButton = styled.button`
  width: 20em;
  height: 12em;
  margin-left: 10em;

  border: none;
  border-radius: 10px 10px 0 0;

  background-color: ${colors.secondary};
  color: #fff;

  font-weight: 400;
  &:hover {
    background-color: ${colors.primary};
  }
`;

// #003d9e

export const RoomButton = styled.button`
  width: 25%;
  height: 9em;
  border: none;

  border-right: solid #fff 3px;
  border-radius: 0 0 10px 10px;

  background-color: ${colors.primary};
  color: #fff;

  font-weight: 400;
  &:hover {
    background-color: #7e9ced;
  }
`;

// #d64c4c

export const RoomButtonLarge = styled.button`
  width: 25%;
  height: 16em;

  border: none;
  border-radius: 0 10px 0 10px;

  background-color: ${colors.primary};
  color: #fff;

  font-weight: 400;
  &:hover {
    background-color: #7e9ced;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopMiddleSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const MiddleSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MiddleSideItems = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DownMiddleSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const RightSideTop = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightSideDown = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bookshelf = styled.div`
  display: row;

  width: 10%;
  height: 6em;

  margin: 0 10% 0 5%;
  border-radius: 0 0 5px 5px;

  background-color: #5555;
`;

export const Bookshelf2 = styled.div`
  height: 12em;
  width: 100%;
  max-width: 40px;

  border-radius: 5px;
  margin: 0 1.5em 3em 6em;

  background-color: #5555;
`;

export const Bookshelf3 = styled.div`
  width: 22em;
  height: 40px;

  margin: 0 0 10% 8%;
  border-radius: 5px;

  background-color: #5555;
`;

export const StyledLink = styled(Link)`
  height: 70%;
`;
