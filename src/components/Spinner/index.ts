import styled, { keyframes } from 'styled-components';

import { FiLoader } from 'react-icons/fi';

import colors from '~/styles/colors';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(FiLoader)`
  animation: ${rotate360} 1.5s linear infinite;
  font-size: 30px;
  color: ${colors.secondary};
`;

export default Spinner;
