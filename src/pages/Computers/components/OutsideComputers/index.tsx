import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

import {
  Container,
  ComputerList,
  ComputerContainer,
  ComputerName,
  ComputerStatus,
  ComputersOverviewContainer,
  ComputerIcon,
  ComputerOverview,
  StatusSpan,
  StatusContainer,
  LeftSide,
  MiddleSide,
  MiddleLeftSide,
  Button,
} from './styles';

interface Props {
  handleClick: (state: boolean) => void;
}
const OutsideComputers = ({ handleClick }: Props) => {
  return (
    <Container>
      <LeftSide>
        <StatusContainer>
          <ComputerStatus status={0} />
          <StatusSpan>Disponível</StatusSpan>
        </StatusContainer>
        <StatusContainer>
          <ComputerStatus status={1} />
          <StatusSpan>Ausente</StatusSpan>
        </StatusContainer>
        <StatusContainer>
          <ComputerStatus status={2} />
          <StatusSpan>Ocupado</StatusSpan>
        </StatusContainer>
        <StatusContainer>
          <ComputerStatus status={3} />
          <StatusSpan>Indisponível</StatusSpan>
        </StatusContainer>
      </LeftSide>
      <MiddleSide>
        <MiddleLeftSide>
          <ComputerList>
            <ComputerContainer>
              <ComputerName>PC 01</ComputerName>
              <ComputerStatus status={0} />
            </ComputerContainer>
            <ComputerContainer>
              <ComputerName>PC 02</ComputerName>
              <ComputerStatus status={1} />
            </ComputerContainer>
            <ComputerContainer>
              <ComputerName>PC 03</ComputerName>
              <ComputerStatus status={2} />
            </ComputerContainer>
            <ComputerContainer>
              <ComputerName>PC 04</ComputerName>
              <ComputerStatus status={0} />
            </ComputerContainer>
          </ComputerList>
          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon status={0} />
            </ComputerOverview>
            <ComputerOverview>
              <ComputerIcon status={1} />
            </ComputerOverview>
            <ComputerOverview>
              <ComputerIcon status={2} />
            </ComputerOverview>
            <ComputerOverview>
              <ComputerIcon status={0} />
            </ComputerOverview>
          </ComputersOverviewContainer>
        </MiddleLeftSide>
      </MiddleSide>

      <Button onClick={() => handleClick(true)}>
        <FaChevronLeft />
      </Button>
    </Container>
  );
};

export default OutsideComputers;
