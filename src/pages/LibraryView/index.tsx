import React from 'react';
import { LeftSide,
         MiddleSide,
         TopMiddleSide,
         DownMiddleSide,
         RightSide,
         Container,
         IndividualButton,
         ComputerRoomButton,
         ComputerButton,
         LibrarianButton,
         RoomButton,
         RoomButtonLarge,
         Bookshelf
          } from './styles';

const LibraryView: React.FC = () => {
  return(
      <Container>

        <LeftSide>
          <IndividualButton className='pc'>Estudo Individual</IndividualButton>
          <ComputerRoomButton>Sala dos Computadores</ComputerRoomButton>
        </LeftSide>

        <MiddleSide>

          <TopMiddleSide>
            <Bookshelf></Bookshelf>
            <ComputerButton>PC 1</ComputerButton>
            <ComputerButton>PC 2</ComputerButton>
            <ComputerButton>PC 3</ComputerButton>
            <ComputerButton>PC 4</ComputerButton>
          </TopMiddleSide>

          <DownMiddleSide>
            <LibrarianButton>Falar com Bibliotecário</LibrarianButton>
          </DownMiddleSide>

        </MiddleSide>

        <RightSide>
          <RoomButton>F1-3</RoomButton>
          <RoomButton>F1-4</RoomButton>
          <RoomButton>F1-5</RoomButton>
          <RoomButtonLarge>F1-6</RoomButtonLarge>
        </RightSide>

      </Container>
  )
}

export default LibraryView;
