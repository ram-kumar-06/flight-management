export interface User {
  username: string;
  password: string;
  roleLevel: 1 | 2 | 3;
  isActive: boolean;
}
