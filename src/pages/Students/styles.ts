import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: space-between;

  width: 98%;

  margin: 15px;

  border-radius: 10px;

  background-color: rgba(255, 255, 255, 0.3);
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

  border-radius: 0 7px 7px 0;
`;

export const Details = styled.div`
  display: flex;

  width: 32em;
  height: 12em;

  padding: 1em;
  margin: 17px 0 0 17px;

  border: solid 1px #000;
  border-radius: 10px;

  background-color: white;
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

  border-radius: 8px;

  background-color: #c4c4c4;
  color: #fff;
`;

export const DetailsRight = styled.div`
  display: column;

  width: 9em;
  height: 100%;

  margin: 10px 0 0 5px;
`;

export const ButtonDetails = styled.div`
  display: column;

  margin-bottom: 10px;
  padding: 5px;

  border-radius: 7px;

  background-color: #c4c4c4;

  cursor: pointer;
`;

export const LeftFilter = styled.div`
  width: 209px;
  height: 108px;

  margin: 17px 0 0 15px;

  border-radius: 7px;
  border: solid 1px #000;

  background-color: #c4c4c4;
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

  margin-left: 3px;

  border-radius: 7px;

  background-color: white;

  cursor: pointer;
`;

export const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;

  margin-top: 15px;
  margin-left: 10px;
`;

export const SearchBar = styled.input`
  justify-content: left;
  width: 20em;
  height: 1.8em;

  border: none;
  border-radius: 3px;
  border: solid 1px #000;
`;

export const SearchBarItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1.8em;
  height: 1.8em;

  margin-right: 2px;

  border: solid 1px #000;
  border-radius: 2px;

  background-color: #fff;

  cursor: pointer;

  > svg {
    font-size: 14px;
    color: #333;
  }
`;

export const StudentDiv = styled.div`
  display: flex;
  align-items: center;

  width: 22em;
  height: 3.5em;

  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 10px;

  border-radius: 2px;
  border: solid 1px #000;

  background-color: #fff;
`;

export const StudentProfileIcon = styled.span`
  width: 36px;

  padding: 12px;
  margin-left: 5px;

  font-size: 12px;
  font-weight: bold;

  color: #fff;
  background-color: #c4c4c4;
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
  text-align: center;

  margin-left: 10px;
  padding: 0.5em 1em;

  border-radius: 5px;

  background-color: #b03838;
  color: #fff;

  font-size: 12px;
`;

export const CheckBox = styled.input`
  align-self: center;

  margin-left: 2.2em;

  transform: scale(2);
`;
