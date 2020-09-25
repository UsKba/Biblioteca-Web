import React from 'react';

import { Container, Slider, SliderInput } from './styles';

const ToggleSwitch: React.FC = () => {
  return (
    <Container>
      <SliderInput type="checkbox" />
      <Slider />
    </Container>
  );
};

export default ToggleSwitch;
