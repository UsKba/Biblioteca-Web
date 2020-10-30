import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.label`
  display: inline-block;
  position: relative;

  width: 40px;
  height: 20px;

  input {
    display: none;
  }
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 15px;

  background-color: #ddd;

  transition: 0.4s;
  cursor: pointer;

  &:before {
    position: absolute;
    content: '';

    height: 20px;
    width: 20px;

    background-color: #999;

    transition: 0.2s;
    border-radius: 50%;
  }
`;

interface SliderInputProps {
  active?: boolean;
}
export const SliderInput = styled.input<SliderInputProps>`
  &:checked + ${Slider} {
    background-color: ${({ active }) => (active === false ? `` : `${colors.primary}`)};

    &:before {
      transform: ${({ active }) => (active === false ? `` : `translateX(20px)`)};
      background-color: ${({ active }) => (active === false ? `` : `${colors.terciary}`)};
    }
  }
`;
