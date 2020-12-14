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

  height: 80%;
  width: 90%;

  border-radius: 7px;
  padding: 50px;

  background-color: #fff;
`;

export const TopContainerWithButton = styled.div`
  display: flex;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 22em;
  height: 6em;
`;

export const InfoContainerContent = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;

  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`;

export const InfoContainerMessage = styled.input`
  width: 220px;

  padding: 8px;
  border: none;
  border-radius: 4px;
  outline: none;

  background-color: #f0f2f5;

  font-size: 16px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  height: 40px;
  width: 150px;

  border: none;
  border-radius: 5px;

  background-color: #799bf8;
  color: #fff;

  font-size: 1.1em;
  @media (max-width: 1024px) {
  }
`;

export const Label = styled.label`
  margin: 0.5em 0 0.5em 0;
  margin-right: 0.3em;
  margin-bottom: 0.3em;

  font-size: 20px;
  font-weight: bolder;
`;

export const Message = styled.textarea`
  resize: none;
  overflow: auto;

  height: 5em;

  padding: 1em 1em 17em 1em;
  border: none;
  border-radius: 7px;
  outline: none;

  background-color: #f0f2f5;

  font-size: 16px;
`;

export const Select = styled.select`
  padding: 0.3em 0.6em;
  font-size: 18px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 3em;
  width: 16em;

  margin-top: 10px;
`;

export const PlusButton = styled.div`
  text-align: center;

  height: 35px;
  width: 35px;

  background-color: #799bf8;

  padding: 7px 1px 0 0;
  border-radius: 4px;
  margin: 3.5em 0 0 0.7em;

  svg {
    font-size: 20px;
    font-weight: bold;

    color: white;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow: auto;

  height: 7em;
  width: auto;
  max-width: 37em;

  padding: 10px;
  border-radius: 4px;

  background-color: #f0f2f5;

  font-size: 16px;
`;

export const Tags = styled.div`
  text-align: center;

  width: fit-content;

  padding: 4px 5px;
  border-radius: 15px;
  margin: 6px 6px 0 0;

  background-color: #c6d4f6;

  color: #638af2;

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

export const TagsNameContainer = styled.div`
  display: flex;
`;
