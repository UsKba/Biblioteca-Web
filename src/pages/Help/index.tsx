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
  const [questionBig, setQuestionBig] = useState(false);

  const changeQuestionBoolean = useCallback(() => {
    setQuestionBig(!questionBig);
  }, [questionBig]);

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

        <Question onClick={() => changeQuestionBoolean()} big={questionBig}>
          <QuestionContainer>
            <QuestionText>Como posso reservar uma sala?</QuestionText>
            <FaChevronDown />
          </QuestionContainer>
          <HideText>
            Com a sugestão automática de salas, o Agenda verifica o local de trabalho de todos os convidados da reunião.
            Na guia Salas, o Agenda mostra sugestões inteligentes das melhores salas mais próximas de cada convidado.
            Ele considera a localização de cada edifício e andar, o histórico de reservas anteriores, o uso de
            equipamentos de áudio e vídeo e os requisitos de capacidade.
          </HideText>
        </Question>

        <Question onClick={() => changeQuestionBoolean()} big={questionBig}>
          <QuestionContainer>
            <QuestionText>Meus dados estão seguros?</QuestionText>
            <FaChevronDown />
          </QuestionContainer>
          <HideText>
            A autenticação em duas etapas é uma camada adicional de segurança para sua conta. Em vez de depender apenas
            de uma senha, a autenticação em duas etapas oferece uma segunda verificação para ajudar a garantir que
            apenas você possa acessar sua conta
          </HideText>
        </Question>

        <Question onClick={() => changeQuestionBoolean()} big={questionBig}>
          <QuestionContainer>
            <QuestionText>Como posso adicionar um amigo?</QuestionText>
            <FaChevronDown />
          </QuestionContainer>
          <HideText>
            Clique na barra de pesquisa no canto superior esquerdo de qualquer página do site. Digite o nome do seu
            amigo na barra de pesquisa e clique em Para enviar uma solicitação de amizade a alguém, clique em ao lado da
            foto do perfil da pessoa.
          </HideText>
        </Question>
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
