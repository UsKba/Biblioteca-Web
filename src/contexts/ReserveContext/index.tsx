import React, { createContext, useState, useContext, useCallback } from 'react';

import { getRequest } from '~/utils/api';

import { Reserve } from '~/types';

interface ReserveContextData {
  reserves: Reserve[];
  loadReserves: () => Promise<void>;
}

const ReserveContext = createContext<ReserveContextData>({} as ReserveContextData);

export const ReserveProvider: React.FC = ({ children }) => {
  const [reserves, setReserves] = useState<Reserve[]>([]);

  const loadReserves = useCallback(async () => {
    const { data, error } = await getRequest('/reserves');

    if (error) {
      alert(error.error);
      return;
    }

    setReserves(data);
  }, []);

  return <ReserveContext.Provider value={{ reserves, loadReserves }}>{children}</ReserveContext.Provider>;
};

export function useReserve() {
  const context = useContext(ReserveContext);

  return context;
}

export default ReserveContext;
