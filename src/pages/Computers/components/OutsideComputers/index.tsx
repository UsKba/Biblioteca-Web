import React from 'react';
// import { Container } from './styles';
interface Props{
  handleClick:(state: boolean)=>void
}
const OutsideComputers: React.FC<Props> = ({handleClick}) => {
  return (
    <button onClick={()=>handleClick(true)} >trocar sala</button>
    );
}

export default OutsideComputers;
