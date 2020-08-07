import React from 'react';
import { Container,
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
  TopSide,
  BottomSide
 } from './styles';
// import { Container } from './styles';
interface Props{
  handleClick:(state: boolean)=>void
}
const RoomComputers: React.FC<Props> = ({handleClick}) => {
  return (
    <Container>

    <BottomSide>
    <TopSide>
      <StatusContainer>
        <ComputerStatus status={0}/>
        <StatusSpan>Disponível</StatusSpan>
      </StatusContainer>

      <StatusContainer>
        <ComputerStatus status={1}/>
        <StatusSpan>Ausente</StatusSpan>
      </StatusContainer>

      <StatusContainer>
        <ComputerStatus status={2}/>
        <StatusSpan>Ocupado</StatusSpan>
      </StatusContainer>

      <StatusContainer>
        <ComputerStatus status={3}/>
        <StatusSpan>Indisponível</StatusSpan>
      </StatusContainer>
    </TopSide>
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
          <ComputerIcon status={2}/>
        </ComputerOverview>

        <ComputerOverview>
          <ComputerIcon status={3}/>
        </ComputerOverview>

        <ComputerOverview>
          <ComputerIcon status={0}/>
        </ComputerOverview>

        <ComputerOverview>
          <ComputerIcon status={0}/>
        </ComputerOverview>

        <ComputerOverview>
          <ComputerIcon status={0}/>
        </ComputerOverview>
        <Button onClick={()=>handleClick(false)} >trocar sala</Button>
      </ComputersOverviewContainer>

    </BottomSide>
  </Container>
  );
}

export default RoomComputers;
