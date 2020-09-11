import styled from 'styled-components';

import colors from '~/styles/colors';

export const Button = styled.button`
  background-color: transparent;
  border-radius: 100px;
  border: 3px solid ${colors.primary};
  align-self: center;
  color: ${colors.primary};
  font-size: 20px;
  padding: 9px 57px;
  margin-right: 20px;
  height: 50px;
  transition: 0.3s;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.terciary};
  }

  &:active {
    background-color: rgba(99, 138, 242, 0.6);
    border: 3px solid rgba(99, 138, 242, 0.9);
  }

  @media screen and (max-width: 600px) {
    margin-right: 0;
  }
`;
