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
  Title2,
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
  EmailArea,
  Emails,
  EmailsB,
} from './styles';

const Help: React.FC = () => {
  const authContext = useAuth();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);
  const questions = [
    {
      id: 1,
      text: 'Como posso reservar uma sala?',
      response:
        'Existem duas maneiras: no topo esquerdo da página inicial,você pode clicar no símbolo "+" que ele te levará para a página de reserva. Você também pode acessar a página de "Salas" no menu lateral; lá você pode clicar em qualquer sala disponível, que também será levado(a) para a página de criação de reserva, com esta sala já selecionada. Você pode cancelar uma reserva a qualquer momento.',
    },
    {
      id: 2,
      text: 'Meus dados estão seguros?',
      response:
        'O site conta com uma camada de segurança do próprio sistema do IFRN. Ao logar com o SUAP, o site recolhe as seguintes informações: nome, matrícula, e-mail acadêmico e campus. Em nenhuma ocasião a equipe da Smart Library vai pedir sua senha. Jamais compartilhe sua senha do SUAP com ninguém.',
    },
    {
      id: 3,
      text: 'Como posso adicionar um amigo?',
      response:
        'Clique no íncone da pessoa no canto superior esquerdo em qualquer página do site. Digite o nome do seu amigo na barra de pesquisa e clique em "+" para enviar uma solicitação de amizade para esta pessoa.',
    },
    {
      id: 4,
      text: 'Não consigo criar uma reserva, o que pode ser?',
      response:
        'Verifique os avisos que aparecem na página. A reserva precisa de no mínimo 3 pessoas, e só pode ser criada para aquela semana. Você não pode criar reservas nos finais de semana, nem para horários que já passaram (Exemplo: Criar uma reserva para as 9h, porém já são 9:10). Caso esteja enfrentando outro problema com a reserva ou outros, por favor entre em contanto com o suporte abaixo.',
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
  const TITLE = 'Ajuda - Smart Library';

  return (
    <Container>
      <title>{TITLE}</title>
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
            Caso esteja com algum problema com o site, verifique alguma das soluções mais comuns abaixo. Se você acha
            que alguma coisa está fora do lugar, ou que alguma ferramenta não está funcionando, você pode falar
            diretamente com a equipe de suporte pelo e-mail. Dúvidas da própria biblioteca devem ser direcionados ao
            e-mail do bibliotecário. Os respectivos e-mails estão no fim desta página.
          </Text>
        </TextContainer>
        <Image src={Img1} />
      </TopSide>
      <MiddleSide>
        <Title2 id="perguntas">Perguntas Frequentes</Title2>
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
        <EmailArea>
          <Emails>
            <EmailsB>E-mail bibliotecário: </EmailsB>
            biblioteca@ifrn.com
          </Emails>
          <Emails>
            <EmailsB>E-mail suporte: </EmailsB>
            uskaba4@gmail.com
          </Emails>
        </EmailArea>
      </BottomSide>
    </Container>
  );
};

export default Help;
