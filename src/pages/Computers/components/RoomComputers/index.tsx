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
  ComputerButton,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedComputer, setSelectedComputer] = useState('');
  function openModal(computer: string) {
    setSelectedComputer(computer);
    setModalVisible(true);
  }
  return (
    <>
      <ComputerModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedComputer={selectedComputer}
      />
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
              <ComputerButton onClick={() => openModal('01')}>
                <ComputerIcon status={0} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('02')}>
                <ComputerIcon status={1} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('03')}>
                <ComputerIcon status={2} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('04')}>
                <ComputerIcon status={3} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('05')}>
                <ComputerIcon status={0} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('06')}>
                <ComputerIcon status={1} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('07')}>
                <ComputerIcon status={1} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('08')}>
                <ComputerIcon status={2} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('09')}>
                <ComputerIcon status={3} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('10')}>
                <ComputerIcon status={0} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('11')}>
                <ComputerIcon status={0} />
              </ComputerButton>
            </ComputerOverview>

            <ComputerOverview>
              <ComputerButton onClick={() => openModal('12')}>
                <ComputerIcon status={0} />
              </ComputerButton>
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
