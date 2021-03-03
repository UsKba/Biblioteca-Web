import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import image from '~/assets/about_img.svg';
import { useAuth } from '~/contexts/AuthContext';

import { Container, H1, Title, Line, TextContainer, TextContainer2, Text, Image, MiddleSide, GoBack } from './styles';

const About: React.FC = () => {
  const authContext = useAuth();

  return (
    <Container>
      <GoBack arrowVisibility={authContext.signed}>
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </GoBack>
      <Title>
        <H1>Sobre</H1>
        <Line />
      </Title>
      <MiddleSide>
        <TextContainer>
          <Text>
            A plataforma Smart Library tem o propósito de de facilitar a interação dos alunos do IFRN (Campus Caicó) com
            a biblioteca, trazendo alternativas digitais para o acesso de seus recursos e sendo uma maneira competente
            de organizar o sistema.
          </Text>
        </TextContainer>
        <Image src={image} />
      </MiddleSide>

      <TextContainer2>
        <Text>
          Com a aplicação é possível ver antes mesmo de sair de casa se as ferramentas que irá utilizar na biblioteca
          estão disponíveis, como as salas e os computadores, podendo efetuar suas reservas e só aí locomover-se, desta
          forma os alunos terão o acesso ao ambiente de uma maneira organizada, planejada e certa.
        </Text>
      </TextContainer2>
    </Container>
  );
};

export default About;
