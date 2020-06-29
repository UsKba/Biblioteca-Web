import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color:#fff;
  height: 80%;
  width: 60%;
`;

export const SubjectContainer = styled.div`
    margin-top: 0.5em;
    display: flex;
    flex-direction: row;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  height:fit-content;
  font-size: 1.1em;
  padding: 0.5em 2em;
  margin-top: 20px;
  margin-left: 0.5em;
  background-color: #483D8B;
  color: #fff;
  border: none;
  width: 30%;

  @media (max-width: 1024px) {

  }

`;

export const Label = styled.label`
  margin: 0.5em;
  font-size: 20px;
  font-weight: bolder;
  margin-right: 0.3em;
`;

export const Span = styled.span`
  font-size: 16px;
  margin-left: 2em;
  padding: 0 1em 17em 0;
`;

export const Select = styled.select`
  font-size: 18px;
  padding: 0.3em 0.6em;
`;
