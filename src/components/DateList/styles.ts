import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  width: 527px;
  height: 192px;

  padding: 0 50px;
`;

export const Chevrons = styled.div`
  svg {
    font-size: 20px;
    color: ${colors.dark};
  }
`;
