import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 98%;

  margin: 15px;

  border-radius: 10px;

  background-color: #fff;

  svg {
    font-size: 80px;
    color: #333;
  }
`;

export const H1 = styled.span`
  margin-bottom: 10px;

  font-size: 24px;
`;

export const H2 = styled.span`
  font-size: 16px;
`;

export const InitialButton = styled.button`
  width: 275px;

  margin: 15px 0px;
  padding: 15px 0px;

  border-radius: 10px;
  border: none;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  background-image: linear-gradient(to right, #aacc00, #2b9348);
  color: #fff;

  font-weight: bold;
  font-size: 16px;

  cursor: pointer;

  outline: none;
  transition: 0.5s;

  &:disabled {
    background-image: none;
    background-color: #555;
    cursor: default;
  }
  @media screen and (max-width: 400px) {
    padding: 16px;
    font-size: 14px;
  }
`;
