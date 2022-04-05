import { Login } from './login.model';

export interface Register extends Login {
  lastName: string;
  email: string;
}
