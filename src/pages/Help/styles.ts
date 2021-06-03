import styled from 'styled-components';

import { Button } from '~/components/MainButton/styles';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0 0px 120px;
  width: 80%;
  @media screen and (max-width: 640px) {
    margin: 70px 0 0px 40px;
  }
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  align-self: left;
  color: ${colors.dark};
  font-size: 53px;
  font-family: 'Ubuntu';
  font-weight: bold;
  @media screen and (max-width: 640px) {
    font-size: 30px;
  }
`;

export const Title2 = styled.div`
  align-self: center;
  color: ${colors.dark};
  font-size: 53px;
  font-family: 'Ubuntu';
  font-weight: bold;
  @media screen and (max-width: 640px) {
    font-size: 30px;
    align-self: left;
  }
`;

export const Line = styled.div`
  height: 5px;
  width: 422px;
  margin-top: 2px;
  align-self: start;
  border-radius: 5px;
  background-color: ${colors.primary};
  @media screen and (max-width: 640px) {
    height: 3px;
    width: 240px;
  }
`;

export const Line2 = styled.div`
  height: 5px;
  width: 557px;
  margin-top: 2px;
  align-self: center;
  border-radius: 5px;
  background-color: ${colors.primary};
  margin-bottom: 30px;
  @media screen and (max-width: 640px) {
    height: 3px;
    width: 240px;
  }
  @media screen and (max-width: 400px) {
    align-self: start;
  }
`;

export const Text = styled.div`
  margin-top: 15px;

  width: 540px;
  color: ${colors.dark};

  font-size: 18px;
  font-family: 'Roboto';
  font-weight: lighter;

  text-align: justify;
  text-justify: inter-word;
  @media screen and (max-width: 640px) {
    width: 280px;
  }
`;

export const HideText = styled.div`
  margin: 30px 100px 45px 50px;

  color: ${colors.dark};

  font-size: 18px;
  font-family: 'Roboto';
  font-weight: lighter;

  text-align: justify;
  text-justify: inter-word;
  overflow: hidden;
  @media screen and (max-width: 640px) {
    margin: 20px 20px 45px 20px;
  }
`;

export const Image = styled.img`
  display: flex;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const MiddleSide = styled.div`
  display: flex;
  margin: 100px 0 50px 0;
  flex-direction: column;
  width: auto;
`;

export const BottomSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const LittleTitle = styled.div`
  align-self: center;
  color: ${colors.dark};
  font-size: 23px;
  font-family: 'Ubuntu';
  @media screen and (max-width: 640px) {
  }
`;

export const ButtonLibrary = styled(Button)`
  padding: 0 20px;
  margin-top: 24px;
`;

export const ReferenceGmail = styled.a`
  display: flex;
  align-self: center;
`;

interface QuestionProps {
  big?: boolean;
}

export const Question = styled.div<QuestionProps>`
  display: flex;
  flex-direction: column;

  height: ${(props) => (props.big === true ? '224px' : '60px')};
  width: 100%;

  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.072);

  background-color: ${colors.terciary};

  cursor: pointer;
  transition: 0.3s ease;

  svg {
    color: ${colors.dark};
    font-size: 20px;
    transform: ${(props) => props.big === true && 'rotate(180deg)'};
    transition: 0.3s ease;
  }
  @media screen and (max-width: 640px) {
    height: ${(props) => (props.big === true ? '524px' : '60px')};
  }
  @media screen and (max-width: 270px) {
    height: ${(props) => (props.big === true ? '524px' : '80px')};
  }
`;

export const QuestionText = styled.div`
  color: ${colors.dark};
  font-size: 18px;
  font-family: 'Roboto';
  @media screen and (max-width: 640px) {
    font-size: 15px;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface GoBackProps {
  arrowVisibility?: boolean;
}

export const GoBack = styled.div<GoBackProps>`
  display: flex;
  position: absolute;
  align-items: center;

  top: 25px;
  left: 25px;

  svg {
    display: ${({ arrowVisibility }) => (arrowVisibility === true ? 'none' : 'flex')};
    color: ${colors.dark};
    font-size: 35px;
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

export const EmailArea = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-top: 20px;
`;

export const Emails = styled.div`
  display: flex;
  align-items: center;

  color: #767676;
  font-size: 21px;
  padding: 4px;
  @media screen and (max-width: 640px) {
    font-size: 18px;
  }
`;

export const EmailsB = styled.b`
  color: #767676;
  font-size: 21px;
  padding: 4px;
  @media screen and (max-width: 640px) {
    font-size: 18px;
  }
`;
