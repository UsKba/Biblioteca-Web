import React from 'react';

import {
    Container,
    BoxContainer,
    ContentContainer,
    SubjectContainer,
    Button,
    Label,
    Message,
    Select
} from './styles';

const LibrarianReport: React.FC = () => {
  return(
      <Container>
          <BoxContainer>
            <SubjectContainer>
              <Label>Assunto:</Label>
              <Select>
                <option>Mal Comportamento</option>
                <option>Barulho</option>
                <option>Outro</option>
              </Select>
            </SubjectContainer>

            <ContentContainer>
              <Label>Conteúdo:</Label>
              <Message id="data" placeholder="Digite aqui..."></Message>
            </ContentContainer>

            <Button>Enviar</Button>
          </BoxContainer>
      </Container>
  )
}

export default LibrarianReport;
