import { DATABASE_PRODUCTS } from "./constants";

export interface IDbProducts {
  id?: string;
  units: number;
  product: {
    readonly id: string;
    readonly img: string;
    readonly reference: string;
    readonly description: string;
    readonly price: number;
    readonly stock_quantity: number;
    readonly category: string;
    readonly genre: string;
    readonly created_at: string;
    readonly updated_at: string;
  };
}

export interface IDbProductsAction {
  type: string;
  payload: Array<IDbProducts>;
}

export const actionDatabaseProducts = (product: IDbProducts) => {
  return {
    type: DATABASE_PRODUCTS,
    payload: product,
  };
};
