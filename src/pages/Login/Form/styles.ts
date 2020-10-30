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
  display: flex;
  flex-direction: column;

  width: 80%;

  margin: 15px 0px;
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(222, 222, 222, 0.7);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  padding: 10px;

  font-size: 25px;

  @media screen and (max-width: 400px) {
    padding: 7.5px;

    font-size: 18px;
  }
`;

export const InputLabel = styled.label`
  margin-left: 10px;

  font-size: 16px;
  font-weight: bold;

  color: #333;
`;

export const LoginButton = styled.button`
  margin: 15px 0px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  width: 80%;

  padding: 20px 0px;

  border-radius: 10px;
  border: none;
  outline: none;

  font-weight: bold;
  font-size: 16px;

  color: #fff;
  background-image: linear-gradient(to right, #aacc00, #2b9348);

  cursor: pointer;
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

export const ForgotPassword = styled.a`
  margin-top: 5px;

  text-decoration: underline;
  font-size: 16px;

  color: #333;
`;

export const Warning = styled.p`
  color: #f00;
`;
