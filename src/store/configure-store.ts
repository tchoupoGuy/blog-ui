import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../store/root-reducer";

export function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools());

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../store/root-reducer", () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
