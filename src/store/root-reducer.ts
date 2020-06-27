import { combineReducers } from "redux";

import authReducer from "../modules/authentication/store";

export default combineReducers({
  auth: authReducer
});
