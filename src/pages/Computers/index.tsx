import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import RoomComputers from './components/RoomComputers';
import OutsideComputers from './components/OutsideComputers';

const Computers: React.FC = () => {
const [showRoomComputers, setShowRoomComputers] = useState(true)
function handleClick(state: boolean){
  setShowRoomComputers(state)
}


if (showRoomComputers){
  return (
      <RoomComputers handleClick={handleClick}></RoomComputers>
  );
}
  return  (
      <OutsideComputers handleClick={handleClick}></OutsideComputers>
  );
}

export default Computers;
