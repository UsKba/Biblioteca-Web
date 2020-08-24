import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 90%;
  margin: auto;
  border-radius: 10px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 400px) {
    height: 100%;
    border-radius: 0px;
  }
`;

export const Logo = styled.img`
  height: 125px;
  width: 125px;
  margin: 80px auto 40px;
  @media screen and (max-width: 400px) {
    height: 90px;
    width: 90px;
    margin: 60px auto 30px;
  }
`;

export const BackgroundContainer = styled.div``;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

export const LoginButton = styled.button`
  margin: 15px 0px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  background-image: linear-gradient(to right, #aacc00, #2b9348);
  cursor: pointer;

  color: #fff;
  font-weight: bold;
  font-size: 16px;
  width: 200px;
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
  a {
    color: #fff;
  }
`;
