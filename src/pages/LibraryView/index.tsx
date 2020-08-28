import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ComputerModal from '~/pages/Computers/components/ComputerModal';

import RoomModal from './LibraryModal';
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
  StyledLink,
} from './styles';

interface Props {
  handleClick: (state: boolean) => void;
}

const LibraryView: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [roomModalVisible, setRoomModalVisible] = useState(false);
  const [selectedComputer, setSelectedComputer] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  function openModal(computer: string) {
    setSelectedComputer(computer);
    setModalVisible(true);
  }
  function openRoomModal(room: string) {
    setSelectedRoom(room);
    setRoomModalVisible(true);
  }
  return (
    <>
      <ComputerModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedComputer={selectedComputer}
      />
      <RoomModal modalVisible={roomModalVisible} setModalVisible={setRoomModalVisible} selectedRoom={selectedRoom} />
      <Container>
        <LeftSide>
          <IndividualButton className="pc">Estudo Individual</IndividualButton>
          <StyledLink to="/computers">
            <ComputerRoomButton>Sala dos Computadores</ComputerRoomButton>
          </StyledLink>
        </LeftSide>

        <MiddleSide>
          <TopMiddleSide>
            <Bookshelf />

            <ComputerButton onClick={() => openModal('01')}>PC 1</ComputerButton>

            <ComputerButton onClick={() => openModal('02')}>PC 2</ComputerButton>

            <ComputerButton onClick={() => openModal('03')}>PC 3</ComputerButton>

            <ComputerButton onClick={() => openModal('04')}>PC 4</ComputerButton>
          </TopMiddleSide>

          <MiddleSideItems>
            <Bookshelf2 />
            <Bookshelf2 />
            <Bookshelf2 />
          </MiddleSideItems>

          <DownMiddleSide>
            <Link to="/report">
              <LibrarianButton>Falar com Bibliotecário</LibrarianButton>
            </Link>
          </DownMiddleSide>
        </MiddleSide>

        <RightSide>
          <RightSideTop>
            <RoomButton onClick={() => openRoomModal('Sala F1-3')}>F1-3</RoomButton>
            <RoomButton onClick={() => openRoomModal('Sala F1-4')}>F1-4</RoomButton>
            <RoomButton onClick={() => openRoomModal('Sala F1-5')}>F1-5</RoomButton>
            <RoomButtonLarge onClick={() => openRoomModal('Sala F1-6')}>F1-6</RoomButtonLarge>
          </RightSideTop>

          <RightSideDown>
            <Bookshelf3 />
            <Bookshelf3 />
            <Bookshelf3 />
          </RightSideDown>
        </RightSide>
      </Container>
    </>
  );
};

export default LibraryView;
