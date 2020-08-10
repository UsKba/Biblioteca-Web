import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

import ComputerModal from '../ComputerModal';
import {
  Container,
  ComputerContainer,
  ComputerName,
  ComputerStatus,
  ComputersContainer,
  ComputersOverviewContainer,
  ComputerOverview,
  ComputerIcon,
  Button,
  StatusContainer,
  StatusSpan,
  LeftSide,
  BottomSide,
} from './styles';
// import { Container } from './styles';
interface Props {
  handleClick: (state: boolean) => void;
}
const RoomComputers = ({ handleClick }: Props) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <>
      <ComputerModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Container>
        <BottomSide>
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
          <ComputersContainer>
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
              <ComputerStatus status={3} />
            </ComputerContainer>

            <ComputerContainer>
              <ComputerName>PC 05</ComputerName>
              <ComputerStatus status={0} />
            </ComputerContainer>

            <ComputerContainer>
              <ComputerName>PC 06</ComputerName>
              <ComputerStatus status={1} />
            </ComputerContainer>

            <ComputerContainer>
              <ComputerName>PC 07</ComputerName>
              <ComputerStatus status={1} />
            </ComputerContainer>

            <ComputerContainer>
              <ComputerName>PC 08</ComputerName>
              <ComputerStatus status={2} />
            </ComputerContainer>

            <ComputerContainer>
              <ComputerName>PC 09</ComputerName>
              <ComputerStatus status={3} />
            </ComputerContainer>
            <ComputerContainer>
              <ComputerName>PC 10</ComputerName>
              <ComputerStatus status={0} />
            </ComputerContainer>

            <ComputerContainer>
              <ComputerName>PC 11</ComputerName>
              <ComputerStatus status={0} />
            </ComputerContainer>

            <ComputerContainer>
              <ComputerName>PC 12</ComputerName>
              <ComputerStatus status={0} />
            </ComputerContainer>
          </ComputersContainer>

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
              <ComputerIcon status={3} />
            </ComputerOverview>

            <ComputerOverview>
              <ComputerIcon status={0} />
            </ComputerOverview>

            <ComputerOverview>
              <ComputerIcon status={1} />
            </ComputerOverview>

            <ComputerOverview>
              <ComputerIcon status={1} />
            </ComputerOverview>

            <ComputerOverview>
              <ComputerIcon status={2} />
            </ComputerOverview>

            <ComputerOverview>
              <ComputerIcon status={3} />
            </ComputerOverview>

            <ComputerOverview>
              <ComputerIcon status={0} />
            </ComputerOverview>

            <ComputerOverview>
              <ComputerIcon status={0} />
            </ComputerOverview>

            <ComputerOverview>
              <ComputerIcon status={0} />
            </ComputerOverview>
          </ComputersOverviewContainer>
          <Button onClick={() => handleClick(false)}>
            <FaChevronRight />
          </Button>
        </BottomSide>
      </Container>
    </>
  );
};

export default RoomComputers;
