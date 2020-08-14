import React from 'react';

import {
  LeftSide,
  MiddleSide,
  MiddleSideItems,
  TopMiddleSide,
  DownMiddleSide,
  RightSide,
  RightSideTop,
  RightSideDown,
  Container,
  IndividualButton,
  ComputerRoomButton,
  ComputerButton,
  LibrarianButton,
  RoomButton,
  RoomButtonLarge,
  Bookshelf,
  Bookshelf2,
  Bookshelf3,
} from './styles';

const LibraryView: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <IndividualButton className="pc">Estudo Individual</IndividualButton>
        <ComputerRoomButton>Sala dos Computadores</ComputerRoomButton>
      </LeftSide>

      <MiddleSide>
        <TopMiddleSide>
          <Bookshelf />
          <ComputerButton>PC 1</ComputerButton>
          <ComputerButton>PC 2</ComputerButton>
          <ComputerButton>PC 3</ComputerButton>
          <ComputerButton>PC 4</ComputerButton>
        </TopMiddleSide>

        <MiddleSideItems>
          <Bookshelf2 />
          <Bookshelf2 />
          <Bookshelf2 />
        </MiddleSideItems>

        <DownMiddleSide>
          <LibrarianButton>Falar com Bibliotecário</LibrarianButton>
        </DownMiddleSide>
      </MiddleSide>

      <RightSide>
        <RightSideTop>
          <RoomButton>F1-3</RoomButton>
          <RoomButton>F1-4</RoomButton>
          <RoomButton>F1-5</RoomButton>
          <RoomButtonLarge>F1-6</RoomButtonLarge>
        </RightSideTop>

        <RightSideDown>
          <Bookshelf3 />
          <Bookshelf3 />
          <Bookshelf3 />
        </RightSideDown>
      </RightSide>
    </Container>
  );
};

export default LibraryView;
