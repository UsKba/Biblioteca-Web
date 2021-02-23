import React, { forwardRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import { SearchingBar, SearchArea, SearchHashTag, IconContainer } from './styles';

// const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//   const isKeyValid = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/.test(e.key);
//   if (!isKeyValid) {
//     e.preventDefault();
//   }
// };

// onKeyDown={handleKeyDown}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
interface OwmProps {
  hideIcon?: boolean;
}
type Props = OwmProps & InputProps & SearchAreaProps;
const EnrollmentInput: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { hideIcon, backgroundColor, visible, ...rest },
  ref
) => {
  return (
    <SearchArea backgroundColor={backgroundColor} visible={visible}>
      <SearchHashTag>#</SearchHashTag>
      <SearchingBar ref={ref} type="text" placeholder="Pesquise por amigos " {...rest} />
      {!hideIcon && (
        <IconContainer>
          <FaSearch />
        </IconContainer>
      )}
    </SearchArea>
  );
};

export default forwardRef(EnrollmentInput);
