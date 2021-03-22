import styled from 'styled-components';

import { Button } from '~/components/MainButton/styles';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0 0px 120px;
  width: 80%;
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
  align-self: center;
  color: ${colors.dark};
  font-size: 53px;
  font-family: 'Ubuntu';
  font-weight: bold;
`;

export const Line = styled.div`
  height: 5px;
  width: 422px;
  margin-top: 2px;
  align-self: center;
  border-radius: 5px;
  background-color: ${colors.primary};
`;

export const Line2 = styled.div`
  height: 5px;
  width: 557px;
  margin-top: 2px;
  align-self: center;
  border-radius: 5px;
  background-color: ${colors.primary};
  margin-bottom: 30px;
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
`;

export const Image = styled.img`
  display: flex;
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
`;

export const QuestionText = styled.div`
  color: ${colors.dark};
  font-size: 18px;
  font-family: 'Roboto';
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
  width: 150px;
  align-items: center;
  align-self: center;
  margin-top: 20px;
`;

export const Emails = styled.div`
  color: #767676;
  font-size: 21px;
  padding: 4px;
`;
