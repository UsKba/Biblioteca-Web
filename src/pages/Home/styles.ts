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

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 47%;
  height: 100%;
  border-radius: 7px 0 0 7px;
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 450px;
  margin-right: 15px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    font-size: 50px;
    color: #333;
  }
`;

export const IconList = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconSpan = styled.span`
  display: flex;
  width: 200px;
  padding: 20px;
  text-align: center;
  justify-content: center;
`;

export const H1 = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 44px;
  color: #80b918;
  width: 100%;
  height: 22%;
  margin-top: 10px;
  margin-bottom: 35px;
  align-self: center;
  padding: 30px;
  text-shadow: 0px 0px 2px #322c42;
  font-weight: bold;
  text-align: center;
`;

export const H2 = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #322c42;
  width: 100%;
  height: 22%;
  margin-top: 1em;
  text-align: center;
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
