import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 850px;
  height: 600px;
  margin: 20px 0 20px 0;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${colors.terciary};
  padding: 40px 30px;
`;

export const LitteTitle = styled.div`
  font-size: 18px;
  font-family: Roboto;
`;

export const ImageChooserContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 10px;
`;

export const ScrollMenu = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
`;

export const Image = styled.img`
  height: 190px;
  width: 190px;

  margin: 0 11px 12px 0;

  background-color: ${colors.background};

  cursor: pointer;
`;

export const Input = styled.input`
  height: 50px;

  margin-top: 12px;
  padding: 16px 12px;

  border-style: none;

  color: rgba(0, 0, 0, 0.6);
  background-color: ${colors.background};

  font-family: 'Roboto';
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  height: 200px;
  width: 100%;

  margin-top: 12px;
  padding: 15px;

  border-style: none;
  outline: none;

  resize: none;
  text-align: top;
  font-family: 'Roboto';
  font-size: 14px;

  color: rgba(0, 0, 0, 0.6);
  background-color: ${colors.background};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 250px;
  align-self: flex-end;
  justify-content: space-around;
  margin-top: 15px;
`;

export const PublishButton = styled.button`
  padding: 9px 27px;

  font-weight: bold;

  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  border-radius: 30px;

  transition: 0.3s;
  &:hover {
    color: ${colors.terciary};
    background-color: ${colors.primary};
  }
`;

export const CancelButton = styled.button`
  padding: 9px 27px;

  font-weight: bold;

  color: ${colors.red};

  border: 2px solid ${colors.red};
  border-radius: 30px;

  transition: 0.3s;

  &:hover {
    color: ${colors.terciary};
    background-color: ${colors.red};
  }
`;
