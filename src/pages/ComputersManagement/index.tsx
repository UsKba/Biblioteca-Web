import React from 'react';

import {
  Container,
  RightContainer,
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
            <AlterationStatus />
          </ButtonContainer>
        </AlterationLeft>
        <AlterationRight>
          <AlterationSpan>Alterar Para:</AlterationSpan>
          <ButtonContainer>
            <AlterationButton>Disponível</AlterationButton>
            <AlterationStatus />
          </ButtonContainer>
          <ButtonContainer>
            <AlterationButton>Ausente</AlterationButton>
            <AlterationStatus />
          </ButtonContainer>
          <ButtonContainer>
            <AlterationButton>Ocupado</AlterationButton>
            <AlterationStatus />
          </ButtonContainer>
          <ButtonContainer>
            <AlterationButton>Quebrado</AlterationButton>
            <AlterationStatus />
          </ButtonContainer>
        </AlterationRight>
      </AlterationContainer>
      <RightContainer>
        <ColumnContainer>
          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon />
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon />
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon />
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon />
            </ComputerOverview>
          </ComputersOverviewContainer>
        </ColumnContainer>
        <ColumnContainer>
          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon />
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon />
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon />
            </ComputerOverview>
          </ComputersOverviewContainer>

          <ComputersOverviewContainer>
            <ComputerOverview>
              <ComputerIcon />
            </ComputerOverview>
          </ComputersOverviewContainer>
        </ColumnContainer>
      </RightContainer>
    </Container>
  );
};

export default ComputersManagement;
