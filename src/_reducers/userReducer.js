import { GET_USER_PROFILE } from "../_actions/userProfileAction";

const initialState = {};

export default function userReducer(state = initialState, action) {
  // serie de coportement a faire (switch)
  switch (action.type) {
    case "GET_USER_PROFILE":
      return action.payload;

    default:
      return state;
  }
}
