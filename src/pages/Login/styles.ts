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


  @media screen and (max-width: 400px){
    height: 100%;
    border-radius: 0px;
  }
`;

export const Logo = styled.img`
  height: 125px;
  width: 125px;
  margin: 80px auto 40px;
  @media screen and (max-width: 400px){
    height: 90px;
    width: 90px;
    margin: 60px auto 30px;
  }
`;

export const BackgroundContainer = styled.div`

`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;

`;
