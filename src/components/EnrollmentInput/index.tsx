import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { SearchingBar, SearchArea, SearchHashTag, IconContainer } from './styles';

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const isKeyValid = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/.test(e.key);
  if (!isKeyValid) {
    e.preventDefault();
  }
};

type Props = React.InputHTMLAttributes<HTMLInputElement>;
const EnrollmentInput: React.FC<Props> = (props) => {
  return (
    <SearchArea>
      <SearchHashTag>#</SearchHashTag>
      <SearchingBar type="text" onKeyDown={handleKeyDown} placeholder="Pesquise por amigos " {...props} />
      <IconContainer>
        <FaSearch />
      </IconContainer>
    </SearchArea>
  );
};

export default EnrollmentInput;
