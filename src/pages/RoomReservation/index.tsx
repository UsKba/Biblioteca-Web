import React from 'react';

import {
  Container,
  DatePicker,
  DateInterval,
  RoomList,
  Line,
  Rectangle,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const RoomReservation: React.FC = () => {
  return (
    <Container>
      <DatePicker>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" color="#509" />
        <DateInterval>25/04 - 29/05</DateInterval>
        <FontAwesomeIcon icon={faChevronRight} size="2x" color="#509" />
      </DatePicker>

      <RoomList>
        <Line>
          <Rectangle backgroundColor="blue"></Rectangle>
          <Rectangle backgroundColor="blue"> F1-3</Rectangle>
          <Rectangle backgroundColor="blue"> F1-4</Rectangle>
          <Rectangle backgroundColor="blue"> F1-5</Rectangle>
          <Rectangle backgroundColor="blue"> F1-6</Rectangle>
        </Line>

        <Line>
          <Rectangle>07:15 - 08:00</Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
        </Line>

        <Line>
          <Rectangle>08:00 - 09:00</Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
        </Line>

        <Line>
          <Rectangle>09:00 - 10:00</Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
        </Line>

        <Line>
          <Rectangle>10:00 - 11:00</Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
        </Line>

        <Line>
          <Rectangle>11:00 - 12:00</Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
        </Line>
      </RoomList>
    </Container>
  ); //ari se voce esta vendo isso mande mensagem dizendo eu vi o easter egg bruno video voz
};

export default RoomReservation;
