import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

import api from '~/services/api';

interface ReserveResponse {
  id: number;
  name: string;
  date: string;
  adminId: number;
  room: {
    id: number;
    initials: string;
  };
  schedule: {
    id: number;
    periodId: number;
    initialHour: string;
    endHour: string;
  };
  users: [
    {
      id: number;
      name: string;
      email: string;
      enrollment: string;
    }
  ];
}

interface PeriodState {
  id: number;
  name: string;
  initialHour: string;
  endHour: string;
}

interface RoomState {
  id: number;
  initials: string;
  available: boolean;
}

interface User {
  id: number;
  enrollment: string;
  email: string;
  name: string;
}

interface ReserveContextData {
  reserves: ReserveResponse[];
  loadReserves: () => Promise<void>;
}

const ReserveContext = createContext<ReserveContextData>({} as ReserveContextData);

export const ReserveProvider: React.FC = ({ children }) => {
  const [reserves, setReserves] = useState<ReserveResponse[]>([]);

  const loadReserves = useCallback(async () => {
    try {
      const response = await api.get<ReserveResponse[]>('/reserves');

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
