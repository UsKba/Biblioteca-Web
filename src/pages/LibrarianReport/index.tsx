import React from 'react';

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
} from './styles';

const LibrarianReport: React.FC = () => {
  return (
    <Container>
      <BoxContainer>
        <ContentContainer>
          <InfoContainer>
            <InfoContainerContent>
              Remetente: Destinatário:
              <InfoContainerMessage />
            </InfoContainerContent>
          </InfoContainer>
          <Label>Conteúdo:</Label>
          <Message id="data" placeholder="Digite aqui..." />
        </ContentContainer>

        <Button>Enviar</Button>
      </BoxContainer>
    </Container>
  );
};

export default LibrarianReport;
