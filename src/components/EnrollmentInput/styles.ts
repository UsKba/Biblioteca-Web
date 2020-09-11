import styled from 'styled-components';

import colors from '~/styles/colors';

export interface SearchAreaProps {
  backgroundColor?: string;
}

export const SearchArea = styled.div<SearchAreaProps>`
  display: flex;
  height: 45px;
  width: 277px;

  border-radius: 6px;

  background-color: ${(props) => props.backgroundColor || colors.terciary};
`;

export const SearchHashTag = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Ubuntu';

  height: 45px;
  width: 35px;
  padding: 10px;

  color: #666666;
`;

export const SearchingBar = styled.input`
  height: 45px;
  width: 220px;
  border: none;
  background-color: transparent;
  border-radius: 0;
  padding: 5px;
  cursor: text;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 7.25px;
  min-width: 5%;
  border: none;
  cursor: pointer;

  > svg {
    color: ${colors.dark};
    font-size: 15px;
  }
`;
