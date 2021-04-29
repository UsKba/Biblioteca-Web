import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import image from '~/assets/about_img.svg';
import { useAuth } from '~/contexts/AuthContext';

import { Container, H1, TextContainer, Text, Image, GoBack } from './styles';

const About: React.FC = () => {
  const authContext = useAuth();

  const TITLE = 'Sobre - Smart Library';
  return (
    <Container>
      <title>{TITLE}</title>

      <GoBack arrowVisibility={authContext.signed}>
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </GoBack>

      <H1>Reserve salas e computadores</H1>

      <TextContainer>
        <Text>
          Com nossa aplicação é possível verificar antes mesmo de sair de casa se as ferramentas que irá utilizar na
          biblioteca estão disponíveis, como as salas e os computadores, podendo efetuar suas reservas e só aí
          locomover-se, desta forma os alunos terão o acesso ao ambiente de uma maneira organizada, planejada e certa.
        </Text>
      </TextContainer>

      <H1>Encontre amigos</H1>

      <TextContainer>
        <Text>Adione amigos, crie grupos de estudo personalizados e fale com os profissionais da biblioteca.</Text>
      </TextContainer>

      <H1>Rápido e prático</H1>

      <TextContainer>
        <Text>
          A plataforma Smart Library tem o prosito de de facilitar a interação dos alunos do IFRN (Campus Caicó) com a
          biblioteca, trazendo alternativas digitais para o acesso de seus recursos e sendo uma maneira competente de
          organizar o sistema.
        </Text>
      </TextContainer>

      <Image src={image} />
    </Container>
  );
};

export default About;
