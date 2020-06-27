import { createAction, createTypes, Reducer } from "../../store/utils";

// Types
export const AUTH = createTypes("AUTH", ["AUTHENTICATED", "SIGN_OUT"]);

// Actions
export const auth = {
  authenticated: (data: any) => createAction(AUTH.AUTHENTICATED, data),
  signOut: () => createAction(AUTH.SIGN_OUT)
};

// Reducer
const INITIAL_STATE = {
  user: null
};

const authReducer: Reducer<typeof INITIAL_STATE> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case AUTH.AUTHENTICATED:
      return { ...state, user: payload };
    case AUTH.SIGN_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
//#endregion
