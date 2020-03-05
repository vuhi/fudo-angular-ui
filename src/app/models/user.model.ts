export interface User {
  id?: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  bio: string;
  image?: string;
  createdOn?: Date;
  updatedOn?: Date;
  updatedBy?: User;
  role?: string;
  status?: Status;
}

export enum Status {
  Active = 'active',
  Blocked = 'blocked'
}
