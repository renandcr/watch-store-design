import { IDatabaseUser, IUserLoginAction } from "./actions";
import { USER_LOGIN } from "./constants";

const usersReducer = (
  state: Array<IDatabaseUser> = JSON.parse(
    localStorage.getItem("@watchStore: users") || JSON.stringify("")
  ) || [],
  action: IUserLoginAction
) => {
  switch (action.type) {
    case USER_LOGIN:
      localStorage.setItem(
        "@watchStore: users",
        JSON.stringify([{ ...action.payload, token: action.token }])
      );

      return [{ ...action.payload, token: action.token }];
    default:
      return state;
  }
};

export default usersReducer;
