import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import {
  Container,
  DatePicker,
  DateInterval,
  DayReservesContainer,
  Weeks,
  Week,
  WeekName,
  Reserves,
  Reserve,
  Hour,
  Room,
  Date,
  HourInfo,
  InfoH,
  // StudentName,
} from './styles';
// import { Container } from './styles';

const Homepage: React.FC = () => {
  return (
    <Container>
      <DayReservesContainer>
        <DatePicker>
          <FaChevronLeft />
          <DateInterval>23/05 - 29/05</DateInterval>
          <FaChevronRight />
        </DatePicker>

        <Weeks>
          <Week>
            <WeekName>Segunda</WeekName>
          </Week>

          <Week>
            <WeekName active>Terça</WeekName>
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

            <Hour>
              Horário
              <HourInfo>
                <InfoH>
                  Entrada
                  <br />
                  08:00
                </InfoH>
                <InfoH>
                  Saída
                  <br />
                  09:00
                </InfoH>
              </HourInfo>
            </Hour>

            <Date>30/05</Date>
          </Reserve>

          <Reserve>
            <Room>F1 - 3</Room>

            <Hour>
              Horário
              <HourInfo>
                <InfoH>
                  Entrada
                  <br />
                  08:00
                </InfoH>
                <InfoH>
                  Saída
                  <br />
                  09:00
                </InfoH>
              </HourInfo>
            </Hour>

            <Date>30/05</Date>
          </Reserve>

          <Reserve>
            <Room>F1 - 3</Room>

            <Hour>
              Horário
              <HourInfo>
                <InfoH>
                  Entrada
                  <br />
                  08:00
                </InfoH>
                <InfoH>
                  Saída
                  <br />
                  09:00
                </InfoH>
              </HourInfo>
            </Hour>

            <Date>30/05</Date>
          </Reserve>
        </Reserves>
      </DayReservesContainer>
    </Container>
  );
};

export default Homepage;
