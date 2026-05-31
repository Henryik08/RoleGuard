export type UserRole = 'Admin' | 'Editor' | 'Viewer';

export interface User {
  username: string;
  role: UserRole;
}