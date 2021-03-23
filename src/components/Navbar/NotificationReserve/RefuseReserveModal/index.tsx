import React, { useCallback, useState, useEffect } from 'react';

import ConfirmModal from '~/components/ConfirmModal';

import { Reserve } from '~/types';

interface Props {
  visible: boolean;
  setVisible: (newState: boolean) => void;
  reserveToQuit: Reserve;
  onConfirm: () => void;
}

const RefuseReserveModal: React.FC<Props> = ({ visible, setVisible, reserveToQuit, onConfirm }) => {
  const [content, setContent] = useState('Você realmente deseja recusar essa reserva?');
  const [entered, setEntered] = useState(false);

  const reset = useCallback(() => {
    setEntered(false);
    setContent('Você realmente deseja recusar essa reserva?');
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
        'Atenção! Essa reserva possui apenas 3 membros, se você recusar o convite ela será deletada, tem certeza que deseja sair?'
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

export default RefuseReserveModal;
