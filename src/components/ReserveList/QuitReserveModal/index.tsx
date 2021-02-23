import React, { useCallback, useState } from 'react';

import ConfirmModal from '~/components/ConfirmModal';

import { ReserveState } from '../types';

interface Props {
  visible: boolean;
  setVisible: (newState: boolean) => void;
  reserveToQuit: ReserveState;
  onConfirm: () => void;
}

const QuitReserveModal: React.FC<Props> = ({ visible, setVisible, reserveToQuit, onConfirm }) => {
  const [content, setContent] = useState('Você realmente deseja sair dessa reserva?');
  const [entered, setEntered] = useState(false);

  const handleAcceptClick = useCallback(() => {
    if (entered) {
      onConfirm();
      return;
    }

    if (reserveToQuit.users.length <= 3) {
      setEntered(true);
      setContent(
        'Atenção! Essa reserva possui apenas 3 membros, se você sair ela será deletada, tem certeza que deseja sair?'
      );
    }
  }, [reserveToQuit.users, entered, onConfirm]);

  return (
    <ConfirmModal
      visible={visible}
      setVisible={setVisible}
      title="Sair da Reserva"
      content={content}
      onAcceptClick={handleAcceptClick}
    />
  );
};

export default QuitReserveModal;
