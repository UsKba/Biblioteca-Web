import React from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { FaDesktop, FaUserPlus, FaChalkboardTeacher } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import Button from '~/components/MainButton';
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
} from './styles';

const Presentation: React.FC = () => {
  const { signed, signInSuapUrl, loading } = useAuth();

  return (
    <Container>
      <TopSide>
        <TextButton to="#">Suporte</TextButton>
        <TextButton to="#">Sobre</TextButton>
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