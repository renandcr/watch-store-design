import { DATABASE_PRODUCTS } from "./constants";
import { IDbProductsAction } from "./actions";

const productsReducer = (state = [], action: IDbProductsAction) => {
  switch (action.type) {
    case DATABASE_PRODUCTS:
      const products = action.payload.map((current) => {
        return { units: 1, product: current };
      });
      return products;

    default:
      return state;
  }
};

export default productsReducer;
