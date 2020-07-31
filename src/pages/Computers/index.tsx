import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {useHistory, Switch, Route } from 'react-router-dom';

import { Container,
         ComputerContainer,
         ComputerName,
         ComputerStatus,
         ComputersContainer,
         ComputersOverviewContainer,
         ComputerOverview,
         ComputerIcon,
         Button
        } from './styles';

const Computers: React.FC = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  return  (
  <Container>
    <Switch>
      <Route path="/computers/dois" exact>
                <div>Configurações do usuário</div>
      </Route>
    </Switch>

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
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>

      <ComputerOverview>
        <ComputerIcon />
      </ComputerOverview>


    </ComputersOverviewContainer>
    <Button onClick={() => history.push('/computers/dois/')} active={pathname === '/computers/dois/'}><FontAwesomeIcon icon={faChevronRight} size="2x" color="#333" /></Button>

  </Container>
  );
}

export default Computers;
