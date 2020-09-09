import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #fff;
  width: 98%;
  margin: 15px;
  align-self: center;
  border-radius: 10px;
  justify-content: space-between;
`;

interface ButtonProps {
  active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  height: fit-content;
  font-size: 0.9em;
  padding: 1em 1.5em;
  background-color: ${({ active }) => (active === true ? '#2B9348' : '#333')};
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
