import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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
  MobileWarning,
} from './styles';

const datePickerConfig = {
  day: 0,
  week: 1,
  month: 2,
  userDate: 3,
};

interface CustomNoticeData {
  id: number;
  status: number;
}

const MakeWarning: React.FC = () => {
  const history = useHistory();
  const noticeContext = useNotice();

  const [activeImageCode, setActiveImageCode] = useState(1);
  const [activeType, setActiveType] = useState(Number);
  const [activeDatePicker, setActiveDatePicker] = useState(Number);
  const [finalDate, setFinalDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [roomData, setRoomData] = useState<CustomNoticeData>({} as CustomNoticeData);
  const [computerData, setComputerData] = useState<CustomNoticeData>({} as CustomNoticeData);

  const warningImages = [
    {
      id: 0,
      source: Maintenance,
    },
    {
      id: 1,
      source: MaintenanceAlt,
    },
    {
      id: 2,
      source: Megaphone,
    },
    {
      id: 3,
      source: StudyGroup,
    },
    {
      id: 4,
      source: Time,
    },
  ];

  function handleCreateNoticeToast() {
    toast.dark('Reserva Criada!', {});
  }

  function handleMissingRoomToast() {
    toast.dark('Preencha as informações da sala!', {});
  }

  function handleMissingComputerToast() {
    toast.dark('Preencha as informações do computador!', {});
  }

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

    function getData() {
      let data;

      if (activeType === noticeConfig.types.room) {
        data = roomData;
      }

      if (activeType === noticeConfig.types.computer) {
        data = computerData;
      }

      return data;
    }

    // if (activeType === noticeConfig.types.room && !roomData) {
    //   return;
    // }

    // if (activeType === noticeConfig.types.computer && !computerData) {
    //   return;
    // }

    const expiredAt = getExpiredAt();
    const data = getData();

    await noticeContext.createNotice({
      type: activeType,
      imageCode: activeImageCode,
      title,
      content: description,
      expiredAt,
      data,
    });

    handleCreateNoticeToast();
    history.push('/');
  }, [
    activeDatePicker,
    activeImageCode,
    activeType,
    computerData,
    description,
    finalDate,
    history,
    noticeContext,
    roomData,
    title,
  ]);

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);
  const TITLE = 'Criar aviso - Smart Library';

  return (
    <>
      <Container>
        <title>{TITLE}</title>

        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

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
          <OptionDropdown onChange={(event) => setRoomData({ ...roomData, id: Number(event.target.value) })}>
            <option value="" disabled selected>
              Escolha a sala
            </option>
            <option value="1">F1-3</option>
            <option value="2">F1-4</option>
            <option value="3">F1-5</option>
            <option value="4">F1-6</option>
          </OptionDropdown>

          <OptionDropdown onChange={(event) => setRoomData({ ...roomData, status: Number(event.target.value) })}>
            <option value="" disabled selected>
              Status
            </option>
            <option value={roomConfig.disponible}>Disponível</option>
            <option value={roomConfig.indisponible}>Indisponível</option>
          </OptionDropdown>
        </RoomOptionContainer>

        <ComputerOptionContainer visible={activeType === 2}>
          <OptionDropdown onChange={(event) => setComputerData({ ...computerData, id: Number(event.target.value) })}>
            <option value="" disabled selected>
              Escolha o computador
            </option>
            <option value="" disabled>
              Laboratório
            </option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="" disabled>
              Biblioteca
            </option>
            <option value="9">01</option>
            <option value="10">02</option>
            <option value="11">03</option>
            <option value="12">04</option>
          </OptionDropdown>

          <OptionDropdown
            onChange={(event) => setComputerData({ ...computerData, status: Number(event.target.value) })}
          >
            <option value="" disabled selected>
              Status
            </option>
            <option value={computerConfig.disponible}>Funcionando</option>
            <option value={computerConfig.indisponible}>Indisponível</option>
          </OptionDropdown>
        </ComputerOptionContainer>

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
          <CancelButton onClick={goBack}>Cancelar</CancelButton>
          <PublishButton onClick={handleCreateWarning}>Publicar</PublishButton>
        </ButtonsContainer>
      </Container>

      <MobileWarning>Por questões de segurança, realize este procedimento em um desktop</MobileWarning>
    </>
  );
};

export default MakeWarning;
