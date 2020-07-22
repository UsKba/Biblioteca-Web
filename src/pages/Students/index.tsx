import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { Container,
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
         CheckBox

         } from './styles';

const Students: React.FC = () => {
  return(
  <Container>
    <LeftSide>
      <Details>
        <DetailsLeft>
        <DetailsIcon></DetailsIcon>
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
          <FilterDetails>Alunos Suspensos<FilterBlock></FilterBlock>
        </FilterDetails>
      </LeftFilter>
    </LeftSide>

    <RightSide>
      <SearchBarDiv>
        <SearchBarItem>
          <FontAwesomeIcon
            icon={faSearch}
            size= 'xs'
            color= '#000'
          />
        </SearchBarItem>
        <SearchBar type="text"></SearchBar>
      </SearchBarDiv>

      <StudentDiv>
        <StudentProfileIcon>H</StudentProfileIcon>
        <StudentDetailsDiv>
          <StudentName>Halyson Santos</StudentName>
          <StudentEmail>santos.h@ifrn.edu.br</StudentEmail>
        </StudentDetailsDiv>
        <SuspendedStatus>Suspenso</SuspendedStatus>
        <CheckBox type="checkbox" id="data"></CheckBox>
      </StudentDiv>

      <StudentDiv>
        <StudentProfileIcon>H</StudentProfileIcon>
        <StudentDetailsDiv>
          <StudentName>Halyson Santos</StudentName>
          <StudentEmail>santos.h@ifrn.edu.br</StudentEmail>
        </StudentDetailsDiv>
        <SuspendedStatus>Suspenso</SuspendedStatus>
        <CheckBox type="checkbox" id="data"></CheckBox>
      </StudentDiv>

      <StudentDiv>
        <StudentProfileIcon>H</StudentProfileIcon>
        <StudentDetailsDiv>
          <StudentName>Halyson Santos</StudentName>
          <StudentEmail>santos.h@ifrn.edu.br</StudentEmail>
        </StudentDetailsDiv>
        <SuspendedStatus>Suspenso</SuspendedStatus>
        <CheckBox type="checkbox" id="data"></CheckBox>
      </StudentDiv>

      <StudentDiv>
        <StudentProfileIcon>H</StudentProfileIcon>
        <StudentDetailsDiv>
          <StudentName>Halyson Santos</StudentName>
          <StudentEmail>santos.h@ifrn.edu.br</StudentEmail>
        </StudentDetailsDiv>
        <SuspendedStatus>Suspenso</SuspendedStatus>
        <CheckBox type="checkbox" id="data"></CheckBox>
      </StudentDiv>

      <StudentDiv>
        <StudentProfileIcon>H</StudentProfileIcon>
        <StudentDetailsDiv>
          <StudentName>Halyson Santos</StudentName>
          <StudentEmail>santos.h@ifrn.edu.br</StudentEmail>
        </StudentDetailsDiv>
        <SuspendedStatus>Suspenso</SuspendedStatus>
        <CheckBox type="checkbox" id="data"></CheckBox>
      </StudentDiv>
    </RightSide>
  </Container>
  );
}

export default Students;
