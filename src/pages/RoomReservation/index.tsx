import React from 'react';

import { Container, DatePicker, DateInterval } from './styles';
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
        <DateInterval>27/04 - 01/05</DateInterval>
        <FontAwesomeIcon icon={faChevronRight} size="2x" color="#509" />
      </DatePicker>
    </Container>
  ); //ari se voce esta vendo isso mande mensagem dizendo eu vi o easter egg bruno video voz
};

export default RoomReservation;
