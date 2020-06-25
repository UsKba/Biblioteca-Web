import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex: 1;
  margin-top:20px;
  background-color: #fff;
  width: 90%;
  align-self: center;
  padding: 12vh;
  border-radius: 10px;
  padding: 60px 10px;
`;

export const Warning = styled.label`
  background-color: #FF6663;
  width:13.8em;
  padding: 10px 5px;
  border-radius:0.7em;
  color:white;
  align-items: center;
  text-align: center;
  margin-top: 55px;

`

export const LeftItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MiddleItemsContainer = styled.div`
  display:flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 0 220.8px 0 0;
`;

export const ComponentsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

`;

export const InputButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Input = styled.input`
  border: 1px solid #000;
  font-size: 15px;
  padding: 10px;
  width: 280px;
  border-radius:6px;

`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-right: 15%;
 /* color: #483d8b;*/
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  height:fit-content;
  font-size:1.1em;
  padding:0.7em 0;
  width:30%;
  margin-top:5em;
  background-color: #483D8B;
  color: #fff;
  border-radius:7px;

`;

export const AddComponentButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #483D8B;
  margin-left: 10px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 6px;
`;

export const Text = styled.label`
  font-family: 'Ubuntu', sans-serif;
  font-size: 30px;
  font-weight: 4;
`;

export const SpanContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:left;

`;

export const Span = styled.span`
  border: 1px solid #000;
  font-size: 15px;
  padding: 10px;
  width: 500px;
  min-height: 35px;
  border-radius: 6px;
  margin-bottom:0.5em;
  color: #fff;
  background-color: #483D8B;


`;

export const SpanLabel = styled.label`
  font-size: 16px;
  font-weight: bolder;
  margin-right: 48.2%;
  margin-bottom: 5px;
`;
