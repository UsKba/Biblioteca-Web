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
} from './styles';

const MakeWarning: React.FC = () => {
  return (
    <Container>
      <LitteTitle>Escolha uma imagem para o aviso</LitteTitle>
      <ImageChooserContainer>
        <ScrollMenu>
          <Image src={Maintenance} />
          <Image src={Maintenance} />
          <Image src={Maintenance} />
          <Image src={Maintenance} />
          <Image src={Maintenance} />
        </ScrollMenu>
      </ImageChooserContainer>
      <Input type="text" maxLength={25} placeholder="Título do aviso" />
      <TextArea maxLength={300} />

      <ButtonsContainer>
        <CancelButton>Cancelar</CancelButton>
        <PublishButton>Publicar</PublishButton>
      </ButtonsContainer>
    </Container>
  );
};

export default MakeWarning;
