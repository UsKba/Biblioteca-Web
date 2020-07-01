import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #fff;
  width: 90%;
  margin: 20px 0 20px 0;
  align-self: center;
  border-radius:0.7em;
  justify-content: space-between;
`;

interface ButtonProps {
  active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  height: fit-content;
  font-size: 0.9em;
  padding: 1em 1.5em;
  background-color: ${({active})=> active===true?'#7B68EE':'#483D8B'};
  color: #fff;
  border: none;
  margin-bottom: 0.3em;
  border-radius: 4px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #ececec;
  border-radius: 8px 0 0 8px;
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
`;

