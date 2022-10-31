import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./constants";
import { IDbProducts } from "../dbProducts";

export interface IAddAndRemoveProductsAction {
  type: string;
  payload: IDbProducts;
}

export const addProductToCartAction = (product: IDbProducts) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};
export const removeProductFromCartAction = (product: IDbProducts) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product,
  };
};
