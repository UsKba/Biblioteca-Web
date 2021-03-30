import { AxiosError } from 'axios';

interface ResponseDataError {
  error: string;
}

export type AxiosResponseError = AxiosError<ResponseDataError>;

export interface User {
  id: number;
  name: string;
  enrollment: string;
  email: string;
  color: string;
  role: string;
}

export type Friend = User;

export interface Room {
  id: number;
  initials: string;
  status: number;
}

export interface Schedule {
  id: number;
  initialHour: string;
  endHour: string;
  periodId: number;
}

interface UserReserve extends User {
  status: number;
}

export interface Reserve {
  id: number;
  date: string;
  name: string | null;
  adminId: number;
  room: Room;
  schedule: Schedule;
  users: UserReserve[];
}

export interface Period {
  id: number;
  name: string;
  initialHour: string;
  endHour: string;
}

export interface Computer {
  id: number;
  status: number;
  identification: string;
  local: {
    id: number;
    name: string;
  };
}

export interface Notice {
  id: number;
  type: number;
  title: string;
  content: string;
  imageCode: number;
  status: number;
  createdAt: string;
  expiredAt: string;

  // caso seja de sala
  roomData?: {
    roomId: number;
    roomStatus: number;
  };

  // caso seja de computador
  computerData?: {
    computerId: number;
    computerStatus: number;
  };
}
