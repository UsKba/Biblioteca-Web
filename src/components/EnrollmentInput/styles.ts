import styled from 'styled-components';

import colors from '~/styles/colors';

export const SearchArea = styled.div`
  display: flex;
  height: 45px;
  width: 277px;
`;

export const SearchHashTag = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Ubuntu';

  height: 45px;
  width: 35px;
  padding: 10px;
  border-radius: 6px 0 0 6px;

  background-color: ${colors.terciary};
  color: #666666;
`;

export const SearchingBar = styled.input`
  height: 45px;
  width: 220px;
  background-color: ${colors.terciary};
  border: none;
  border-radius: 0;
  padding: 5px;
  cursor: text;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 7.25px;
  min-width: 5%;
  background-color: ${colors.terciary};
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;

  > svg {
    color: ${colors.dark};
    font-size: 15px;
  }
`;
