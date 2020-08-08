import React from 'react';
import { FaSearch } from 'react-icons/fa';

import {
  Container,
  LeftSide,
  RightSide,
  Details,
  SearchBar,
  SearchBarItem,
  SearchBarDiv,
  DetailsLeft,
  DetailsIcon,
  ButtonDetails,
  LeftFilter,
  DetailsRight,
  FilterDetails,
  FilterBlock,
  StudentDiv,
  StudentProfileIcon,
  StudentDetailsDiv,
  StudentName,
  SuspendedStatus,
  StudentEmail,
  CheckBox,
} from './styles';

const Students: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Details>
          <DetailsLeft>
            <DetailsIcon />
          </DetailsLeft>
          <DetailsRight>
            <ButtonDetails>Enviar Mensagem</ButtonDetails>
            <ButtonDetails>Suspender</ButtonDetails>
            <ButtonDetails>Banir</ButtonDetails>
            <ButtonDetails>TBD</ButtonDetails>
          </DetailsRight>
        </Details>
        <LeftFilter>
          <FilterDetails>Filtrar por:</FilterDetails>
          <FilterDetails>
            Alunos Suspensos
            <FilterBlock />
          </FilterDetails>
        </LeftFilter>
      </LeftSide>

      <RightSide>
        <SearchBarDiv>
          <SearchBarItem>
            <FaSearch />
          </SearchBarItem>
          <SearchBar type="text" />
        </SearchBarDiv>

        <StudentDiv>
          <StudentProfileIcon>H</StudentProfileIcon>
          <StudentDetailsDiv>
            <StudentName>Halyson Santos</StudentName>
            <StudentEmail>santos.h@ifrn.edu.br</StudentEmail>
          </StudentDetailsDiv>
          <SuspendedStatus>Suspenso</SuspendedStatus>
          <CheckBox type="checkbox" id="data" />
        </StudentDiv>

        <StudentDiv>
          <StudentProfileIcon>H</StudentProfileIcon>
          <StudentDetailsDiv>
            <StudentName>Halyson Santos</StudentName>
            <StudentEmail>santos.h@ifrn.edu.br</StudentEmail>
          </StudentDetailsDiv>
          <SuspendedStatus>Suspenso</SuspendedStatus>
          <CheckBox type="checkbox" id="data" />
        </StudentDiv>

        <StudentDiv>
          <StudentProfileIcon>H</StudentProfileIcon>
          <StudentDetailsDiv>
            <StudentName>Halyson Santos</StudentName>
            <StudentEmail>santos.h@ifrn.edu.br</StudentEmail>
          </StudentDetailsDiv>
          <SuspendedStatus>Suspenso</SuspendedStatus>
          <CheckBox type="checkbox" id="data" />
        </StudentDiv>

        <StudentDiv>
          <StudentProfileIcon>H</StudentProfileIcon>
          <StudentDetailsDiv>
            <StudentName>Halyson Santos</StudentName>
            <StudentEmail>santos.h@ifrn.edu.br</StudentEmail>
          </StudentDetailsDiv>
          <SuspendedStatus>Suspenso</SuspendedStatus>
          <CheckBox type="checkbox" id="data" />
        </StudentDiv>

        <StudentDiv>
          <StudentProfileIcon>H</StudentProfileIcon>
          <StudentDetailsDiv>
            <StudentName>Halyson Santos</StudentName>
            <StudentEmail>santos.h@ifrn.edu.br</StudentEmail>
          </StudentDetailsDiv>
          <SuspendedStatus>Suspenso</SuspendedStatus>
          <CheckBox type="checkbox" id="data" />
        </StudentDiv>
      </RightSide>
    </Container>
  );
};

export default Students;
