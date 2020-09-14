import React from 'react';

import { Button } from './styles';

const MainButton: React.FC = ({ children }) => {
  return <Button>{children}</Button>;
};

export default MainButton;
