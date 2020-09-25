import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 30px 15px;
  width: 100%;
  border-radius: 7px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  margin-right: 15px;
  background-color: ${colors.terciary};
  border-radius: 7px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;

  border-radius: 7px;
  padding: 15px;

  background-color: ${colors.terciary};
`;

interface ButtonProps {
  active?: boolean;
}

export const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;

  max-width: 310px;
  height: 470px;

  justify-content: space-between;

  padding: 0 10px 80px 10px;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 140px;
  height: 120px;

  border-radius: 3px;
  border: solid 1px #d8d8d8;
  padding: 20px;

  font-size: 14px;
  font-weight: 500;

  background-color: ${({ active }) => (active === true ? `${colors.primary}` : `${colors.terciary}`)};
  color: ${({ active }) => (active === true ? `${colors.terciary}` : `${colors.dark}`)};

  &:hover {
    background-color: ${colors.lightprimary};
  }

  svg {
    font-size: 35px;

    color: ${({ active }) => (active === true ? `${colors.terciary}` : `${colors.dark}`)};
  }
`;

export const Label = styled.label`
  margin: 0.5em;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bolder;
  margin-right: 0.3em;
  color: ${colors.dark};
`;

export const SettingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: auto;

  margin: 0 0 10px 10px;
  padding: 5px 10px 10px 5px;
  border: solid 1px #d8d8d8;
`;

export const SettingSpanContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SettingTitle = styled.span`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 3px;

  color: #999;
`;

export const SettingDesc = styled.span`
  font-family: 'Roboto';
  font-size: 14px;

  color: #d8d8d8;
`;
