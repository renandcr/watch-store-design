import { IDbProducts } from "../dbProducts/actions";

import {
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_CART,
  CHANGE_UNITS,
} from "./constants";

export interface ICartAction {
  type: string;
  payload: IDbProducts;
  how_many: string;
  units: number;
}

export const actionAddProductToCart = (product: IDbProducts) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const actionRemoveProductFromCart = (
  how_many: string,
  product?: IDbProducts
) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product,
    how_many: how_many,
  };
};

export const actionChangeUnits = (product: IDbProducts, units?: number) => {
  return {
    type: CHANGE_UNITS,
    payload: product,
    units,
  };
};
