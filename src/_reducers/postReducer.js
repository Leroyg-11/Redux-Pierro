import { GET_TOKEN } from "../_actions/postTokenAction";

const initialState = {};

export default function postReducer(state = initialState, action) {
  // serie de coportement a faire (switch)
  switch (action.type) {
    case "GET_TOKEN":
      return action.payload;

    default:
      return state;
  }
}
