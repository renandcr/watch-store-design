import { IDbProducts } from "../dbProducts/actions";
import { ICartAction } from "./actions";
import { toast } from "react-toastify";

import {
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_CART,
  CHANGE_UNITS,
} from "./constants";

const cartReducer = (
  state: Array<IDbProducts> = JSON.parse(
    localStorage.getItem("@watchStore: cartProducts") || JSON.stringify("")
  ) || [],
  action: ICartAction
) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const repeatProduct = state.find(
        (current) => current.product.id === action.payload.product.id
      );
      if (!repeatProduct) {
        localStorage.setItem(
          "@watchStore: cartProducts",
          JSON.stringify([...state, action.payload])
        );

        return [...state, action.payload];
      } else {
        toast.error("Você já adicionou este item ao carrinho.");
      }

      return state;

    case REMOVE_PRODUCT_FROM_CART:
      let updatedCart: Array<IDbProducts> = [];
      if (action.how_many === "one") {
        updatedCart = state.filter((current) => {
          return current.product.id !== action.payload.product.id;
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

    case CHANGE_UNITS:
      const unitLimit = 5;
      action.payload.units += action.units;
      if (action.payload.units < 1) action.payload.units = 1;
      else if (action.payload.units > 5) {
        action.payload.units = unitLimit;
        toast.error(
          `Desculpe. Compra limitada em ${unitLimit} unidade${
            unitLimit > 1 ? "s" : ""
          } por cliente`
        );
      } else {
        localStorage.setItem(
          "@watchStore: cartProducts",
          JSON.stringify(state)
        );
      }
      return [...state];

    default:
      return state;
  }
};

export default cartReducer;
