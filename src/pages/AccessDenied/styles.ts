import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 98%;
  margin: 15px;
  align-self: center;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 80px;
    color: #333;
  }
`;

export const H1 = styled.span`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const H2 = styled.span`
  font-size: 16px;
`;

export const InitialButton = styled.button`
  margin: 15px 0px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  background-image: linear-gradient(to right, #aacc00, #2b9348);
  cursor: pointer;

  color: #fff;
  font-weight: bold;
  font-size: 16px;
  width: 275px;
  padding: 15px 0px;
  border-radius: 10px;

  border: none;
  outline: none;
  transition: 0.5s;
  &:disabled {
    background-image: none;
    background-color: #555;
    cursor: default;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 16px;
  }
`;
