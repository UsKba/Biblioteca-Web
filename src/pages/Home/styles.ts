import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-self: center;
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const TextButton = styled.span`
  font-size: 20px;
  color: ${colors.dark};
  margin-right: 20px;
  align-self: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 100px;
  border: 3px solid ${colors.primary};
  align-self: center;
  color: ${colors.primary};
  font-size: 20px;
  padding: 9px 57px;
  margin-right: 20px;
  height: 50px;
`;

export const BottomSide = styled.div`
  display: flex;
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
  height: 439.21px;
  margin-right: 20px;
  margin-top: 74px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    font-size: 50px;
    color: ${colors.dark};
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
  font-family: 'Ubuntu', sans-serif;
  font-size: 55px;
  color: #322c42;
  width: 100%;
  height: 22%;
  margin-top: 80px;
  margin-left: 90px;
  margin-bottom: 35px;
  font-weight: bold;
`;

export const H2 = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #322c42;
  width: 100%;
  height: 22%;
  margin-left: 90px;
  margin-bottom: 5em;
`;

export const Line1 = styled.div`
  background-color: #3d6dcc;
  width: 80px;
  height: 3px;
`;

export const Line2 = styled.div`
  background-color: #638af2;
  width: 80px;
  height: 3px;
`;

export const LineContainer = styled.div`
  display: flex;
`;

// export const InitialButton = styled.button`
//   margin: 15px 0px;
//   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

//   background-image: linear-gradient(to right, #aacc00, #2b9348);
//   cursor: pointer;

//   color: #fff;
//   font-weight: bold;
//   font-size: 16px;
//   width: 275px;
//   padding: 15px 0px;
//   border-radius: 5px;

//   border: none;
//   outline: none;
//   transition: 0.5s;
//   &:disabled {
//     background-image: none;
//     background-color: #555;
//     cursor: default;
//   }
//   @media screen and (max-width: 400px) {
//     font-size: 14px;
//     padding: 16px;
//   }
// `;
