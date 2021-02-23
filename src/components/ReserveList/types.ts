import { User } from '~/types';

interface UserReserve extends User {
  status: number;
}

export interface ReserveState {
  title: string;
  groupTitle: string | null;
  text: string;
  users: UserReserve[];
  id: number;
  adminId: number;
  date: number;
}
