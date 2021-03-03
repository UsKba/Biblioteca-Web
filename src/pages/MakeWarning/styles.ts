import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  align-self: center;
  margin-top: 20px;
  width: 850px;
  height: 600px;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${colors.terciary};
`;
