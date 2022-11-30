import { IDbProducts } from "../dbProducts/actions";

import {
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_CART,
  SUBTRACT_UNITS,
  UPDATE_UNITS,
  ADD_UNITS,
} from "./constants";

export interface IAddAndRemoveProductsAction {
  type: string;
  payload: IDbProducts;
}

export interface IUpdateUnitsAction extends IAddAndRemoveProductsAction {
  units: number;
}

export const actionAddProductToCart = (product: IDbProducts) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};
export const actionRemoveProductFromCart = (product: IDbProducts) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product,
  };
};

export const actionAddUnits = (product: IDbProducts) => {
  return {
    type: ADD_UNITS,
    payload: product,
  };
};

export const actionSubtractUnits = (product: IDbProducts) => {
  return {
    type: SUBTRACT_UNITS,
    payload: product,
  };
};

export const actionUpdateUnits = (product: IDbProducts, units: number) => {
  return {
    type: UPDATE_UNITS,
    payload: product,
    units: units,
  };
};
