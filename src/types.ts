export interface User extends UserCreate {
  id: string;
  createdAt: any;
}

export interface UserCreate {
  name: string;
  email: string;
}
