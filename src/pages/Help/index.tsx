import React, { useCallback, useState } from 'react';
import { FaArrowLeft, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Img1 from '~/assets/suporte_img.svg';
import { useAuth } from '~/contexts/AuthContext';

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
  Question,
  QuestionText,
  GoBack,
  HideText,
  QuestionContainer,
} from './styles';

const Help: React.FC = () => {
  const authContext = useAuth();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);
  const questions = [
    {
      id: 1,
      text: 'Como posso reservar uma sala?',
      response:
        'Como a Central de Ajuda não foi criada para engenheiros de ciência da computação, os artigos não devem ser usados para compreender os detalhes técnicos de um componente específico dos nossos sistemas. Os artigos foram escritos para fornecer aos anunciantes uma compreensão conceitual, não técnica, do funcionamento do Smart Library. Para saber mais sobre a Smart Library, leia os artigos de cada tópico ou digite sua pergunta para o suporte.',
    },
    {
      id: 2,
      text: 'Meus dados estão seguros?',
      response:
        'A autenticação em duas etapas é uma camada adicional de segurança para sua conta. Em vez de depender apenas de uma senha, a autenticação em duas etapas oferece uma segunda verificação para ajudar a garantir que apenas você possa acessar sua conta',
    },
    {
      id: 3,
      text: 'Como posso adicionar um amigo?',
      response:
        'Clique na barra de pesquisa no canto superior esquerdo de qualquer página do site. Digite o nome do seu amigo na barra de pesquisa e clique em Para enviar uma solicitação de amizade a alguém, clique em ao lado da foto do perfil da pessoa.',
    },
  ];

  const changeIndex = useCallback(
    (index: number) => {
      if (index === activeQuestionIndex) {
        setActiveQuestionIndex(-1);
      } else {
        setActiveQuestionIndex(index);
      }
    },
    [activeQuestionIndex]
  );

  return (
    <Container>
      <GoBack arrowVisibility={authContext.signed}>
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </GoBack>
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

        {questions.map((question, index) => (
          <Question key={question.id} onClick={() => changeIndex(index)} big={index === activeQuestionIndex}>
            <QuestionContainer>
              <QuestionText>{question.text}</QuestionText>
              <FaChevronDown />
            </QuestionContainer>
            <HideText>{question.response}</HideText>
          </Question>
        ))}
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
