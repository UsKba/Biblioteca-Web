import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Maintenance from '~/assets/maintenance.svg';
import MaintenanceAlt from '~/assets/warnings/maintenance_alt.svg';
import Megaphone from '~/assets/warnings/megaphone.svg';
import StudyGroup from '~/assets/warnings/study_group.svg';
import Time from '~/assets/warnings/time.svg';
import computerConfig from '~/config/computer';
import noticeConfig from '~/config/notice';
import roomConfig from '~/config/room';
import { useNotice } from '~/contexts/NoticeContext';

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

const datePickerConfig = {
  day: 0,
  week: 1,
  month: 2,
  userDate: 3,
};

const MakeWarning: React.FC = () => {
  const history = useHistory();
  const noticeContext = useNotice();

  const [activeImageCode, setActiveImageCode] = useState(1);
  const [activeType, setActiveType] = useState(Number);
  const [activeDatePicker, setActiveDatePicker] = useState(Number);
  const [finalDate, setFinalDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const warningImages = [
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

  const handleCreateWarning = useCallback(async () => {
    function getExpiredAt() {
      let expiredAt;
      const today = new Date();

      if (activeDatePicker === datePickerConfig.day) {
        expiredAt = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
      }

      if (activeDatePicker === datePickerConfig.week) {
        expiredAt = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
      }

      if (activeDatePicker === datePickerConfig.month) {
        expiredAt = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
      }

      if (activeDatePicker === datePickerConfig.userDate) {
        expiredAt = finalDate;
      }
      return expiredAt;
    }

    const expiredAt = getExpiredAt();

    await noticeContext.createNotice({
      type: activeType,
      imageCode: activeImageCode,
      title,
      content: description,
      expiredAt,
    });

    history.push('/');
  }, [activeDatePicker, activeImageCode, activeType, description, finalDate, history, noticeContext, title]);

  return (
    <Container>
      <WarningTypeContainer>
        <WarningTypeTitle>Escolha o tipo de aviso</WarningTypeTitle>
        <WarningTypeDropdown onChange={(event) => setActiveType(Number(event.target.value))}>
          <option value={noticeConfig.types.general}>Nenhum</option>
          <option value={noticeConfig.types.room}>Sala(s)</option>
          <option value={noticeConfig.types.computer}>Computador(es)</option>
          <option value={noticeConfig.types.library}>Biblioteca</option>
        </WarningTypeDropdown>
      </WarningTypeContainer>

      <Title>Escolha uma imagem para o aviso</Title>

      <ImageChooserContainer>
        <ScrollMenu>
          {warningImages.map((warning) => (
            <Image
              key={warning.id}
              src={warning.source}
              onClick={() => setActiveImageCode(warning.id)}
              active={activeImageCode === warning.id}
            />
          ))}
        </ScrollMenu>
      </ImageChooserContainer>
      <Title>Escolha o título do aviso</Title>
      <Input type="text" onChange={(event) => setTitle(event.target.value)} maxLength={25} />

      <RoomOptionContainer visible={activeType === 1}>
        <OptionDropdown>
          <option value="" disabled selected>
            Escolha a sala
          </option>
          <option value="1">F1-3</option>
          <option value="2">F1-4</option>
          <option value="3">F1-5</option>
          <option value="4">F1-6</option>
        </OptionDropdown>

        <OptionDropdown>
          <option value="" disabled selected>
            Status
          </option>
          <option value={roomConfig.disponible}>Disponível</option>
          <option value={roomConfig.indisponible}>Indisponível</option>
        </OptionDropdown>
      </RoomOptionContainer>

      <ComputerOptionContainer visible={activeType === 2}>
        <OptionDropdown>
          <option value="" disabled selected>
            Escolha o computador
          </option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
        </OptionDropdown>

        <OptionDropdown>
          <option value="" disabled selected>
            Status
          </option>
          <option value={computerConfig.disponible}>Funcionando</option>
          <option value={computerConfig.indisponible}>Indisponível</option>
        </OptionDropdown>
      </ComputerOptionContainer>

      <LibraryOptionContainer visible={activeType === 3}>
        <Title>Escolha o dia inicial de fechamento</Title>
        <DateInput type="date" />
      </LibraryOptionContainer>

      <Title>Adicione uma descrição</Title>
      <TextArea maxLength={300} onChange={(event) => setDescription(event.target.value)} />

      <Title>Data de finalização do aviso:</Title>
      <DateOptionContainer>
        <DateDropdown onChange={(event) => setActiveDatePicker(Number(event.target.value))}>
          <option value={datePickerConfig.day}>Um dia</option>
          <option value={datePickerConfig.week}>Uma semana</option>
          <option value={datePickerConfig.month}>Um mês</option>
          <option value={datePickerConfig.userDate}>Escolher data</option>
        </DateDropdown>
        <DateInput
          type="date"
          visible={activeDatePicker === datePickerConfig.userDate}
          onChange={(event) => {
            setFinalDate(event.target.value);
          }}
        />
      </DateOptionContainer>

      <ButtonsContainer>
        <CancelButton>Cancelar</CancelButton>
        <PublishButton onClick={handleCreateWarning}>Publicar</PublishButton>
      </ButtonsContainer>
    </Container>
  );
};

export default MakeWarning;
