import React, { useCallback, useState, useEffect } from 'react';

import ConfirmModal from '~/components/Modal/ConfirmModal';
import { ReserveState } from '~/components/ReserveList/types';

interface Props {
  visible: boolean;
  setVisible: (newState: boolean) => void;
  reserveToQuit: ReserveState;
  onConfirm: () => void;
}

const QuitReserveModal: React.FC<Props> = ({ visible, setVisible, reserveToQuit, onConfirm }) => {
  const [content, setContent] = useState('Você realmente deseja sair dessa reserva?');
  const [entered, setEntered] = useState(false);

  const reset = useCallback(() => {
    setEntered(false);
    setContent('Você realmente deseja sair dessa reserva?');
  }, []);

  const handleAcceptClick = useCallback(() => {
    if (entered) {
      onConfirm();
      reset();
      return;
    }

    if (reserveToQuit.users.length <= 3) {
      setEntered(true);
      setContent(
        'Atenção! Essa reserva possui apenas 3 membros, se você sair ela será deletada, tem certeza que deseja sair?'
      );
    } else {
      onConfirm();
      reset();
    }
  }, [reserveToQuit.users, entered, onConfirm, reset]);

  return (
    <ConfirmModal
      visible={visible}
      setVisible={setVisible}
      title="Sair da Reserva"
      content={content}
      onAcceptClick={handleAcceptClick}
      onDeclineClick={reset}
    />
  );
};

export default QuitReserveModal;
