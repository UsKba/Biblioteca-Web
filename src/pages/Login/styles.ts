import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 90%;
  width: 100%;
  max-width: 450px;

  border-radius: 10px;
  margin: auto;

  background-color: #fff;

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
  width: 200px;

  margin: 15px 0px;

  padding: 15px 0px;

  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  outline: none;

  font-size: 16px;
  font-weight: bold;

  background-image: linear-gradient(to right, #aacc00, #2b9348);
  color: #fff;

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
  a {
    color: #fff;
  }
`;
