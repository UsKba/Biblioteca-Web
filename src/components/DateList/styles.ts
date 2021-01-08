import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 0 50px;
  @media only screen and (max-width: 640px) {
    padding: 0;
  }
`;

export const Chevrons = styled.div`
  svg {
    font-size: 20px;
    color: ${colors.dark};
  }
`;


