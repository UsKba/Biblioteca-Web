import React from 'react';
import {
  Container,
  DatePicker,
  DateInterval,
  MessageButton,
  DayReservesContainer,
  Weeks,
  Week,
  WeekName,
  Reserves,
  Reserve,
  Hour,
  Room,
  StudentName,
} from './styles';
// import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Homepage: React.FC = () => {
  return (
    <Container>
      <DayReservesContainer>
        <DatePicker>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" color="#483D8B" />
          <DateInterval>23/05 - 29/05</DateInterval>
          <FontAwesomeIcon icon={faChevronRight} size="2x" color="#483D8B" />
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

        <Reserves>
          <Reserve>
            <Room>F1 - 3</Room>
            <Hour>10:00 - 11:00</Hour>
            <StudentName>Bruno Eduardo</StudentName>
            <StudentName>Felipe</StudentName>
            <StudentName>Nathan</StudentName>
            <StudentName>Halyson</StudentName>
          </Reserve>

          <Reserve>
            <Room>F1 - 6</Room>
            <Hour>15:00 - 16:00</Hour>
            <StudentName>Bruno Eduardo</StudentName>
            <StudentName>Ivo Mastre</StudentName>
            <StudentName>Idaslon Pereira</StudentName>
            <StudentName>João Eduardo</StudentName>
          </Reserve>

          <Reserve>
            <Room>F1 - 5</Room>
            <Hour>7:15 - 8:00</Hour>
            <StudentName>João Luís</StudentName>
            <StudentName>Hiterlan</StudentName>
            <StudentName>Gabriel</StudentName>
            <StudentName>João Vitor</StudentName>
            <StudentName>Expedito</StudentName>
            <StudentName>Lino</StudentName>
            <StudentName>Max Miller</StudentName>
            <StudentName>Luana</StudentName>
          </Reserve>

          <Reserve>
            <Room>F1 - 5</Room>
            <Hour>7:15 - 8:00</Hour>
            <StudentName>João Luís</StudentName>
            <StudentName>Hiterlan</StudentName>
            <StudentName>Gabriel</StudentName>
            <StudentName>João Vitor</StudentName>
            <StudentName>Expedito</StudentName>
            <StudentName>Lino</StudentName>
            <StudentName>Max Miller</StudentName>
            <StudentName>Luana</StudentName>
          </Reserve>

          <Reserve>
            <Room>F1 - 5</Room>
            <Hour>19:00 - 20:00</Hour>
            <StudentName>João Luís</StudentName>
            <StudentName>Hiterlan</StudentName>
            <StudentName>Gabriel</StudentName>
            <StudentName>João Vitor</StudentName>
            <StudentName>Expedito</StudentName>
            <StudentName>Lino</StudentName>
            <StudentName>Max Miller</StudentName>
            <StudentName>Luana</StudentName>
          </Reserve>
        </Reserves>
      </DayReservesContainer>

      <MessageButton>Falar com Bibliotecário</MessageButton>
    </Container>
  );
};

export default Homepage;
