import { IAddAndRemoveProductsAction, IUpdateUnitsAction } from "./actions";
import { IDbProducts } from "../dbProducts/actions";

import {
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_CART,
  SUBTRACT_UNITS,
  UPDATE_UNITS,
  ADD_UNITS,
} from "./constants";

const cartReducer = (
  state: Array<IDbProducts> = JSON.parse(
    localStorage.getItem("@watchStore: cartProducts") || JSON.stringify("")
  ) || [],
  action: IAddAndRemoveProductsAction & IUpdateUnitsAction
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

      return state;

    case REMOVE_PRODUCT_FROM_CART:
      const updatedCart = state.filter((product) => {
        // action.payload.units = 1;
        return product.id !== action.payload.id;
      });
      localStorage.setItem(
        "@watchStore: cartProducts",
        JSON.stringify(updatedCart)
      );

      return updatedCart;

    case ADD_UNITS:
      // action.payload.units += 1;
      localStorage.setItem("@watchStore: cartProducts", JSON.stringify(state));
      return [...state];

    case SUBTRACT_UNITS:
      // if (action.payload.units > 1) {
      //   action.payload.units -= 1;
      //   localStorage.setItem(
      //     "@watchStore: cartProducts",
      //     JSON.stringify(state)
      //   );
      // }

      return [...state];

    case UPDATE_UNITS:
      // action.payload.units = action.units;
      localStorage.setItem("@watchStore: cartProducts", JSON.stringify(state));

      return [...state];
    default:
      return state;
  }
};

export default cartReducer;
