import { SEARCH_PRODUCT } from "./constants";

export interface ISearchProductAction {
  type: string;
  payload: string;
}
export const actionSearchProduct = (data: ISearchProductAction | string) => {
  return {
    type: SEARCH_PRODUCT,
    payload: data,
  };
};
