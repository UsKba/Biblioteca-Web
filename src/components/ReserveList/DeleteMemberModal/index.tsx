import React, { useCallback, useState, useEffect } from 'react';

import ConfirmModal from '~/components/ConfirmModal';

import { ReserveState } from '../types';

interface Props {
  visible: boolean;
  setVisible: (newState: boolean) => void;
  reserveToDeleteMember: ReserveState;
  onConfirm: () => void;
}

const DeleteMemberModal: React.FC<Props> = ({ visible, setVisible, reserveToDeleteMember, onConfirm }) => {
  const [content, setContent] = useState('Você realmente deseja deletar este membro?');
  const [entered, setEntered] = useState(false);

  const reset = useCallback(() => {
    setEntered(false);
    setContent('Você realmente deseja deletar este membro?');
  }, []);

  const handleAcceptClick = useCallback(() => {
    if (entered) {
      onConfirm();
      reset();
      return;
    }

    if (reserveToDeleteMember.users.length <= 3) {
      setEntered(true);
      setContent(
        'Atenção! Essa reserva possui apenas 3 membros, se você sair ela será deletada, tem certeza que deseja deletar este membro?'
      );
    } else {
      onConfirm();
      reset();
    }
  }, [reserveToDeleteMember.users, entered, onConfirm, reset]);

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

export default DeleteMemberModal;
