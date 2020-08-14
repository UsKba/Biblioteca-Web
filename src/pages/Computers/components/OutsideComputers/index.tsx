import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

import ComputerModal from '../ComputerModal';
import {
  Container,
  ComputerList,
  ComputerContainer,
  ComputerName,
  ComputerStatus,
  ComputersOverviewContainer,
  ComputerIcon,
  ComputerButton,
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
                  <ComputerIcon status={0} />
                </ComputerButton>
              </ComputerOverview>
            </ComputersOverviewContainer>
          </MiddleLeftSide>
        </MiddleSide>

        <Button onClick={() => handleClick(true)}>
          <FaChevronLeft />
        </Button>
      </Container>
    </>
  );
};

export default OutsideComputers;
