/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-danger-with-children */

import React, { useCallback, useRef, useState } from 'react';
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Carousel from 'react-elastic-carousel';

import maintenance from '~/assets/maintenance.svg';
import studyGroup from '~/assets/warnings/study_group.svg';
import time from '~/assets/warnings/time.svg';

import { Container, CustomCarousel, WarningTitle, WarningBody, Image, Text, ViewButton } from './styles';

const Warning: React.FC = () => {
  const [showLess, setShowLess] = useState(true);

  const resetTimeout = useRef<any>();
  const itemsPerPage = 3;
  const carouselRef = useRef<any>(null);
  const carouselTime = 10000;

  const htmlText =
    'No entanto, em razão da pandemia de Covid-19, o equipamento não pôde ser entregue na data prevista, e os testes prévios com os ambientes simulados da eleição não foram realizados. “A inteligência artificial demorou a processar os dados no volume desejado. Além disso, houve uma falha em um dos núcleos do equipamento”.';

  const handleNextEnd = useCallback(({ index }) => {
    clearTimeout(resetTimeout.current);

    if (index + 1 === itemsPerPage) {
      resetTimeout.current = setTimeout(() => {
        if (carouselRef.current != null) {
          carouselRef.current?.goTo(0);
        }
      }, carouselTime);
    }
  }, []);

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

  return (
    <CustomCarousel
      ref={carouselRef}
      isRTL={false}
      showArrows={false}
      enableAutoPlay
      autoPlaySpeed={carouselTime}
      onNextEnd={handleNextEnd}
    >
      <Container>
        <WarningTitle>Biblioteca Fechada</WarningTitle>
        <WarningBody>
          <Image src={maintenance} />
          <SmartText text={htmlText} />
        </WarningBody>
      </Container>
      <Container>
        <WarningTitle>Orientações para trabalhos</WarningTitle>
        <WarningBody>
          <Image src={studyGroup} />
          <SmartText text={htmlText} />
        </WarningBody>
      </Container>
      <Container>
        <WarningTitle>Volta para a biblioteca</WarningTitle>
        <WarningBody>
          <Image src={time} />
          <SmartText text={htmlText} />
        </WarningBody>
      </Container>
    </CustomCarousel>
  );
};

export default Warning;
