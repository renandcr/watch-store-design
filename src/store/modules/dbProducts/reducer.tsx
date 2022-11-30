import { DATABASE_PRODUCTS } from "./constants";
import { IDbProductsAction } from "./actions";

const productsReducer = (state = [], action: IDbProductsAction) => {
  switch (action.type) {
    case DATABASE_PRODUCTS:
      return action.payload;

    default:
      return state;
  }
};

export default productsReducer;
