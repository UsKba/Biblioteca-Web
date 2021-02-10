/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-danger-with-children */
import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

import maintenance from '~/assets/maintenance.svg';

import { Container, WarningTitle, WarningBody, Image, Text, ViewButton } from './styles';

const Warning: React.FC = () => {
  const [showLess, setShowLess] = useState(true);

  const SmartText = ({ text, length = 200 }) => {
    if (text.length < length) {
      return <Text>{text}</Text>;
    }

    return (
      <div>
        <Text
          dangerouslySetInnerHTML={{
            __html: showLess ? `${text.slice(0, length)}...` : text,
          }}
        />
        <ViewButton type="button" onClick={() => setShowLess(!showLess)}>
          &nbsp;Ver
          {showLess ? ' Mais' : ' Menos'}
        </ViewButton>
      </div>
    );
  };
  const htmlText =
    'No entanto, em razão da pandemia de Covid-19, o equipamento não pôde ser entregue na data prevista, e os testes prévios com os ambientes simulados da eleição não foram realizados. “A inteligência artificial demorou a processar os dados no volume desejado. Além disso, houve uma falha em um dos núcleos do equipamento”.';

  return (
    <Container>
      <WarningTitle>Biblioteca Fechada</WarningTitle>
      <WarningBody>
        <Image src={maintenance} />
        <SmartText text={htmlText} />
      </WarningBody>
    </Container>
  );
};

export default Warning;
