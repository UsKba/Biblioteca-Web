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
}

export interface Friend {
  id: number;
  name: string;
  enrollment: string;
  email: string;
}

export interface Room {
  id: number;
  initials: string;
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
