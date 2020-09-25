import React from 'react';
import { FiPlus } from 'react-icons/fi';

import {
  Container,
  BoxContainer,
  ContentContainer,
  Button,
  Label,
  Message,
  InfoContainer,
  InfoContainerContent,
  InfoContainerMessage,
  BottomContainer,
  TopContainer,
  TagsContainer,
  Tags,
  PlusButton,
  TagsNameContainer,
  TopContainerWithButton,
} from './styles';

const LibrarianReport: React.FC = () => {
  return (
    <Container>
      <BoxContainer>
        <ContentContainer>
          <TopContainer>
            <TopContainerWithButton>
              <InfoContainer>
                <InfoContainerContent>
                  Remetente:
                  <InfoContainerMessage placeholder="aluno@gmail.com" />
                </InfoContainerContent>
                <InfoContainerContent>
                  Destinatário:
                  <InfoContainerMessage placeholder="bibliotecário@gmail.com" />
                </InfoContainerContent>
              </InfoContainer>
              <PlusButton>
                <FiPlus />
              </PlusButton>
            </TopContainerWithButton>

            <TagsNameContainer>
              <Label>Tags:</Label>
              <TagsContainer>
                <Tags>Barulho</Tags>
                <Tags>Aparelho Quebrado</Tags>
                <Tags>Aluno</Tags>
                <Tags>Outro</Tags>
              </TagsContainer>
            </TagsNameContainer>
          </TopContainer>
          <Label>Mensagem:</Label>
          <Message id="data" placeholder="Digite aqui..." />
        </ContentContainer>
        <BottomContainer>
          <Button>Enviar</Button>
        </BottomContainer>
      </BoxContainer>
    </Container>
  );
};

export default LibrarianReport;
