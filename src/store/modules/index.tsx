import { combineReducers, legacy_createStore as createStore } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import cartReducer from "./cart/reducer";

const reducers = combineReducers({ cart: cartReducer });

const store = createStore(reducers);

type RootState = ReturnType<typeof reducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
