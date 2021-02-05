import React from 'react';

import maintenance from '~/assets/maintenance.svg';

import { Container, WarningTitle, WarningBody, Image, Text } from './styles';

const Warning: React.FC = () => {
  return (
    <Container>
      <WarningTitle>Biblioteca Fechada</WarningTitle>
      <WarningBody>
        <Image src={maintenance} />
        <Text>
          No entanto, em razão da pandemia de Covid-19, o equipamento não pôde ser entregue na data prevista, e os
          testes prévios com os ambientes simulados da eleição não foram realizados. “A inteligência artificial demorou
          a processar os dados no volume desejado. Além disso, houve uma falha em um dos núcleos do equipamento”.
        </Text>
      </WarningBody>
    </Container>
  );
};

export default Warning;
