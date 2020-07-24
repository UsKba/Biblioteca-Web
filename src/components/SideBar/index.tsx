import React from 'react';
import {Link} from 'react-router-dom'

import { Container,
         SideBarL,
         LibrarianIcon,
         LibrarianInfo,
         LibrarianName,
         LibrarianImage,
         Quit
        } from './styles';

const SideBar: React.FC = () => {
  return (
  <Container>
    <SideBarL>
      <LibrarianIcon>
        <LibrarianImage src={require('../../assets/librarian_example.jpg')}></LibrarianImage>
      </LibrarianIcon>
      <LibrarianName>José Matias</LibrarianName>
      <Link to ='/lhome'>
        <LibrarianInfo>Página Inicial</LibrarianInfo>
      </Link>

      <LibrarianInfo>Computadores</LibrarianInfo>
      <LibrarianInfo>Reserva de Horários</LibrarianInfo>
      <LibrarianInfo>Alunos</LibrarianInfo>
      <LibrarianInfo>Inbox</LibrarianInfo>

      <Link to='/login'>
        <Quit>Sair</Quit>
      </Link>


    </SideBarL>
  </Container>
  );
}

/*
      <Link to='/pcmanagement'>
       <LibrarianInfo>Computadores</LibrarianInfo>
      </Link>

      <Link to='/reserve'>
        <LibrarianInfo>Reserva de Horários</LibrarianInfo>
      </Link>

      <Link to='/students'>
        <LibrarianInfo>Alunos</LibrarianInfo>
      </Link>

      <Link to='/inbox'>
        <LibrarianInfo>Inbox</LibrarianInfo>
      </Link>
*/
export default SideBar;
