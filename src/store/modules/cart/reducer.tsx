import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./constants";
import { IAddAndRemoveProductsAction } from "./actions";
import { IDbProducts } from "../dbProducts";

const cartReducer = (
  state: Array<IDbProducts> = JSON.parse(
    localStorage.getItem("@watchStore: cartProducts") || ""
  ) || [],
  action: IAddAndRemoveProductsAction
) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const comparePartProducts = state.find(
        (product) => product.id === action.payload.id
      );
      if (!comparePartProducts) {
        localStorage.setItem(
          "@watchStore: cartProducts",
          JSON.stringify([...state, action.payload])
        );

        return [...state, action.payload];
      }

      return [...state];

    case REMOVE_PRODUCT_FROM_CART:
      const updatedCart = state.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem(
        "@watchStore: cartProducts",
        JSON.stringify(updatedCart)
      );
      return [...updatedCart];

    default:
      return state;
  }
};

export default cartReducer;
