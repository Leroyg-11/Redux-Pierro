import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import postReducer from "./postReducer";

export default combineReducers({
  // tous nos reducers
  userReducer,
  postReducer,
});
