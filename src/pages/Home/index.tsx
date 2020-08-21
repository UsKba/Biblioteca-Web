import React from 'react';
import { FaDesktop, FaUserPlus, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import home_image01 from '~/assets/home_image01.png';
import { useAuth } from '~/contexts/AuthContext';

import {
  Container,
  LeftSide,
  RightSide,
  H1,
  H2,
  Image,
  IconList,
  IconSpan,
  IconContainer,
  InitialButton,
} from './styles';

const Home: React.FC = () => {
  const { signed } = useAuth();
  return (
    <Container>
      <LeftSide>
        <H1>
          Reserve suas salas
          <br />
          sem sair de casa
        </H1>
        <H2>
          Com a Smart Library, você consegue reservar salas,
          <br />
          cheque se computadores estão disponíveis.
        </H2>
        <IconList>
          <IconContainer>
            <FaDesktop />
            <IconSpan>Confira os Computadores</IconSpan>
          </IconContainer>
          <IconContainer>
            <FaUserPlus />
            <IconSpan>Encontrar Amigos</IconSpan>
          </IconContainer>
          <IconContainer>
            <FaChalkboardTeacher />
            <IconSpan>Reserve Salas de Estudo</IconSpan>
          </IconContainer>
        </IconList>
        {!signed && (
          <Link to="/login">
            <InitialButton>Entre agora!</InitialButton>
          </Link>
        )}
      </LeftSide>
      <RightSide>
        <Image src={home_image01} />
      </RightSide>
    </Container>
  );
};

export default Home;
