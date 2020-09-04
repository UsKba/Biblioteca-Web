import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 14px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-family: 'Ubuntu';
  font-weight: bold;
  margin-bottom: 20px;
  color: ${colors.dark};
`;

export const ReserveContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 110px;

  margin-bottom: 10px;

  border-radius: 5px;
  border-left: solid 6px #4ad2d8;
  background-color: ${colors.terciary};
`;

export const ReserveLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReserveRightSide = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 15px;
    color: ${colors.dark};
  }
`;

export const ReserveTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.text};
  align-self: center;
  margin: 11px 0 13px 0;
`;

export const ReserveText = styled.span`
  font-size: 13px;
  margin-left: 11px;
  color: ${colors.text};
`;

export const ReserveGroupName = styled.span`
  font-size: 14px;
  font-family: 'Ubuntu';
  font-weight: bold;
  color: ${colors.text};
  margin: 10px 0 0 11px;
`;
