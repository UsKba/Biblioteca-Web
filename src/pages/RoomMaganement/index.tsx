import React from 'react';
import {
    Container,
    DatePicker,
    DateInterval,
    RoomList,
    Line,
    Rectangle,
    RectangleDiv,
    Eng,
    StudentName,
    Weeks,
    Week,
    WeekName,
  } from './styles';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {
    faChevronLeft,
    faChevronRight,
    faCog,
  } from '@fortawesome/free-solid-svg-icons';

  import colors from '../../styles/colors';

const RoomMaganement: React.FC = () => {
    return (
        <Container>
          <DatePicker>
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="2x"
              color={colors.primary}
            />
            <DateInterval>25/04 - 29/05</DateInterval>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="2x"
              color={colors.primary}
            />
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
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
            </Line>

            <Line>
              <Rectangle backgroundColor="#1c91ff">08:00 - 09:00</Rectangle>
              <RectangleDiv>
                <Rectangle backgroundColor={colors.secondary}>
                  <StudentName>Nathan</StudentName>
                  <StudentName>José Eduardo</StudentName>
                  <StudentName>Halyson</StudentName>
                </Rectangle>
                <Eng backgroundColor={colors.secondary}><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>

              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
            </Line>

            <Line>
              <Rectangle backgroundColor="#1c91ff">09:00 - 10:00</Rectangle>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle backgroundColor="#F55">
                  <StudentName>Idaslon</StudentName>
                  <StudentName>Carlos Eduardo</StudentName>
                  <StudentName>Bruno Eduardo</StudentName>
                </Rectangle>
                <Eng backgroundColor="#F55"><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>

              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
            </Line>

            <Line>
              <Rectangle backgroundColor="#1c91ff">10:00 - 11:00</Rectangle>

              <RectangleDiv>
                <Rectangle backgroundColor="#F55">
                  <StudentName>Natália</StudentName>
                  <StudentName>João Eduardo</StudentName>
                  <StudentName>Júlio</StudentName>
                  <StudentName>...</StudentName>
                </Rectangle>
                <Eng backgroundColor="#F55"><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle backgroundColor="#F55">
                  <StudentName>Haline</StudentName>
                  <StudentName>Haludilson</StudentName>
                  <StudentName>Haleber</StudentName>
                </Rectangle>
                <Eng backgroundColor="#F55"><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>

              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
            </Line>

            <Line>
              <Rectangle backgroundColor="#1c91ff">11:00 - 12:00</Rectangle>
              <RectangleDiv>
                <Rectangle backgroundColor="#F55">
                  <StudentName>José Eduardo</StudentName>
                  <StudentName>Halysete</StudentName>
                  <StudentName>Halynildo</StudentName>
                  <StudentName>...</StudentName>
                </Rectangle>
                <Eng backgroundColor="#F55"><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
              <RectangleDiv>
                <Rectangle></Rectangle>
                <Eng><FontAwesomeIcon icon={faCog} size="2x" /></Eng>
              </RectangleDiv>
            </Line>
          </RoomList>
        </Container>
      );
}

export default RoomMaganement;
