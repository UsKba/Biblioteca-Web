import React from 'react';

import {
  Container,
  RightContainer,
  LeftContainer,
  ColumnContainer,
  ComputerIcon,
  ComputerOverview,
  ComputersOverviewContainer,
  AlterationContainer,
  AlterationButton,
  AlterationComputer,
  AlterationLeft,
  AlterationRight,
  AlterationSpan,
  AlterationStatus,
  ButtonContainer,
} from './styles';

const ComputersManagement: React.FC = () => {
  return (
    <Container>
      <AlterationContainer>
        <AlterationLeft>
          <ButtonContainer>
            <AlterationComputer>PC 01</AlterationComputer>
            <AlterationStatus></AlterationStatus>
          </ButtonContainer>
        </AlterationLeft>
        <AlterationRight>
          <AlterationSpan>Alterar Para:</AlterationSpan>
          <ButtonContainer>
            <AlterationButton>Disponível</AlterationButton>
            <AlterationStatus></AlterationStatus>
          </ButtonContainer>
          <ButtonContainer>
            <AlterationButton>Ausente</AlterationButton>
            <AlterationStatus></AlterationStatus>
          </ButtonContainer>
          <ButtonContainer>
            <AlterationButton>Ocupado</AlterationButton>
            <AlterationStatus></AlterationStatus>
          </ButtonContainer>
          <ButtonContainer>
            <AlterationButton>Quebrado</AlterationButton>
            <AlterationStatus></AlterationStatus>
          </ButtonContainer>
        </AlterationRight>
      </AlterationContainer>
      <RightContainer>
        <ColumnContainer>
          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon></ComputerIcon>
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon></ComputerIcon>
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon></ComputerIcon>
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon></ComputerIcon>
            </ComputerOverview>
          </ComputersOverviewContainer>
        </ColumnContainer>
        <ColumnContainer>
          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon></ComputerIcon>
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon></ComputerIcon>
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon></ComputerIcon>
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon></ComputerIcon>
            </ComputerOverview>
          </ComputersOverviewContainer>
        </ColumnContainer>
      </RightContainer>
    </Container>
  );
};

export default ComputersManagement;
