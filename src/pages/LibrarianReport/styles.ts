import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 80%;
  width: 60%;
  border-radius: 7px;
  padding: 50px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  width: 20em;
  height: 6em;
`;

export const InfoContainerContent = styled.div`
  display: flex;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`;

export const InfoContainerMessage = styled.div`
  height: 36px;
  width: 250px;
  font-size: 16px;
  padding: 7px;
  background-color: #f0f2f5;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  height: fit-content;
  font-size: 1.1em;
  padding: 0.5em 2em;
  margin-top: 20px;
  margin-left: 0.5em;
  background-color: #2b9348;
  color: #fff;
  border: none;
  width: 30%;
  border-radius: 5px;
  @media (max-width: 1024px) {
  }
`;

export const Label = styled.label`
  margin: 0.5em;
  font-size: 20px;
  font-weight: bolder;
  margin-right: 0.3em;
`;

export const Message = styled.textarea`
  height: 5em;
  font-size: 16px;
  margin: 0 10px 0 10px;
  padding: 0 1em 17em 1em;
  background-color: #f0f2f5;
`;

export const Select = styled.select`
  font-size: 18px;
  padding: 0.3em 0.6em;
`;
