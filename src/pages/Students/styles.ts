import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: rgba(255,255,255, 0.3);
  width: 98%;
  margin: 15px;
  align-self: center;
  border-radius: 10px;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  width: 60%;
  border-radius: 7px 0 0 7px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  border-radius:  0 7px 7px 0 ;
`;

export const Details = styled.div`
  display: flex;
  width: 32em;
  height: 12em;
  background-color:white;
  border-radius: 10px;
  margin: 17px 0 0 17px;
  padding: 1em;
  border: solid 1px #000;
`;

export const DetailsLeft = styled.div`
    display: column;
    width: 6em;
    height: 100%;
    margin: 10px 0 0 10px;
`;

export const DetailsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: #C4C4C4;
  color: #fff;
  border-radius: 8px;
`;

export const DetailsRight = styled.div`
    display: column;
    width: 9em;
    height: 100%;
    margin: 10px 0 0 5px;
`;

export const ButtonDetails = styled.div`
display: column;
padding: 5px;
background-color: #C4C4C4;
border-radius:7px;
margin-bottom:10px;
cursor: pointer;
`;

export const LeftFilter = styled.div`
background-color:#c4c4c4;
width: 209px;
height: 108px;
margin: 17px 0 0 15px;
border-radius: 7px;
border: solid 1px #000;
`;

export const FilterDetails = styled.div`
display: flex;
height: 1.5em;
width: 10em;
margin: 10px 0 0 10px;
`;

export const FilterBlock = styled.div`
height: 1.5em;
width: 1.5em;
background-color:white;
border-radius:7px;
margin-left: 3px;
cursor: pointer;


`;

export const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 10px;
`;

export const SearchBar = styled.input`
  border: none;
  border-radius:3px;
  width: 20em;
  height: 1.8em;
  justify-content: left;
  border: solid 1px #000;
`;

export const SearchBarItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  width: 1.8em;
  height: 1.8em;
  border-radius: 2px;
  margin-right: 2px;
  border: solid 1px #000;
`;

export const StudentDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 22em;
  height: 3.5em;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 10px;
  border-radius: 2px;
  border: solid 1px #000;
`;

export const StudentProfileIcon = styled.span`
  padding: 12px;
  width: 36px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: #c4c4c4;
  margin-left: 5px;
`;

export const StudentDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const StudentName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const StudentEmail = styled.span`
  font-size: 14px;
`;

export const SuspendedStatus = styled.span`
  background-color: #B03838;
  color: #fff;
  font-size: 12px;
  padding: 0.5em 1em;
  border-radius: 5px;
  text-align: center;
  margin-left: 10px;
`;

export const CheckBox = styled.input`
  align-self: center;
  transform: scale(2);
  margin-left: 2.2em;
`;
