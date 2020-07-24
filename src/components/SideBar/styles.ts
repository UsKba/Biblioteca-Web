import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const SideBarL = styled.ul`
  display: flex;
  flex-direction: column;
  width: 16%;
  height: 100%;
  background-image: linear-gradient(to right, #483D8B, #7B68EE);
  list-style: none;
`;

export const LibrarianIcon = styled.div`
  border-radius: 100px;
  width: 160px;
  height: 160px;
  background-color:white;
  margin: 5px 0 10px 30px;
  border: 3px solid #fff;
`;

export const LibrarianName = styled.span`
  text-align: center;
  color: #fff;
  padding: 5px;
`;

export const LibrarianInfo = styled.li`
  padding: 12px;
  background-color: #7B68EE;
  color: #fff;
  font-weight: lighter;
  margin-bottom: 2px;
  text-align: center;
  cursor: pointer;
`;

export const Quit = styled.div`
  padding: 12px;
  background-color: #fc5353;
  color: #fff;
  font-weight: lighter;
  text-align: center;
  cursor: pointer;
`;

export const LibrarianImage = styled.img`
  width: 154px;
  height: 154px;
  border-radius: 200px;
`;
