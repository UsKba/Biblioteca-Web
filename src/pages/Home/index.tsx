import React from 'react';
import { FaDesktop, FaUserPlus, FaUsers } from 'react-icons/fa';

import home_image01 from '~/assets/home_image01.png';

import { Container, LeftSide, RightSide, H1, H2, Image, IconList, IconSpan, IconContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <H1>
          Reserve suas salas
{' '}
<br />
          sem sair de casa
        </H1>
        <H2>
          Com a Smart Library, você consegue reservar salas,
{' '}
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
            <FaUsers />
            <IconSpan>Reserve Salas de Estudo</IconSpan>
          </IconContainer>
        </IconList>
      </LeftSide>
      <RightSide>
        <Image src={home_image01} />
      </RightSide>
    </Container>
  );
};

export default Home;
