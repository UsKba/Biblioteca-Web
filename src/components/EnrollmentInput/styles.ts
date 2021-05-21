import styled from 'styled-components';

import colors from '~/styles/colors';

export interface SearchAreaProps {
  backgroundColor?: string;
  visible?: boolean;
}

export const SearchArea = styled.div<SearchAreaProps>`
  ${(props) => !props.visible && `display: none;`};

  height: 45px;
  width: 277px;

  border-radius: 3px;

  background-color: ${(props) => props.backgroundColor || colors.terciary};
`;

export const SearchHashTag = styled.span`
  height: 45px;
  width: 35px;

  padding: 10px;

  font-size: 20px;
  font-weight: bold;
  font-family: 'Ubuntu';

  color: #666666;
`;

export const SearchingBar = styled.input`
  height: 45px;
  width: 220px;

  padding: 5px;

  border: none;
  border-radius: 0;

  background-color: transparent;

  cursor: text;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  min-width: 5%;

  padding: 3px 7.25px;

  border: none;
  cursor: pointer;

  > svg {
    font-size: 15px;
    color: ${colors.dark};
  }
`;
