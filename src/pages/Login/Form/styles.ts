import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 80%;
  margin: 15px 0px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid #000;
  font-size: 25px;
  padding: 10px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  margin-left: 10px;
  color: #483d8b;
`;

export const LoginButton = styled.button`
  margin: 15px 0px;

  background-image: linear-gradient(to right, #483d8b, #7b68ee);
  cursor: pointer;

  color: #fff;
  font-weight: bold;
  font-size: 16px;
  width: 70%;
  padding: 20px 0px;
  border-radius: 10px;

  border: none;
  outline: none;
  transition: 0.5s;
  &:disabled {
    background-image: none;
    background-color: #777;
    cursor: default;
  }
`;

export const ForgotPassword = styled.a`
  color: #483d8b;
  text-decoration: none;
  font-size: 16px;

  margin-bottom: 80px;
`;

export const Warning = styled.p`
  color: #f00;
`;
