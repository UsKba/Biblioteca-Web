import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTrash,
  faAngleLeft,
  faAngleRight,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import {Container,
        TopSide,
        MiddleSide,
        Input,
        MessageDiv,
        Message,
        SearchBarItem,
        SearchBarItemName,
        ProfileIcon,
        NameDiv,
        UserName,
        Subject,
        Importance,
        CheckBoxDiv,
        CheckBox,
        Date,
        MessageLeftSide,
        MessageRightSide
       } from './styles';

const Inbox: React.FC = () => {
  return (
    <Container>
        <TopSide>
          <SearchBarItem>
              <FontAwesomeIcon
                icon={faSearch}
                size= 'lg'
                color= '#000'
              />
              <SearchBarItemName></SearchBarItemName>
            </SearchBarItem>
          <Input type="text" placeholder="Digite aqui para filtrar..."></Input>
          <SearchBarItem>
              <FontAwesomeIcon
                icon={faAngleDown}
                size= 'lg'
                color= '#000'
              />
              <SearchBarItemName></SearchBarItemName>
            </SearchBarItem>
          <SearchBarItem>
            <FontAwesomeIcon
              icon={faTrash}
              size= 'lg'
              color= '#000'
            />
            <SearchBarItemName></SearchBarItemName>
          </SearchBarItem>
          <SearchBarItem>
            <FontAwesomeIcon
              icon={faAngleLeft}
              size= 'lg'
              color= '#000'
            />
            <SearchBarItemName></SearchBarItemName>
          </SearchBarItem>
          <SearchBarItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              size= 'lg'
              color= '#000'
            />
            <SearchBarItemName></SearchBarItemName>
          </SearchBarItem>
        </TopSide>

        <MiddleSide>

            <MessageDiv>
                <MessageLeftSide>
                  <ProfileIcon>I</ProfileIcon>
                  <NameDiv>
                    <UserName>Idaslon</UserName>
                    <Subject>Mal-comportamento</Subject>
                  </NameDiv>
                  <Message>Bom dia. Eu Gostaria de falar sobre um pro...</Message>
                  <Importance>Importante!</Importance>
                </MessageLeftSide>
                <MessageRightSide>
                  <CheckBoxDiv>
                    <Date htmlFor="data">11/07</Date>
                    <CheckBox type="checkbox" id="data"></CheckBox>
                  </CheckBoxDiv>
                </MessageRightSide>
            </MessageDiv>

            <MessageDiv>
                <MessageLeftSide>
                  <ProfileIcon>H</ProfileIcon>
                  <NameDiv>
                    <UserName>Halyson</UserName>
                    <Subject>Barulho</Subject>
                  </NameDiv>
                  <Message>Boa tarde. Eu queria falar do...</Message>
                  <Importance>Importante!</Importance>
                </MessageLeftSide>
                <MessageRightSide>
                  <CheckBoxDiv>
                    <Date htmlFor="data">10/07</Date>
                    <CheckBox type="checkbox" id="data"></CheckBox>
                  </CheckBoxDiv>
                </MessageRightSide>
            </MessageDiv>

            <MessageDiv>
                <MessageLeftSide>
                  <ProfileIcon>D</ProfileIcon>
                  <NameDiv>
                    <UserName>Danilo</UserName>
                    <Subject>Problema</Subject>
                  </NameDiv>
                  <Message>Olá. Um dos computadores da sala de...</Message>
                  <Importance>Importante!</Importance>
                </MessageLeftSide>
                <MessageRightSide>
                  <CheckBoxDiv>
                    <Date htmlFor="data">09/07</Date>
                    <CheckBox type="checkbox" id="data"></CheckBox>
                  </CheckBoxDiv>
                </MessageRightSide>
            </MessageDiv>

            <MessageDiv>
                <MessageLeftSide>
                  <ProfileIcon>G</ProfileIcon>
                  <NameDiv>
                    <UserName>Geronimo</UserName>
                    <Subject>Livro</Subject>
                  </NameDiv>
                  <Message>Oi. Eu queria saber se o livro...</Message>

                </MessageLeftSide>
                <MessageRightSide>
                  <CheckBoxDiv>
                    <Date htmlFor="data">05/07</Date>
                    <CheckBox type="checkbox" id="data"></CheckBox>
                  </CheckBoxDiv>
                </MessageRightSide>
            </MessageDiv>

        </MiddleSide>
    </Container>
  );
}

export default Inbox;
