import { USER_LOGIN } from "./constants";

export interface IUserRegistration {
  name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password?: string;
}

export interface IDatabaseUser extends IUserRegistration {
  id: string;
  created_at: Date;
  updated_at: Date;
  token: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserLoginAction {
  type: string;
  payload: IDatabaseUser;
  token: string;
}

export const actionUserLogin = (user: IUserLogin, token: string) => {
  return {
    type: USER_LOGIN,
    payload: user,
    token: token,
  };
};
