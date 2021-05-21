/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-danger-with-children */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { ToastContainer, toast } from 'react-toastify';

import { getRequest } from '~/utils/api';

import Maintenance from '~/assets/maintenance.svg';
import MaintenanceAlt from '~/assets/warnings/maintenance_alt.svg';
import Megaphone from '~/assets/warnings/megaphone.svg';
import StudyGroup from '~/assets/warnings/study_group.svg';
import Time from '~/assets/warnings/time.svg';
import { useNotice } from '~/contexts/NoticeContext';
import { Notice } from '~/types';

import {
  Container,
  CustomCarousel,
  WarningTitle,
  WarningBody,
  WarningDate,
  Image,
  Text,
  ViewButton,
  EmptyCenterContainer,
  EmptyContainer,
  EmptyTitle,
  EmptySpan,
} from './styles';

const warningImages = [Maintenance, MaintenanceAlt, Megaphone, StudyGroup, Time];

const Warning: React.FC = () => {
  const noticeContext = useNotice();

  const [notices, setNotices] = useState([] as Notice[]);

  const [showLess, setShowLess] = useState(true);

  const resetTimeout = useRef<any>();
  const itemsPerPage = 3;
  const carouselRef = useRef<any>(null);
  const carouselTime = 10000;

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

  useEffect(() => {
    async function loadNotices() {
      const { data, error } = await getRequest('/notices');
      if (error) {
        toast.dark(error.error);
        return;
      }
      setNotices(data);
    }
    loadNotices();
  }, []);

  return (
    <>
      <EmptyCenterContainer>
        <EmptyContainer visible={notices.length === 0}>
          <EmptyTitle>Sem avisos...</EmptyTitle>
          <EmptySpan>Nenhum aviso no momento, quando o bibliotecário(a) mandar um, ele aparecerá aqui.</EmptySpan>
        </EmptyContainer>
      </EmptyCenterContainer>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CustomCarousel
        ref={carouselRef}
        isRTL={false}
        showArrows={false}
        enableAutoPlay
        autoPlaySpeed={carouselTime}
        onNextEnd={handleNextEnd}
      >
        {notices.map((notice) => (
          <Container id="Container" key={notice.id}>
            <WarningTitle>{notice.title}</WarningTitle>
            <WarningBody>
              <Image src={warningImages[notice.imageCode]} />
              <SmartText text={notice.content} />
            </WarningBody>
            <WarningDate>
              <span>{notice.createdAt.slice(8, 10)}</span>
              <span>/</span>
              <span>{notice.createdAt.slice(5, 7)}</span>
              <span>/</span>
              <span>{notice.createdAt.slice(0, 4)}</span>
            </WarningDate>
          </Container>
        ))}
      </CustomCarousel>
    </>
  );
};

export default Warning;
