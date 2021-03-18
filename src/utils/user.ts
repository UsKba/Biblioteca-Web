import { User } from '~/types/';

export function checkUserIsAdmin(user: User) {
  if (user.role === 'student') {
    return false;
  }

  return true;
}
