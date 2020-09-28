import React, { useState } from 'react';

import { Container, Slider, SliderInput } from './styles';

const ToggleSwitch: React.FC = () => {
  const [selectedToggle, setSelectedToggle] = useState(false);

  return (
    <Container>
      <SliderInput type="checkbox" onClick={() => setSelectedToggle(!selectedToggle)} active={selectedToggle} />
      <Slider />
    </Container>
  );
};

export default ToggleSwitch;
