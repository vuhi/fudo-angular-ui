export interface User {
  id?: string;
  userName: string;
  email: string;
  password?: string;
  name: string;
  description?: string;
  image?: string;
  createdOn?: Date;
  totalPost?: number;
  status?: Status;
}

export enum Status {
  Active = 'active',
  Blocked = 'blocked'
}
