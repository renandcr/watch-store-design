import { UPDATE_USER_STATE } from "./constants";

export interface IUserRegistration {
  name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password?: string;
}

export interface IUserAddress {
  street: string;
  district: string;
  house_number: number;
  complement: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
}

export interface IAddressesDatabase extends IUserAddress {
  main?: boolean;
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface IDatabaseUser extends IUserRegistration {
  id: string;
  created_at: Date;
  updated_at: Date;
  token: string;
  addresses: Array<IAddressesDatabase>;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserAction {
  type: string;
  payload: IDatabaseUser;
  token: string;
}

export const actionUpdateUserState = (user: IUserLogin, token: string) => {
  return {
    type: UPDATE_USER_STATE,
    payload: user,
    token: token,
  };
};
