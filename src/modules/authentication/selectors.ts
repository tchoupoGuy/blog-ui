import { Selector } from "../../store/utils";

export const selectIsUserAuthenticated: Selector = (store) => !!store.auth.user;
