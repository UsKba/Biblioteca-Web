import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  input {
    display: none;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  transition: 0.4s;
  border-radius: 15px;

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

export const SliderInput = styled.input`
  &:checked + ${Slider} {
    background-color: ${colors.primary};
    &:before {
      transform: translateX(20px);
      background-color: white;
    }
  }
`;
