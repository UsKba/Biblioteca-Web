import React from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { FaDesktop, FaUserPlus, FaChalkboardTeacher } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import Spinner from '~/components/Spinner';

import image from '~/assets/home_image.svg';
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
  TextButton,
  LoginButton,
} from './styles';

const Presentation: React.FC = () => {
  const { signed, signInSuapUrl, loading } = useAuth();

  return (
    <Container>
      <TopSide>
        <TextButton to="#">Suporte</TextButton>
        <TextButton to="/sobre">Sobre</TextButton>
        {!signed && (
          <a href={signInSuapUrl}>
            <LoginButton>{loading ? <Spinner /> : 'Entrar'}</LoginButton>
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
            checar se computadores estão disponíveis, entre outras.
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
              <IconSpan>Rápido e Prático</IconSpan>
            </IconContainer>
          </IconList>
        </LeftSide>
        <RightSide>
          <Image src={image} />
        </RightSide>
      </BottomSide>
    </Container>
  );
};

export default Presentation;
