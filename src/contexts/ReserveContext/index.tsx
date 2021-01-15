import React, { createContext, useState, useContext, useCallback } from 'react';

import api from '~/services/api';

import { Reserve } from '~/types';

interface ReserveContextData {
  reserves: Reserve[];
  loadReserves: () => Promise<void>;
}

const ReserveContext = createContext<ReserveContextData>({} as ReserveContextData);

export const ReserveProvider: React.FC = ({ children }) => {
  const [reserves, setReserves] = useState<Reserve[]>([]);

  const loadReserves = useCallback(async () => {
    try {
      const response = await api.get<Reserve[]>('/reserves');

      setReserves(response.data);
    } catch (e) {
      // console.log(e.response.data);
      // alert(e.response.data.error);
    }
  }, []);

  return <ReserveContext.Provider value={{ reserves, loadReserves }}>{children}</ReserveContext.Provider>;
};

export function useReserve() {
  const context = useContext(ReserveContext);

  return context;
}

export default ReserveContext;
