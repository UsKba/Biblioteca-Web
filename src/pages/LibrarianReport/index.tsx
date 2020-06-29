import React from 'react';

import {
    Container,
    BoxContainer,
    ContentContainer,
    SubjectContainer,
    Button,
    Label,
    Span,
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
              <Label>Conteúdo:

              </Label>
              <Span>Mensagem...</Span>
            </ContentContainer>

            <Button>Enviar</Button>
          </BoxContainer>
      </Container>
  )
}

export default LibrarianReport;
