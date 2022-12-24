import { IDbProducts } from "../dbProducts/actions";
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

export interface ICart {
  id: string;
  total_units: number;
  amount: number;
  shipping: number;
  installment: string;
  productCart: Array<IDbProducts>;
}

export interface IPurchaseOrder {
  id: string;
  purchase_units: number;
  shipping: number;
  total_price: number;
  created_at: Date;
  products: Array<IDbProducts>;
}

export interface IDatabaseUser extends IUserRegistration {
  id: string;
  created_at: Date;
  updated_at: Date;
  token: string;
  addresses: Array<IAddressesDatabase>;
  cart: ICart;
  purchaseOrders: Array<IPurchaseOrder>;
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

export const actionUpdateUserState = (user: IDatabaseUser, token: string) => {
  return {
    type: UPDATE_USER_STATE,
    payload: user,
    token: token,
  };
};
