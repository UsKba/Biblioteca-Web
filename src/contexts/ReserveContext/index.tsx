import React, { createContext, useState, useContext, useCallback } from 'react';

import api from '~/services/api';

interface ReserveResponse {
  day: number;
  id: number;
  month: number;
  roomId: number;
  scheduleId: number;
  year: number;
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
  title: string;
  groupTitle: string;
  text: string;
  users: User[];
  id: number;
  adminId: number;
}

// const ReserveContext = createContext<ReserveContextData>({} as ReserveContextData);

// export const ReserveProvider: React.FC = ({ children }) => {
//   const [reserve, setReserve] = useState<ReserveResponse[]>([]);
// };
