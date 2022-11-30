import { IDbProducts } from "../dbProducts/actions";
import { SEARCH_PRODUCT } from "./constants";

export interface ISearchProductAction {
  type: string;
  payload: string;
  dbProducts: Array<IDbProducts>;
}

export const actionSearchProduct = (
  search: string,
  dbProducts: Array<IDbProducts>
) => {
  return {
    type: SEARCH_PRODUCT,
    payload: search,
    dbProducts: dbProducts,
  };
};
