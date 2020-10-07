import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

import { Button } from '~/components/MainButton/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 950px;
  flex-direction: column;

  margin-bottom: 20px;

  background-color: ${colors.terciary};
`;

export const Title = styled.span`
  font-size: 40px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.dark};

  margin: 10px 10px 10px 0;
`;

export const TopSide = styled.div`
  display: flex;

  width: 100%;
  height: 35%;

  padding: 0 18px 18px 50px;

  background-color: ${colors.terciary};
`;

export const CurrentDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 155px;
  height: 160px;

  border-radius: 0 0 90px 90px;

  background-color: ${colors.primary};
`;

export const CurrentDay = styled.span`
  font-size: 45px;
  font-family: 'Ubuntu';
  font-weight: bold;

  color: ${colors.terciary};

  margin-top: 25px;
`;

export const CurrentMonth = styled.span`
  font-size: 25px;
  font-family: 'Ubuntu';

  color: ${colors.terciary};

  margin-top: 10px;

  text-transform: capitalize;
`;

export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 18px;

  width: 100%;
  max-width: 200px;
  height: 160px;
`;

interface ButtonProps {
  active?: boolean;
}

export const ScheduleButton = styled(Button)<ButtonProps>`
  width: 100%;
  height: 45px;

  border: 2px solid ${colors.primary};
  border-radius: 100px;
  background-color: ${({ active }) => (active === true ? `${colors.primary}` : `${colors.terciary}`)};
  color: ${({ active }) => (active === true ? `${colors.terciary}` : `${colors.text}`)};
`;

export const BottomSide = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;

  justify-content: center;

  padding: 0 0 30px 25px;
`;

interface RectangleProps {
  backgroundColor?: string;
  borderColor?: string;
}

export const Rectangle = styled.div<RectangleProps>`
  text-align: center;

  width: 100%;
  max-width: 150px;
  height: 48px;

  margin: 10px 25px 10px 0;
  border-radius: 8px;
  border: 2px solid ${(props) => props.borderColor || colors.primary};
  padding: 13.5px;

  background-color: ${(props) => props.backgroundColor || colors.background};

  font-family: 'Roboto';
  font-size: 16px;
  color: ${colors.terciary};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 950px;
`;

export const RentButton = styled(Button)`
  margin: 0;
`;

export const StyledLink = styled(Link)`
  height: 50px;
`;
