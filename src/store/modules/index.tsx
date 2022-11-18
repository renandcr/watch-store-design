import { legacy_createStore as createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
import homeReducer from "./home/reducer";

const reducers = combineReducers({
  user: userReducer,
  home: homeReducer,
  cart: cartReducer,
});

const store = createStore(reducers);

type RootState = ReturnType<typeof reducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
