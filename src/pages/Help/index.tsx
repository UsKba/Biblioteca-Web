import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from '~/assets/suporte_img.svg';

import {
  Container,
  TopSide,
  MiddleSide,
  BottomSide,
  TextContainer,
  Line,
  Line2,
  Title,
  LittleTitle,
  Text,
  Image,
  ButtonLibrary,
  ReferenceGmail,
} from './styles';

const Help: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <TextContainer>
          <Title>Central de Ajuda</Title>
          <Line />
          <Text>
            Como a Central de Ajuda não foi criada para engenheiros de ciência da computação, os artigos não devem ser
            usados para compreender os detalhes técnicos de um componente específico dos nossos sistemas. Os artigos
            foram escritos para fornecer aos anunciantes uma compreensão conceitual, não técnica, do funcionamento do
            Smart Library. Para saber mais sobre a Smart Library, leia os artigos de cada tópico ou digite sua pergunta
            para o suporte.
          </Text>
        </TextContainer>
        <Image src={Img1} />
      </TopSide>
      <MiddleSide>
        <Title>Perguntas Frequentes</Title>
        <Line2 />
      </MiddleSide>

      <BottomSide>
        <LittleTitle>Ainda tem dúvidas?</LittleTitle>

        <ReferenceGmail
          href="https://mail.google.com/mail/?view=cm&fs=1&to=biblioteca@ifrn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonLibrary>Falar com o bibliotecário</ButtonLibrary>
        </ReferenceGmail>
      </BottomSide>
    </Container>
  );
};

export default Help;
