import { IAddAndRemoveProductsAction, IUpdateUnitsAction } from "./actions";
import { IDbProducts } from "../dbProducts/actions";
import { toast } from "react-toastify";

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
      const repeatProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!repeatProduct) {
        localStorage.setItem(
          "@watchStore: cartProducts",
          JSON.stringify([...state, action.payload])
        );

        return [...state, action.payload];
      } else {
        toast.error("Desculpe, você já adicionou este item ao carrinho");
      }

      return state;

    case REMOVE_PRODUCT_FROM_CART:
      let updatedCart: Array<IDbProducts> = [];
      if (action.how_many === "one") {
        updatedCart = state.filter((product) => {
          // action.payload.units = 1;
          return product.id !== action.payload.id;
        });
      }

      if (action.how_many === "all") {
        updatedCart = [];
      }

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
