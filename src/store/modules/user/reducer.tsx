import { IDatabaseUser, IUserAction } from "./actions";
import { UPDATE_USER_STATE } from "./constants";

const userReducer = (
  state: Array<IDatabaseUser> = JSON.parse(
    localStorage.getItem("@watchStore: user") || JSON.stringify("")
  ) || [],
  action: IUserAction
) => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      localStorage.setItem(
        "@watchStore: user",
        JSON.stringify([{ ...action.payload, token: action.token }])
      );

      return [{ ...action.payload, token: action.token }];
    default:
      return state;
  }
};

export default userReducer;
