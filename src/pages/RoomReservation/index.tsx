import React from 'react';

import { 
  Container,
  DatePicker,
  DateInterval,
  RoomList,
  Line,
  Rectangle,
  StudentName,
  Weeks,
  Week,
  WeekName
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import colors from '../../styles/colors';

const RoomReservation: React.FC = () => {
  return (
    <Container>
      <DatePicker>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" color={colors.primary} />
        <DateInterval>25/04 - 29/05</DateInterval>
        <FontAwesomeIcon icon={faChevronRight} size="2x" color={colors.primary} />
      </DatePicker>
      <Weeks>
        <Week>
        <WeekName>Segunda</WeekName>
        </Week>
       
        <Week>
        <WeekName active={true}>Terça</WeekName>
        </Week>
       
        <Week>
        <WeekName>Quarta</WeekName>
        </Week>
       
        <Week>
        <WeekName>Quinta</WeekName>
        </Week>
       
        <Week>
        <WeekName>Sexta</WeekName>
        </Week>
       

        </Weeks>      
      <RoomList>
        <Line>
          <Rectangle backgroundColor="#1c91ff"></Rectangle>
          <Rectangle backgroundColor="#1c91ff">F1-3</Rectangle>
          <Rectangle backgroundColor="#1c91ff">F1-4</Rectangle>
          <Rectangle backgroundColor="#1c91ff">F1-5</Rectangle>
          <Rectangle backgroundColor="#1c91ff">F1-6</Rectangle>
        </Line>

        <Line>
          <Rectangle backgroundColor="#1c91ff">07:15 - 08:00</Rectangle>
          <Rectangle >

          </Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
        </Line>

        <Line>
          <Rectangle backgroundColor="#1c91ff">08:00 - 09:00</Rectangle>
          <Rectangle backgroundColor={colors.secondary}>
            <StudentName>Nathan</StudentName>
            <StudentName>José Eduardo</StudentName>
            <StudentName>Halyson</StudentName>

          </Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
        </Line>

        <Line>
          <Rectangle backgroundColor="#1c91ff">09:00 - 10:00</Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle backgroundColor="#F55">
            <StudentName>Idaslon</StudentName>
            <StudentName>Carlos Eduardo</StudentName>
            <StudentName>Bruno Eduardo</StudentName>
            <StudentName>...</StudentName>
            
          </Rectangle>
          <Rectangle></Rectangle>
        </Line>

        <Line>
          <Rectangle backgroundColor="#1c91ff">10:00 - 11:00</Rectangle>
          <Rectangle backgroundColor="#F55">
            <StudentName>Natália</StudentName>
            <StudentName>João Eduardo</StudentName>
            <StudentName>Júlio</StudentName>
            <StudentName>...</StudentName>

          </Rectangle>
          <Rectangle backgroundColor="#F55">
            <StudentName>Haline</StudentName>
            <StudentName>Haludilson</StudentName>
            <StudentName>Haleber</StudentName>
          </Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
        </Line>

        <Line>
          <Rectangle backgroundColor="#1c91ff">11:00 - 12:00</Rectangle>
          <Rectangle backgroundColor="#F55">
            <StudentName>José Eduardo</StudentName>
            <StudentName>Halysete</StudentName>
            <StudentName>Halynildo</StudentName>
            <StudentName>...</StudentName>

          </Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
          <Rectangle></Rectangle>
        </Line>
      </RoomList>
    </Container>
    
  );

 //ari se voce esta vendo isso mande mensagem dizendo eu vi o easter egg bruno video voz
};

export default RoomReservation;
