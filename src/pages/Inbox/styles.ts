import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  align-self: center;
  align-items: center;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height:2.8em;
  margin-top: 1.3em;
  border: solid 1px #000;

`;

export const MiddleSide = styled.div`
  width: 100%;
  height: 100%;
  border-left: solid 1px #000;
  border-right: solid 1px #000;
  border-bottom: solid 1px #000;
  border-radius: 0 0 10px 10px;
`

export const Input = styled.input`
  border: solid 1px #000;
  border-radius:3px;
  width: 70em;
  height: 1.8em;
  justify-content: left;
  margin-top: 0.7em;
`;

export const SearchBarItemName = styled.span`
  margin-top: 5px;
  font-size: 16px;
`;

export const SearchBarItem = styled.li`
  padding: 10px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-right: 0.3em;
  margin-top: 0.25em;
`;

export const MessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom:solid 1px black;
  width: 100%;
  height: 4em;
  align-items: center;
`;

export const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: grey;
  color: white;
  border-radius: 8px;
  margin-left:5px;
  text-align: center;
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
  width:124.5px;
`;

export const UserName = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const Subject = styled.span`
  font-size: 14px;
`;

export const Message = styled.span`
  font-size: 16px;
  margin-left: 2em;
  margin-right: 3.5em;
  width: 321.94px;
`;

export const Importance = styled.span`
  background-color: #0e7a0d;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 5px;
  text-align: center;
`;

export const CheckBoxDiv = styled.div`
  display: flex;
  border-left:50em;
  margin-right: 2em;
`;

export const MessageLeftSide = styled.div`
  display: flex;
  align-items: center;

`;

export const MessageRightSide = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

export const CheckBox = styled.input`
  align-self: center;
  transform: scale(2);
`;

export const Date = styled.label`
  font-size: 16px;
  font-weight: 400;
  margin-right: 1em;
`;

