import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

import { getRequest, postRequest } from '~/utils/api';

import reserveConfig from '~/config/reserve';
import { useAuth } from '~/contexts/AuthContext';
import { Reserve } from '~/types';

interface ReserveContextData {
  reserves: Reserve[];
  loadReserves: () => Promise<void>;
  handleAcceptReserve: (reserveId: number) => void;
  handleRefuseReserve: (reserveId: number) => void;
}

const ReserveContext = createContext<ReserveContextData>({} as ReserveContextData);

export const ReserveProvider: React.FC = ({ children }) => {
  const authContext = useAuth();
  const [reserves, setReserves] = useState<Reserve[]>([]);

  const handleAcceptReserve = useCallback(
    async (reserveId: number) => {
      const { error } = await postRequest(`/reserves/${reserveId}/accept`);
      if (error) {
        alert(error.error);
        return;
      }

      const findReserve = reserves.find((reserve) => reserve.id === reserveId);

      const userLogged = findReserve?.users.find((user) => authContext.user.id === user.id);

      if (!findReserve || !userLogged) {
        // console.log(findReserve, userLogged);
        return;
      }

      const newUsers = findReserve.users.filter((user) => user.id !== userLogged.id);
      const updatedUsers = [
        ...newUsers,
        {
          ...userLogged,
          status: reserveConfig.statusAccepted,
        },
      ];

      const newReserves = reserves.filter((reserve) => reserve.id !== findReserve.id);
      const updatedReserves = [
        ...newReserves,
        {
          ...findReserve,
          users: updatedUsers,
        },
      ];
      setReserves(updatedReserves);
    },
    [authContext.user, reserves]
  );

  const handleRefuseReserve = useCallback(
    async (reserveId: number) => {
      const { error } = await postRequest(`/reserves/${reserveId}/refuse`);
      if (error) {
        alert(error.error);
      }
      const findReserve = reserves.find((reserve) => reserve.id === reserveId);

      const userLogged = findReserve?.users.find((user) => authContext.user.id === user.id);

      if (!findReserve || !userLogged) {
        // console.log(findReserve, userLogged);
        return;
      }

      const newUsers = findReserve.users.filter((user) => user.id !== userLogged.id);
      const updatedUsers = [
        ...newUsers,
        {
          ...userLogged,
          status: reserveConfig.statusRefused,
        },
      ];

      const newReserves = reserves.filter((reserve) => reserve.id !== findReserve.id);
      const updatedReserves = [
        ...newReserves,
        {
          ...findReserve,
          users: updatedUsers,
        },
      ];

      setReserves(updatedReserves);
    },
    [authContext.user, reserves]
  );

  const loadReserves = useCallback(async () => {
    const { data, error } = await getRequest('/reserves');

    if (error) {
      alert(error.error);
      return;
    }

    setReserves(data);
  }, []);

  useEffect(() => {
    authContext.addListener(loadReserves);
    return () => {
      authContext.removeListener(loadReserves);
    };
  }, [authContext, loadReserves]);

  return (
    <ReserveContext.Provider value={{ reserves, loadReserves, handleAcceptReserve, handleRefuseReserve }}>
      {children}
    </ReserveContext.Provider>
  );
};

export function useReserve() {
  const context = useContext(ReserveContext);

  return context;
}

export default ReserveContext;
