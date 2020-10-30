import styled from 'styled-components';

import colors from '~/styles/colors';

export const Button = styled.button`
  align-self: center;

  height: 50px;

  margin-right: 20px;
  padding: 9px 57px;

  border: 3px solid ${colors.primary};
  border-radius: 100px;

  background-color: transparent;
  color: ${colors.primary};

  font-size: 20px;

  transition: 0.3s;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.terciary};
  }

  &:active {
    border: 3px solid rgba(99, 138, 242, 0.9);
    background-color: rgba(99, 138, 242, 0.6);
  }

  @media screen and (max-width: 600px) {
    margin-right: 0;
  }
`;
