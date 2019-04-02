export interface User {

  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
  role?: Role;
}

export enum Role {
  USER, ADMIN, MANAGER
}
