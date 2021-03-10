import React from 'react';

import Maintenance from '~/assets/maintenance.svg';

import {
  Container,
  LitteTitle,
  ImageChooserContainer,
  ScrollMenu,
  Image,
  Input,
  TextArea,
  ButtonsContainer,
  PublishButton,
  CancelButton,
  Title,
} from './styles';

const MakeWarning: React.FC = () => {
  return (
    <Container>
      <Title>Escolha uma imagem para o aviso</Title>
      <ImageChooserContainer>
        <ScrollMenu>
          <Image src={Maintenance} />
          <Image src={Maintenance} />
          <Image src={Maintenance} />
          <Image src={Maintenance} />
          <Image src={Maintenance} />
        </ScrollMenu>
      </ImageChooserContainer>
      <Title>Escolha o título do aviso</Title>

      <Input type="text" maxLength={25} placeholder="Título do aviso" />
      <Title>Adicione uma descrição</Title>

      <TextArea maxLength={300} />

      <ButtonsContainer>
        <CancelButton>Cancelar</CancelButton>
        <PublishButton>Publicar</PublishButton>
      </ButtonsContainer>
    </Container>
  );
};

export default MakeWarning;
