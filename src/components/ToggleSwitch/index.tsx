import React, { useState, useCallback } from 'react';

import { Container, Slider, SliderInput } from './styles';

const ToggleSwitch: React.FC = () => {
  const [selectedToggle, setSelectedToggle] = useState(false);

  const handleButtonClick = useCallback(() => {
    setSelectedToggle(!selectedToggle);
  }, [selectedToggle]);

  return (
    <Container>
      <SliderInput type="checkbox" onClick={handleButtonClick} active={selectedToggle} />
      <Slider />
    </Container>
  );
};

export default ToggleSwitch;
