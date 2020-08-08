import React, { useState } from 'react';

import OutsideComputers from './components/OutsideComputers';
import RoomComputers from './components/RoomComputers';

const Computers: React.FC = () => {
  const [showRoomComputers, setShowRoomComputers] = useState(true);
  function handleClick(state: boolean) {
    setShowRoomComputers(state);
  }

  if (showRoomComputers) {
    return <RoomComputers handleClick={handleClick} />;
  }
  return <OutsideComputers handleClick={handleClick} />;
};

export default Computers;
