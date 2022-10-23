
export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  groups: Group;
  permissions: string[];
}

export type UserApi = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  groups: Group;
  permissions: string[];
}

export type Login = {
  email: string;
  password: string
}

export type SignUp = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatedPassword: string;
}

export type Group = {
  id: number;
  name: string;
}