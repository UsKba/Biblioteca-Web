import React, { forwardRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import { SearchingBar, SearchArea, SearchHashTag, IconContainer, SearchAreaProps } from './styles';

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
      <SearchingBar ref={ref} type="text" placeholder="Encontre amigos adicionados" {...rest} />
      {!hideIcon && (
        <IconContainer>
          <FaSearch />
        </IconContainer>
      )}
    </SearchArea>
  );
};

export default forwardRef(EnrollmentInput);
