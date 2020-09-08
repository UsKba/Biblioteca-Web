import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 14px;

  @media only screen and (max-width: 640px) {
    padding: 0;
    margin-bottom: 8em;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-family: 'Ubuntu';
  font-weight: bold;
  margin-bottom: 20px;
  color: ${colors.dark};

  @media only screen and (max-width: 640px) {
    font-size: 17px;
  }
`;

export const ReserveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 120px;

  margin-bottom: 10px;
  border-radius: 5px;
  border-left: solid 6px #4ad2d8;
  padding: 10px;

  background-color: ${colors.terciary};
`;

export const ReserveTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.text};
  align-self: center;
`;

export const ReserveText = styled.span`
  font-size: 13px;
  text-align: justify;
  color: ${colors.text};
`;

export const ReserveGroupName = styled.span`
  font-size: 14px;
  font-family: 'Ubuntu';
  font-weight: bold;
  color: ${colors.text};
  align-self: flex-start;
`;

export const ArrowTextContainer = styled.div`
  display: flex;
  svg {
    font-size: 20px;
    color: ${colors.dark};
    margin-left: 10px;
  }
`;
