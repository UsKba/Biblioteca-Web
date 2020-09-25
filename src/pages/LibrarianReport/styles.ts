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
  width: 90%;
  border-radius: 7px;
  padding: 50px;
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
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  justify-content: space-between;
`;

export const InfoContainerMessage = styled.input`
  width: 220px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #f0f2f5;
  border: none;
  outline: none;
  padding: 8px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  height: 40px;
  width: 150px;
  font-size: 1.1em;
  background-color: #799bf8;
  color: #fff;
  border: none;
  border-radius: 5px;

  @media (max-width: 1024px) {
  }
`;

export const Label = styled.label`
  margin: 0.5em 0 0.5em 0;
  font-size: 20px;
  font-weight: bolder;
  margin-right: 0.3em;
  margin-bottom: 0.3em;
`;

export const Message = styled.textarea`
  height: 5em;
  font-size: 16px;
  padding: 1em 1em 17em 1em;
  border-radius: 7px;
  background-color: #f0f2f5;
  border: none;
  resize: none;
  overflow: auto;
  outline: none;
`;

export const Select = styled.select`
  font-size: 18px;
  padding: 0.3em 0.6em;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 16em;
  height: 3em;
  margin-top: 10px;
  justify-content: space-between;
`;

export const PlusButton = styled.div`
  width: 35px;
  height: 35px;
  background-color: #799bf8;
  border-radius: 4px;
  margin: 3.5em 0 0 0.7em;
  text-align: center;
  padding: 7px 1px 0 0;
  svg {
    font-size: 20px;
    font-weight: bold;

    color: white;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  height: 7em;
  width: auto;
  max-width: 37em;
  font-size: 16px;
  border-radius: 4px;
  background-color: #f0f2f5;
  padding: 10px;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow: auto;
`;

export const Tags = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #638af2;
  width: fit-content;
  background-color: #c6d4f6;
  border-radius: 15px;
  padding: 4px 5px;
  text-align: center;
  margin: 6px 6px 0 0;
  cursor: pointer;
`;

export const TagsNameContainer = styled.div`
  display: flex;
`;
