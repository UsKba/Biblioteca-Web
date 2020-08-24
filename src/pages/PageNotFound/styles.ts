import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 98%;
  margin: 15px;
  align-self: center;
  background-color: #fff;
  border-radius: 10px;
`;

export const Text = styled.div`
  display: column;
  align-items: center;
  margin: 3em 0 0 3em;
  height: 70%;
  width: 50%;
`;

export const T1 = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 44px;
  color: #80b918;
  width: 100%;
  height: 11%;
  margin-top: 10px;
  text-shadow: 0px 0px 2px #322c42;
  font-weight: bold;
`;

export const T2 = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #322c42;
  width: 100%;
  height: 22%;
  margin-top: 1em;
  text-align: justify;
  text-justify: inter-word;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const InitialButton = styled.button`
  margin: 15px 0px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  background-image: linear-gradient(to right, #aacc00, #2b9348);
  cursor: pointer;

  color: #fff;
  font-weight: bold;
  font-size: 16px;
  width: 200px;
  padding: 15px 0px;
  border-radius: 5px;

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

export const Image = styled.img`
  width: 597.5px;
  height: 398.125px;
  align-self: center;
`;
