import React, { useState } from 'react';

import Maintenance from '~/assets/maintenance.svg';
import MaintenanceAlt from '~/assets/warnings/maintenance_alt.svg';
import Megaphone from '~/assets/warnings/megaphone.svg';
import StudyGroup from '~/assets/warnings/study_group.svg';
import Time from '~/assets/warnings/time.svg';

import {
  Container,
  ImageChooserContainer,
  ScrollMenu,
  Image,
  Input,
  TextArea,
  ButtonsContainer,
  PublishButton,
  CancelButton,
  Title,
  WarningTypeContainer,
  WarningTypeTitle,
  WarningTypeDropdown,
  RoomOptionContainer,
  ComputerOptionContainer,
  LibraryOptionContainer,
  OptionDropdown,
  DateOptionContainer,
  DateDropdown,
  DateInput,
  HourInput,
} from './styles';

const MakeWarning: React.FC = () => {
  const [activeWarning, setActivewarning] = useState(1);
  const [activeWarningType, setActiveWarningType] = useState(Number);
  const [activeDatePicker, setActiveDatePicker] = useState(Number);
  const [finalDate, setFinalDate] = useState('');

  const warnings = [
    {
      id: 1,
      source: Maintenance,
    },
    {
      id: 2,
      source: MaintenanceAlt,
    },
    {
      id: 3,
      source: Megaphone,
    },
    {
      id: 4,
      source: StudyGroup,
    },
    {
      id: 5,
      source: Time,
    },
  ];

  return (
    <Container>
      <WarningTypeContainer>
        <WarningTypeTitle>Escolha o tipo de aviso</WarningTypeTitle>
        <WarningTypeDropdown onChange={(event) => setActiveWarningType(Number(event.target.value))}>
          <option value="">Nenhum</option>
          <option value="1">Sala(s)</option>
          <option value="2">Computador(es)</option>
          <option value="3">Biblioteca</option>
        </WarningTypeDropdown>
      </WarningTypeContainer>

      <Title>Escolha uma imagem para o aviso</Title>

      <ImageChooserContainer>
        <ScrollMenu>
          {warnings.map((warning) => (
            <Image
              key={warning.id}
              src={warning.source}
              onClick={() => setActivewarning(warning.id)}
              active={activeWarning === warning.id}
            />
          ))}
        </ScrollMenu>
      </ImageChooserContainer>
      <Title>Escolha o título do aviso</Title>
      <Input type="text" maxLength={25} />

      <RoomOptionContainer visible={activeWarningType === 1}>
        <OptionDropdown>
          <option value="" disabled selected>
            Escolha a sala
          </option>
          <option value="0">F1-3</option>
          <option value="1">F1-4</option>
          <option value="2">F1-5</option>
          <option value="3">F1-6</option>
        </OptionDropdown>

        <OptionDropdown>
          <option value="" disabled selected>
            Status
          </option>
          <option value="0">Disponível</option>
          <option value="1">Reservada</option>
          <option value="2">Indisponível</option>
        </OptionDropdown>
      </RoomOptionContainer>

      <ComputerOptionContainer visible={activeWarningType === 2}>
        <OptionDropdown>
          <option value="" disabled selected>
            Escolha o computador
          </option>
          <option value="0">01</option>
          <option value="1">02</option>
          <option value="2">03</option>
          <option value="3">04</option>
        </OptionDropdown>

        <OptionDropdown>
          <option value="" disabled selected>
            Status
          </option>
          <option value="0">Funcionando</option>
          <option value="1">Indisponível</option>
        </OptionDropdown>
      </ComputerOptionContainer>

      <LibraryOptionContainer visible={activeWarningType === 3}>
        <Title>Escolha o dia inicial de fechamento</Title>
        <DateInput type="date" />
      </LibraryOptionContainer>

      <Title>Adicione uma descrição</Title>
      <TextArea maxLength={300} />

      <Title>Data de finalização do aviso:</Title>
      <DateOptionContainer>
        <DateDropdown onChange={(event) => setActiveDatePicker(Number(event.target.value))}>
          <option value="0">Uma semana</option>
          <option value="1">Um mês</option>
          <option value="2">Escolher data</option>
        </DateDropdown>
        <DateInput
          type="date"
          visible={activeDatePicker === 2}
          onChange={(event) => {
            setFinalDate(event.target.value);
          }}
        />
        <HourInput placeholder="Hora" visible={activeDatePicker === 2} />
      </DateOptionContainer>

      <ButtonsContainer>
        <CancelButton>Cancelar</CancelButton>
        <PublishButton>Publicar</PublishButton>
      </ButtonsContainer>
    </Container>
  );
};

export default MakeWarning;
