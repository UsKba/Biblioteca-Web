import React from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { FaDesktop, FaUserPlus, FaChalkboardTeacher } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import Spinner from '~/components/Spinner';

import home_image from '~/assets/home_image.svg';
import { useAuth } from '~/contexts/AuthContext';

import {
  Container,
  TopSide,
  LeftSide,
  RightSide,
  BottomSide,
  H1,
  H2,
  Image,
  IconList,
  IconSpan,
  IconContainer,
  Line1,
  Line2,
  LineContainer,
  Button,
  TextButton,
} from './styles';

const Home: React.FC = () => {
  const { signed, signInSuapUrl, loading } = useAuth();

  return (
    <Container>
      <TopSide>
        <TextButton>Suporte</TextButton>
        <TextButton>Sobre</TextButton>
        {!signed && (
          <a href={signInSuapUrl}>
            <Button>{loading ? <Spinner /> : 'Entrar'}</Button>
          </a>
        )}
      </TopSide>
      <BottomSide>
        <LeftSide>
          <H1>
            Reserve suas salas
            <br />
            sem sair de casa
            <LineContainer>
              <Line1 />
              <Line2 />
            </LineContainer>
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
            <IconContainer>
              <AiOutlineThunderbolt />
              <IconSpan>Rápido e Fácil</IconSpan>
            </IconContainer>
          </IconList>
        </LeftSide>
        <RightSide>
          <Image src={home_image} />
        </RightSide>
      </BottomSide>
    </Container>
  );
};

export default Home;
